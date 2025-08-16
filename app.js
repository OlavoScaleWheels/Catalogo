/* ===========================
   Olavo Scale Wheels – app.js (com i18n dinâmico)
   =========================== */

/* ======= i18n – Textos ======= */
const I18N = {
  pt: {
    // Navegação / seções (estáticos no HTML)
    nav_highlights: "Destaques",
    nav_catalog: "Catálogo",
    nav_assembly: "Como montar",
    nav_events: "Agenda",
    nav_howbuy: "Como comprar",
    nav_about: "Sobre",
    nav_faq: "Dúvidas frequentes",
    nav_contact: "Fale conosco",
    search_placeholder: "Buscar código ou modelo...",
    cart_label: "Carrinho",

    highlights_title: "Mais vendidas",
    highlights_note: "Top 10 da loja",

    code_title: "Como ler o código das rodas",
    code_format: "Formato:",
    code_examples: "Exemplos",
    code_input_label: "Digite um código",
    code_input_placeholder: "ex.: 031.001.11",

    catalog_title: "Catálogo completo",
    catalog_note: "Selecione e adicione ao carrinho",
    empty_state: "Nenhum item encontrado para sua busca.",

    assembly_title: "Como montar as rodas",
    assembly_note: "Vídeo passo a passo",
    assembly_desc: "Assista ao tutorial abaixo. Ele abre aqui mesmo na página.",

    how_title: "Como comprar",
    how_note: "Passo a passo",
    how_step1_title: "1. Escolha os itens",
    how_step1_desc: "Use a busca ou o catálogo. Selecione a quantidade e clique em Adicionar ao carrinho.",
    how_step2_title: "2. Defina o envio",
    how_step2_desc: "No carrinho, escolha a opção de envio. O total aparece automaticamente.",
    how_step3_title: "3. Finalize no WhatsApp",
    how_step3_desc: "Clique em Enviar pedido via WhatsApp e confirme o pedido.",

    testimonials_title: "O que dizem os clientes",
    testimonials_note: "Avaliações reais",

    clients_title: "Trabalhos dos clientes",
    clients_note: "12 fotos aleatórias a cada visita",

    feedback_title: "Envie o seu feedback",
    feedback_note: "Será encaminhado via WhatsApp",
    feedback_name: "Nome (opcional)",
    feedback_name_placeholder: "O seu nome",
    feedback_message: "Mensagem",
    feedback_message_placeholder: "Conte-nos a sua experiência...",
    feedback_hint: "Ao enviar, abriremos o WhatsApp com a mensagem preenchida.",
    feedback_button: "Enviar feedback via WhatsApp",

    events_title: "Onde estaremos",
    events_note: "Agenda de eventos",

    payment_title: "Formas de pagamento",
    payment_note: "Escolha ao finalizar o pedido",

    contact_title: "Fale conosco",
    contact_desc: "Tem dúvidas ou quer um orçamento rápido? Chame no WhatsApp.",
    contact_button: "Abrir WhatsApp",
    contact_hint: "Ou finalize um pedido pelo carrinho.",

    footer_rights: "— Todos os direitos reservados.",

    // Textos gerados pelo JS
    code_label: (c) => `Código: ${c}`,
    in_stock: (n) => `${n} unid. em estoque`,
    out_stock: "Esgotado",
    available: (n) => `${n} disponíveis`,
    unavailable_option: "Indisponível",
    add_to_cart: "Adicionar ao carrinho",
    previous: "Anterior",
    next: "Próxima",
    page: "Página",

    cart_title: "Seu carrinho",
    cart_empty: "Seu carrinho está vazio. Adicione itens do catálogo.",
    total_items: "Total de itens",
    subtotal: "Subtotal",
    shipping_options: "Opções de envio",
    ship_vinted: "Vinted (a calcular)",
    ship_wallapop: "Wallapop (a calcular)",
    ship_azul: "Correio Azul (Portugal)",
    ship_reg: "Correio Registrado (Nacional)",
    ship_int: "Correio Internacional",
    shipping: "Envio",
    grand_total: "Total + envio",
    customer_name: "Nome do cliente (opcional)",
    customer_placeholder: "Seu nome",
    send_order_btn: "Enviar pedido via WhatsApp",
    send_order_hint: "Abriremos seu WhatsApp com a mensagem do pedido já preenchida.",

    unit_price: "Preço uni.",
    line_total: "Total item",

    qty_short: "Qtd.",
    alert_qty_exceed: "Quantidade selecionada excede o estoque disponível.",
    alert_whats_bad: "Configure corretamente o número do WhatsApp (apenas dígitos).",

    // WhatsApp
    wa_header: "*Novo pedido – Olavo Scale Wheels*",
    wa_customer: (n) => `\nCliente: ${n}`,
    wa_items: "\nItens:",
    wa_line: (i, modelo, codigo, qty, unit, total) =>
      `${i}. ${modelo} (Código: ${codigo}) — Qtd: ${qty} — Uni: ${unit} — Total: ${total}`,
    wa_total_items: (n) => `\nTotal de itens: ${n}`,
    wa_subtotal: (v) => `\nSubtotal: ${v}`,
    wa_ship_vinted: "\nEnvio: Vinted (a calcular)",
    wa_ship_wallapop: "\nEnvio: Wallapop (a calcular)",
    wa_ship_azul: (v) => `\nEnvio: Correio Azul (Portugal) (${v})`,
    wa_ship_reg: (v) => `\nEnvio: Correio Registrado (Nacional) (${v})`,
    wa_ship_int: (v) => `\nEnvio: Correio Internacional (${v})`,
    wa_grand: (v) => `\nTotal + envio: ${v}`,
    wa_thanks: "\nObrigado!",

    // Clientes
    clients_loading: "Carregando trabalhos dos clientes…",
    clients_none: "Nenhuma foto encontrada em /images/clientes.",

    // Decoder
    code_invalid: "Formato inválido. Use MMM.CCC.TT",
    code_decoded: (mmm, corNome, tt) =>
      `Modelo <strong>${mmm}</strong> • Cor <strong>${corNome}</strong> • Tamanho <strong>${tt}</strong>`,

    // Vídeo
    assembly_iframe_title: "Guia de Montagem das Rodas"
  },
  en: {
    /* (Traduções em inglês) */
    nav_highlights: "Highlights",
    nav_catalog: "Catalog",
    nav_assembly: "Assembly",
    nav_events: "Schedule",
    nav_howbuy: "How to buy",
    nav_about: "About",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    search_placeholder: "Search code or model...",
    cart_label: "Cart",

    highlights_title: "Best sellers",
    highlights_note: "Top 10 in-store",

    code_title: "How to read the wheel code",
    code_format: "Format:",
    code_examples: "Examples",
    code_input_label: "Enter a code",
    code_input_placeholder: "e.g., 031.001.11",

    catalog_title: "Full catalog",
    catalog_note: "Select and add to cart",
    empty_state: "No items found for your search.",

    assembly_title: "How to assemble the wheels",
    assembly_note: "Step-by-step video",
    assembly_desc: "Watch the tutorial below. It opens right here on the page.",

    how_title: "How to buy",
    how_note: "Step by step",
    how_step1_title: "1. Choose items",
    how_step1_desc: "Use search or the catalog. Select quantity and click Add to cart.",
    how_step2_title: "2. Set shipping",
    how_step2_desc: "In the cart, select a shipping option. The total is calculated automatically.",
    how_step3_title: "3. Finish on WhatsApp",
    how_step3_desc: "Click Send order via WhatsApp and confirm the purchase.",

    testimonials_title: "What customers say",
    testimonials_note: "Real reviews",

    clients_title: "Customers’ builds",
    clients_note: "12 random photos on each visit",

    feedback_title: "Send your feedback",
    feedback_note: "It will be sent via WhatsApp",
    feedback_name: "Name (optional)",
    feedback_name_placeholder: "Your name",
    feedback_message: "Message",
    feedback_message_placeholder: "Tell us about your experience...",
    feedback_hint: "When you send it, WhatsApp opens with the message prefilled.",
    feedback_button: "Send feedback via WhatsApp",

    events_title: "Where we’ll be",
    events_note: "Events schedule",

    payment_title: "Payment methods",
    payment_note: "Choose at checkout",

    contact_title: "Contact us",
    contact_desc: "Questions or need a quick quote? Reach us on WhatsApp.",
    contact_button: "Open WhatsApp",
    contact_hint: "Or finish an order from the cart.",

    footer_rights: "— All rights reserved.",

    code_label: (c) => `Code: ${c}`,
    in_stock: (n) => `${n} in stock`,
    out_stock: "Out of stock",
    available: (n) => `${n} available`,
    unavailable_option: "Unavailable",
    add_to_cart: "Add to cart",
    previous: "Previous",
    next: "Next",
    page: "Page",

    cart_title: "Your cart",
    cart_empty: "Your cart is empty. Add items from the catalog.",
    total_items: "Total items",
    subtotal: "Subtotal",
    shipping_options: "Shipping options",
    ship_vinted: "Vinted (to be calculated)",
    ship_wallapop: "Wallapop (to be calculated)",
    ship_azul: "Correio Azul (Portugal)",
    ship_reg: "Registered Mail (Domestic)",
    ship_int: "International Mail",
    shipping: "Shipping",
    grand_total: "Total + shipping",
    customer_name: "Customer name (optional)",
    customer_placeholder: "Your name",
    send_order_btn: "Send order via WhatsApp",
    send_order_hint: "We’ll open WhatsApp with the order prefilled.",

    unit_price: "Unit price",
    line_total: "Line total",

    qty_short: "Qty.",
    alert_qty_exceed: "Selected quantity exceeds available stock.",
    alert_whats_bad: "Please configure a valid WhatsApp number (digits only).",

    wa_header: "*New order – Olavo Scale Wheels*",
    wa_customer: (n) => `\nCustomer: ${n}`,
    wa_items: "\nItems:",
    wa_line: (i, modelo, codigo, qty, unit, total) =>
      `${i}. ${modelo} (Code: ${codigo}) — Qty: ${qty} — Unit: ${unit} — Total: ${total}`,
    wa_total_items: (n) => `\nTotal items: ${n}`,
    wa_subtotal: (v) => `\nSubtotal: ${v}`,
    wa_ship_vinted: "\nShipping: Vinted (to be calculated)",
    wa_ship_wallapop: "\nShipping: Wallapop (to be calculated)",
    wa_ship_azul: (v) => `\nShipping: Correio Azul (Portugal) (${v})`,
    wa_ship_reg: (v) => `\nShipping: Registered Mail (Domestic) (${v})`,
    wa_ship_int: (v) => `\nShipping: International Mail (${v})`,
    wa_grand: (v) => `\nTotal + shipping: ${v}`,
    wa_thanks: "\nThank you!",

    clients_loading: "Loading customers’ builds…",
    clients_none: "No photos found in /images/clientes.",

    code_invalid: "Invalid format. Use MMM.CCC.TT",
    code_decoded: (mmm, corNome, tt) =>
      `Model <strong>${mmm}</strong> • Color <strong>${corNome}</strong> • Size <strong>${tt}</strong>`,

    assembly_iframe_title: "Wheels Assembly Guide"
  },
  es: {
    // (traduções básicas; você pode ajustar depois)
    nav_highlights: "Destacados",
    nav_catalog: "Catálogo",
    nav_assembly: "Montaje",
    nav_events: "Agenda",
    nav_howbuy: "Cómo comprar",
    nav_about: "Acerca de",
    nav_faq: "FAQ",
    nav_contact: "Contacto",
    search_placeholder: "Buscar código o modelo...",
    cart_label: "Carrito",
    highlights_title: "Más vendidos",
    highlights_note: "Top 10 de la tienda",
    code_title: "Cómo leer el código de las ruedas",
    code_format: "Formato:",
    code_examples: "Ejemplos",
    code_input_label: "Escribe un código",
    code_input_placeholder: "ej.: 031.001.11",
    catalog_title: "Catálogo completo",
    catalog_note: "Selecciona y añade al carrito",
    empty_state: "No se encontraron artículos para tu búsqueda.",
    assembly_title: "Cómo montar las ruedas",
    assembly_note: "Vídeo paso a paso",
    assembly_desc: "Mira el tutorial abajo. Se abre aquí mismo en la página.",
    how_title: "Cómo comprar",
    how_note: "Paso a paso",
    how_step1_title: "1. Elige los artículos",
    how_step1_desc: "Usa la búsqueda o el catálogo. Selecciona la cantidad y haz clic en Añadir al carrito.",
    how_step2_title: "2. Define el envío",
    how_step2_desc: "En el carrito, elige la opción de envío. El total se calcula automáticamente.",
    how_step3_title: "3. Finaliza por WhatsApp",
    how_step3_desc: "Haz clic en Enviar pedido por WhatsApp y confirma la compra.",
    testimonials_title: "Lo que dicen los clientes",
    testimonials_note: "Opiniones reales",
    clients_title: "Trabajos de clientes",
    clients_note: "12 fotos aleatorias en cada visita",
    feedback_title: "Envíanos tu feedback",
    feedback_note: "Se enviará por WhatsApp",
    feedback_name: "Nombre (opcional)",
    feedback_name_placeholder: "Tu nombre",
    feedback_message: "Mensaje",
    feedback_message_placeholder: "Cuéntanos tu experiencia...",
    feedback_hint: "Al enviar, abriremos WhatsApp con el mensaje rellenado.",
    feedback_button: "Enviar feedback por WhatsApp",
    events_title: "Dónde estaremos",
    events_note: "Agenda de eventos",
    payment_title: "Formas de pago",
    payment_note: "Elige al finalizar el pedido",
    contact_title: "Contáctanos",
    contact_desc: "¿Dudas o presupuesto rápido? Escríbenos por WhatsApp.",
    contact_button: "Abrir WhatsApp",
    contact_hint: "O finaliza un pedido desde el carrito.",
    footer_rights: "— Todos los derechos reservados.",
    code_label: (c) => `Código: ${c}`,
    in_stock: (n) => `${n} en stock`,
    out_stock: "Agotado",
    available: (n) => `${n} disponibles`,
    unavailable_option: "No disponible",
    add_to_cart: "Añadir al carrito",
    previous: "Anterior",
    next: "Siguiente",
    page: "Página",
    cart_title: "Tu carrito",
    cart_empty: "Tu carrito está vacío. Añade artículos del catálogo.",
    total_items: "Total de artículos",
    subtotal: "Subtotal",
    shipping_options: "Opciones de envío",
    ship_vinted: "Vinted (a calcular)",
    ship_wallapop: "Wallapop (a calcular)",
    ship_azul: "Correio Azul (Portugal)",
    ship_reg: "Correo Registrado (Nacional)",
    ship_int: "Correo Internacional",
    shipping: "Envío",
    grand_total: "Total + envío",
    customer_name: "Nombre del cliente (opcional)",
    customer_placeholder: "Tu nombre",
    send_order_btn: "Enviar pedido por WhatsApp",
    send_order_hint: "Abriremos WhatsApp con el pedido rellenado.",
    unit_price: "Precio unit.",
    line_total: "Total artículo",
    qty_short: "Cant.",
    alert_qty_exceed: "La cantidad seleccionada supera el stock disponible.",
    alert_whats_bad: "Configura correctamente el número de WhatsApp (solo dígitos).",
    wa_header: "*Nuevo pedido – Olavo Scale Wheels*",
    wa_customer: (n) => `\nCliente: ${n}`,
    wa_items: "\nArtículos:",
    wa_line: (i, modelo, codigo, qty, unit, total) =>
      `${i}. ${modelo} (Código: ${codigo}) — Cant.: ${qty} — Unit.: ${unit} — Total: ${total}`,
    wa_total_items: (n) => `\nTotal de artículos: ${n}`,
    wa_subtotal: (v) => `\nSubtotal: ${v}`,
    wa_ship_vinted: "\nEnvío: Vinted (a calcular)",
    wa_ship_wallapop: "\nEnvío: Wallapop (a calcular)",
    wa_ship_azul: (v) => `\nEnvío: Correio Azul (Portugal) (${v})`,
    wa_ship_reg: (v) => `\nEnvío: Correo Registrado (Nacional) (${v})`,
    wa_ship_int: (v) => `\nEnvío: Correo Internacional (${v})`,
    wa_grand: (v) => `\nTotal + envío: ${v}`,
    wa_thanks: "\n¡Gracias!",
    clients_loading: "Cargando trabajos de clientes…",
    clients_none: "No se encontraron fotos en /images/clientes.",
    code_invalid: "Formato no válido. Usa MMM.CCC.TT",
    code_decoded: (mmm, corNome, tt) =>
      `Modelo <strong>${mmm}</strong> • Color <strong>${corNome}</strong> • Tamaño <strong>${tt}</strong>`,
    assembly_iframe_title: "Guía de Montaje de Ruedas"
  },
  fr: {
    // (traduções básicas; ajuste depois)
    nav_highlights: "À la une",
    nav_catalog: "Catalogue",
    nav_assembly: "Montage",
    nav_events: "Agenda",
    nav_howbuy: "Comment acheter",
    nav_about: "À propos",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    search_placeholder: "Chercher code ou modèle...",
    cart_label: "Panier",
    highlights_title: "Meilleures ventes",
    highlights_note: "Top 10 du magasin",
    code_title: "Comment lire le code des roues",
    code_format: "Format :",
    code_examples: "Exemples",
    code_input_label: "Saisissez un code",
    code_input_placeholder: "ex. : 031.001.11",
    catalog_title: "Catalogue complet",
    catalog_note: "Sélectionnez et ajoutez au panier",
    empty_state: "Aucun article trouvé pour votre recherche.",
    assembly_title: "Comment monter les roues",
    assembly_note: "Vidéo pas à pas",
    assembly_desc: "Regardez le tutoriel ci-dessous. Il s’ouvre sur cette page.",
    how_title: "Comment acheter",
    how_note: "Étape par étape",
    how_step1_title: "1. Choisir les articles",
    how_step1_desc: "Utilisez la recherche ou le catalogue. Sélectionnez la quantité et cliquez sur Ajouter au panier.",
    how_step2_title: "2. Choisir la livraison",
    how_step2_desc: "Dans le panier, choisissez une option d’envoi. Le total est calculé automatiquement.",
    how_step3_title: "3. Finaliser sur WhatsApp",
    how_step3_desc: "Cliquez sur Envoyer la commande via WhatsApp et confirmez l’achat.",
    testimonials_title: "Avis clients",
    testimonials_note: "Évaluations réelles",
    clients_title: "Réalisations clients",
    clients_note: "12 photos aléatoires à chaque visite",
    feedback_title: "Envoyez votre avis",
    feedback_note: "Il sera envoyé via WhatsApp",
    feedback_name: "Nom (optionnel)",
    feedback_name_placeholder: "Votre nom",
    feedback_message: "Message",
    feedback_message_placeholder: "Parlez-nous de votre expérience...",
    feedback_hint: "En envoyant, WhatsApp s’ouvrira avec le message prérempli.",
    feedback_button: "Envoyer l’avis via WhatsApp",
    events_title: "Où nous serons",
    events_note: "Agenda des événements",
    payment_title: "Moyens de paiement",
    payment_note: "À choisir lors de la commande",
    contact_title: "Contactez-nous",
    contact_desc: "Des questions ou un devis rapide ? Écrivez-nous sur WhatsApp.",
    contact_button: "Ouvrir WhatsApp",
    contact_hint: "Ou finalisez une commande depuis le panier.",
    footer_rights: "— Tous droits réservés.",
    code_label: (c) => `Code : ${c}`,
    in_stock: (n) => `${n} en stock`,
    out_stock: "Rupture de stock",
    available: (n) => `${n} disponibles`,
    unavailable_option: "Indisponible",
    add_to_cart: "Ajouter au panier",
    previous: "Précédent",
    next: "Suivant",
    page: "Page",
    cart_title: "Votre panier",
    cart_empty: "Votre panier est vide. Ajoutez des articles du catalogue.",
    total_items: "Articles au total",
    subtotal: "Sous-total",
    shipping_options: "Options d’envoi",
    ship_vinted: "Vinted (à calculer)",
    ship_wallapop: "Wallapop (à calculer)",
    ship_azul: "Correio Azul (Portugal)",
    ship_reg: "Courrier recommandé (national)",
    ship_int: "Courrier international",
    shipping: "Envoi",
    grand_total: "Total + envoi",
    customer_name: "Nom du client (optionnel)",
    customer_placeholder: "Votre nom",
    send_order_btn: "Envoyer la commande via WhatsApp",
    send_order_hint: "WhatsApp s’ouvrira avec la commande préremplie.",
    unit_price: "Prix un.",
    line_total: "Total article",
    qty_short: "Qté",
    alert_qty_exceed: "La quantité sélectionnée dépasse le stock disponible.",
    alert_whats_bad: "Configurez correctement le numéro WhatsApp (chiffres uniquement).",
    wa_header: "*Nouvelle commande – Olavo Scale Wheels*",
    wa_customer: (n) => `\nClient : ${n}`,
    wa_items: "\nArticles :",
    wa_line: (i, modelo, codigo, qty, unit, total) =>
      `${i}. ${modelo} (Code : ${codigo}) — Qté : ${qty} — Unit. : ${unit} — Total : ${total}`,
    wa_total_items: (n) => `\nArticles au total : ${n}`,
    wa_subtotal: (v) => `\nSous-total : ${v}`,
    wa_ship_vinted: "\nEnvoi : Vinted (à calculer)",
    wa_ship_wallapop: "\nEnvoi : Wallapop (à calculer)",
    wa_ship_azul: (v) => `\nEnvoi : Correio Azul (Portugal) (${v})`,
    wa_ship_reg: (v) => `\nEnvoi : Courrier recommandé (national) (${v})`,
    wa_ship_int: (v) => `\nEnvoi : Courrier international (${v})`,
    wa_grand: (v) => `\nTotal + envoi : ${v}`,
    wa_thanks: "\nMerci !",
    clients_loading: "Chargement des réalisations clients…",
    clients_none: "Aucune photo trouvée dans /images/clientes.",
    code_invalid: "Format invalide. Utilisez MMM.CCC.TT",
    code_decoded: (mmm, corNome, tt) =>
      `Modèle <strong>${mmm}</strong> • Couleur <strong>${corNome}</strong> • Taille <strong>${tt}</strong>`,
    assembly_iframe_title: "Guide de montage des roues"
  }
};

function getLang() {
  const saved = localStorage.getItem("osw_lang");
  return saved && I18N[saved] ? saved : "pt";
}
function setLang(lang) {
  if (I18N[lang]) {
    localStorage.setItem("osw_lang", lang);
    // Simplifica: recarrega para reaplicar tudo (HTML estático + render dinâmico)
    location.reload();
  }
}
const LANG = getLang();
const t = (key, ...args) => {
  const dict = I18N[LANG] || I18N.pt;
  const val = dict[key];
  if (typeof val === "function") return val(...args);
  return val ?? key;
};

/* ======= CONFIG GERAL ======= */
const WHATSAPP_NUMBER = "351913624727"; // PT (DDI 351) + número, apenas dígitos
const COST_AZUL = 2.50;
const COST_REGISTRADO = 4.50;
const COST_INTERNACIONAL = 7.50;

/* ======= VÍDEO DE MONTAGEM ======= */
const ASSEMBLY_VIDEO_URL = "https://www.youtube-nocookie.com/embed/CcKVOC8uVE8?rel=0&modestbranding=1";
function setupAssemblyVideo() {
  const frame = document.getElementById("assemblyVideoFrame");
  if (frame && !frame.src) {
    frame.src = ASSEMBLY_VIDEO_URL;
    frame.title = t("assembly_iframe_title");
  }
}

/* ======= AUTOPREENCHIMENTO A PARTIR DO ID (MMM.CCC.TT) ======= */
const COLOR_MAP = { "001": "Cromado", "002": "Dourado", "003": "Preto", "020": "Azul" };
const MODEL_MAP = { "001": "Roda 001", "011": "Roda 011", "012": "Roda 012", "031": "Roda 031", "050": "Roda 050", "060": "Roda 060" };
// images/MMM/CCC/TTmm/0001.jpg
const imagePath = (mmm, ccc, tt) => `./images/${mmm}/${ccc}/${encodeURIComponent(tt)}mm/0001.jpg`;

/* ======= (NOVO) SUPORTE A PREÇO NO PRÓPRIO ID ======= */
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
  const [mmm, ccc, ...rest] = parts;
  const tt = rest.join(".");
  return { mmm, ccc, tt };
}
function formatEUR(v) {
  if (v == null) return "—";
  try {
    // Locale depende do idioma para formato; pt mantém vírgula
    const locale = LANG === "en" ? "en-GB" : (LANG === "es" ? "es-ES" : (LANG === "fr" ? "fr-FR" : "pt-PT"));
    return v.toLocaleString(locale, { style: 'currency', currency: 'EUR' });
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
    id: idBase,
    codigo: idBase,
    modelo: base.modelo || `${nomeModelo} ${nomeCor} ${tt}`,
    estoque: Number(base.estoque) || 0,
    img: base.img || imagePath(mmm, ccc, tt),
    preco
  };
}

/* ======= DADOS ======= */
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
      <div class="text-xs text-white/60">${t("code_label", p.codigo)}</div>
      <h3 class="font-semibold leading-tight">${p.modelo}</h3>
      <div class="text-xs ${p.estoque ? 'text-green-400' : 'text-red-400'}">${p.estoque ? t("in_stock", p.estoque) : t("out_stock")}</div>
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
    <div class="aspect-[4/3] overflow-hidden bg-black/20 cursor-zoom-in" data-open-gallery="${p.id}">
      <img src="${p.img}" alt="${p.modelo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy">
    </div>
    <div class="p-4 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold leading-tight">${p.modelo}</h3>
        <span class="text-xs text-white/60">${p.codigo}</span>
      </div>
      <div class="text-sm ${p.estoque ? 'text-green-400' : 'text-red-400'}">${p.estoque ? t("available", p.estoque) : t("out_stock")}</div>

      <div class="flex items-center justify-between gap-2">
        <select ${p.estoque ? '' : 'disabled'} data-id="${p.id}" class="qtySelect w-28 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-yellow-400/60 disabled:opacity-50">
          ${p.estoque ? Array.from({ length: p.estoque }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('') : `<option value="" disabled selected>${t("unavailable_option")}</option>`}
        </select>
        ${p.preco != null ? `
        <div class="bg-yellow-400 text-black text-sm font-semibold px-2.5 py-1.5 rounded-lg shadow whitespace-nowrap">
          ${formatEUR(p.preco)}
        </div>` : `<div></div>`}
      </div>

      <div class="flex">
        <button ${p.estoque ? '' : 'disabled'} data-id="${p.id}" aria-label="${t("add_to_cart")}" title="${t("add_to_cart")}" class="addToCart w-full bg-yellow-400 text-black font-semibold px-3 py-2 rounded-xl hover:brightness-95 active:brightness-90 transition disabled:opacity-50 flex items-center justify-center gap-2">
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

  // Abrir galeria
  const openArea = card.querySelector('[data-open-gallery]');
  openArea?.addEventListener('click', async () => {
    await openGalleryForProduct(p);
  });

  return card;
}

/* ======= PAGINAÇÃO ======= */
function renderPagination(totalPages) {
  const container = byId('pagination');
  if (!container) return;
  container.innerHTML = '';
  if (totalPages <= 1) return;

  const prev = document.createElement('button');
  prev.textContent = t('previous');
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
  next.textContent = t('next');
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
  empty.textContent = t("empty_state");

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
  if (toAdd <= 0) { alert(t('alert_qty_exceed')); return; }
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
    list.innerHTML = `<div class="p-6 text-white/60 text-sm">${t("cart_empty")}</div>`;
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
            <div class="text-xs text-white/60">${t("code_label", item.codigo)}</div>
            <div class="text-xs text-white/70 mt-1">${t("unit_price")}: <span class="font-semibold text-white">${formatEUR(unit)}</span></div>
            <div class="text-xs text-white/70">${t("line_total")}: <span class="font-semibold text-white">${formatEUR(lineTotal)}</span></div>
          </div>
          <button class="remove size-8 grid place-items-center rounded-full hover:bg-white/10" data-id="${item.id}">✕</button>
        </div>
        <div class="mt-2 flex items-center gap-2">
          <label class="text-xs text-white/70">${t("qty_short")}</label>
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
  else if (state.shipping.method === 'vinted') shippingText = (LANG === 'en' ? 'to be calculated' : (LANG === 'es' ? 'a calcular' : (LANG === 'fr' ? 'à calculer' : 'a calcular')));
  else if (state.shipping.method === 'wallapop') shippingText = (LANG === 'en' ? 'to be calculated' : (LANG === 'es' ? 'a calcular' : (LANG === 'fr' ? 'à calculer' : 'a calcular')));

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
  const header = t('wa_header');
  const who = name ? t('wa_customer', name) : '';
  const lines = state.cart.map((it, idx) => {
    const p = PRODUCTS.find(pp => pp.id === it.id);
    const unit = (p && p.preco != null) ? formatEUR(p.preco) : '—';
    const lineTotal = (p && p.preco != null) ? formatEUR(p.preco * it.qty) : '—';
    return t('wa_line', idx + 1, it.modelo, it.codigo, it.qty, unit, lineTotal);
  });

  const totalItemsLine = t('wa_total_items', state.totalItems);
  const { sum, anyPriced } = computeSubtotal();
  const subtotalLine = anyPriced ? t('wa_subtotal', formatEUR(sum)) : '';
  let shippingLine = '', grandLine = '';
  if (state.shipping.method === 'correio_azul') {
    shippingLine = t('wa_ship_azul', formatEUR(COST_AZUL));
    grandLine = t('wa_grand', formatEUR(sum + COST_AZUL));
  } else if (state.shipping.method === 'correio_registrado') {
    shippingLine = t('wa_ship_reg', formatEUR(COST_REGISTRADO));
    grandLine = t('wa_grand', formatEUR(sum + COST_REGISTRADO));
  } else if (state.shipping.method === 'correio_internacional') {
    shippingLine = t('wa_ship_int', formatEUR(COST_INTERNACIONAL));
    grandLine = t('wa_grand', formatEUR(sum + COST_INTERNACIONAL));
  } else if (state.shipping.method === 'vinted') {
    shippingLine = t('wa_ship_vinted');
  } else if (state.shipping.method === 'wallapop') {
    shippingLine = t('wa_ship_wallapop');
  }

  return encodeURIComponent([header, who, t('wa_items'), ...lines, totalItemsLine, subtotalLine, shippingLine, grandLine, t('wa_thanks')].filter(Boolean).join('\n'));
}
function sendToWhatsApp() {
  if (!/^\d+$/.test(WHATSAPP_NUMBER)) { alert(t('alert_whats_bad')); return; }
  const text = buildWhatsAppMessage();
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}
function openWhatsDirect() {
  if (!/^\d+$/.test(WHATSAPP_NUMBER)) { alert(t('alert_whats_bad')); return; }
  const text = encodeURIComponent(LANG === 'en' ? 'Hi! I have a question.' : (LANG === 'es' ? '¡Hola! Tengo una duda.' : (LANG === 'fr' ? 'Salut ! J’ai une question.' : 'Olá! Gostaria de tirar uma dúvida.')));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

/* =========================================================
   Carrossel "Trabalhos dos clientes"
   ========================================================= */
const CLIENTS_DIR = './images/clientes';
const CLIENTS_MAX = 12;
const CLIENTS_ALLOWED_EXTS = ['webp','png','jpg','jpeg'];
const slugify = (s) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
   .toLowerCase().replace(/[^\w]+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'');

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

function setFlagImage(imgEl, countryRaw){
  if(!imgEl) return;
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

function parseClientFilename(filename){
  const extMatch = filename.match(/\.([a-z0-9]+)$/i);
  const ext = extMatch ? extMatch[1].toLowerCase() : '';
  if(!CLIENTS_ALLOWED_EXTS.includes(ext)) return null;

  const base = filename.replace(/\.[^.]+$/,'');

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

  track.innerHTML = `<div class="py-8 text-white/60 text-sm">${t("clients_loading")}</div>`;

  const files = await loadClientsManifest();
  const usable = files.filter(f => typeof f === 'string' && /\.[a-z0-9]+$/i.test(f));
  if(!usable.length){
    track.innerHTML = `<div class="py-8 text-white/60 text-sm">${t("clients_none")}</div>`;
    return;
  }

  track.innerHTML = '';
  const picked = shuffle(usable.slice()).slice(0, CLIENTS_MAX);
  picked.forEach(f => {
    const card = createClientCard(f);
    if(card) track.appendChild(card);
  });

  const prev = document.getElementById('clientsPrev');
  const next = document.getElementById('clientsNext');
  const scrollByCardsLocal = (dir=1) => {
    const cardWidth = 220 + 16;
    track.scrollBy({ left: dir * cardWidth * 2, behavior: 'smooth' });
  };
  prev && prev.addEventListener('click', () => scrollByCardsLocal(-1));
  next && next.addEventListener('click', () => scrollByCardsLocal(1));

  let auto; const start=()=> auto=setInterval(()=>scrollByCardsLocal(1), 3500);
  const stop=()=> clearInterval(auto);
  start(); track.addEventListener('mouseenter', stop); track.addEventListener('mouseleave', start);
}

/* ======= Decodificador de código ======= */
function decodeArticle(code) {
  const out = byId("decodeOut");
  if (!out) return;
  if (!code) { out.textContent = ""; return; }
  const parts = code.trim().split(".");
  if (parts.length < 3) { out.textContent = t("code_invalid"); return; }
  const [mmm, ccc, ...rest] = parts;
  const tt = rest.join(".");
  const corNome = COLOR_MAP[ccc] ? `${ccc} (${COLOR_MAP[ccc]})` : ccc;
  out.innerHTML = t("code_decoded", mmm, corNome, tt);
}

/* ======= Drawer do carrinho ======= */
const drawer = byId('cartDrawer');
const backdrop = byId('backdrop');
function openCart() { if (drawer && backdrop) { drawer.classList.remove('translate-x-full'); backdrop.classList.remove('hidden'); } }
function closeCart() { if (drawer && backdrop) { drawer.classList.add('translate-x-full'); backdrop.classList.add('hidden'); } }

/* ======= MODAL GALERIA (já existente) ======= */
let modalState = { photos: [], index: 0 };
function ensureModalDOM() {
  if (byId('imgModalOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'imgModalOverlay';
  overlay.className = 'fixed inset-0 z-[60] hidden bg-black/80 backdrop-blur-sm';
  overlay.innerHTML = `
    <div class="absolute inset-0 flex items-center justify-center p-4">
      <div class="relative w-full max-w-6xl max-h-[90vh] bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <button id="imgModalClose" class="absolute top-3 right-3 size-9 grid place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 border border-white/10" aria-label="Close">✕</button>
        <button id="imgPrev" class="absolute left-2 top-1/2 -translate-y-1/2 size-12 grid place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 border border-white/10" aria-label="Previous">⟨</button>
        <button id="imgNext" class="absolute right-2 top-1/2 -translate-y-1/2 size-12 grid place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 border border-white/10" aria-label="Next">⟩</button>
        <div class="w-full h-full grid place-items-center p-4">
          <img id="imgModalMain" alt="Product photo" class="max-w-full max-h-[80vh] object-contain select-none" draggable="false">
        </div>
        <div id="imgModalCounter" class="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/60 rounded-full px-2 py-1"></div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}
function showModal() { byId('imgModalOverlay')?.classList.remove('hidden'); }
function hideModal() { byId('imgModalOverlay')?.classList.add('hidden'); }
function updateModal() {
  const img = byId('imgModalMain');
  const counter = byId('imgModalCounter');
  if (!img) return;
  const src = modalState.photos[modalState.index];
  img.src = src;
  if (counter) counter.textContent = `${modalState.index + 1} / ${modalState.photos.length}`;
}
function prevModal() { if (modalState.photos.length) { modalState.index = (modalState.index - 1 + modalState.photos.length) % modalState.photos.length; updateModal(); } }
function nextModal() { if (modalState.photos.length) { modalState.index = (modalState.index + 1) % modalState.photos.length; updateModal(); } }

async function openGalleryForProduct(product) {
  const { mmm, ccc, tt } = parseArticleId(product.id);
  const base = `./images/${mmm}/${ccc}/${encodeURIComponent(tt)}mm/`;
  const extensions = ['webp','jpg','jpeg','png'];
  const photos = [];
  for (let i = 1; i <= 20; i++) {
    for (const ext of extensions) {
      const url = `${base}${String(i).padStart(4, '0')}.${ext}`;
      const ok = await imageExists(url);
      if (ok) { photos.push(url); break; }
    }
  }
  if (!photos.length) { return; }
  ensureModalDOM();
  modalState = { photos, index: 0 };
  attachModalEvents();
  updateModal();
  showModal();
}
function attachModalEvents() {
  byId('imgModalClose')?.addEventListener('click', hideModal, { once: true });
  byId('imgPrev')?.addEventListener('click', prevModal);
  byId('imgNext')?.addEventListener('click', nextModal);
  const overlay = byId('imgModalOverlay');
  const onKey = (e) => {
    if (e.key === 'Escape') hideModal();
    if (e.key === 'ArrowLeft') prevModal();
    if (e.key === 'ArrowRight') nextModal();
  };
  overlay?.addEventListener('keydown', onKey);
  overlay?.setAttribute('tabindex', '-1');
  overlay?.focus();
}
function imageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url + (url.includes('?') ? '&' : '?') + 't=' + Date.now();
  });
}

/* ======= Tradução dos textos estáticos do HTML ======= */
function translateStatic() {
  // Navbar / placeholders / rótulos no header
  const map = [
    ['a[href="#destaques"]', 'nav_highlights'],
    ['a[href="#catalogo"]', 'nav_catalog'],
    ['a[href="#agenda"]', 'nav_events'],
    ['a[href="#como-comprar"]', 'nav_howbuy'],
    ['a[href="#sobre"]', 'nav_about'],
    ['a[href="#faq"]', 'nav_faq'],
    ['a[href="#contato"]', 'nav_contact'],
    ['#cartButton span:nth-child(2)', 'cart_label'] // o <span>Carrinho</span>
  ];
  map.forEach(([sel, key]) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = t(key);
  });

  const search = byId('searchInput');
  if (search) search.placeholder = t('search_placeholder');

  // Seções e subtítulos
  const sectionMap = [
    ['#destaques h2', 'highlights_title'],
    ['#destaques .text-white\\/60', 'highlights_note'],

    ['section .mb-6 h2', 'code_title'],
    ['section .mb-6 p.text-white\\/80.text-sm.mb-3', 'code_format'],

    ['#catalogo h2', 'catalog_title'],
    ['#catalogo .text-white\\/60', 'catalog_note'],
    ['#emptyState', 'empty_state'],

    ['#assemblyTitle', 'assembly_title'], // opcional (se tiver id)
  ];
  sectionMap.forEach(([sel, key]) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = t(key);
  });

  // Bloco "Como comprar"
  const how = document.getElementById('como-comprar');
  if (how) {
    const title = how.querySelector('h2'); if (title) title.textContent = t('how_title');
    const note = how.querySelector('.text-white\\/60'); if (note) note.textContent = t('how_note');
    const cards = how.querySelectorAll('.bg-white\\/5.border.border-white\\/10.rounded-2xl.p-5');
    if (cards[0]) { cards[0].querySelector('div').textContent = t('how_step1_title'); cards[0].querySelector('p').textContent = t('how_step1_desc'); }
    if (cards[1]) { cards[1].querySelector('div').textContent = t('how_step2_title'); cards[1].querySelector('p').textContent = t('how_step2_desc'); }
    if (cards[2]) { cards[2].querySelector('div').textContent = t('how_step3_title'); cards[2].querySelector('p').textContent = t('how_step3_desc'); }
  }

  // Feedback
  const fb = document.getElementById('feedback');
  if (fb) {
    const title = fb.querySelector('h2'); if (title) title.textContent = t('feedback_title');
    const note = fb.querySelector('.text-white\\/60'); if (note) note.textContent = t('feedback_note');
    const nameLabel = fb.querySelector('label.text-sm.text-white\\/80'); if (nameLabel) nameLabel.firstChild && (nameLabel.childNodes[0].textContent = t('feedback_name') + " ");
    const nameInput = byId('feedbackName'); if (nameInput) nameInput.placeholder = t('feedback_name_placeholder');
    const msgLabel = fb.querySelectorAll('label.text-sm.text-white\\/80')[1]; if (msgLabel) msgLabel.childNodes[0].textContent = t('feedback_message') + " ";
    const msgInput = byId('feedbackMessage'); if (msgInput) msgInput.placeholder = t('feedback_message_placeholder');
    const hint = fb.querySelector('p.text-xs.text-white\\/60'); if (hint) hint.textContent = t('feedback_hint');
    const btn = byId('sendFeedbackBtn'); if (btn) btn.textContent = t('feedback_button');
  }

  // Agenda
  const ag = byId('agenda');
  if (ag) {
    const title = ag.querySelector('h2'); if (title) title.textContent = t('events_title');
    const note = ag.querySelector('.text-white\\/60'); if (note) note.textContent = t('events_note');
  }

  // Pagamento
  const pg = byId('pagamento');
  if (pg) {
    const title = pg.querySelector('h2'); if (title) title.textContent = t('payment_title');
    const note = pg.querySelector('.text-white\\/60'); if (note) note.textContent = t('payment_note');
  }

  // Contato
  const ct = document.getElementById('contato');
  if (ct) {
    const title = ct.querySelector('h2'); if (title) title.textContent = t('contact_title');
    const desc = ct.querySelector('p'); if (desc) desc.textContent = t('contact_desc');
    const btn = byId('contactWhats'); if (btn) btn.textContent = t('contact_button');
    const hint = ct.querySelector('span.text-white\\/60.text-sm'); if (hint) hint.textContent = t('contact_hint');
  }

  // Footer
  const yearSuffix = document.querySelector('footer');
  if (yearSuffix) {
    const y = byId('year');
    if (y && y.nextSibling) {
      // garante o sufixo traduzido
      y.nextSibling.textContent = ` ${t('footer_rights')}`;
    }
  }

  // Seção Assembly (se você criou uma seção no HTML)
  const assemblySection = document.getElementById('assembly');
  if (assemblySection) {
    const title = assemblySection.querySelector('h2'); if (title) title.textContent = t('assembly_title');
    const note = assemblySection.querySelector('.text-white\\/60'); if (note) note.textContent = t('assembly_note');
    const desc = assemblySection.querySelector('p.text-white\\/80.text-sm.mb-3'); if (desc) desc.textContent = t('assembly_desc');
  }

  // Placeholders específicos
  const decodeInput = byId("decodeInput");
  if (decodeInput) decodeInput.placeholder = t('code_input_placeholder');
  const decodeLabel = decodeInput?.closest('label');
  if (decodeLabel) decodeLabel.childNodes[0].textContent = t('code_input_label') + " ";
}
// --- FIX: garante que o vídeo carrega no iframe da seção "Como montar"
function ensureAssemblyVideo() {
  const f = document.getElementById('assemblyVideoFrame');
  if (f && !f.src) {
    f.src = 'https://www.youtube-nocookie.com/embed/CcKVOC8uVE8?rel=0&modestbranding=1';
  }
}
/* ======= INIT ======= */
function init() {
  // Liga os botões/abas de idioma (opcionais no HTML)
  byId('langPT')?.addEventListener('click', () => setLang('pt'));
  byId('langEN')?.addEventListener('click', () => setLang('en'));
  byId('langES')?.addEventListener('click', () => setLang('es'));
  byId('langFR')?.addEventListener('click', () => setLang('fr'));

  const yearEl = byId('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Aplica tradução dos textos estáticos
  translateStatic();

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

  // Shipping radios
  ['shipVinted', 'shipWallapop', 'shipCorreioAzul', 'shipCorreioRegistrado', 'shipCorreioInternacional']
    .map(id => byId(id))
    .forEach(r => { r?.addEventListener('change', (e) => { state.shipping.method = e.target.value; updateTotals(); }); });

  // Carrossel de clientes
  renderClientsCarousel();

  // Vídeo de montagem
  setupAssemblyVideo();
}
// Vídeo "Como montar"
  ensureAssemblyVideo();

document.addEventListener('DOMContentLoaded', init);
