/* ===========================
   Olavo Scale Wheels – app.js
   =========================== */

/* ======= CONFIG GERAL ======= */
const WHATSAPP_NUMBER = "351913624727"; // PT (DDI 351) + número, apenas dígitos
const COST_AZUL = 2.50;
const COST_REGISTRADO = 4.50;
const COST_INTERNACIONAL = 7.50;

/* ======= AUTOPREENCHIMENTO A PARTIR DO ID (MMM.CCC.TT) ======= */
const COLOR_MAP = { "001": "Cromado", "002": "Dourado", "003": "Preto", "020": "Azul" };
const MODEL_MAP = { "001": "Roda 001", "011": "Roda 011", "012": "Roda 012", "031": "Roda 031", "050": "Roda 050", "060": "Roda 060" };
// CORRETO para sua estrutura: images/MMM/CCC/TTmm/0001.jpg
const imagePath = (mmm, ccc, tt) => `./images/${mmm}/${ccc}/${encodeURIComponent(tt)}mm/0001.jpg`;

/* ======= (NOVO) SUPORTE A PREÇO NO PRÓPRIO ID ======= */
/* Permite id com preço: "031.001.11|19.90" ou "031.001.11|19,90" */
function splitIdAndPrice(idRaw) {
  const [idBase, precoStr] = String(idRaw).split("|").map(s => s?.trim());
  if (!precoStr) return { idBase, preco: null };
  const n = Number(precoStr.replace(",", "."));
  return { idBase, preco: isNaN(n) ? null : n };
}

function parseArticleId(idRaw) {
  const { idBase } = splitIdAndPrice(idRaw);
  const parts = String(idBase).trim().split(".");
  if (parts.length < 3) { return { mmm: idBase, ccc: "", tt: "" }; }
  const [mmm, ccc, ...rest] = parts; // tamanho pode conter ponto ou vírgula
  const tt = rest.join(".");
  return { mmm, ccc, tt };
}

function formatEUR(v) {
  if (v == null) return "—";
  try {
    return v.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });
  } catch {
    return `€${String(v.toFixed ? v.toFixed(2) : v).replace('.', ',')}`;
  }
}

function buildProduct(base) {
  const { idBase, preco } = splitIdAndPrice(base.id);
  const { mmm, ccc, tt } = parseArticleId(base.id);
  const nomeModelo = MODEL_MAP[mmm] || `Roda ${mmm}`;
  const nomeCor = COLOR_MAP[ccc] || `Cor ${ccc}`;
  return {
    id: idBase,                 // mantém ID puro para o resto do app
    codigo: idBase,             // mostrado/whatsapp
    modelo: base.modelo || `${nomeModelo} ${nomeCor} ${tt}`,
    estoque: Number(base.estoque) || 0,
    img: base.img || imagePath(mmm, ccc, tt),
    preco                       // número (ou null)
  };
}

/* ======= DADOS (pode editar) ======= */
const PRODUCTS_RAW = [
  { id: "001.001.11|3.50", estoque: 2 },
  { id: "002.001.11|3.50", estoque: 6 },
  { id: "003.001.11|3.50", estoque: 3 },
  { id: "004.001.11|3.50", estoque: 5 },
  { id: "001.001.17", estoque: 12 },
  { id: "001.003.18", estoque: 0 },
  { id: "011.011.17", estoque: 7 },
  { id: "012.012.18", estoque: 2 },
  { id: "050.001.19", estoque: 10 },
  { id: "060.001.20", estoque: 9 },

  /* +20 artigos para testar a paginação */
  { id: "031.001.10|18.90", estoque: 4 },
  { id: "031.002.10|18.90", estoque: 5 },
  { id: "031.003.11|19.90", estoque: 6 },
  { id: "031.020.11|20.90", estoque: 3 },
  { id: "001.002.17|16.00", estoque: 8 },
  { id: "001.020.17|16.00", estoque: 6 },
  { id: "011.001.18|17.00", estoque: 7 },
  { id: "011.003.18|17.00", estoque: 2 },
  { id: "012.001.17|17.50", estoque: 5 },
  { id: "012.003.17|17.50", estoque: 5 },
  { id: "050.003.19|22.00", estoque: 4 },
  { id: "050.020.19|22.00", estoque: 3 },
  { id: "060.003.20|23.00", estoque: 5 },
  { id: "060.020.20|23.00", estoque: 4 },
  { id: "001.001.12,5|15.50", estoque: 9 },
  { id: "001.003.12,5|15.50", estoque: 2 },
  { id: "031.001.12,5|21.50", estoque: 4 },
  { id: "011.020.17|17.00", estoque: 3 },
  { id: "012.020.18|18.50", estoque: 2 },
  { id: "060.001.21|24.00", estoque: 3 }
];
const PRODUCTS = PRODUCTS_RAW.map(buildProduct);

// Top 10 (mantido)
const TOP10_IDS = ["031.001.11", "031.002.11", "031.003.10", "031.020.12,5", "001.001.17", "011.011.17", "050.001.19", "060.001.20", "001.003.18", "012.012.18"];

/* ======= ESTADO CARRINHO/PAGINAÇÃO ======= */
const state = {
  cart: JSON.parse(localStorage.getItem("osw_cart") || "[]"),
  get totalItems() { return this.cart.reduce((s, it) => s + it.qty, 0); },
  shipping: { method: null },
  query: "",
  page: 1,
  pageSize: 12
};

function saveCart() {
  localStorage.setItem("osw_cart", JSON.stringify(state.cart));
  updateCartBadge();
  renderCart();
  updateTotals();
}

/* ======= HELPERS ======= */
const byId = (id) => document.getElementById(id);

/* =========================
   CARROSSEL TOP 10 (header)
   ========================= */
function createSlide(p) {
  const slide = document.createElement("article");
  slide.className = "relative min-w-[240px] max-w-[240px] snap-start bg-white/5 border border-white/10 rounded-2xl overflow-hidden";
  slide.innerHTML = `
    <div class="aspect-[4/3] overflow-hidden bg-black/20">
      <img src="${p.img}" alt="${p.modelo}" class="w-full h-full object-cover hover:scale-105 transition-transform" loading="lazy">
    </div>
    <div class="p-3 space-y-1">
      <div class="text-xs text-white/60">Código: <span class="text-white">${p.codigo}</span></div>
      <h3 class="font-semibold leading-tight">${p.modelo}</h3>
      <div class="text-xs ${p.estoque ? 'text-green-400' : 'text-red-400'}">${p.estoque ? p.estoque + ' unid. em estoque' : 'Esgotado'}</div>
    </div>
    ${p.preco != null ? `
      <div class="absolute bottom-2 right-2 bg-yellow-400 text-black text-[11px] font-semibold px-2 py-1 rounded-md shadow">
        ${formatEUR(p.preco)}
      </div>` : ``}
  `;
  return slide;
}

function renderCarousel() {
  const track = byId("carouselTrack");
  if (!track) return;
  const top = TOP10_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  track.innerHTML = "";
  top.forEach(p => track.appendChild(createSlide(p)));
}

function scrollByCards(dir = 1) {
  const track = byId("carouselTrack");
  if (!track) return;
  const cardWidth = 240 + 16;
  track.scrollBy({ left: dir * cardWidth * 2, behavior: 'smooth' });
}

/* ==============
   CATÁLOGO + UI
   ============== */
function createCard(p) {
  const card = document.createElement("article");
  card.className = "group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/60 transition";
  card.innerHTML = `
    <div class="aspect-[4/3] overflow-hidden bg-black/20">
      <img src="${p.img}" alt="${p.modelo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy">
    </div>
    <div class="p-4 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold leading-tight">${p.modelo}</h3>
        <span class="text-xs text-white/60">${p.codigo}</span>
      </div>
      <div class="text-sm ${p.estoque ? 'text-green-400' : 'text-red-400'}">${p.estoque ? p.estoque + ' disponíveis' : 'Esgotado'}</div>

      <div class="flex items-center justify-between gap-2">
        <select ${p.estoque ? '' : 'disabled'} data-id="${p.id}" class="qtySelect w-28 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-yellow-400/60 disabled:opacity-50">
          ${p.estoque ? Array.from({ length: p.estoque }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('') : '<option value="" disabled selected>Indisponível</option>'}
        </select>
        ${p.preco != null ? `
        <div class="bg-yellow-400 text-black text-sm font-semibold px-2.5 py-1.5 rounded-lg shadow whitespace-nowrap">
          ${formatEUR(p.preco)}
        </div>` : `<div></div>`}
      </div>

      <div class="flex">
        <button ${p.estoque ? '' : 'disabled'} data-id="${p.id}" aria-label="Adicionar ao carrinho" title="Adicionar ao carrinho" class="addToCart w-full bg-yellow-400 text-black font-semibold px-3 py-2 rounded-xl hover:brightness-95 active:brightness-90 transition disabled:opacity-50 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
            <path d="M2.25 3a.75.75 0 0 1 .75-.75h1.386a1.5 1.5 0 0 1 1.415 1.02l.519 1.557h12.18a.75.75 0 0 1 .728.936l-1.5 6A.75.75 0 0 1 17 12.75H7.03l-.3.9a.75.75 0 0 0 .71 1.05H18a.75.75 0 0 1 0 1.5H7.44a2.25 2.25 0 1 1-2.1-3h.09l1.62-4.86L5.22 5.25H3a.75.75 0 0 1-.75-.75Z"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  // Hover da foto: 0001 -> 0002
  const imgEl = card.querySelector('img');
  const originalSrc = p.img;
  const hoverSrc = originalSrc.replace(/\/0001(\.\w+)?$/, '/0002$1');

  imgEl.addEventListener('mouseenter', () => {
    if (hoverSrc && hoverSrc !== originalSrc) {
      const revert = () => { imgEl.setAttribute('src', originalSrc); imgEl.removeEventListener('error', revert); };
      imgEl.addEventListener('error', revert, { once: true });
      imgEl.setAttribute('src', hoverSrc);
    }
  });
  imgEl.addEventListener('mouseleave', () => { imgEl.setAttribute('src', originalSrc); });

  return card;
}

/* ======= PAGINAÇÃO ======= */
function renderPagination(totalPages) {
  const container = byId('pagination');
  if (!container) return;
  container.innerHTML = '';
  if (totalPages <= 1) return;

  const prev = document.createElement('button');
  prev.textContent = 'Anterior';
  prev.className = 'px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-40';
  prev.disabled = state.page <= 1;
  prev.addEventListener('click', () => { state.page = Math.max(1, state.page - 1); renderCatalog(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  container.appendChild(prev);

  const makePageBtn = (n, isActive = false) => {
    const b = document.createElement('button');
    b.textContent = n;
    b.className = 'min-w-9 px-3 py-1.5 rounded-lg border ' + (isActive ? 'border-yellow-400/60 bg-yellow-400/10 text-yellow-300 font-semibold' : 'border-white/10 bg-white/5 hover:bg-white/10');
    if (!isActive) b.addEventListener('click', () => { state.page = n; renderCatalog(); window.scrollTo({ top: 0, behavior: "smooth" }); });
    container.appendChild(b);
  };

  const tp = totalPages;
  const cp = state.page;
  if (tp <= 10) {
    for (let i = 1; i <= tp; i++) makePageBtn(i, i === cp);
  } else {
    makePageBtn(1, cp === 1);
    if (cp > 3) {
      const dots1 = document.createElement('span'); dots1.textContent = '…'; dots1.className = 'px-1 text-white/60'; container.appendChild(dots1);
    }
    const start = Math.max(2, cp - 1);
    const end = Math.min(tp - 1, cp + 1);
    for (let i = start; i <= end; i++) makePageBtn(i, i === cp);
    if (cp < tp - 2) {
      const dots2 = document.createElement('span'); dots2.textContent = '…'; dots2.className = 'px-1 text-white/60'; container.appendChild(dots2);
    }
    makePageBtn(tp, cp === tp);
  }

  const next = document.createElement('button');
  next.textContent = 'Próxima';
  next.className = 'px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-40';
  next.disabled = state.page >= totalPages;
  next.addEventListener('click', () => { state.page = Math.min(totalPages, state.page + 1); renderCatalog(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  container.appendChild(next);
}

function renderCatalog(filterText) {
  const grid = document.getElementById("catalogGrid");
  const empty = document.getElementById("emptyState");
  if (!grid || !empty) return;

  if (filterText !== undefined) {
    const q = String(filterText || '').trim().toLowerCase();
    const changed = q !== state.query;
    state.query = q;
    if (changed) state.page = 1;
  }

  const filtered = PRODUCTS.filter(p => !state.query || p.codigo.toLowerCase().includes(state.query) || p.modelo.toLowerCase().includes(state.query));
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
  if (state.page > totalPages) state.page = totalPages;
  const start = (state.page - 1) * state.pageSize;
  const visible = filtered.slice(start, start + state.pageSize);

  grid.innerHTML = "";
  visible.forEach(p => grid.appendChild(createCard(p)));

  empty.classList.toggle("hidden", filtered.length > 0);

  grid.querySelectorAll('.addToCart').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    const prod = PRODUCTS.find(p => p.id === id);
    const select = grid.querySelector(`select.qtySelect[data-id="${id}"]`);
    const qty = parseInt(select?.value || '1', 10);
    addToCart(prod, qty);
  }));

  renderPagination(totalPages);
}

/* ======= CARRINHO ======= */
function addToCart(product, qty) {
  if (!product) return;
  const existing = state.cart.find(it => it.id === product.id);
  const currentQty = existing ? existing.qty : 0;
  const maxAdd = Math.max(0, product.estoque - currentQty);
  const toAdd = Math.min(qty, maxAdd);
  if (toAdd <= 0) { alert('Quantidade selecionada excede o estoque disponível.'); return; }
  if (existing) existing.qty += toAdd; else state.cart.push({ id: product.id, codigo: product.codigo, modelo: product.modelo, qty: toAdd });
  saveCart(); openCart();
}

function removeFromCart(id) {
  const idx = state.cart.findIndex(it => it.id === id);
  if (idx >= 0) state.cart.splice(idx, 1);
  saveCart();
}

function updateCartBadge() {
  const countEl = byId('cartCount');
  const totalItemsEl = byId('cartTotalItems');
  const whatsBtn = byId('whatsCheckout');
  if (countEl) countEl.textContent = state.totalItems;
  if (totalItemsEl) totalItemsEl.textContent = state.totalItems;
  if (whatsBtn) whatsBtn.disabled = state.totalItems === 0;
}

function renderCart() {
  const list = byId('cartItems');
  if (!list) return;
  list.innerHTML = '';
  if (state.cart.length === 0) {
    list.innerHTML = `<div class="p-6 text-white/60 text-sm">Seu carrinho está vazio. Adicione itens do catálogo.</div>`;
    updateTotals();
    return;
  }
  state.cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    const max = prod ? prod.estoque : item.qty;
    const unit = (prod && prod.preco != null) ? prod.preco : null;
    const lineTotal = (unit != null) ? unit * item.qty : null;

    const row = document.createElement('div'); row.className = 'p-4 flex items-center gap-3';
    row.innerHTML = `
      <div class="size-16 rounded-lg overflow-hidden bg-black/20 flex-shrink-0">
        <img src="${prod?.img || ''}" alt="${item.modelo}" class="w-full h-full object-cover">
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between gap-2">
          <div class="min-w-0">
            <div class="text-sm font-semibold leading-tight truncate">${item.modelo}</div>
            <div class="text-xs text-white/60">Código: ${item.codigo}</div>
            <div class="text-xs text-white/70 mt-1">Preço uni.: <span class="font-semibold text-white">${formatEUR(unit)}</span></div>
            <div class="text-xs text-white/70">Total item: <span class="font-semibold text-white">${formatEUR(lineTotal)}</span></div>
          </div>
          <button class="remove size-8 grid place-items-center rounded-full hover:bg-white/10" data-id="${item.id}">✕</button>
        </div>
        <div class="mt-2 flex items-center gap-2">
          <label class="text-xs text-white/70">Qtd.</label>
          <select class="cartQty bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-sm outline-none focus:border-yellow-400/60" data-id="${item.id}">
            ${Array.from({ length: max }, (_, i) => `<option value='${i + 1}' ${i + 1 === item.qty ? 'selected' : ''}>${i + 1}</option>`).join('')}
          </select>
        </div>
      </div>`;
    list.appendChild(row);
  });
  list.querySelectorAll('button.remove').forEach(btn => btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-id'))));
  list.querySelectorAll('select.cartQty').forEach(sel => sel.addEventListener('change', () => {
    const id = sel.getAttribute('data-id');
    const qty = parseInt(sel.value, 10);
    const item = state.cart.find(it => it.id === id);
    if (item) { item.qty = qty; saveCart(); }
  }));
  updateTotals();
}

function computeSubtotal() {
  let sum = 0, anyPriced = false;
  for (const it of state.cart) {
    const p = PRODUCTS.find(pp => pp.id === it.id);
    if (p && p.preco != null) {
      sum += p.preco * it.qty;
      anyPriced = true;
    }
  }
  return { sum, anyPriced };
}

function currentShippingCost() {
  switch (state.shipping.method) {
    case 'correio_azul': return COST_AZUL;
    case 'correio_registrado': return COST_REGISTRADO;
    case 'correio_internacional': return COST_INTERNACIONAL;
    case 'vinted':
    case 'wallapop':
    default: return null;
  }
}

function updateTotals() {
  const { sum, anyPriced } = computeSubtotal();
  const shipping = currentShippingCost();
  const subtotalEl = byId('cartSubtotal');
  if (subtotalEl) subtotalEl.textContent = anyPriced ? formatEUR(sum) : '—';

  let shippingText = '—';
  if (state.shipping.method === 'correio_azul') shippingText = formatEUR(COST_AZUL);
  else if (state.shipping.method === 'correio_registrado') shippingText = formatEUR(COST_REGISTRADO);
  else if (state.shipping.method === 'correio_internacional') shippingText = formatEUR(COST_INTERNACIONAL);
  else if (state.shipping.method === 'vinted') shippingText = 'a calcular';
  else if (state.shipping.method === 'wallapop') shippingText = 'a calcular';

  const shipEl = byId('shippingValue');
  if (shipEl) shipEl.textContent = shippingText;

  let grand = sum;
  if (typeof shipping === 'number') grand += shipping;
  const grandEl = byId('cartGrandTotal');
  if (grandEl) grandEl.textContent = anyPriced ? formatEUR(grand) : '—';
}

/* ======= WhatsApp ======= */
function buildWhatsAppMessage() {
  const name = (byId('customerName')?.value || '').trim();
  const header = `*Novo pedido – Olavo Scale Wheels*`;
  const who = name ? `\nCliente: ${name}` : '';
  const lines = state.cart.map((it, idx) => {
    const p = PRODUCTS.find(pp => pp.id === it.id);
    const unit = (p && p.preco != null) ? formatEUR(p.preco) : '—';
    const lineTotal = (p && p.preco != null) ? formatEUR(p.preco * it.qty) : '—';
    return `${idx + 1}. ${it.modelo} (Código: ${it.codigo}) — Qtd: ${it.qty} — Uni: ${unit} — Total: ${lineTotal}`;
  });

  const totalItemsLine = `\nTotal de itens: ${state.totalItems}`;
  const { sum, anyPriced } = computeSubtotal();
  const subtotalLine = anyPriced ? `\nSubtotal: ${formatEUR(sum)}` : '';
  let shippingLine = '', grandLine = '';
  if (state.shipping.method === 'correio_azul') {
    shippingLine = `\nEnvio: Correio Azul (Portugal) (${formatEUR(COST_AZUL)})`;
    grandLine = `\nTotal + envio: ${formatEUR(sum + COST_AZUL)}`;
  } else if (state.shipping.method === 'correio_registrado') {
    shippingLine = `\nEnvio: Correio Registrado (Nacional) (${formatEUR(COST_REGISTRADO)})`;
    grandLine = `\nTotal + envio: ${formatEUR(sum + COST_REGISTRADO)}`;
  } else if (state.shipping.method === 'correio_internacional') {
    shippingLine = `\nEnvio: Correio Internacional (${formatEUR(COST_INTERNACIONAL)})`;
    grandLine = `\nTotal + envio: ${formatEUR(sum + COST_INTERNACIONAL)}`;
  } else if (state.shipping.method === 'vinted') {
    shippingLine = `\nEnvio: Vinted (a calcular)`;
  } else if (state.shipping.method === 'wallapop') {
    shippingLine = `\nEnvio: Wallapop (a calcular)`;
  }

  return encodeURIComponent([header, who, '\nItens:', ...lines, totalItemsLine, subtotalLine, shippingLine, grandLine, '\nObrigado!'].filter(Boolean).join('\n'));
}
function sendToWhatsApp() {
  if (!WHATSAPP_NUMBER || /\D/.test(WHATSAPP_NUMBER)) { alert('Configure corretamente o número do WhatsApp (apenas dígitos).'); return; }
  const text = buildWhatsAppMessage();
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

// Contato direto
function openWhatsDirect() {
  if (!WHATSAPP_NUMBER || /\D/.test(WHATSAPP_NUMBER)) { alert('Configure corretamente o número do WhatsApp (apenas dígitos).'); return; }
  const text = encodeURIComponent('Olá! Gostaria de tirar uma dúvida.');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

/* ======= Feedback via WhatsApp ======= */
function buildFeedbackMessage() {
  const name = (byId('feedbackName')?.value || '').trim();
  const msg = (byId('feedbackMessage')?.value || '').trim();
  if (!msg) { alert('Por favor, escreva o seu feedback.'); return null; }
  const header = '*Novo feedback – Olavo Scale Wheels*';
  const who = name ? `\nNome: ${name}` : '';
  return encodeURIComponent([header, who, '\nMensagem:', msg].filter(Boolean).join('\n'));
}
function sendFeedbackToWhatsApp() {
  if (!WHATSAPP_NUMBER || /\D/.test(WHATSAPP_NUMBER)) { alert('Configure corretamente o número do WhatsApp (apenas dígitos).'); return; }
  const text = buildFeedbackMessage();
  if (!text) return;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

/* =========================================================
   Carrossel "Trabalhos dos clientes"
   Requisitos:
   - Coloque um arquivo JSON em: /images/clientes/manifest.json
     Ex.: ["Fulano de tal - 005.001.11 - Portugal.jpg",
           "Ciclado de la - 025.001.11 - Espanha.jpg",
           "teste - 100.001.11 - Brasil.jpg",
           "adriano almeida - 200.002.11.jpg"]
   - As imagens ficam em /images/clientes/<arquivo>
   - Bandeiras também ficam em /images/clientes/, nomeadas pelo país:
       Portugal.webp/png/jpg, Espanha.webp/png/jpg, Brasil.webp/png/jpg, etc.
   ========================================================= */

const CLIENTS_DIR = './images/clientes';
const CLIENTS_MAX = 12;
const CLIENTS_ALLOWED_EXTS = ['webp','png','jpg','jpeg'];

// util
const slugify = (s) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
   .toLowerCase().replace(/[^\w]+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'');

// carrega manifest.json (array de nomes ou {files:[...]})
async function loadClientsManifest(){
  try{
    const res = await fetch(`${CLIENTS_DIR}/manifest.json?${Date.now()}`);
    if(!res.ok) throw new Error('manifest not ok');
    const data = await res.json();
    if(Array.isArray(data)) return data;
    if(Array.isArray(data?.files)) return data.files;
  }catch(e){ /* sem manifest -> lista vazia */ }
  return [];
}

// tenta definir a bandeira (tenta .webp, .png, .jpg… em algumas variações)
function setFlagImage(imgEl, countryRaw){
  if(!countryRaw){ imgEl.remove(); return; }
  const variants = [
    countryRaw, countryRaw.toLowerCase(), slugify(countryRaw),
    slugify(countryRaw).toUpperCase()
  ].filter((v, i, a) => v && a.indexOf(v) === i);

  const attempts = [];
  for(const v of variants){
    for(const ext of CLIENTS_ALLOWED_EXTS){
      attempts.push(`${CLIENTS_DIR}/${v}.${ext}`);
    }
  }

  let i = 0;
  const tryNext = () => {
    if(i >= attempts.length){ imgEl.remove(); return; }
    imgEl.src = attempts[i++];
  };
  imgEl.onerror = tryNext;
  tryNext();
}

// parser do nome do arquivo: "Nome - 031.001.11 - País.ext" (país opcional)
function parseClientFilename(filename){
  // separa extensão
  const extMatch = filename.match(/\.([a-z0-9]+)$/i);
  const ext = extMatch ? extMatch[1].toLowerCase() : '';
  if(!CLIENTS_ALLOWED_EXTS.includes(ext)) return null;

  // remove extensão
  const base = filename.replace(/\.[^.]+$/,'');

  // tenta "Nome - Codigo - Pais" ou "Nome - Codigo"
  // codigo: 000.000.11 ou 000.000.12,5 etc.
  const reFull = /^\s*(.+?)\s*-\s*([0-9]{3}\.[0-9]{3}\.[0-9]+(?:[.,]\d+)?)\s*-\s*(.+?)\s*$/;
  const reNoCountry = /^\s*(.+?)\s*-\s*([0-9]{3}\.[0-9]{3}\.[0-9]+(?:[.,]\d+)?)\s*$/;

  let m = base.match(reFull);
  if(m){
    return { name: m[1], code: m[2], country: m[3], ext };
  }
  m = base.match(reNoCountry);
  if(m){
    return { name: m[1], code: m[2], country: '', ext };
  }

  // se não bater, ainda mostramos a foto, mas com rótulos genéricos
  return { name: base, code: '', country: '', ext };
}

function createClientCard(file){
  const parsed = parseClientFilename(file);
  if(!parsed) return null;

  const url = `${CLIENTS_DIR}/${encodeURIComponent(file)}`;

  const article = document.createElement('article');
  article.className = 'relative min-w-[220px] max-w-[220px] snap-start bg-white/5 border border-white/10 rounded-2xl overflow-hidden';
  article.innerHTML = `
    <div class="aspect-[4/3] overflow-hidden bg-black/20">
      <img src="${url}" alt="${parsed.name}" class="w-full h-full object-cover hover:scale-105 transition-transform" loading="lazy">
    </div>
    <div class="p-3 space-y-1">
      <div class="font-semibold leading-tight truncate" title="${parsed.name}">${parsed.name}</div>
      <div class="text-xs text-white/60 truncate">${parsed.code || '—'}</div>
      <div class="mt-1 flex items-center gap-2">
        <img class="w-5 h-5 rounded-sm border border-white/10" alt="${parsed.country || ''}">
        <span class="text-xs text-white/70 truncate">${parsed.country || '—'}</span>
      </div>
    </div>
  `;

  // aplica flag se houver país
  const flagImg = article.querySelector('img.w-5.h-5');
  setFlagImage(flagImg, parsed.country);

  return article;
}

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

async function renderClientsCarousel(){
  const track = document.getElementById('clientsCarousel');
  if(!track) return;

  track.innerHTML = '<div class="py-8 text-white/60 text-sm">Carregando trabalhos dos clientes…</div>';

  const files = await loadClientsManifest();
  const usable = files.filter(f => typeof f === 'string' && /\.[a-z0-9]+$/i.test(f));
  if(!usable.length){
    track.innerHTML = '<div class="py-8 text-white/60 text-sm">Nenhuma foto encontrada em <code>/images/clientes</code>.</div>';
    return;
  }

  track.innerHTML = '';
  const picked = shuffle(usable.slice()).slice(0, CLIENTS_MAX);
  picked.forEach(f => {
    const card = createClientCard(f);
    if(card) track.appendChild(card);
  });

  // Navegação
  const prev = document.getElementById('clientsPrev');
  const next = document.getElementById('clientsNext');
  const scrollByCards = (dir=1) => {
    const cardWidth = 220 + 16;
    track.scrollBy({ left: dir * cardWidth * 2, behavior: 'smooth' });
  };
  prev && prev.addEventListener('click', () => scrollByCards(-1));
  next && next.addEventListener('click', () => scrollByCards(1));

  // auto-scroll leve
  let auto; const start=()=> auto=setInterval(()=>scrollByCards(1), 3500);
  const stop=()=> clearInterval(auto);
  start(); track.addEventListener('mouseenter', stop); track.addEventListener('mouseleave', start);
}

// chame isso no seu init() já existente
// renderClientsCarousel();
/* ======= Decodificador de código ======= */
function decodeArticle(code) {
  const out = byId("decodeOut");
  if (!out) return;
  if (!code) { out.textContent = ""; return; }
  const parts = code.trim().split(".");
  if (parts.length < 3) { out.textContent = "Formato inválido. Use MMM.CCC.TT"; return; }
  const [mmm, ccc, ...rest] = parts;
  const tt = rest.join(".");
  const corNome = COLOR_MAP[ccc] ? `${ccc} (${COLOR_MAP[ccc]})` : ccc;
  out.innerHTML = `Modelo <strong>${mmm}</strong> • Cor <strong>${corNome}</strong> • Tamanho <strong>${tt}</strong>`;
}
/* ===================== AGENDA / EVENTOS (robusta p/ GitHub Pages) ===================== */
const ROOT_HREF = document.baseURI;                 // respeita /usuario/repo/ no Pages
const EVENTS_DIR = new URL('Eventos/', ROOT_HREF).href;

function formatDatePT(d) {
  try {
    return d.toLocaleDateString('pt-PT', { day:'2-digit', month:'short', year:'numeric' }).replace(/\./g,'');
  } catch {
    return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
  }
}

async function fetchJSONNoCache(url) {
  const bust = `ts=${Date.now()}`;
  const sep = url.includes('?') ? '&' : '?';
  const final = `${url}${sep}${bust}`;
  const res = await fetch(final, {
    cache: 'no-store',
    headers: { 'Accept': 'application/json' }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ao carregar ${final}`);
  try {
    return await res.json();
  } catch (e) {
    throw new Error(`JSON inválido em ${final}: ${e.message}`);
  }
}

// tenta várias extensões caso o manifest só traga o nome do ficheiro
async function resolveEventImagePath(nameOrPath) {
  // URL absoluta? usa direto
  try {
    const u = new URL(nameOrPath);
    return u.href;
  } catch {}
  // relativo à pasta /Eventos
  const base = new URL(nameOrPath, EVENTS_DIR).href;

  // se já tem extensão, retorna direto
  if (/\.(webp|jpe?g|png|gif|avif)$/i.test(base)) return base;

  // senão tenta em ordem: .webp, .jpg, .png
  const tries = ['.webp', '.jpg', '.png'];
  for (const ext of tries) {
    const candidate = base.replace(/\/?$/, '') + ext;
    try {
      const head = await fetch(candidate, { method: 'HEAD', cache: 'no-store' });
      if (head.ok) return candidate;
    } catch {}
  }
  // última tentativa: retorna base (vai errar, mas logamos)
  console.warn('[Eventos] Não achei imagem com extensões padrão para', nameOrPath);
  return base;
}

async function loadEvents() {
  const manifestURL = new URL('manifest.json', EVENTS_DIR).href;
  console.log('[Eventos] manifest:', manifestURL);

  try {
    const data = await fetchJSONNoCache(manifestURL);
    const list = Array.isArray(data) ? data : (data.events || []);
    const normalized = list.map(ev => ({
      title: ev.title || ev.nome || 'Evento',
      date: ev.date  || ev.data || null,
      location: ev.location || ev.local || '',
      image: ev.image || ev.foto || ''
    })).filter(ev => ev.image);

    // ordena por data (mais próximos primeiro; sem data vão pro fim)
    normalized.sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : Infinity;
      const db = b.date ? new Date(b.date).getTime() : Infinity;
      return da - db;
    });

    // resolve caminhos das imagens (com fallback de extensões)
    for (const ev of normalized) {
      ev._img = await resolveEventImagePath(ev.image);
    }

    return normalized;
  } catch (err) {
    console.warn('[Eventos] Falha ao carregar manifest:', err);
    return [];
  }
}

function eventCardHTML(ev){
  const dateStr = ev.date ? formatDatePT(new Date(ev.date)) : 'Data a confirmar';
  const location = ev.location || '';
  const imgSrc = ev._img || '';

  return `
  <article class="group relative w-full max-w-[720px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow">
    <div class="aspect-[16/9] overflow-hidden bg-black/20">
      <img src="${imgSrc}" alt="${ev.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"
           onerror="this.closest('article').querySelector('.ev-fallback').classList.remove('hidden'); this.classList.add('hidden');">
    </div>
    <div class="p-4 sm:p-5">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div class="min-w-0">
          <h3 class="font-semibold leading-tight truncate" title="${ev.title}">${ev.title}</h3>
          <div class="text-xs text-white/60 truncate">${location}</div>
        </div>
        <div class="bg-yellow-400 text-black text-sm font-semibold px-2.5 py-1.5 rounded-lg shadow whitespace-nowrap">
          ${dateStr}
        </div>
      </div>
      <div class="ev-fallback hidden mt-3 text-xs text-red-300">Imagem indisponível: ${ev.image}</div>
    </div>
  </article>`;
}

let EVENTS = [];
let currentEventIndex = 0;

async function renderEventsCarousel(){
  const center = document.getElementById('eventsCenter');
  const prevBtn = document.getElementById('eventsPrev');
  const nextBtn = document.getElementById('eventsNext');
  if (!center) return;

  EVENTS = await loadEvents();

  if (EVENTS.length === 0) {
    center.innerHTML = `
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center text-white/70">
        Sem eventos publicados no momento ou manifest indisponível.
      </div>`;
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    return;
  }

  // escolhe o próximo evento futuro; se não houver, começa do 0
  const now = Date.now();
  const upcomingIdx = EVENTS.findIndex(ev => ev.date && new Date(ev.date).getTime() >= now);
  currentEventIndex = upcomingIdx >= 0 ? upcomingIdx : 0;

  const draw = (idx) => { center.innerHTML = eventCardHTML(EVENTS[idx]); };
  draw(currentEventIndex);

  if (prevBtn) prevBtn.onclick = () => {
    currentEventIndex = (currentEventIndex - 1 + EVENTS.length) % EVENTS.length;
    draw(currentEventIndex);
  };
  if (nextBtn) nextBtn.onclick = () => {
    currentEventIndex = (currentEventIndex + 1) % EVENTS.length;
    draw(currentEventIndex);
  };
}

// chame esta função no seu init() existente
// renderEventsCarousel();
/* ============================ /AGENDA ============================ */

// No seu init() existente, adicione esta chamada ao final:
/// renderEventsAgenda();

/* ======= Drawer do carrinho ======= */
const drawer = byId('cartDrawer');
const backdrop = byId('backdrop');
function openCart() { if (drawer && backdrop) { drawer.classList.remove('translate-x-full'); backdrop.classList.remove('hidden'); } }
function closeCart() { if (drawer && backdrop) { drawer.classList.add('translate-x-full'); backdrop.classList.add('hidden'); } }

/* ======= INIT ======= */
function init() {
  const yearEl = byId('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Carrossel Top 10
  renderCarousel();
  byId('nextSlide')?.addEventListener('click', () => scrollByCards(1));
  byId('prevSlide')?.addEventListener('click', () => scrollByCards(-1));

  // Catálogo
  renderCatalog("");
  updateCartBadge();
  renderCart();

  // Drawer
  byId('cartButton')?.addEventListener('click', openCart);
  byId('closeCart')?.addEventListener('click', closeCart);
  backdrop?.addEventListener('click', closeCart);

  // WhatsApp
  byId('whatsCheckout')?.addEventListener('click', sendToWhatsApp);
  byId('contactWhats')?.addEventListener('click', openWhatsDirect);

  // Busca
  byId('searchInput')?.addEventListener('input', (e) => { state.page = 1; renderCatalog(e.target.value); });

  // Decodificador
  const decodeInput = byId("decodeInput");
  if (decodeInput) decodeInput.addEventListener("input", (e) => decodeArticle(e.target.value));

  // Feedback
  byId('sendFeedbackBtn')?.addEventListener('click', sendFeedbackToWhatsApp);

  // Auto-scroll Top 10
  const track = byId("carouselTrack");
  if (track) {
    let autoScroll;
    const startAuto = () => { autoScroll = setInterval(() => scrollByCards(1), 3500); };
    const stopAuto = () => { clearInterval(autoScroll); };
    track.addEventListener('mouseenter', stopAuto);
    track.addEventListener('mouseleave', startAuto);
    startAuto();
  }
  renderEventsAgenda();

  // Shipping radios
  ['shipVinted', 'shipWallapop', 'shipCorreioAzul', 'shipCorreioRegistrado', 'shipCorreioInternacional']
    .map(id => byId(id))
    .forEach(r => { r?.addEventListener('change', (e) => { state.shipping.method = e.target.value; updateTotals(); }); });

  // Carrossel de clientes
  renderClientsCarousel();
}

document.addEventListener('DOMContentLoaded', init);
