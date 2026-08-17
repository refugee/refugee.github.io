// BUILD: whatsapp-20260817-5 - bottle + Baggy cart
const SETTINGS = {
  whatsappDigits: '420724366369',
  whatsappDisplay: '724 366 369',
  hero: 'images/hero.jpg',
  payment: {
    accountNumber: '78-6041520237/0100',
    iban: 'CZ0301000000786041520237',
    currency: 'CZK'
  },
  wines: [
    { id:1, name:'Rulandské bílé 2025', type:'Bílé víno – suché', vintage:'Ročník 2025', desc:'Jemné bílé víno s čistou ovocností, lehkým květinovým nádechem a příjemně kulatým závěrem.', price:145, award:'Tip vinaře', img:'images/wine-1.jpg', i18n:{ en:{name:'Pinot Blanc 2025',type:'White wine – dry',vintage:'Vintage 2025',desc:'A delicate white wine with clean fruitiness, a light floral touch and a pleasantly rounded finish.',award:'Winemaker’s tip'}, de:{name:'Weißburgunder 2025',type:'Weißwein – trocken',vintage:'Jahrgang 2025',desc:'Ein feiner Weißwein mit klarer Fruchtigkeit, leicht floraler Note und angenehm rundem Abgang.',award:'Tipp des Winzers'} } },
    { id:2, name:'Tramín červený 2025', type:'Bílé víno – polosuché', vintage:'Ročník 2025', desc:'Aromatické víno s tóny růží, koření a zralého ovoce, s jemnou sladší linkou v dochuti.', price:149, award:'Aromatická odrůda', img:'images/wine-2.jpg', i18n:{ en:{name:'Gewürztraminer 2025',type:'White wine – semi-dry',vintage:'Vintage 2025',desc:'An aromatic wine with notes of rose petals, spice and ripe fruit, finished with a gentle touch of sweetness.',award:'Aromatic variety'}, de:{name:'Gewürztraminer 2025',type:'Weißwein – halbtrocken',vintage:'Jahrgang 2025',desc:'Ein aromatischer Wein mit Noten von Rosen, Gewürzen und reifem Obst, mit einer dezent süßlichen Linie im Abgang.',award:'Aromatische Sorte'} } },
    { id:3, name:'Veltlínské zelené 2025', type:'Bílé víno – suché', vintage:'Ročník 2025', desc:'Svěží a dobře pitelné víno s tóny zeleného jablka, citrusů a lehce kořenitým dozvukem.', price:147, award:'Svěží volba', img:'images/wine-3.jpg', i18n:{ en:{name:'Grüner Veltliner 2025',type:'White wine – dry',vintage:'Vintage 2025',desc:'A fresh and very drinkable wine with notes of green apple, citrus and a lightly spicy finish.',award:'Fresh choice'}, de:{name:'Grüner Veltliner 2025',type:'Weißwein – trocken',vintage:'Jahrgang 2025',desc:'Ein frischer, sehr zugänglicher Wein mit Noten von grünem Apfel, Zitrusfrüchten und leicht würzigem Nachhall.',award:'Frische Wahl'} } },
    { id:4, name:'Ryzlink vlašský 2025', type:'Bílé víno – suché', vintage:'Ročník 2025', desc:'Lehčí víno s jemnou kyselinkou, citrusovým projevem a čistým minerálním závěrem.', price:145, award:'', img:'images/wine-4.jpg', i18n:{ en:{name:'Welschriesling 2025',type:'White wine – dry',vintage:'Vintage 2025',desc:'A lighter wine with gentle acidity, citrus expression and a clean mineral finish.',award:''}, de:{name:'Welschriesling 2025',type:'Weißwein – trocken',vintage:'Jahrgang 2025',desc:'Ein leichterer Wein mit feiner Säure, zitrischem Ausdruck und klarem mineralischem Abgang.',award:''} } },
    { id:5, name:'Rosé 2025', type:'Rosé – polosuché', vintage:'Ročník 2025', desc:'Lehké růžové víno s tóny jahod a drobného lesního ovoce, ideální na pohodové pití.', price:150, award:'Lehké rosé', img:'images/wine-5.jpg', i18n:{ en:{name:'Rosé 2025',type:'Rosé – semi-dry',vintage:'Vintage 2025',desc:'A light rosé with notes of strawberries and small forest berries, ideal for relaxed drinking.',award:'Light rosé'}, de:{name:'Rosé 2025',type:'Rosé – halbtrocken',vintage:'Jahrgang 2025',desc:'Ein leichter Rosé mit Noten von Erdbeeren und kleinen Waldbeeren, ideal für unkomplizierten Genuss.',award:'Leichter Rosé'} } }
  ]
};

const UI = {
  cs:{add:'Přidat',emptyCart:'Košík je prázdný.',cartEmptyAlert:'Košík je prázdný.',formMissing:'Vyplň prosím jméno a telefon.',ageAlert:'Potvrď prosím věk 18+.',currency:'Kč',perBottle:'/ 0,75 l',perPiece:'/ ks',orderTotal:'Celkem',inCart:function(q){return 'V košíku ('+q+')';},message:{title:'Nová objednávka z webu',name:'Jméno',phone:'Telefon',email:'E-mail',emailMissing:'neuveden',address:'Adresa / převzetí',pickup:'osobní odběr',order:'Objednávka',total:'Celkem',note:'Poznámka'}},
  en:{add:'Add',emptyCart:'Your cart is empty.',cartEmptyAlert:'Your cart is empty.',formMissing:'Please fill in your name and phone number.',ageAlert:'Please confirm that you are 18+.',currency:'CZK',perBottle:'/ 0.75 l',perPiece:'/ pc',orderTotal:'Total',inCart:function(q){return 'In cart ('+q+')';},message:{title:'New website order',name:'Name',phone:'Phone',email:'E-mail',emailMissing:'not provided',address:'Address / pickup',pickup:'personal pickup',order:'Order',total:'Total',note:'Note'}},
  de:{add:'Hinzufügen',emptyCart:'Ihr Warenkorb ist leer.',cartEmptyAlert:'Ihr Warenkorb ist leer.',formMissing:'Bitte geben Sie Name und Telefon ein.',ageAlert:'Bitte bestätigen Sie, dass Sie 18+ sind.',currency:'CZK',perBottle:'/ 0,75 l',perPiece:'/ Stk',orderTotal:'Gesamt',inCart:function(q){return 'Im Warenkorb ('+q+')';},message:{title:'Neue Web-Bestellung',name:'Name',phone:'Telefon',email:'E-Mail',emailMissing:'nicht angegeben',address:'Adresse / Abholung',pickup:'persönliche Abholung',order:'Bestellung',total:'Gesamt',note:'Notiz'}}
};

const PAYMENT_COPY = {
  cs:{cash:'Platba při předání',qr:'QR platba předem na bankovní účet',cashCustomer:'Platba proběhne při osobním předání.',qrCustomer:'Zvolili jste QR platbu předem. Prosím uhraďte částku pomocí QR kódu nebo bankovním převodem.',cashOwner:'PLATBA: PŘI PŘEDÁNÍ',qrOwner:'PLATBA: QR KÓD / PŘEVOD NA ÚČET – ZKONTROLOVAT PŘIPSÁNÍ PLATBY',account:'Číslo účtu',iban:'IBAN',vs:'Variabilní symbol',contact:'Kontakt na vinaře'},
  en:{cash:'Payment on pickup',qr:'QR payment in advance to bank account',cashCustomer:'Payment will be made on personal pickup.',qrCustomer:'You selected QR payment in advance. Please pay using the QR code or by bank transfer.',cashOwner:'PAYMENT: ON PICKUP',qrOwner:'PAYMENT: QR CODE / BANK TRANSFER – CHECK PAYMENT RECEIPT',account:'Bank account',iban:'IBAN',vs:'Variable symbol',contact:'Winemaker contact'},
  de:{cash:'Zahlung bei Abholung',qr:'QR-Zahlung im Voraus auf das Bankkonto',cashCustomer:'Die Zahlung erfolgt bei persönlicher Abholung.',qrCustomer:'Sie haben QR-Zahlung im Voraus gewählt. Bitte bezahlen Sie per QR-Code oder Banküberweisung.',cashOwner:'ZAHLUNG: BEI ABHOLUNG',qrOwner:'ZAHLUNG: QR-CODE / BANKÜBERWEISUNG – ZAHLUNGSEINGANG PRÜFEN',account:'Bankkonto',iban:'IBAN',vs:'Variables Symbol',contact:'Kontakt zum Winzer'}
};

let cart = {};
let currentLanguage = localStorage.getItem('vinoLanguage') || window.vinoLocale || 'cs';
let lastOrderPayload = null;
function el(id){ return document.getElementById(id); }
function t(){ return UI[currentLanguage] || UI.cs; }
function paymentCopyFor(lang){ return PAYMENT_COPY[lang || currentLanguage] || PAYMENT_COPY.cs; }
function paymentMethodLabel(method,lang){ return paymentCopyFor(lang || currentLanguage)[method === 'qr' ? 'qr' : 'cash']; }
function money(value){ return Number(value).toLocaleString('cs-CZ') + ' ' + t().currency; }
function esc(v){ return String(v == null ? '' : v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function wineText(wine,field){ if(!wine) return ''; if(wine.i18n && wine.i18n[currentLanguage] && wine.i18n[currentLanguage][field] !== undefined) return wine.i18n[currentLanguage][field]; return wine[field] || ''; }
function selectedPickup(){ const s=document.querySelector('input[name="pickupPlace"]:checked'); const h=el('fieldAddress'); return s ? s.value : (h ? h.value : ''); }
function selectedPayment(){ const s=document.querySelector('input[name="paymentMethod"]:checked'); return s ? s.value : 'cash'; }
function orderRef(){ return String(Date.now()).slice(-10); }
function spaydValue(v){ return encodeURIComponent(String(v || '').replace(/\*/g,' ')).replace(/%20/g,'+').toUpperCase(); }
function buildSpayd(payload){ const vs=payload.paymentVariableSymbol || payload.orderReference || orderRef(); return 'SPD*1.0*ACC:'+SETTINGS.payment.iban+'*AM:'+Number(payload.total||0).toFixed(2)+'*CC:CZK*X-VS:'+vs+'*MSG:'+spaydValue('OBJEDNAVKA '+vs+' VINARSTVI DEVATY'); }
function initStatic(){ const hero=el('heroBg'); if(hero){ hero.style.backgroundImage="url('"+SETTINGS.hero+"')"; setTimeout(function(){hero.classList.add('loaded');},100); } }
function baggyPrice(wine){ return Math.round(((Number(wine.price) * 2) / 0.75) / 5) * 5; }
function variantCopy(kind){
  const copy={
    cs:{bottle:'Láhev 0,75 l',baggy:'Baggy 2 l',addBottle:'Přidat láhev',addBaggy:'Přidat Baggy'},
    en:{bottle:'Bottle 0.75 L',baggy:'Baggy 2 L',addBottle:'Add bottle',addBaggy:'Add Baggy'},
    de:{bottle:'Flasche 0,75 l',baggy:'Baggy 2 l',addBottle:'Flasche hinzufügen',addBaggy:'Baggy hinzufügen'}
  };
  return (copy[currentLanguage] || copy.cs)[kind];
}
function cartKey(id,kind){ return String(id)+'-'+kind; }
function renderWines(){
  const grid=el('winesGrid'); if(!grid) return;
  grid.innerHTML=SETTINGS.wines.map(function(w){
    const award=wineText(w,'award');
    const bottleQty=cart[cartKey(w.id,'bottle')] || 0;
    const baggyQty=cart[cartKey(w.id,'baggy')] || 0;
    return '<article class="wine-card"><div class="wine-image"><img src="'+esc(w.img)+'" alt="'+esc(wineText(w,'name'))+'"><span class="wine-type">'+esc(wineText(w,'type'))+'</span></div><div class="wine-body"><div class="wine-name">'+esc(wineText(w,'name'))+'</div><div class="wine-vintage">'+esc(wineText(w,'vintage'))+'</div><div class="wine-desc">'+esc(wineText(w,'desc'))+'</div>'+(award?'<div class="wine-tag">'+esc(award)+'</div>':'')+'</div><div class="wine-footer wine-footer-variants"><div class="package-choice"><div class="wine-price">'+money(w.price)+' <span>/ 0,75 l</span></div><button class="btn primary" type="button" onclick="addToCart('+w.id+',\'bottle\')">'+(bottleQty?variantCopy('bottle')+' ('+bottleQty+')':variantCopy('addBottle'))+'</button></div><div class="package-choice"><div class="wine-price">'+money(baggyPrice(w))+' <span>/ 2 l</span></div><button class="btn secondary" type="button" onclick="addToCart('+w.id+',\'baggy\')">'+(baggyQty?variantCopy('baggy')+' ('+baggyQty+')':variantCopy('addBaggy'))+'</button></div></div></article>';
  }).join('');
}
function addToCart(id,kind){ const key=cartKey(id,kind||'bottle'); cart[key]=(cart[key]||0)+1; updateCart(); renderWines(); }
function changeQty(id,kind,delta){ const key=cartKey(id,kind); cart[key]=(cart[key]||0)+delta; if(cart[key]<=0) delete cart[key]; updateCart(); renderWines(); }
function removeFromCart(id,kind){ delete cart[cartKey(id,kind)]; updateCart(); renderWines(); }
window.addToCart=addToCart; window.changeQty=changeQty; window.removeFromCart=removeFromCart;
function cartEntries(){
  return Object.keys(cart).map(function(key){
    const parts=key.split('-'); const id=Number(parts[0]); const kind=parts[1] || 'bottle';
    const wine=SETTINGS.wines.find(function(x){return x.id===id;}); if(!wine) return null;
    const quantity=cart[key]; const unitPrice=kind==='baggy'?baggyPrice(wine):wine.price;
    return {key:key,id:id,kind:kind,wine:wine,quantity:quantity,unitPrice:unitPrice,subtotal:unitPrice*quantity};
  }).filter(Boolean);
}
function cartCount(){ return cartEntries().reduce(function(a,x){return a+x.quantity;},0); }
function cartTotal(){ return cartEntries().reduce(function(a,x){return a+x.subtotal;},0); }
function updateCart(){
  if(el('cartCount')) el('cartCount').textContent=cartCount();
  if(el('cartTotal')) el('cartTotal').textContent=money(cartTotal());
  const wrap=el('cartItems');
  if(wrap){
    wrap.innerHTML='';
    if(!cartCount()) wrap.innerHTML='<div id="cartEmpty" class="cart-empty">'+t().emptyCart+'</div>';
    else cartEntries().forEach(function(item){
      const div=document.createElement('div'); div.className='cart-item';
      div.innerHTML='<div class="cart-item-thumb"><img src="'+esc(item.wine.img)+'" alt="'+esc(wineText(item.wine,'name'))+'"></div><div class="cart-item-info"><div class="cart-item-name">'+esc(wineText(item.wine,'name'))+'</div><div class="cart-item-price">'+esc(variantCopy(item.kind))+' · '+money(item.unitPrice)+'</div></div><div class="qty"><button class="qty-btn" type="button" onclick="changeQty('+item.id+',\''+item.kind+'\',-1)">−</button><strong>'+item.quantity+'</strong><button class="qty-btn" type="button" onclick="changeQty('+item.id+',\''+item.kind+'\',1)">+</button></div><button class="remove-btn" type="button" onclick="removeFromCart('+item.id+',\''+item.kind+'\')">×</button>';
      wrap.appendChild(div);
    });
  }
  if(el('formScreen') && !el('formScreen').classList.contains('hidden')) renderOrderSummary();
}
function renderOrderSummary(){
  const lines=el('orderLines'); if(!lines) return; lines.innerHTML='';
  cartEntries().forEach(function(item){ const row=document.createElement('div'); row.className='order-line'; row.innerHTML='<span>'+esc(wineText(item.wine,'name'))+' – '+esc(variantCopy(item.kind))+' × '+item.quantity+'</span><strong>'+money(item.subtotal)+'</strong>'; lines.appendChild(row); });
  const total=document.createElement('div'); total.className='order-line total'; total.innerHTML='<span>'+t().orderTotal+'</span><strong>'+money(cartTotal())+'</strong>'; lines.appendChild(total);
}
function buildMessage(name,phone,email,address,note){
  const c=t().message;
  const items=cartEntries().map(function(item){ return '- '+wineText(item.wine,'name')+' – '+variantCopy(item.kind)+' × '+item.quantity+' ks = '+money(item.subtotal); }).join('\n');
  return [c.title,'',c.name+': '+name,c.phone+': '+phone,c.email+': '+(email||c.emailMissing),c.address+': '+(address||c.pickup),'',c.order+':',items,'',c.total+': '+money(cartTotal()),note?c.note+': '+note:null].filter(Boolean).join('\n');
}
function buildPayload(name,phone,email,address,note){
  const items=cartEntries().map(function(item){ return {id:item.id,name:wineText(item.wine,'name'),originalName:item.wine.name,package:item.kind,packageLabel:variantCopy(item.kind),quantity:item.quantity,unitPrice:item.unitPrice,subtotal:item.subtotal}; });
  const pm=selectedPayment(); const ref=orderRef();
  const payload={language:currentLanguage,name:name,phone:phone,email:email,address:address,note:note,items:items,total:cartTotal(),currency:t().currency,message:buildMessage(name,phone,email,address,note),paymentMethod:pm,paymentLabel:paymentMethodLabel(pm,currentLanguage),paymentAccount:SETTINGS.payment.accountNumber,paymentIban:SETTINGS.payment.iban,paymentVariableSymbol:ref,orderReference:ref,source:window.location.href,createdAt:new Date().toISOString()};
  payload.paymentQrData=pm==='qr'?buildSpayd(payload):''; return payload;
}
function openCart(){ if(el('cartOverlay')) el('cartOverlay').classList.add('open'); if(el('cartPanel')) el('cartPanel').classList.add('open'); }
function closeCart(){ if(el('cartOverlay')) el('cartOverlay').classList.remove('open'); if(el('cartPanel')) el('cartPanel').classList.remove('open'); }
function openCheckout(){ if(!cartCount()){ alert(t().cartEmptyAlert); return; } closeCart(); renderOrderSummary(); if(el('formScreen')) el('formScreen').classList.remove('hidden'); if(el('confirmScreen')) el('confirmScreen').classList.add('hidden'); if(el('modalOverlay')) el('modalOverlay').classList.add('open'); }
function closeModal(){ if(el('modalOverlay')) el('modalOverlay').classList.remove('open'); }
function renderPaymentQr(payload){ const qr=el('qrcode'); if(!qr) return; qr.innerHTML=''; if(payload.paymentMethod==='qr' && payload.paymentQrData && window.QRCode){ new QRCode(qr,{text:payload.paymentQrData,width:220,height:220,correctLevel:QRCode.CorrectLevel.M}); } }
function refreshConfirm(){
  if(!lastOrderPayload) return; const pc=paymentCopyFor(lastOrderPayload.language); const qr=lastOrderPayload.paymentMethod==='qr';
  const paymentHtml=qr?'<div style="margin:1rem 0;padding:1rem;border:2px solid #5c1a2e;border-radius:12px;background:#fff7e6;color:#3d0f1e"><strong>'+esc(paymentMethodLabel('qr',lastOrderPayload.language))+'</strong><br>'+esc(pc.qrCustomer)+'<br><br><strong>'+esc(pc.account)+':</strong> '+esc(lastOrderPayload.paymentAccount)+'<br><strong>'+esc(pc.iban)+':</strong> '+esc(lastOrderPayload.paymentIban)+'<br><strong>'+esc(pc.vs)+':</strong> '+esc(lastOrderPayload.paymentVariableSymbol)+'<br><strong>Částka / Amount:</strong> '+esc(Number(lastOrderPayload.total).toLocaleString('cs-CZ'))+' '+esc(lastOrderPayload.currency||'Kč')+'</div>':'<div style="margin:1rem 0;padding:1rem;border:1px solid rgba(200,169,110,.45);border-radius:12px;background:#fff;color:#3d0f1e"><strong>'+esc(paymentMethodLabel('cash',lastOrderPayload.language))+'</strong><br>'+esc(pc.cashCustomer)+'</div>';
  if(el('waDetail')) el('waDetail').innerHTML=paymentHtml+'<strong>Detail objednávky</strong><br><pre style="white-space:pre-wrap;text-align:left;font:inherit;margin:.8rem 0 0;color:inherit">'+esc(lastOrderPayload.message)+'</pre>';
  renderPaymentQr(lastOrderPayload);
  if(el('whatsAppOrderBtn')){ const whatsappUrl='https://wa.me/'+SETTINGS.whatsappDigits+'?text='+encodeURIComponent(lastOrderPayload.message); el('whatsAppOrderBtn').classList.remove('hidden'); el('whatsAppOrderBtn').href=whatsappUrl; }
}
async function submitOrder(event){
  event.preventDefault(); const name=el('fieldName').value.trim(); const phone=el('fieldPhone').value.trim(); const email=el('fieldEmail').value.trim(); const address=selectedPickup(); const note=el('fieldNote').value.trim();
  if(!name || !phone){ alert(t().formMissing); return; } if(el('ageConfirmOrder') && !el('ageConfirmOrder').checked){ alert(t().ageAlert); return; }
  const btn=el('checkoutForm').querySelector('button[type="submit"]'); const old=btn.textContent; btn.disabled=true; btn.textContent=currentLanguage==='de'?'WhatsApp wird geöffnet…':(currentLanguage==='en'?'Opening WhatsApp…':'Otevírám WhatsApp…');
  const payload=buildPayload(name,phone,email,address,note);
  try{ const whatsappUrl='https://wa.me/'+SETTINGS.whatsappDigits+'?text='+encodeURIComponent(payload.message); lastOrderPayload=payload; refreshConfirm(); if(el('formScreen')) el('formScreen').classList.add('hidden'); if(el('confirmScreen')) el('confirmScreen').classList.remove('hidden'); window.location.href=whatsappUrl; }
  catch(e){ console.error(e); alert(e.message || 'WhatsApp se nepodařilo otevřít.'); }
  finally{ btn.disabled=false; btn.textContent=old; }
}
function finishOrder(){ cart={}; lastOrderPayload=null; updateCart(); renderWines(); closeModal(); if(el('checkoutForm')) el('checkoutForm').reset(); }
function setupAge(){ if(localStorage.getItem('wineAgeConfirmed')!=='yes' && el('ageGate')) el('ageGate').classList.add('show'); if(el('confirmAgeBtn')) el('confirmAgeBtn').addEventListener('click',function(){ localStorage.setItem('wineAgeConfirmed','yes'); if(el('ageGate')) el('ageGate').classList.remove('show'); }); }
function bind(){ window.addEventListener('scroll',function(){ if(el('mainHeader')) el('mainHeader').classList.toggle('scrolled',window.scrollY>40); }); if(el('openCartBtn')) el('openCartBtn').addEventListener('click',openCart); if(el('closeCartBtn')) el('closeCartBtn').addEventListener('click',closeCart); if(el('cartOverlay')) el('cartOverlay').addEventListener('click',closeCart); if(el('checkoutBtn')) el('checkoutBtn').addEventListener('click',openCheckout); if(el('backToCartBtn')) el('backToCartBtn').addEventListener('click',closeModal); if(el('finishOrderBtn')) el('finishOrderBtn').addEventListener('click',finishOrder); if(el('checkoutForm')) el('checkoutForm').addEventListener('submit',submitOrder); window.addEventListener('vino-language-change',function(e){ currentLanguage=(e.detail&&e.detail.lang)||localStorage.getItem('vinoLanguage')||'cs'; renderWines(); updateCart(); }); }
function start(){ initStatic(); renderWines(); updateCart(); setupAge(); bind(); }
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
