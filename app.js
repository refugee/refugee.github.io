const SETTINGS = {
  whatsappDigits: '420724366369',
  whatsappDisplay: '724 366 369',
  hero: 'images/hero.jpg',
  // Google Apps Script už nepoužíváme pro objednávky. Nechávám prázdné.
  orderApiUrl: '',
  // EmailJS nastavení – publicKey je veřejný klíč určený do frontendu.
  emailJs: {
    publicKey: 'UcazScBvYErhhj6Mp',
    serviceId: 'service_mcsep8m',
    templateId: 'template_fzhugwb',
    ownerEmail: 'ivo.devaty@email.cz',
    ownerName: 'Vinařství Devátý'
  },
  payment: {
    accountNumber: '78-6041520237/0100',
    iban: 'CZ0301000000786041520237',
    bankCode: '0100',
    currency: 'CZK',
    recipientName: 'Vinarstvi Devaty'
  },
wines: [
    {
      id: 1,
      name: 'Rulandské bílé 2025',
      type: 'Bílé víno – suché',
      vintage: 'Ročník 2025',
      desc: 'Jemné bílé víno s čistou ovocností, lehkým květinovým nádechem a příjemně kulatým závěrem.',
      price: 145,
      award: 'Tip vinaře',
      img: 'images/wine-1.jpg',
      i18n: {
        en: {
          name: 'Pinot Blanc 2025',
          type: 'White wine – dry',
          vintage: 'Vintage 2025',
          desc: 'A delicate white wine with clean fruitiness, a light floral touch and a pleasantly rounded finish.',
          award: 'Winemaker’s tip'
        },
        de: {
          name: 'Weißburgunder 2025',
          type: 'Weißwein – trocken',
          vintage: 'Jahrgang 2025',
          desc: 'Ein feiner Weißwein mit klarer Fruchtigkeit, leicht floraler Note und angenehm rundem Abgang.',
          award: 'Tipp des Winzers'
        }
      }
    },
    {
      id: 2,
      name: 'Tramín červený 2025',
      type: 'Bílé víno – polosuché',
      vintage: 'Ročník 2025',
      desc: 'Aromatické víno s tóny růží, koření a zralého ovoce, s jemnou sladší linkou v dochuti.',
      price: 149,
      award: 'Aromatická odrůda',
      img: 'images/wine-2.jpg',
      i18n: {
        en: {
          name: 'Gewürztraminer 2025',
          type: 'White wine – semi-dry',
          vintage: 'Vintage 2025',
          desc: 'An aromatic wine with notes of rose petals, spice and ripe fruit, finished with a gentle touch of sweetness.',
          award: 'Aromatic variety'
        },
        de: {
          name: 'Gewürztraminer 2025',
          type: 'Weißwein – halbtrocken',
          vintage: 'Jahrgang 2025',
          desc: 'Ein aromatischer Wein mit Noten von Rosen, Gewürzen und reifem Obst, mit einer dezent süßlichen Linie im Abgang.',
          award: 'Aromatische Sorte'
        }
      }
    },
    {
      id: 3,
      name: 'Veltlínské zelené 2025',
      type: 'Bílé víno – suché',
      vintage: 'Ročník 2025',
      desc: 'Svěží a dobře pitelné víno s tóny zeleného jablka, citrusů a lehce kořenitým dozvukem.',
      price: 147,
      award: 'Svěží volba',
      img: 'images/wine-3.jpg',
      i18n: {
        en: {
          name: 'Grüner Veltliner 2025',
          type: 'White wine – dry',
          vintage: 'Vintage 2025',
          desc: 'A fresh and very drinkable wine with notes of green apple, citrus and a lightly spicy finish.',
          award: 'Fresh choice'
        },
        de: {
          name: 'Grüner Veltliner 2025',
          type: 'Weißwein – trocken',
          vintage: 'Jahrgang 2025',
          desc: 'Ein frischer, sehr zugänglicher Wein mit Noten von grünem Apfel, Zitrusfrüchten und leicht würzigem Nachhall.',
          award: 'Frische Wahl'
        }
      }
    },
    {
      id: 4,
      name: 'Ryzlink vlašský 2025',
      type: 'Bílé víno – suché',
      vintage: 'Ročník 2025',
      desc: 'Lehčí víno s jemnou kyselinkou, citrusovým projevem a čistým minerálním závěrem.',
      price: 145,
      award: '',
      img: 'images/wine-4.jpg',
      i18n: {
        en: {
          name: 'Welschriesling 2025',
          type: 'White wine – dry',
          vintage: 'Vintage 2025',
          desc: 'A lighter wine with gentle acidity, citrus expression and a clean mineral finish.',
          award: ''
        },
        de: {
          name: 'Welschriesling 2025',
          type: 'Weißwein – trocken',
          vintage: 'Jahrgang 2025',
          desc: 'Ein leichterer Wein mit feiner Säure, zitrischem Ausdruck und klarem mineralischem Abgang.',
          award: ''
        }
      }
    },
    {
      id: 5,
      name: 'Rosé 2025',
      type: 'Rosé – polosuché',
      vintage: 'Ročník 2025',
      desc: 'Lehké růžové víno s tóny jahod a drobného lesního ovoce, ideální na pohodové pití.',
      price: 150,
      award: 'Lehké rosé',
      img: 'images/wine-5.jpg',
      i18n: {
        en: {
          name: 'Rosé 2025',
          type: 'Rosé – semi-dry',
          vintage: 'Vintage 2025',
          desc: 'A light rosé with notes of strawberries and small forest berries, ideal for relaxed drinking.',
          award: 'Light rosé'
        },
        de: {
          name: 'Rosé 2025',
          type: 'Rosé – halbtrocken',
          vintage: 'Jahrgang 2025',
          desc: 'Ein leichter Rosé mit Noten von Erdbeeren und kleinen Waldbeeren, ideal für unkomplizierten Genuss.',
          award: 'Leichter Rosé'
        }
      }
    }
  ]
};

const UI = {
  cs: {
    add: 'Přidat',
    inCart: (qty) => `V košíku (${qty})`,
    emptyCart: 'Košík je prázdný.',
    cartTotalLabel: 'Celkem',
    cartEmptyAlert: 'Košík je prázdný.',
    formMissing: 'Vyplň prosím jméno a telefon.',
    ageAlert: 'Potvrď prosím věk 18+.',
    currency: 'Kč',
    perBottle: '/ 0,75 l',
    perPiece: '/ ks',
    orderTotal: 'Celkem',
    waNumber: 'WhatsApp číslo',
    waSummary: 'Obsah zprávy: jméno, kontakt, položky z košíku, adresa / osobní odběr a poznámka.',
    message: {
      title: 'Nová objednávka z webu',
      name: 'Jméno',
      phone: 'Telefon',
      email: 'E-mail',
      emailMissing: 'neuveden',
      address: 'Adresa / převzetí',
      pickup: 'osobní odběr',
      order: 'Objednávka',
      total: 'Celkem',
      note: 'Poznámka'
    }
  },
  en: {
    add: 'Add',
    inCart: (qty) => `In cart (${qty})`,
    emptyCart: 'Your cart is empty.',
    cartTotalLabel: 'Total',
    cartEmptyAlert: 'Your cart is empty.',
    formMissing: 'Please fill in your name and phone number.',
    ageAlert: 'Please confirm that you are 18+.',
    currency: 'CZK',
    perBottle: '/ 0.75 l',
    perPiece: '/ pc',
    orderTotal: 'Total',
    waNumber: 'WhatsApp number',
    waSummary: 'Message contains: name, contact, cart items, delivery address / pickup details and note.',
    message: {
      title: 'New website order',
      name: 'Name',
      phone: 'Phone',
      email: 'E-mail',
      emailMissing: 'not provided',
      address: 'Address / pickup',
      pickup: 'personal pickup',
      order: 'Order',
      total: 'Total',
      note: 'Note'
    }
  },
  de: {
    add: 'Hinzufügen',
    inCart: (qty) => `Im Warenkorb (${qty})`,
    emptyCart: 'Ihr Warenkorb ist leer.',
    cartTotalLabel: 'Gesamt',
    cartEmptyAlert: 'Ihr Warenkorb ist leer.',
    formMissing: 'Bitte geben Sie Name und Telefon ein.',
    ageAlert: 'Bitte bestätigen Sie, dass Sie 18+ sind.',
    currency: 'CZK',
    perBottle: '/ 0,75 l',
    perPiece: '/ Stk',
    orderTotal: 'Gesamt',
    waNumber: 'WhatsApp-Nummer',
    waSummary: 'Nachricht enthält: Name, Kontakt, Warenkorbpositionen, Lieferadresse / Abholung und Notiz.',
    message: {
      title: 'Neue Web-Bestellung',
      name: 'Name',
      phone: 'Telefon',
      email: 'E-Mail',
      emailMissing: 'nicht angegeben',
      address: 'Adresse / Abholung',
      pickup: 'persönliche Abholung',
      order: 'Bestellung',
      total: 'Gesamt',
      note: 'Notiz'
    }
  }
};

let cart = {};
let currentLanguage = localStorage.getItem('vinoLanguage') || window.vinoLocale || 'cs';
let lastOrderPayload = null;

const el = (id) => document.getElementById(id);
const money = (value) => `${Number(value).toLocaleString('cs-CZ')} ${UI[currentLanguage].currency}`;
const t = () => UI[currentLanguage] || UI.cs;

const wineText = (wine, field) => {
  if (!wine) return '';
  return (wine.i18n && wine.i18n[currentLanguage] && wine.i18n[currentLanguage][field] !== undefined)
    ? wine.i18n[currentLanguage][field]
    : (wine[field] || '');
};
const getSelectedPickup = () => document.querySelector('input[name="pickupPlace"]:checked')?.value || el('fieldAddress')?.value || '';
const getSelectedPaymentMethod = () => document.querySelector('input[name="paymentMethod"]:checked')?.value || 'cash';

const PAYMENT_COPY = {
  cs: {
    cash: 'Platba při předání',
    qr: 'QR platba předem na bankovní účet',
    cashCustomer: 'Platba proběhne při osobním předání.',
    qrCustomer: 'Zvolili jste QR platbu předem. Prosím uhraďte částku pomocí QR kódu z obrazovky nebo bankovním převodem. Objednávku následně potvrdíme po domluvě / kontrole platby.',
    cashOwner: 'PLATBA: PŘI PŘEDÁNÍ',
    qrOwner: 'PLATBA: QR KÓD / PŘEVOD NA ÚČET – ZKONTROLOVAT PŘIPSÁNÍ PLATBY',
    account: 'Číslo účtu',
    iban: 'IBAN',
    vs: 'Variabilní symbol',
    contact: 'Kontakt na vinaře'
  },
  en: {
    cash: 'Payment on pickup',
    qr: 'QR payment in advance to bank account',
    cashCustomer: 'Payment will be made on personal pickup.',
    qrCustomer: 'You selected QR payment in advance. Please pay using the QR code shown on the screen or by bank transfer. We will confirm the order after agreement / payment check.',
    cashOwner: 'PAYMENT: ON PICKUP',
    qrOwner: 'PAYMENT: QR CODE / BANK TRANSFER – CHECK PAYMENT RECEIPT',
    account: 'Bank account',
    iban: 'IBAN',
    vs: 'Variable symbol',
    contact: 'Winemaker contact'
  },
  de: {
    cash: 'Zahlung bei Abholung',
    qr: 'QR-Zahlung im Voraus auf das Bankkonto',
    cashCustomer: 'Die Zahlung erfolgt bei persönlicher Abholung.',
    qrCustomer: 'Sie haben QR-Zahlung im Voraus gewählt. Bitte bezahlen Sie per QR-Code auf dem Bildschirm oder per Banküberweisung. Wir bestätigen die Bestellung nach Absprache / Zahlungskontrolle.',
    cashOwner: 'ZAHLUNG: BEI ABHOLUNG',
    qrOwner: 'ZAHLUNG: QR-CODE / BANKÜBERWEISUNG – ZAHLUNGSEINGANG PRÜFEN',
    account: 'Bankkonto',
    iban: 'IBAN',
    vs: 'Variables Symbol',
    contact: 'Kontakt zum Winzer'
  }
};
const paymentCopy = () => PAYMENT_COPY[currentLanguage] || PAYMENT_COPY.cs;
const paymentCopyFor = (lang) => PAYMENT_COPY[lang || currentLanguage] || PAYMENT_COPY.cs;
const paymentMethodLabel = (method, lang = currentLanguage) => paymentCopyFor(lang)[method === 'qr' ? 'qr' : 'cash'];
function createOrderReference() {
  // Numerický 10místný variabilní symbol vhodný pro české banky.
  return String(Date.now()).slice(-10);
}
function spaydValue(value) {
  return encodeURIComponent(String(value || '').replace(/\*/g, ' ')).replace(/%20/g, '+').toUpperCase();
}
function buildPaymentQrString(payload) {
  const pay = SETTINGS.payment || {};
  const amount = Number(payload.total || 0).toFixed(2);
  const vs = payload.paymentVariableSymbol || payload.orderReference || createOrderReference();
  const msg = `OBJEDNAVKA ${vs} VINARSTVI DEVATY`;
  return `SPD*1.0*ACC:${pay.iban}*AM:${amount}*CC:${pay.currency || 'CZK'}*X-VS:${vs}*MSG:${spaydValue(msg)}`;
}
const ORDER_COPY = {
  cs: {
    sending: 'Odesílám objednávku…',
    sentTitle: 'Objednávka byla odeslána',
    sentSubtitle: 'Děkujeme za objednávku. Potvrzení jsme poslali na e-mail, pokud byl vyplněn. Brzy se ozveme kvůli potvrzení převzetí.',
    sentNoEmail: 'Děkujeme za objednávku. Brzy se ozveme kvůli potvrzení převzetí.',
    error: 'Objednávku se nepodařilo odeslat. Zkuste to prosím znovu, případně nás kontaktujte telefonicky nebo přes WhatsApp.',
    apiMissing: 'Objednávkový formulář zatím není napojený na e-mail. Zkontroluj prosím EmailJS nastavení v app.js.',
    detailTitle: 'Detail objednávky',
    contactFallback: 'Pokud by potvrzení nedorazilo, můžete nás kontaktovat na telefonu / WhatsAppu',
    buttonClose: 'Hotovo – zavřít'
  },
  en: {
    sending: 'Sending order…',
    sentTitle: 'Your order has been sent',
    sentSubtitle: 'Thank you for your order. If an e-mail address was provided, we have sent a confirmation. We will contact you soon to confirm pickup.',
    sentNoEmail: 'Thank you for your order. We will contact you soon to confirm pickup.',
    error: 'The order could not be sent. Please try again or contact us by phone or WhatsApp.',
    apiMissing: 'The order form is not connected to e-mail yet. Please check the EmailJS settings in app.js.',
    detailTitle: 'Order detail',
    contactFallback: 'If the confirmation does not arrive, you can contact us by phone / WhatsApp',
    buttonClose: 'Done – close'
  },
  de: {
    sending: 'Bestellung wird gesendet…',
    sentTitle: 'Ihre Bestellung wurde gesendet',
    sentSubtitle: 'Vielen Dank für Ihre Bestellung. Wenn eine E-Mail-Adresse angegeben wurde, haben wir eine Bestätigung gesendet. Wir melden uns bald zur Bestätigung der Abholung.',
    sentNoEmail: 'Vielen Dank für Ihre Bestellung. Wir melden uns bald zur Bestätigung der Abholung.',
    error: 'Die Bestellung konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch oder per WhatsApp.',
    apiMissing: 'Das Bestellformular ist noch nicht mit E-Mail verbunden. Bitte prüfen Sie die EmailJS-Einstellungen in app.js.',
    detailTitle: 'Bestelldetail',
    contactFallback: 'Falls die Bestätigung nicht ankommt, können Sie uns telefonisch / per WhatsApp kontaktieren',
    buttonClose: 'Fertig – schließen'
  }
};
const orderCopy = () => ORDER_COPY[currentLanguage] || ORDER_COPY.cs;


function initStatic() {
  el('heroBg').style.backgroundImage = `url('${SETTINGS.hero}')`;
  setTimeout(() => el('heroBg').classList.add('loaded'), 100);
}

function renderWines() {
  const copy = t();
  el('winesGrid').innerHTML = SETTINGS.wines.map((w) => `
    <article class="wine-card">
      <div class="wine-image">
        <img src="${w.img}" alt="${wineText(w, 'name')}">
        <span class="wine-type">${wineText(w, 'type')}</span>
      </div>
      <div class="wine-body">
        <div class="wine-name">${wineText(w, 'name')}</div>
        <div class="wine-vintage">${wineText(w, 'vintage')}</div>
        <div class="wine-desc">${wineText(w, 'desc')}</div>
        ${wineText(w, 'award') ? `<div class="wine-tag">${wineText(w, 'award')}</div>` : ''}
      </div>
      <div class="wine-footer">
        <div class="wine-price">${money(w.price)} <span>${copy.perBottle}</span></div>
        <button id="btn-${w.id}" class="btn primary" type="button" onclick="addToCart(${w.id})">
          ${cart[w.id] ? copy.inCart(cart[w.id]) : copy.add}
        </button>
      </div>
    </article>
  `).join('');
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCart();
}
window.addToCart = addToCart;

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  updateCart();
}
window.changeQty = changeQty;

function removeFromCart(id) {
  delete cart[id];
  updateCart();
}
window.removeFromCart = removeFromCart;

function cartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const wine = SETTINGS.wines.find((item) => item.id === Number(id));
    return sum + (wine ? wine.price * qty : 0);
  }, 0);
}

function updateCart() {
  const copy = t();
  el('cartCount').textContent = cartCount();
  const wrap = el('cartItems');
  const empty = el('cartEmpty');
  wrap.innerHTML = '';
  empty.textContent = copy.emptyCart;
  wrap.appendChild(empty);

  if (!cartCount()) {
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    Object.entries(cart).forEach(([id, qty]) => {
      const wine = SETTINGS.wines.find((item) => item.id === Number(id));
      if (!wine) return;
      const item = document.createElement('div');
      item.className = 'cart-item';
      item.innerHTML = `
        <div class="cart-item-thumb"><img src="${wine.img}" alt="${wineText(wine, 'name')}"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${wineText(wine, 'name')}</div>
          <div class="cart-item-price">${money(wine.price)} ${copy.perPiece}</div>
        </div>
        <div class="qty">
          <button class="qty-btn" type="button" onclick="changeQty(${wine.id}, -1)">−</button>
          <strong>${qty}</strong>
          <button class="qty-btn" type="button" onclick="changeQty(${wine.id}, 1)">+</button>
        </div>
        <button class="remove-btn" type="button" onclick="removeFromCart(${wine.id})">🗑</button>
      `;
      wrap.appendChild(item);
    });
  }

  el('cartTotal').textContent = money(cartTotal());
  SETTINGS.wines.forEach((wine) => {
    const btn = el(`btn-${wine.id}`);
    if (btn) {
      btn.textContent = cart[wine.id] ? copy.inCart(cart[wine.id]) : copy.add;
    }
  });

  if (!el('formScreen').classList.contains('hidden')) {
    renderOrderSummary();
  }
  if (lastOrderPayload) {
    refreshOrderConfirmation();
  }
}

function renderOrderSummary() {
  const copy = t();
  const lines = el('orderLines');
  lines.innerHTML = '';
  let total = 0;

  Object.entries(cart).forEach(([id, qty]) => {
    const wine = SETTINGS.wines.find((item) => item.id === Number(id));
    if (!wine) return;
    const subtotal = wine.price * qty;
    total += subtotal;
    const row = document.createElement('div');
    row.className = 'order-line';
    row.innerHTML = `<span>${wineText(wine, 'name')} × ${qty}</span><strong>${money(subtotal)}</strong>`;
    lines.appendChild(row);
  });

  const totalRow = document.createElement('div');
  totalRow.className = 'order-line total';
  totalRow.innerHTML = `<span>${copy.orderTotal}</span><strong>${money(total)}</strong>`;
  lines.appendChild(totalRow);
}

function buildMessage(name, phone, email, address, note) {
  const copy = t().message;
  const items = Object.entries(cart).map(([id, qty]) => {
    const wine = SETTINGS.wines.find((item) => item.id === Number(id));
    return `- ${wineText(wine, 'name')} × ${qty} ks = ${money(wine.price * qty)}`;
  }).join('\n');

  return [
    copy.title,
    '',
    `${copy.name}: ${name}`,
    `${copy.phone}: ${phone}`,
    `${copy.email}: ${email || copy.emailMissing}`,
    `${copy.address}: ${address || copy.pickup}`,
    '',
    `${copy.order}:`,
    items,
    '',
    `${copy.total}: ${money(cartTotal())}`,
    note ? `${copy.note}: ${note}` : null
  ].filter(Boolean).join('\n');
}

function openCart() {
  el('cartOverlay').classList.add('open');
  el('cartPanel').classList.add('open');
}

function closeCart() {
  el('cartOverlay').classList.remove('open');
  el('cartPanel').classList.remove('open');
}

function openCheckout() {
  if (!cartCount()) {
    alert(t().cartEmptyAlert);
    return;
  }
  closeCart();
  renderOrderSummary();
  el('formScreen').classList.remove('hidden');
  el('confirmScreen').classList.add('hidden');
  el('modalOverlay').classList.add('open');
}

function closeModal() {
  el('modalOverlay').classList.remove('open');
}

function escapeHtmlValue(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderPaymentQr(payload) {
  const qr = el('qrcode');
  if (!qr) return;
  qr.innerHTML = '';
  if (payload.paymentMethod === 'qr' && payload.paymentQrData && window.QRCode) {
    new QRCode(qr, {
      text: payload.paymentQrData,
      width: 220,
      height: 220,
      correctLevel: QRCode.CorrectLevel.M
    });
  }
}

function refreshOrderConfirmation() {
  if (!lastOrderPayload) return;
  const copy = orderCopy();
  const pc = paymentCopyFor(lastOrderPayload.language || currentLanguage);
  const detail = lastOrderPayload.message || buildMessage(lastOrderPayload.name, lastOrderPayload.phone, lastOrderPayload.email, lastOrderPayload.address, lastOrderPayload.note);
  const isQr = lastOrderPayload.paymentMethod === 'qr';
  const paymentHtml = isQr ? `
    <div style="margin:1rem 0;padding:1rem;border:2px solid #5c1a2e;border-radius:12px;background:#fff7e6;color:#3d0f1e">
      <strong>${escapeHtmlValue(paymentMethodLabel('qr', lastOrderPayload.language))}</strong><br>
      ${escapeHtmlValue(pc.qrCustomer)}<br><br>
      <strong>${escapeHtmlValue(pc.account)}:</strong> ${escapeHtmlValue(lastOrderPayload.paymentAccount)}<br>
      <strong>${escapeHtmlValue(pc.iban)}:</strong> ${escapeHtmlValue(lastOrderPayload.paymentIban)}<br>
      <strong>${escapeHtmlValue(pc.vs)}:</strong> ${escapeHtmlValue(lastOrderPayload.paymentVariableSymbol)}<br>
      <strong>Částka / Amount:</strong> ${escapeHtmlValue(Number(lastOrderPayload.total).toLocaleString('cs-CZ'))} ${escapeHtmlValue(lastOrderPayload.currency || 'Kč')}
    </div>` : `
    <div style="margin:1rem 0;padding:1rem;border:1px solid rgba(200,169,110,.45);border-radius:12px;background:#fff;color:#3d0f1e">
      <strong>${escapeHtmlValue(paymentMethodLabel('cash', lastOrderPayload.language))}</strong><br>
      ${escapeHtmlValue(pc.cashCustomer)}
    </div>`;
  el('waDetail').innerHTML = `
    ${paymentHtml}
    <strong>${copy.detailTitle}</strong><br>
    <pre style="white-space:pre-wrap;text-align:left;font:inherit;margin:.8rem 0 0;color:inherit">${escapeHtmlValue(detail)}</pre>
    <div style="margin-top:1rem">${copy.contactFallback}: ${SETTINGS.whatsappDisplay} / ivo.devaty@email.cz</div>
  `;
  renderPaymentQr(lastOrderPayload);
  const btn = el('whatsAppOrderBtn');
  if (btn) btn.classList.add('hidden');
  el('finishOrderBtn').textContent = copy.buttonClose;
}

function buildOrderPayload(name, phone, email, address, note) {
  const items = Object.entries(cart).map(([id, qty]) => {
    const wine = SETTINGS.wines.find((item) => item.id === Number(id));
    return {
      id: wine.id,
      name: wineText(wine, 'name'),
      originalName: wine.name,
      quantity: qty,
      unitPrice: wine.price,
      subtotal: wine.price * qty
    };
  });
  const paymentMethod = getSelectedPaymentMethod();
  const orderReference = createOrderReference();
  const payload = {
    language: currentLanguage,
    name,
    phone,
    email,
    address,
    note,
    items,
    total: cartTotal(),
    currency: t().currency,
    message: buildMessage(name, phone, email, address, note),
    paymentMethod,
    paymentLabel: paymentMethodLabel(paymentMethod, currentLanguage),
    paymentAccount: SETTINGS.payment?.accountNumber || '',
    paymentIban: SETTINGS.payment?.iban || '',
    paymentVariableSymbol: orderReference,
    orderReference,
    source: window.location.href,
    createdAt: new Date().toISOString()
  };
  payload.paymentQrData = paymentMethod === 'qr' ? buildPaymentQrString(payload) : '';
  return payload;
}

let emailJsInitialized = false;

function emailJsConfig() {
  return SETTINGS.emailJs || {};
}

function isEmailJsConfigured() {
  const cfg = emailJsConfig();
  return Boolean(
    cfg.publicKey && !cfg.publicKey.startsWith('SEM_VLOZ_') &&
    cfg.serviceId && !cfg.serviceId.startsWith('SEM_VLOZ_') &&
    cfg.templateId && !cfg.templateId.startsWith('SEM_VLOZ_') &&
    cfg.ownerEmail
  );
}

function ensureEmailJsReady() {
  if (!window.emailjs) {
    throw new Error('EmailJS knihovna není načtená. Zkontroluj script tag v index.html nebo připojení k internetu.');
  }
  if (!isEmailJsConfigured()) {
    throw new Error(orderCopy().apiMissing);
  }
  if (!emailJsInitialized) {
    emailjs.init({
      publicKey: emailJsConfig().publicKey,
      blockHeadless: true,
      limitRate: {
        id: 'vino-order-form',
        throttle: 10000
      }
    });
    emailJsInitialized = true;
  }
}

function plainItemsText(payload) {
  return (payload.items || []).map((item) => {
    return `- ${item.name} × ${item.quantity} ks = ${Number(item.subtotal).toLocaleString('cs-CZ')} ${payload.currency || 'Kč'}`;
  }).join('
');
}

function paymentInfoText(payload, audience = 'customer') {
  const pc = paymentCopyFor(payload.language || 'cs');
  const isQr = payload.paymentMethod === 'qr';
  const headline = audience === 'owner'
    ? (isQr ? pc.qrOwner : pc.cashOwner)
    : `${paymentMethodLabel(payload.paymentMethod, payload.language)} – ${isQr ? pc.qrCustomer : pc.cashCustomer}`;
  const lines = [
    '==================================================',
    headline,
    '=================================================='
  ];
  if (isQr) {
    lines.push(
      `${pc.account}: ${payload.paymentAccount}`,
      `${pc.iban}: ${payload.paymentIban}`,
      `${pc.vs}: ${payload.paymentVariableSymbol}`,
      `Částka / Amount: ${Number(payload.total).toLocaleString('cs-CZ')} ${payload.currency || 'Kč'}`
    );
  }
  lines.push(`${pc.contact}: ivo.devaty@email.cz, +420 724 366 369`);
  return lines.join('
');
}

function ownerEmailText(payload) {
  return [
    'Nová objednávka z webu – Vinařství Devátý',
    '',
    `Jméno: ${payload.name}`,
    `Telefon: ${payload.phone}`,
    `E-mail: ${payload.email || 'neuveden'}`,
    `Převzetí: ${payload.address || 'neuvedeno'}`,
    '',
    paymentInfoText(payload, 'owner'),
    '',
    'Objednávka:',
    plainItemsText(payload),
    '',
    `Celkem: ${Number(payload.total).toLocaleString('cs-CZ')} ${payload.currency || 'Kč'}`,
    payload.note ? `Poznámka: ${payload.note}` : null,
    '',
    `Jazyk webu: ${payload.language}`,
    `Zdroj: ${payload.source}`,
    `Vytvořeno: ${payload.createdAt}`
  ].filter(Boolean).join('
');
}

function customerEmailText(payload) {
  const lang = payload.language || 'cs';
  const total = `${Number(payload.total).toLocaleString('cs-CZ')} ${payload.currency || 'Kč'}`;
  const allTexts = {
    cs: {
      hello: 'Dobrý den',
      thanks: 'děkujeme za Vaši objednávku z webu Vinařství Devátý.',
      info: 'Objednávku jsme přijali a brzy se Vám ozveme kvůli potvrzení převzetí.',
      items: 'Objednávka', pickup: 'Převzetí', total: 'Celkem', note: 'Poznámka', bye: 'S pozdravem
Vinařství Devátý'
    },
    en: {
      hello: 'Hello',
      thanks: 'thank you for your order from the Vinařství Devátý website.',
      info: 'We have received your order and will contact you soon to confirm pickup.',
      items: 'Order', pickup: 'Pickup', total: 'Total', note: 'Note', bye: 'Best regards
Vinařství Devátý'
    },
    de: {
      hello: 'Guten Tag',
      thanks: 'vielen Dank für Ihre Bestellung über die Website Vinařství Devátý.',
      info: 'Wir haben Ihre Bestellung erhalten und melden uns bald zur Bestätigung der Abholung.',
      items: 'Bestellung', pickup: 'Abholung', total: 'Gesamt', note: 'Notiz', bye: 'Mit freundlichen Grüßen
Vinařství Devátý'
    }
  };
  const texts = allTexts[lang] || allTexts.cs;
  return [
    `${texts.hello},`,
    '',
    texts.thanks,
    texts.info,
    '',
    `${texts.items}:`,
    plainItemsText(payload),
    '',
    `${texts.pickup}: ${payload.address || ''}`,
    `${texts.total}: ${total}`,
    payload.note ? `${texts.note}: ${payload.note}` : null,
    '',
    paymentInfoText(payload, 'customer'),
    '',
    texts.bye
  ].filter(Boolean).join('
');
}

function customerSubject(lang) {
  if (lang === 'en') return 'Order confirmation – Vinařství Devátý';
  if (lang === 'de') return 'Bestellbestätigung – Vinařství Devátý';
  return 'Potvrzení objednávky – Vinařství Devátý';
}

async function sendEmailViaEmailJs({ toEmail, replyTo, subject, message, payload }) {
  const cfg = emailJsConfig();
  return emailjs.send(cfg.serviceId, cfg.templateId, {
    to_email: toEmail,
    reply_to: replyTo || cfg.ownerEmail,
    from_name: cfg.ownerName || 'Vinařství Devátý',
    subject,
    message,
    customer_name: payload.name,
    customer_phone: payload.phone,
    customer_email: payload.email || '',
    pickup: payload.address || '',
    order_items: plainItemsText(payload),
    order_total: `${Number(payload.total).toLocaleString('cs-CZ')} ${payload.currency || 'Kč'}`,
    payment_method: paymentMethodLabel(payload.paymentMethod, payload.language),
    payment_account: payload.paymentAccount || '',
    payment_iban: payload.paymentIban || '',
    payment_variable_symbol: payload.paymentVariableSymbol || '',
    payment_qr_data: payload.paymentQrData || '',
    note: payload.note || '',
    language: payload.language || 'cs',
    source: payload.source || ''
  });
}

async function sendOrderToApi(payload) {
  ensureEmailJsReady();
  const cfg = emailJsConfig();

  await sendEmailViaEmailJs({
    toEmail: cfg.ownerEmail,
    replyTo: payload.email || cfg.ownerEmail,
    subject: `Nová objednávka vína – ${payload.name} – ${Number(payload.total).toLocaleString('cs-CZ')} ${payload.currency || 'Kč'}`,
    message: ownerEmailText(payload),
    payload
  });

  if (payload.email) {
    await sendEmailViaEmailJs({
      toEmail: payload.email,
      replyTo: cfg.ownerEmail,
      subject: customerSubject(payload.language),
      message: customerEmailText(payload),
      payload
    });
  }

  return true;
}

async function submitOrder(event) {
  event.preventDefault();
  const name = el('fieldName').value.trim();
  const phone = el('fieldPhone').value.trim();
  const email = el('fieldEmail').value.trim();
  const address = getSelectedPickup();
  const note = el('fieldNote').value.trim();
  const copy = orderCopy();

  if (!name || !phone) {
    alert(t().formMissing);
    return;
  }

  if (!el('ageConfirmOrder').checked) {
    alert(t().ageAlert);
    return;
  }

  const submitBtn = el('checkoutForm').querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = copy.sending;

  const payload = buildOrderPayload(name, phone, email, address, note);

  try {
    await sendOrderToApi(payload);
    lastOrderPayload = payload;
    refreshOrderConfirmation();
    el('formScreen').classList.add('hidden');
    el('confirmScreen').classList.remove('hidden');
    const title = el('confirmScreen').querySelector('h2');
    const subtitle = el('confirmScreen').querySelector('.modal-sub');
    if (title) title.textContent = copy.sentTitle;
    if (subtitle) subtitle.textContent = email ? copy.sentSubtitle : copy.sentNoEmail;
  } catch (error) {
    console.error(error);
    alert(error.message || copy.error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

function finishOrder() {
  cart = {};
  lastOrderPayload = null;
  updateCart();
  closeModal();
  el('checkoutForm').reset();
}

function setupAgeGate() {
  const allowed = localStorage.getItem('wineAgeConfirmed') === 'yes';
  if (!allowed) el('ageGate').classList.add('show');
  el('confirmAgeBtn').addEventListener('click', () => {
    localStorage.setItem('wineAgeConfirmed', 'yes');
    el('ageGate').classList.remove('show');
  });
}

function bind() {
  window.addEventListener('scroll', () => {
    el('mainHeader').classList.toggle('scrolled', window.scrollY > 40);
  });
  el('openCartBtn').addEventListener('click', openCart);
  el('closeCartBtn').addEventListener('click', closeCart);
  el('cartOverlay').addEventListener('click', closeCart);
  el('checkoutBtn').addEventListener('click', openCheckout);
  el('backToCartBtn').addEventListener('click', closeModal);
  el('finishOrderBtn').addEventListener('click', finishOrder);
  el('checkoutForm').addEventListener('submit', submitOrder);
  window.addEventListener('vino-language-change', (event) => {
    currentLanguage = event.detail?.lang || localStorage.getItem('vinoLanguage') || 'cs';
    renderWines();
    updateCart();
  });
}

initStatic();
renderWines();
updateCart();
setupAgeGate();
bind();
