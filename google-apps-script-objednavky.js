const OWNER_EMAIL = 'ivo.devaty@email.cz';
const SHEET_NAME = 'Objednavky';
const WINERY_NAME = 'Vinařství Devátý';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const sheet = getOrCreateSheet_();
    const orderId = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss');
    const itemsText = formatItems_(data.items, data.currency);

    sheet.appendRow([
      new Date(),
      orderId,
      data.language || 'cs',
      data.name || '',
      data.phone || '',
      data.email || '',
      data.address || '',
      itemsText,
      data.total || 0,
      data.currency || 'Kč',
      data.note || '',
      data.source || ''
    ]);

    MailApp.sendEmail({
      to: OWNER_EMAIL,
      subject: `Nová objednávka vína z webu – ${data.name || 'zákazník'} – ${data.total || 0} ${data.currency || 'Kč'}`,
      htmlBody: buildOwnerEmail_(data, orderId, itemsText),
      replyTo: data.email || undefined
    });

    if (data.email) {
      MailApp.sendEmail({
        to: data.email,
        subject: customerSubject_(data.language),
        htmlBody: buildCustomerEmail_(data, orderId, itemsText)
      });
    }

    return json_({ ok: true, orderId });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Datum', 'Číslo objednávky', 'Jazyk', 'Jméno', 'Telefon', 'E-mail', 'Převzetí', 'Položky', 'Celkem', 'Měna', 'Poznámka', 'Zdroj']);
  }
  return sheet;
}

function formatItems_(items, currency) {
  return (items || []).map(item => {
    return `${item.name} × ${item.quantity} ks = ${item.subtotal} ${currency || 'Kč'}`;
  }).join('\n');
}

function buildOwnerEmail_(data, orderId, itemsText) {
  return `
    <h2>Nová objednávka z webu ${WINERY_NAME}</h2>
    <p><strong>Číslo objednávky:</strong> ${esc_(orderId)}</p>
    <p>
      <strong>Jméno:</strong> ${esc_(data.name)}<br>
      <strong>Telefon:</strong> ${esc_(data.phone)}<br>
      <strong>E-mail:</strong> ${esc_(data.email || 'neuveden')}<br>
      <strong>Převzetí:</strong> ${esc_(data.address || '')}
    </p>
    <h3>Objednávka</h3>
    <pre style="font-family:Arial,sans-serif;white-space:pre-wrap">${esc_(itemsText)}</pre>
    <p><strong>Celkem:</strong> ${esc_(data.total)} ${esc_(data.currency || 'Kč')}</p>
    <p><strong>Poznámka:</strong><br>${esc_(data.note || '-')}</p>
    <hr>
    <p style="color:#666">Zdroj: ${esc_(data.source || '')}</p>
  `;
}

function buildCustomerEmail_(data, orderId, itemsText) {
  const lang = data.language || 'cs';
  const total = `${data.total || 0} ${data.currency || 'Kč'}`;
  const texts = {
    cs: {
      hello: 'Dobrý den',
      thanks: `děkujeme za Vaši objednávku z webu ${WINERY_NAME}.`,
      info: 'Objednávku jsme přijali a brzy se Vám ozveme kvůli potvrzení převzetí.',
      orderNo: 'Číslo objednávky', items: 'Objednávka', pickup: 'Převzetí', total: 'Celkem', note: 'Poznámka', bye: `S pozdravem<br>${WINERY_NAME}`
    },
    en: {
      hello: 'Hello',
      thanks: `thank you for your order from the ${WINERY_NAME} website.`,
      info: 'We have received your order and will contact you soon to confirm pickup.',
      orderNo: 'Order number', items: 'Order', pickup: 'Pickup', total: 'Total', note: 'Note', bye: `Best regards<br>${WINERY_NAME}`
    },
    de: {
      hello: 'Guten Tag',
      thanks: `vielen Dank für Ihre Bestellung über die Website ${WINERY_NAME}.`,
      info: 'Wir haben Ihre Bestellung erhalten und melden uns bald zur Bestätigung der Abholung.',
      orderNo: 'Bestellnummer', items: 'Bestellung', pickup: 'Abholung', total: 'Gesamt', note: 'Notiz', bye: `Mit freundlichen Grüßen<br>${WINERY_NAME}`
    }
  }[lang] || texts.cs;

  return `
    <p>${texts.hello},</p>
    <p>${texts.thanks}<br>${texts.info}</p>
    <p><strong>${texts.orderNo}:</strong> ${esc_(orderId)}</p>
    <h3>${texts.items}</h3>
    <pre style="font-family:Arial,sans-serif;white-space:pre-wrap">${esc_(itemsText)}</pre>
    <p><strong>${texts.pickup}:</strong> ${esc_(data.address || '')}</p>
    <p><strong>${texts.total}:</strong> ${esc_(total)}</p>
    ${data.note ? `<p><strong>${texts.note}:</strong><br>${esc_(data.note)}</p>` : ''}
    <p>${texts.bye}</p>
  `;
}

function customerSubject_(lang) {
  if (lang === 'en') return `Order confirmation – ${WINERY_NAME}`;
  if (lang === 'de') return `Bestellbestätigung – ${WINERY_NAME}`;
  return `Potvrzení objednávky – ${WINERY_NAME}`;
}

function esc_(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
