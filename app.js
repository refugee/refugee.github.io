const SETTINGS = {
  whatsappDigits: '420724366369',
  whatsappDisplay: '724 366 369',
  hero: 'images/hero.jpg',
  wines: [
    {
      id: 1,
      name: 'Ryzlink rýnský 2024',
      type: 'Bílé víno – suché',
      vintage: 'Ročník 2024',
      desc: 'Svěží minerální projev, citrusy, zelené jablko a dlouhá dochuť.',
      price: 249,
      award: 'Doporučené víno vinařství',
      img: 'images/wine-1.jpg'
    },
    {
      id: 2,
      name: 'Sauvignon 2024',
      type: 'Bílé víno – suché',
      vintage: 'Ročník 2024',
      desc: 'Aromatické víno s tóny angreštu, bylin a černého rybízu.',
      price: 229,
      award: '',
      img: 'images/wine-2.jpg'
    },
    {
      id: 3,
      name: 'Zweigeltrebe 2023',
      type: 'Červené víno – suché',
      vintage: 'Ročník 2023',
      desc: 'Sametové červené s tóny višní, pecek a lehkým kořenitým závěrem.',
      price: 259,
      award: 'Oblíbené červené',
      img: 'images/wine-3.jpg'
    },
    {
      id: 4,
      name: 'Rosé 2024',
      type: 'Rosé – polosuché',
      vintage: 'Ročník 2024',
      desc: 'Lehké a svěží rosé s jemnými tóny lesního ovoce a dlouhým letním dozvukem.',
      price: 199,
      award: '',
      img: 'images/wine-4.jpg'
    },
    {
      id: 5,
      name: 'Pálava 2024',
      type: 'Bílé víno – polosuché',
      vintage: 'Ročník 2024',
      desc: 'Voňavé víno s tóny růží, citrusů a exotického ovoce, ideální pro první testy webu.',
      price: 239,
      award: 'Novinka',
      img: 'images/wine-5.jpg'
    },
    {
      id: 6,
      name: 'Cuvée pod horou 2023',
      type: 'Červené víno – cuvée',
      vintage: 'Ročník 2023',
      desc: 'Ukázkové cuvée s kulatějším tělem a jemným kořenitým závěrem.',
      price: 269,
      award: 'Speciál vinařství',
      img: 'images/wine-6.jpg'
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

function initStatic() {
  el('heroBg').style.backgroundImage = `url('${SETTINGS.hero}')`;
  setTimeout(() => el('heroBg').classList.add('loaded'), 100);
}

function renderWines() {
  const copy = t();
  el('winesGrid').innerHTML = SETTINGS.wines.map((w) => `
    <article class="wine-card">
      <div class="wine-image">
        <img src="${w.img}" alt="${w.name}">
        <span class="wine-type">${w.type}</span>
      </div>
      <div class="wine-body">
        <div class="wine-name">${w.name}</div>
        <div class="wine-vintage">${w.vintage}</div>
        <div class="wine-desc">${w.desc}</div>
        ${w.award ? `<div class="wine-tag">${w.award}</div>` : ''}
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
        <div class="cart-item-thumb"><img src="${wine.img}" alt="${wine.name}"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${wine.name}</div>
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
    row.innerHTML = `<span>${wine.name} × ${qty}</span><strong>${money(subtotal)}</strong>`;
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
    return `- ${wine.name} × ${qty} ks = ${money(wine.price * qty)}`;
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
  const copy = t();
  const waLink = `https://wa.me/${SETTINGS.whatsappDigits}?text=${encodeURIComponent(buildMessage(lastOrderPayload.name, lastOrderPayload.phone, lastOrderPayload.email, lastOrderPayload.address, lastOrderPayload.note))}`;
  lastOrderPayload.link = waLink;
  el('whatsAppOrderBtn').href = waLink;
  el('waDetail').innerHTML = `
    ${copy.waNumber}: ${SETTINGS.whatsappDisplay}<br>
    ${copy.orderTotal}: ${money(cartTotal())}<br>
    ${copy.waSummary}
  `;
  const qr = el('qrcode');
  qr.innerHTML = '';
  new QRCode(qr, {
    text: waLink,
    width: 200,
    height: 200,
    colorDark: '#3d0f1e',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M
  });
}

function submitOrder(event) {
  event.preventDefault();
  const name = el('fieldName').value.trim();
  const phone = el('fieldPhone').value.trim();
  const email = el('fieldEmail').value.trim();
  const address = el('fieldAddress').value.trim();
  const note = el('fieldNote').value.trim();

  if (!name || !phone) {
    alert(t().formMissing);
    return;
  }

  if (!el('ageConfirmOrder').checked) {
    alert(t().ageAlert);
    return;
  }

  lastOrderPayload = { name, phone, email, address, note };
  refreshOrderConfirmation();
  el('formScreen').classList.add('hidden');
  el('confirmScreen').classList.remove('hidden');
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
