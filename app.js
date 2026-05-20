const SETTINGS = {
  whatsappDigits: '420724366369',
  whatsappDisplay: '724 366 369',
  hero: 'images/hero.jpg',
  // Sem vlož URL Google Apps Script Web Appu po nasazení.
  orderApiUrl: '',
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
const ORDER_COPY = {
  cs: {
    sending: 'Odesílám objednávku…',
    sentTitle: 'Objednávka byla odeslána',
    sentSubtitle: 'Děkujeme za objednávku. Potvrzení jsme poslali na e-mail, pokud byl vyplněn. Brzy se ozveme kvůli potvrzení převzetí.',
    sentNoEmail: 'Děkujeme za objednávku. Brzy se ozveme kvůli potvrzení převzetí.',
    error: 'Objednávku se nepodařilo odeslat. Zkuste to prosím znovu, případně nás kontaktujte telefonicky nebo přes WhatsApp.',
    apiMissing: 'Objednávkový formulář zatím není napojený na e-mail. Doplň prosím v app.js hodnotu SETTINGS.orderApiUrl.',
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
    apiMissing: 'The order form is not connected to e-mail yet. Please fill SETTINGS.orderApiUrl in app.js.',
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
    apiMissing: 'Das Bestellformular ist noch nicht mit E-Mail verbunden. Bitte SETTINGS.orderApiUrl in app.js ergänzen.',
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

function refreshOrderConfirmation() {
  if (!lastOrderPayload) return;
  const copy = orderCopy();
  const detail = lastOrderPayload.message || buildMessage(lastOrderPayload.name, lastOrderPayload.phone, lastOrderPayload.email, lastOrderPayload.address, lastOrderPayload.note);
  el('waDetail').innerHTML = `
    <strong>${copy.detailTitle}</strong><br>
    <pre style="white-space:pre-wrap;text-align:left;font:inherit;margin:.8rem 0 0;color:inherit">${detail.replace(/[&<>]/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[ch]))}</pre>
    <div style="margin-top:1rem">${copy.contactFallback}: ${SETTINGS.whatsappDisplay}</div>
  `;
  const qr = el('qrcode');
  if (qr) qr.innerHTML = '';
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
  return {
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
    source: window.location.href,
    createdAt: new Date().toISOString()
  };
}

async function sendOrderToApi(payload) {
  if (!SETTINGS.orderApiUrl) throw new Error(orderCopy().apiMissing);
  await fetch(SETTINGS.orderApiUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });
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
