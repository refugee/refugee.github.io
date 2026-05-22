const SETTINGS = {
  whatsappDigits: '420724366369',
  whatsappDisplay: '724 366 369',
  hero: 'images/hero.jpg',
  orderApiUrl: '',
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
        en: { name: 'Pinot Blanc 2025', type: 'White wine – dry', vintage: 'Vintage 2025', desc: 'A delicate white wine with clean fruitiness, a light floral touch and a pleasantly rounded finish.', award: 'Winemaker’s tip' },
        de: { name: 'Weißburgunder 2025', type: 'Weißwein – trocken', vintage: 'Jahrgang 2025', desc: 'Ein feiner Weißwein mit klarer Fruchtigkeit, leicht floraler Note und angenehm rundem Abgang.', award: 'Tipp des Winzers' }
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
        en: { name: 'Gewürztraminer 2025', type: 'White wine – semi-dry', vintage: 'Vintage 2025', desc: 'An aromatic wine with notes of rose petals, spice and ripe fruit, finished with a gentle touch of sweetness.', award: 'Aromatic variety' },
        de: { name: 'Gewürztraminer 2025', type: 'Weißwein – halbtrocken', vintage: 'Jahrgang 2025', desc: 'Ein aromatischer Wein mit Noten von Rosen, Gewürzen und reifem Obst, mit einer dezent süßlichen Linie im Abgang.', award: 'Aromatische Sorte' }
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
        en: { name: 'Grüner Veltliner 2025', type: 'White wine – dry', vintage: 'Vintage 2025', desc: 'A fresh and very drinkable wine with notes of green apple, citrus and a lightly spicy finish.', award: 'Fresh choice' },
        de: { name: 'Grüner Veltliner 2025', type: 'Weißwein – trocken', vintage: 'Jahrgang 2025', desc: 'Ein frischer, sehr zugänglicher Wein mit Noten von grünem Apfel, Zitrusfrüchten und leicht würzigem Nachhall.', award: 'Frische Wahl' }
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
        en: { name: 'Welschriesling 2025', type: 'White wine – dry', vintage: 'Vintage 2025', desc: 'A lighter wine with gentle acidity, citrus expression and a clean mineral finish.', award: '' },
        de: { name: 'Welschriesling 2025', type: 'Weißwein – trocken', vintage: 'Jahrgang 2025', desc: 'Ein leichterer Wein mit feiner Säure, zitrischem Ausdruck und klarem mineralischem Abgang.', award: '' }
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
        en: { name: 'Rosé 2025', type: 'Rosé – semi-dry', vintage: 'Vintage 2025', desc: 'A light rosé with notes of strawberries and small forest berries, ideal for relaxed drinking.', award: 'Light rosé' },
        de: { name: 'Rosé 2025', type: 'Rosé – halbtrocken', vintage: 'Jahrgang 2025', desc: 'Ein leichter Rosé mit Noten von Erdbeeren und kleinen Waldbeeren, ideal für unkomplizierten Genuss.', award: 'Leichter Rosé' }
      }
    }
  ]
};

const UI = {
  cs: { add: 'Přidat', inCart: function(q){ return 'V košíku (' + q + ')'; }, emptyCart: 'Košík je prázdný.', cartEmptyAlert: 'Košík je prázdný.', formMissing: 'Vyplň prosím jméno a telefon.', ageAlert: 'Potvrď prosím věk 18+.', currency: 'Kč', perBottle: '/ 0,75 l', perPiece: '/ ks', orderTotal: 'Celkem', message: { title:'Nová objednávka z webu', name:'Jméno', phone:'Telefon', email:'E-mail', emailMissing:'neuveden', address:'Adresa / převzetí', pickup:'osobní odběr', order:'Objednávka', total:'Celkem', note:'Poznámka' } },
  en: { add: 'Add', inCart: function(q){ return 'In cart (' + q + ')'; }, emptyCart: 'Your cart is empty.', cartEmptyAlert: 'Your cart is empty.', formMissing: 'Please fill in your name and phone number.', ageAlert: 'Please confirm that you are 18+.', currency: 'CZK', perBottle: '/ 0.75 l', perPiece: '/ pc', orderTotal: 'Total', message: { title:'New website order', name:'Name', phone:'Phone', email:'E-mail', emailMissing:'not provided', address:'Address / pickup', pickup:'personal pickup', order:'Order', total:'Total', note:'Note' } },
  de: { add: 'Hinzufügen', inCart: function(q){ return 'Im Warenkorb (' + q + ')'; }, emptyCart: 'Ihr Warenkorb ist leer.', cartEmptyAlert: 'Ihr Warenkorb ist leer.', formMissing: 'Bitte geben Sie Name und Telefon ein.', ageAlert: 'Bitte bestätigen Sie, dass Sie 18+ sind.', currency: 'CZK', perBottle: '/ 0,75 l', perPiece: '/ Stk', orderTotal: 'Gesamt', message: { title:'Neue Web-Bestellung', name:'Name', phone:'Telefon', email:'E-Mail', emailMissing:'nicht angegeben', address:'Adresse / Abholung', pickup:'persönliche Abholung', order:'Bestellung', total:'Gesamt', note:'Notiz' } }
};

const PAYMENT_COPY = {
  cs: { cash:'Platba při předání', qr:'QR platba předem na bankovní účet', cashCustomer:'Platba proběhne při osobním předání.', qrCustomer:'Zvolili jste QR platbu předem. Prosím uhraďte částku pomocí QR kódu z obrazovky nebo bankovním převodem. Objednávku následně potvrdíme po domluvě / kontrole platby.', cashOwner:'PLATBA: PŘI PŘEDÁNÍ', qrOwner:'PLATBA: QR KÓD / PŘEVOD NA ÚČET – ZKONTROLOVAT PŘIPSÁNÍ PLATBY', account:'Číslo účtu', iban:'IBAN', vs:'Variabilní symbol', contact:'Kontakt na vinaře' },
  en: { cash:'Payment on pickup', qr:'QR payment in advance to bank account', cashCustomer:'Payment will be made on personal pickup.', qrCustomer:'You selected QR payment in advance. Please pay using the QR code shown on the screen or by bank transfer. We will confirm the order after agreement / payment check.', cashOwner:'PAYMENT: ON PICKUP', qrOwner:'PAYMENT: QR CODE / BANK TRANSFER – CHECK PAYMENT RECEIPT', account:'Bank account', iban:'IBAN', vs:'Variable symbol', contact:'Winemaker contact' },
  de: { cash:'Zahlung bei Abholung', qr:'QR-Zahlung im Voraus auf das Bankkonto', cashCustomer:'Die Zahlung erfolgt bei persönlicher Abholung.', qrCustomer:'Sie haben QR-Zahlung im Voraus gewählt. Bitte bezahlen Sie per QR-Code auf dem Bildschirm oder per Banküberweisung. Wir bestätigen die Bestellung nach Absprache / Zahlungskontrolle.', cashOwner:'ZAHLUNG: BEI ABHOLUNG', qrOwner:'ZAHLUNG: QR-CODE / BANKÜBERWEISUNG – ZAHLUNGSEINGANG PRÜFEN', account:'Bankkonto', iban:'IBAN', vs:'Variables Symbol', contact:'Kontakt zum Winzer' }
};

let cart = {};
let currentLanguage = localStorage.getItem('vinoLanguage') || window.vinoLocale || 'cs';
let lastOrderPayload = null;
let emailJsInitialized = false;

function el(id) { return document.getElementById(id); }
function t() { return UI[currentLanguage] || UI.cs; }
function paymentCopyFor(lang) { return PAYMENT_COPY[lang || currentLanguage] || PAYMENT_COPY.cs; }
function paymentMethodLabel(method, lang) { return paymentCopyFor(lang || currentLanguage)[method === 'qr' ? 'qr' : 'cash']; }
function money(value) { return Number(value).toLocaleString('cs-CZ') + ' ' + t().currency; }
function wineText(wine, field) {
  if (!wine) return '';
  if (wine.i18n && wine.i18n[currentLanguage] && wine.i18n[currentLanguage][field] !== undefined) return wine.i18n[currentLanguage][field];
  return wine[field] || '';
}
function escapeHtml(value) {
  return String(value == null ? '' : value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function getSelectedPickup() {
  const selected = document.querySelector('input[name="pickupPlace"]:checked');
  const hidden = el('fieldAddress');
  return selected ? selected.value : (hidden ? hidden.value : '');
}
function getSelectedPaymentMethod() {
  const selected = document.querySelector('input[name="paymentMethod"]:checked');
  return selected ? selected.value : 'cash';
}
function createOrderReference() { return String(Date.now()).slice(-10); }
function spaydValue(value) { return encodeURIComponent(String(value || '').replace(/\*/g, ' ')).replace(/%20/g, '+').toUpperCase(); }
function buildPaymentQrString(payload) {
  const pay = SETTINGS.payment || {};
  const amount = Number(payload.total || 0).toFixed(2);
  const vs = payload.paymentVariableSymbol || payload.orderReference || createOrderReference();
  const msg = 'OBJEDNAVKA ' + vs + ' VINARSTVI DEVATY';
  return 'SPD*1.0*ACC:' + pay.iban + '*AM:' + amount + '*CC:' + (pay.currency || 'CZK') + '*X-VS:' + vs + '*MSG:' + spaydValue(msg);
}

function initStatic() {
  const hero = el('heroBg');
  if (hero) {
    hero.style.backgroundImage = "url('" + SETTINGS.hero + "')";
    setTimeout(function(){ hero.classList.add('loaded'); }, 100);
  }
}

function renderWines() {
  const grid = el('winesGrid');
  if (!grid) return;
  const copy = t();
  grid.innerHTML = SETTINGS.wines.map(function(w) {
    const name = escapeHtml(wineText(w, 'name'));
    const type = escapeHtml(wineText(w, 'type'));
    const vintage = escapeHtml(wineText(w, 'vintage'));
    const desc = escapeHtml(wineText(w, 'desc'));
    const award = escapeHtml(wineText(w, 'award'));
    const qty = cart[w.id] || 0;
    return '<article class="wine-card">' +
      '<div class="wine-image"><img src="' + escapeHtml(w.img) + '" alt="' + name + '"><span class="wine-type">' + type + '</span></div>' +
      '<div class="wine-body"><div class="wine-name">' + name + '</div><div class="wine-vintage">' + vintage + '</div><div class="wine-desc">' + desc + '</div>' +
      (award ? '<div class="wine-tag">' + award + '</div>' : '') + '</div>' +
      '<div class="wine-footer"><div class="wine-price">' + money(w.price) + ' <span>' + copy.perBottle + '</span></div>' +
      '<button id="btn-' + w.id + '" class="btn primary" type="button" onclick="addToCart(' + w.id + ')">' + (qty ? copy.inCart(qty) : copy.add) + '</button></div>' +
      '</article>';
  }).join('');
}

function addToCart(id) { cart[id] = (cart[id] || 0) + 1; updateCart(); renderWines(); }
function changeQty(id, delta) { cart[id] = (cart[id] || 0) + delta; if (cart[id] <= 0) delete cart[id]; updateCart(); renderWines(); }
function removeFromCart(id) { delete cart[id]; updateCart(); renderWines(); }
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;

function cartCount() { return Object.values(cart).reduce(function(sum, qty){ return sum + qty; }, 0); }
function cartTotal() {
  return Object.keys(cart).reduce(function(sum, id){
    const wine = SETTINGS.wines.find(function(item){ return item.id === Number(id); });
    return sum + (wine ? wine.price * cart[id] : 0);
  }, 0);
}

function updateCart() {
  const countEl = el('cartCount');
  if (countEl) countEl.textContent = cartCount();
  const wrap = el('cartItems');
  const empty = el('cartEmpty');
  if (wrap && empty) {
    wrap.innerHTML = '';
    empty.textContent = t().emptyCart;
    if (!cartCount()) {
      empty.style.display = 'block';
      wrap.appendChild(empty);
    } else {
      empty.style.display = 'none';
      Object.keys(cart).forEach(function(id){
        const qty = cart[id];
        const wine = SETTINGS.wines.find(function(item){ return item.id === Number(id); });
        if (!wine) return;
        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = '<div class="cart-item-thumb"><img src="' + escapeHtml(wine.img) + '" alt="' + escapeHtml(wineText(wine, 'name')) + '"></div>' +
          '<div class="cart-item-info"><div class="cart-item-name">' + escapeHtml(wineText(wine, 'name')) + '</div><div class="cart-item-price">' + money(wine.price) + ' ' + t().perPiece + '</div></div>' +
          '<div class="qty"><button class="qty-btn" type="button" onclick="changeQty(' + wine.id + ', -1)">−</button><strong>' + qty + '</strong><button class="qty-btn" type="button" onclick="changeQty(' + wine.id + ', 1)">+</button></div>' +
          '<button class="remove-btn" type="button" onclick="removeFromCart(' + wine.id + ')">🗑</button>';
        wrap.appendChild(item);
      });
    }
  }
  const totalEl = el('cartTotal');
  if (totalEl) totalEl.textContent = money(cartTotal());
  if (el('formScreen') && !el('formScreen').classList.contains('hidden')) renderOrderSummary();
}

function renderOrderSummary() {
  const lines = el('orderLines');
  if (!lines) return;
  lines.innerHTML = '';
  Object.keys(cart).forEach(function(id){
    const qty = cart[id];
    const wine = SETTINGS.wines.find(function(item){ return item.id === Number(id); });
    if (!wine) return;
    const subtotal = wine.price * qty;
    const row = document.createElement('div');
    row.className = 'order-line';
    row.innerHTML = '<span>' + escapeHtml(wineText(wine, 'name')) + ' × ' + qty + '</span><strong>' + money(subtotal) + '</strong>';
    lines.appendChild(row);
  });
  const totalRow = document.createElement('div');
  totalRow.className = 'order-line total';
  totalRow.innerHTML = '<span>' + t().orderTotal + '</span><strong>' + money(cartTotal()) + '</strong>';
  lines.appendChild(totalRow);
}

function buildMessage(name, phone, email, address, note) {
  const copy = t().message;
  const items = Object.keys(cart).map(function(id){
    const wine = SETTINGS.wines.find(function(item){ return item.id === Number(id); });
    const qty = cart[id];
    return '- ' + wineText(wine, 'name') + ' × ' + qty + ' ks = ' + money(wine.price * qty);
  }).join('\n');
  return [copy.title, '', copy.name + ': ' + name, copy.phone + ': ' + phone, copy.email + ': ' + (email || copy.emailMissing), copy.address + ': ' + (address || copy.pickup), '', copy.order + ':', items, '', copy.total + ': ' + money(cartTotal()), note ? copy.note + ': ' + note : null].filter(Boolean).join('\n');
}

function buildOrderPayload(name, phone, email, address, note) {
  const items = Object.keys(cart).map(function(id){
    const wine = SETTINGS.wines.find(function(item){ return item.id === Number(id); });
    const qty = cart[id];
    return { id: wine.id, name: wineText(wine, 'name'), originalName: wine.name, quantity: qty, unitPrice: wine.price, subtotal: wine.price * qty };
  });
  const paymentMethod = getSelectedPaymentMethod();
  const orderReference = createOrderReference();
  const payload = {
    language: currentLanguage,
    name: name,
    phone: phone,
    email: email,
    address: address,
    note: note,
    items: items,
    total: cartTotal(),
    currency: t().currency,
    message: buildMessage(name, phone, email, address, note),
    paymentMethod: paymentMethod,
    paymentLabel: paymentMethodLabel(paymentMethod, currentLanguage),
    paymentAccount: SETTINGS.payment.accountNumber,
    paymentIban: SETTINGS.payment.iban,
    paymentVariableSymbol: orderReference,
    orderReference: orderReference,
    source: window.location.href,
    createdAt: new Date().toISOString()
  };
  payload.paymentQrData = paymentMethod === 'qr' ? buildPaymentQrString(payload) : '';
  return payload;
}

function plainItemsText(payload) {
  return (payload.items || []).map(function(item){ return '- ' + item.name + ' × ' + item.quantity + ' ks = ' + Number(item.subtotal).toLocaleString('cs-CZ') + ' ' + (payload.currency || 'Kč'); }).join('\n');
}
function paymentInfoText(payload, audience) {
  const pc = paymentCopyFor(payload.language || 'cs');
  const isQr = payload.paymentMethod === 'qr';
  const headline = audience === 'owner' ? (isQr ? pc.qrOwner : pc.cashOwner) : (paymentMethodLabel(payload.paymentMethod, payload.language) + ' – ' + (isQr ? pc.qrCustomer : pc.cashCustomer));
  const lines = ['==================================================', headline, '=================================================='];
  if (isQr) {
    lines.push(pc.account + ': ' + payload.paymentAccount, pc.iban + ': ' + payload.paymentIban, pc.vs + ': ' + payload.paymentVariableSymbol, 'Částka / Amount: ' + Number(payload.total).toLocaleString('cs-CZ') + ' ' + (payload.currency || 'Kč'));
  }
  lines.push(pc.contact + ': ivo.devaty@email.cz, +420 724 366 369');
  return lines.join('\n');
}
function ownerEmailText(payload) {
  return ['Nová objednávka z webu – Vinařství Devátý', '', 'Jméno: ' + payload.name, 'Telefon: ' + payload.phone, 'E-mail: ' + (payload.email || 'neuveden'), 'Převzetí: ' + (payload.address || 'neuvedeno'), '', paymentInfoText(payload, 'owner'), '', 'Objednávka:', plainItemsText(payload), '', 'Celkem: ' + Number(payload.total).toLocaleString('cs-CZ') + ' ' + (payload.currency || 'Kč'), payload.note ? 'Poznámka: ' + payload.note : null, '', 'Zdroj: ' + payload.source].filter(Boolean).join('\n');
}
function customerSubject(lang) { if (lang === 'en') return 'Order confirmation – Vinařství Devátý'; if (lang === 'de') return 'Bestellbestätigung – Vinařství Devátý'; return 'Potvrzení objednávky – Vinařství Devátý'; }
function customerEmailText(payload) {
  const lang = payload.language || 'cs';
  const texts = {
    cs: { hello:'Dobrý den', thanks:'děkujeme za Vaši objednávku z webu Vinařství Devátý.', info:'Objednávku jsme přijali a brzy se Vám ozveme kvůli potvrzení převzetí.', items:'Objednávka', pickup:'Převzetí', total:'Celkem', note:'Poznámka', bye:'S pozdravem\nVinařství Devátý' },
    en: { hello:'Hello', thanks:'thank you for your order from the Vinařství Devátý website.', info:'We have received your order and will contact you soon to confirm pickup.', items:'Order', pickup:'Pickup', total:'Total', note:'Note', bye:'Best regards\nVinařství Devátý' },
    de: { hello:'Guten Tag', thanks:'vielen Dank für Ihre Bestellung über die Website Vinařství Devátý.', info:'Wir haben Ihre Bestellung erhalten und melden uns bald zur Bestätigung der Abholung.', items:'Bestellung', pickup:'Abholung', total:'Gesamt', note:'Notiz', bye:'Mit freundlichen Grüßen\nVinařství Devátý' }
  }[lang] || null;
  const tx = texts || { hello:'Dobrý den', thanks:'děkujeme za Vaši objednávku.', info:'Brzy se ozveme.', items:'Objednávka', pickup:'Převzetí', total:'Celkem', note:'Poznámka', bye:'Vinařství Devátý' };
  return [tx.hello + ',', '', tx.thanks, tx.info, '', tx.items + ':', plainItemsText(payload), '', tx.pickup + ': ' + (payload.address || ''), tx.total + ': ' + Number(payload.total).toLocaleString('cs-CZ') + ' ' + (payload.currency || 'Kč'), payload.note ? tx.note + ': ' + payload.note : null, '', paymentInfoText(payload, 'customer'), '', tx.bye].filter(Boolean).join('\n');
}

function ensureEmailJsReady() {
  if (!window.emailjs) throw new Error('EmailJS knihovna není načtená.');
  if (!emailJsInitialized) {
    emailjs.init({ publicKey: SETTINGS.emailJs.publicKey, blockHeadless: true, limitRate: { id: 'vino-order-form', throttle: 10000 } });
    emailJsInitialized = true;
  }
}
async function sendEmailViaEmailJs(options) {
  const cfg = SETTINGS.emailJs;
  return emailjs.send(cfg.serviceId, cfg.templateId, {
    to_email: options.toEmail,
    reply_to: options.replyTo || cfg.ownerEmail,
    from_name: cfg.ownerName,
    subject: options.subject,
    message: options.message,
    customer_name: options.payload.name,
    customer_phone: options.payload.phone,
    customer_email: options.payload.email || '',
    pickup: options.payload.address || '',
    order_items: plainItemsText(options.payload),
    order_total: Number(options.payload.total).toLocaleString('cs-CZ') + ' ' + (options.payload.currency || 'Kč'),
    payment_method: paymentMethodLabel(options.payload.paymentMethod, options.payload.language),
    payment_account: options.payload.paymentAccount || '',
    payment_iban: options.payload.paymentIban || '',
    payment_variable_symbol: options.payload.paymentVariableSymbol || '',
    payment_qr_data: options.payload.paymentQrData || '',
    note: options.payload.note || '',
    language: options.payload.language || 'cs',
    source: options.payload.source || ''
  });
}
async function sendOrderToApi(payload) {
  ensureEmailJsReady();
  const cfg = SETTINGS.emailJs;
  await sendEmailViaEmailJs({ toEmail: cfg.ownerEmail, replyTo: payload.email || cfg.ownerEmail, subject: 'Nová objednávka vína – ' + payload.name + ' – ' + Number(payload.total).toLocaleString('cs-CZ') + ' ' + (payload.currency || 'Kč'), message: ownerEmailText(payload), payload: payload });
  if (payload.email) await sendEmailViaEmailJs({ toEmail: payload.email, replyTo: cfg.ownerEmail, subject: customerSubject(payload.language), message: customerEmailText(payload), payload: payload });
  return true;
}

function openCart() { if (el('cartOverlay')) el('cartOverlay').classList.add('open'); if (el('cartPanel')) el('cartPanel').classList.add('open'); }
function closeCart() { if (el('cartOverlay')) el('cartOverlay').classList.remove('open'); if (el('cartPanel')) el('cartPanel').classList.remove('open'); }
function openCheckout() { if (!cartCount()) { alert(t().cartEmptyAlert); return; } closeCart(); renderOrderSummary(); if (el('formScreen')) el('formScreen').classList.remove('hidden'); if (el('confirmScreen')) el('confirmScreen').classList.add('hidden'); if (el('modalOverlay')) el('modalOverlay').classList.add('open'); }
function closeModal() { if (el('modalOverlay')) el('modalOverlay').classList.remove('open'); }
function renderPaymentQr(payload) { const qr = el('qrcode'); if (!qr) return; qr.innerHTML = ''; if (payload.paymentMethod === 'qr' && payload.paymentQrData && window.QRCode) new QRCode(qr, { text: payload.paymentQrData, width: 220, height: 220, correctLevel: QRCode.CorrectLevel.M }); }
function refreshOrderConfirmation() {
  if (!lastOrderPayload) return;
  const pc = paymentCopyFor(lastOrderPayload.language || currentLanguage);
  const isQr = lastOrderPayload.paymentMethod === 'qr';
  const paymentHtml = isQr ? '<div style="margin:1rem 0;padding:1rem;border:2px solid #5c1a2e;border-radius:12px;background:#fff7e6;color:#3d0f1e"><strong>' + escapeHtml(paymentMethodLabel('qr', lastOrderPayload.language)) + '</strong><br>' + escapeHtml(pc.qrCustomer) + '<br><br><strong>' + escapeHtml(pc.account) + ':</strong> ' + escapeHtml(lastOrderPayload.paymentAccount) + '<br><strong>' + escapeHtml(pc.iban) + ':</strong> ' + escapeHtml(lastOrderPayload.paymentIban) + '<br><strong>' + escapeHtml(pc.vs) + ':</strong> ' + escapeHtml(lastOrderPayload.paymentVariableSymbol) + '<br><strong>Částka / Amount:</strong> ' + escapeHtml(Number(lastOrderPayload.total).toLocaleString('cs-CZ')) + ' ' + escapeHtml(lastOrderPayload.currency || 'Kč') + '</div>' : '<div style="margin:1rem 0;padding:1rem;border:1px solid rgba(200,169,110,.45);border-radius:12px;background:#fff;color:#3d0f1e"><strong>' + escapeHtml(paymentMethodLabel('cash', lastOrderPayload.language)) + '</strong><br>' + escapeHtml(pc.cashCustomer) + '</div>';
  const detail = lastOrderPayload.message || '';
  if (el('waDetail')) el('waDetail').innerHTML = paymentHtml + '<strong>Detail objednávky</strong><br><pre style="white-space:pre-wrap;text-align:left;font:inherit;margin:.8rem 0 0;color:inherit">' + escapeHtml(detail) + '</pre><div style="margin-top:1rem">Kontakt: ' + SETTINGS.whatsappDisplay + ' / ivo.devaty@email.cz</div>';
  renderPaymentQr(lastOrderPayload);
  if (el('whatsAppOrderBtn')) el('whatsAppOrderBtn').classList.add('hidden');
  if (el('finishOrderBtn')) el('finishOrderBtn').textContent = 'Hotovo – zavřít';
}
async function submitOrder(event) {
  event.preventDefault();
  const name = el('fieldName').value.trim();
  const phone = el('fieldPhone').value.trim();
  const email = el('fieldEmail').value.trim();
  const address = getSelectedPickup();
  const note = el('fieldNote').value.trim();
  if (!name || !phone) { alert(t().formMissing); return; }
  if (el('ageConfirmOrder') && !el('ageConfirmOrder').checked) { alert(t().ageAlert); return; }
  const submitBtn = el('checkoutForm').querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Odesílám objednávku…';
  const payload = buildOrderPayload(name, phone, email, address, note);
  try {
    await sendOrderToApi(payload);
    lastOrderPayload = payload;
    refreshOrderConfirmation();
    if (el('formScreen')) el('formScreen').classList.add('hidden');
    if (el('confirmScreen')) el('confirmScreen').classList.remove('hidden');
  } catch (error) {
    console.error(error);
    alert(error.message || 'Objednávku se nepodařilo odeslat.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}
function finishOrder() { cart = {}; lastOrderPayload = null; updateCart(); renderWines(); closeModal(); if (el('checkoutForm')) el('checkoutForm').reset(); }
function setupAgeGate() { const allowed = localStorage.getItem('wineAgeConfirmed') === 'yes'; if (!allowed && el('ageGate')) el('ageGate').classList.add('show'); if (el('confirmAgeBtn')) el('confirmAgeBtn').addEventListener('click', function(){ localStorage.setItem('wineAgeConfirmed', 'yes'); if (el('ageGate')) el('ageGate').classList.remove('show'); }); }
function bind() {
  window.addEventListener('scroll', function(){ if (el('mainHeader')) el('mainHeader').classList.toggle('scrolled', window.scrollY > 40); });
  if (el('openCartBtn')) el('openCartBtn').addEventListener('click', openCart);
  if (el('closeCartBtn')) el('closeCartBtn').addEventListener('click', closeCart);
  if (el('cartOverlay')) el('cartOverlay').addEventListener('click', closeCart);
  if (el('checkoutBtn')) el('checkoutBtn').addEventListener('click', openCheckout);
  if (el('backToCartBtn')) el('backToCartBtn').addEventListener('click', closeModal);
  if (el('finishOrderBtn')) el('finishOrderBtn').addEventListener('click', finishOrder);
  if (el('checkoutForm')) el('checkoutForm').addEventListener('submit', submitOrder);
  window.addEventListener('vino-language-change', function(event){ currentLanguage = (event.detail && event.detail.lang) || localStorage.getItem('vinoLanguage') || 'cs'; renderWines(); updateCart(); });
}
function startApp() { initStatic(); renderWines(); updateCart(); setupAgeGate(); bind(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startApp); else startApp();
