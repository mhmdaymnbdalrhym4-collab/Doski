/* =====================================================
   MENU DATA — Edit categories, products, prices here.

   HOW TO ADD A PRODUCT IMAGE:
   1. Drop the image file into the  images/  folder
      (e.g. images/iced-latte.jpg)
   2. Set the product's  img  field to that path:
      img: "images/iced-latte.jpg"
   3. Leave img as "" (empty string) to show the
      elegant gold placeholder instead.
   ===================================================== */
const MENU = [

  /* 1 ── The Brew Club */
  { id:"brew-club", name:"The Brew Club", emoji:"", img:"The Brew Club.jpeg", items:[
    { name:"Turkish Coffee",    desc:"Single / Double — traditional brew",      price:"35 / 45",  img:"Turkish Coffee.jpeg" },
    { name:"Espresso",          desc:"Single / Double shot",                     price:"45 / 55",  img:"Espresso.jpeg" },
    { name:"French Coffee",     desc:"Smooth French-press style",                price:50,          img:"French Coffee.jpeg" },
    { name:"Nescafe",           desc:"Classic instant, rich & comforting",       price:60,          img:"Nescafe.jpeg" },
    { name:"Hazelnut Coffee",   desc:"Roasted hazelnut infusion",                price:60,          img:"Hazelnut coffee.jpeg" },
    { name:"Hot Mocha",         desc:"Espresso, chocolate, steamed milk",        price:75,          img:"Hot MOCHA.jpeg" },
    { name:"Hot White Mocha",   desc:"White chocolate & espresso",               price:85,          img:"Hot White MOCHA.jpeg" },
    { name:"Cortado",           desc:"Equal parts espresso & warm milk",         price:65,          img:"Cortado.jpeg" },
    { name:"Flat White",        desc:"Smooth, strong, velvety",                  price:75,          img:"Flat white.jpeg" },
    { name:"Latte",             desc:"Espresso with creamy steamed milk",        price:70,          img:"Latte.jpeg" },
    { name:"Spanish Latte",     desc:"Condensed milk & espresso",                price:80,          img:"Spanish Latte.jpeg" },
    { name:"Cappuccino",        desc:"Espresso, steamed milk & foam",            price:80,          img:"Cappuccino.jpeg" },
    { name:"Americano",         desc:"Espresso diluted with hot water",          price:55,          img:"Americano.jpeg" },
    { name:"Macchiato",         desc:"Espresso marked with milk foam",           price:75,          img:"Macchiato.jpeg" },
    { name:"Matcha Latte",      desc:"Premium ceremonial matcha & milk",         price:90,          img:"Matcha Latte.jpeg" },
  ]},

  /* 2 ── Slow Sips */
  { id:"slow-sips", name:"Slow Sips", emoji:"", img:"Slow Sips.jpeg", items:[
    { name:"Hot Chocolate",              desc:"Rich & creamy cocoa",                   price:75,  img:"Hot chocolate.jpeg" },
    { name:"Hot Choc. Marshmallow",      desc:"Chocolate topped with marshmallows",    price:85,  img:"Hot chocolate Marshmallow.jpeg" },
    { name:"Sahlab",                     desc:"Warm milk-based pudding drink",         price:60,  img:"Sahlab.jpeg" },
    { name:"Flavored Sahlab",            desc:"Sahlab with your choice of flavor",     price:75,  img:"Flavored Sahlab.jpeg" },
    { name:"Tea",                        desc:"Classic black tea",                     price:35,  img:"Tea.jpeg" },
    { name:"Milk Tea",                   desc:"Tea with creamy milk",                  price:45,  img:"Milk Tea.jpeg" },
    { name:"Fruit Tea",                  desc:"Fruity herbal infusion",                price:50,  img:"Fruit Tea.jpeg" },
    { name:"Green Tea",                  desc:"Light & antioxidant-rich",              price:40,  img:"Green Tea.jpeg" },
    { name:"Hot Cider",                  desc:"Warm spiced apple cider",               price:55,  img:"Hot Cider.jpeg" },
    { name:"Karak Tea",                  desc:"Spiced milk tea, Gulf style",           price:60,  img:"Karak Tea.jpeg" },
    { name:"Anise",                      desc:"Aromatic anise herbal infusion",        price:35,  img:"Anise.jpeg" },
    { name:"Hibiscus",                   desc:"Tart & floral karkadeh",               price:35,  img:"Hazelnut coffee.jpeg" },
    { name:"Herbs",                      desc:"Soothing herbal blend",                 price:55,  img:"Herbs.jpeg" },
  ]},

  /* 3 ── Desserts */
  { id:"desserts", name:"Desserts", emoji:"", img:"Desserts.jpeg", items:[
    { name:"Cheese Cake",        desc:"Classic New York style",                  price:90,   img:"Cheese cake.jpeg" },
    { name:"Molten Cake",        desc:"Warm chocolate lava center",              price:110,  img:"Molten cake.jpeg" },
    { name:"Tiramisu",           desc:"Italian espresso & mascarpone",           price:100,  img:"Tiramisu.jpeg" },
    { name:"American Cookies",   desc:"Soft-baked, golden & chunky",             price:55,   img:"American Cookies.jpeg" },
    { name:"San Sebastian",      desc:"Burnt Basque cheesecake",                 price:110,  img:"San Sebastian.jpeg" },
    { name:"Donuts",             desc:"Glazed, fluffy, fresh",                   price:50,   img:"Donuts.jpeg" },
    { name:"Cinnabon",           desc:"Cinnamon roll with cream glaze",          price:55,   img:"Cinnabon.jpeg" },
    { name:"Fudge",              desc:"Dense, rich chocolate fudge",             price:75,   img:"Fudge.jpeg" },
    { name:"Tart",               desc:"Buttery pastry with seasonal filling",    price:80,   img:"Tart.jpeg" },
    { name:"Chocolate Waffle",   desc:"Crispy waffle with chocolate sauce",      price:90,   img:"Chocolate waffle.jpeg" },
    { name:"Nutella",            desc:"Waffle or crepe with Nutella",            price:95,   img:"" },
    { name:"Lotus",              desc:"Biscoff-laden dessert creation",          price:95,   img:"" },
    { name:"Caramel",            desc:"Silky caramel dessert",                   price:90,   img:"" },
    { name:"DOSKI",              desc:"Our signature special dessert",           price:110,  img:"" },
  ]},

  

  /* 5 ── Iced Coffee */
  { id:"iced-coffee", name:"Iced Coffee", emoji:"", img:"Iced Coffee.jpeg", items:[
    { name:"Iced Latte Doski",        desc:"Our signature iced latte",               price:90,   img:"Iced Latte Doski.jpeg" },
    { name:"Iced Cappuccino",         desc:"Cold cappuccino with foam",              price:95,   img:"Iced Cappuccino.jpeg" },
    { name:"Iced Spanish Latte",      desc:"Condensed milk over espresso & ice",     price:100,  img:"Iced Spanish Latte.jpeg" },
    { name:"Iced Mocha",              desc:"Chocolate, espresso, cold milk",         price:90,   img:"Iced Mocha.jpeg" },
    { name:"Iced White Mocha",        desc:"White chocolate & espresso over ice",    price:95,   img:"Iced White Mocha.jpeg" },
    { name:"Iced Americano",          desc:"Double shot over ice",                   price:75,   img:"Iced Americano.jpeg" },
    { name:"Iced Salted Caramel",     desc:"Caramel & sea salt over cold espresso",  price:90,   img:"Iced Salted Caramel.jpeg" },
    { name:"Iced Caramel Macchiato",  desc:"Layered caramel & espresso",             price:95,   img:"Iced Caramel Macchiato.jpeg" },
    { name:"Iced Macchiato",          desc:"Espresso & cold milk",                   price:90,   img:"Iced Macchiato.jpeg" },
  ]},

  /* 6 ── Grab & Go */
  { id:"grab-and-go", name:"Grab & Go", emoji:"", img:"Grab & Go.jpeg", items:[
    { name:"Water",    desc:"Still mineral water",        price:10,  img:"Water.jpeg" },
    { name:"Pepsi",    desc:"Ice-cold Pepsi",             price:40,  img:"Pepsi.jpeg" },
    { name:"Twist",    desc:"Citrus sparkling soft drink",price:40,  img:"Twist.jpeg" },
    { name:"7 Up",     desc:"Crisp lemon-lime sparkle",   price:40,  img:"7 Up.jpeg" },
    { name:"V Cola",   desc:"Refreshing cola blend",      price:40,  img:"V Cola.jpeg" },
    { name:"Redbull",  desc:"Energy boost, original",     price:85,  img:"Redbull.jpeg" },
  ]},

  /* 7 ── Milkshake Attack */
  { id:"milkshake", name:"Milkshake Attack", emoji:"", img:"Milkshake Attack.jpeg", items:[
    { name:"Vanilla",         desc:"Creamy classic vanilla shake",         price:80,   img:"Vanilla Milkshake.jpeg" },
    { name:"Chocolate",       desc:"Rich blended chocolate",               price:85,   img:"Chocolate Milkshake.jpeg" },
    { name:"Caramel",         desc:"Smooth caramel milkshake",             price:95,   img:"Caramel Milkshake.jpeg" },
    { name:"Lotus",           desc:"Biscoff biscuit shake",                price:100,  img:"Lotus Milkshake.jpeg" },
    { name:"Blue Berry",      desc:"Bursting with blueberry flavor",       price:90,   img:"Blue Berry Milkshake.jpeg" },
    { name:"Mango-Strawberry",desc:"Tropical mango meets strawberry",      price:90,   img:"Mango-Strawberry Milkshake.jpeg" },
    { name:"Cookies",         desc:"Cookies & cream milkshake",            price:110,  img:"Cookies Milkshake.jpeg" },
    { name:"Galaxy",          desc:"Galaxy chocolate blended shake",       price:100,  img:"Galaxy Milkshake.jpeg" },
    { name:"Kitkat",          desc:"Kitkat crunch milkshake",              price:100,  img:"Kitkat Milkshake.jpeg" },
    { name:"Oreo",            desc:"Oreo cookie milkshake",                price:95,   img:"Oreo Milkshake.jpeg" },
    { name:"Pistachio",       desc:"Rich roasted pistachio shake",         price:90,   img:"Pistachio Milkshake.jpeg" },
    { name:"Peach",           desc:"Sweet & juicy peach milkshake",        price:95,   img:"Peach Milkshake.jpeg" },
    { name:"Passion Fruit",   desc:"Tropical passion fruit shake",         price:95,   img:"Passion Fruit Milkshake.jpeg" },
  ]},

  /* 8 ── Juicy Mood */
  { id:"juicy-mood", name:"Juicy Mood", emoji:"", img:"Juicy Mood.jpeg", items:[
    { name:"Mango",           desc:"Fresh blended mango",                  price:70,   img:"Mango Juice.jpeg" },
    { name:"Strawberry",      desc:"Sweet strawberry juice",               price:75,   img:"Strawberry Juice.jpeg" },
    { name:"Banana",          desc:"Creamy banana blend",                  price:70,   img:"Banana Juice.jpeg" },
    { name:"Dates with Milk", desc:"Natural dates blended with milk",      price:90,   img:"Bates with Milk Juice.jpeg" },
    { name:"Watermelon",      desc:"Refreshing cold watermelon",           price:70,   img:"Watermelon Juice.jpeg" },
    { name:"Kiwi",            desc:"Tangy kiwi freshness",                 price:95,   img:"Kiwi Juice.jpeg" },
    { name:"Lemon",           desc:"Classic fresh-squeezed lemon",         price:60,   img:"Lemon Juice.jpeg" },
    { name:"Lemon Mint",      desc:"Lemon & fresh mint",                   price:70,   img:"Lemon Mint Juice.jpeg" },
    { name:"Berries",         desc:"Mixed berry blend",                    price:85,   img:"Berries Juice.jpeg" },
    { name:"Guava",           desc:"Tropical guava juice",                 price:70,   img:"Guava Juice.jpeg" },
    { name:"Avocado",         desc:"Creamy avocado smoothie-juice",        price:150,  img:"Avocado Juice.jpeg" },
  ]},

  /* 9 ── Mojito & Soda */
  { id:"mojito-soda", name:"Mojito & Soda", emoji:"", img:"Mojito & Soda.jpeg", items:[
    { name:"Passion Fruit Soda",       desc:"Sparkling passion fruit soda",           price:95,   img:"Passion Fruit soda.jpeg" },
    { name:"Mojito Classic",           desc:"Lime, mint & sparkling water",           price:85,   img:"Mojito classic.jpeg" },
    { name:"Mojito Mixed Berry",       desc:"Berry-loaded mojito",                    price:95,   img:"Mojito Mixed Berry.jpeg" },
    { name:"Mojito Blue Berry",        desc:"Blueberry & mint mojito",                price:90,   img:"Mojito Blue Berry.jpeg" },
    { name:"Sunrise",                  desc:"Layered orange & grenadine soda",        price:80,   img:"Sunrise.jpeg" },
    { name:"Sunshine",                 desc:"Citrus & tropical soda blend",           price:80,   img:"Sunshine.jpeg" },
    { name:"Blue Sky",                 desc:"Blue curacao & sparkling water",         price:90,   img:"Blue sky.jpeg" },
    { name:"Blue Colada",              desc:"Coconut & blue curacao soda",            price:85,   img:"Blue Colada.jpeg" },
    { name:"Mojito Red Bull",          desc:"Mojito with a Redbull kick",             price:100,  img:"Mojito Red Bull.jpeg" },
    { name:"Mojito Mixed Red Bull",    desc:"Mixed berry mojito + Redbull",           price:110,  img:"Mojito Mixed Red Bull.jpeg" },
    { name:"DOSKI MIX",                desc:"Our signature secret blend",             price:90,   img:"DOSKI MIX.jpeg" },
  ]},

  /* 10 ── Frappe Drinks */
  { id:"frappe", name:"Frappe Drinks", emoji:"", img:"Frappe Drinks.jpeg", items:[
    { name:"Frappe Coffee",        desc:"Classic blended coffee frappe",          price:85,   img:"Frappe coffee.jpeg" },
    { name:"Vanilla Frappe",       desc:"Creamy vanilla blended frappe",          price:90,   img:"Vanilla Frappe.jpeg" },
    { name:"Salted Caramel Frappe",desc:"Sweet & salty caramel frappe",           price:100,  img:"Salted Caramel Frappe.jpeg" },
    { name:"Chocolate Frappe",     desc:"Rich blended chocolate",                 price:90,   img:"Chocolate Frappe.jpeg" },
    { name:"Caramel Frappe",       desc:"Smooth caramel blended",                 price:90,   img:"Caramel Frappe.jpeg" },
    { name:"Mocha Frappe",         desc:"Coffee & chocolate blended",             price:90,   img:"Mocha Frappe.jpeg" },
    { name:"Mango Frappe",         desc:"Tropical mango blended frappe",          price:90,   img:"Mango Frappe.jpeg" },
  ]},

  /* 11 ── Smoothie Mood */
  { id:"smoothie", name:"Smoothie Mood", emoji:"", img:"Smoothie Mood.jpeg", items:[
    { name:"Mango Smoothie",                  desc:"Tropical blended mango",              price:70,  img:"Mango Smoothies.jpeg" },
    { name:"Peach Smoothie",                  desc:"Soft sweet peach blend",              price:70,  img:"Peach Smoothies.jpeg" },
    { name:"Watermelon Smoothie",             desc:"Light & refreshing watermelon",       price:70,  img:"Watermelon Smoothies.jpeg" },
    { name:"Lemon-Strawberry Smoothie",       desc:"Tangy lemon meets strawberry",        price:70,  img:"Lemon-Strawberry Smoothies.jpeg" },
    { name:"Pineapple Smoothie",              desc:"Tropical pineapple blend",            price:70,  img:"Pineapple Smoothies.jpeg" },
    { name:"Kiwi Smoothie",                   desc:"Tangy fresh kiwi blend",              price:80,  img:"Kiwi Smoothies.jpeg" },
    { name:"Blueberry Smoothie",              desc:"Rich antioxidant blueberry",          price:80,  img:"Blueberry Smoothies.jpeg" },
    { name:"Passion Fruit Smoothie",          desc:"Tropical passion fruit",              price:80,  img:"Passion Fruit Smoothies.jpeg" },
    { name:"Lemon Mint Smoothie",             desc:"Refreshing lemon & mint blend",       price:80,  img:"Lemon Mint Smoothies.jpeg" },
    { name:"Mixed Berry Smoothie",            desc:"Berry medley blended smooth",         price:90,  img:"Mixed Berry Smoothies.jpeg" },
    { name:"DOSKI Smoothie",                  desc:"Special order — our house blend",     price:90,  img:"" },
  ]},

  /* 12 ── Matcha Vibes */
  { id:"matcha", name:"Matcha Vibes", emoji:"", img:"Matcha Vibes.jpeg", items:[
    { name:"Iced Matcha",            desc:"Premium ceremonial matcha over ice",       price:95,   img:"Iced Matcha.jpeg" },
    { name:"Iced Spanish Matcha",    desc:"Condensed milk & matcha over ice",         price:110,  img:"Iced Spanish Matcha.jpeg" },
    { name:"Iced Strawberry Matcha", desc:"Matcha layered with strawberry",           price:110,  img:"Iced Strawberry Matcha.jpeg" },
    { name:"Iced Mango Matcha",      desc:"Tropical mango meets matcha",              price:110,  img:"Iced Mango Matcha.jpeg" },
    { name:"Coconut Matcha",         desc:"Coconut milk & ceremonial matcha",         price:110,  img:"Coconut Matcha.jpeg" },
  ]},

  
  /* 4 ── Make It Yours */
  { id:"make-it-yours", name:"Make It Yours", emoji:"", img:"Make It Yours.jpeg", items:[
    { name:"Milk — Coconut / Oat", desc:"Plant-based milk upgrade",             price:20,  img:"" },
    { name:"Extra Sauce",           desc:"Chocolate, caramel, or vanilla",       price:15,  img:"" },
    { name:"Flavour",               desc:"Add your favourite syrup",             price:20,  img:"" },
    { name:"Honey",                 desc:"Pure natural honey drizzle",           price:20,  img:"" },
  ]},

];
const CURRENCY = "EGP";

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);

/* ---------- iOS / Safari detection ----------
   Adds  .is-ios  on <html> so CSS can kill the specific
   effects that tank performance on iOS WebKit:
   blur filters, continuous box-shadow animations, etc.     */
(function detectIOS(){
  const ua  = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) ||
                /* iPadOS 13+ reports MacIntel */
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (isIOS) document.documentElement.classList.add('is-ios');
})();

/**
 * Renders the product image area.
 * If img is provided → real photo with cover fit.
 * Otherwise → elegant gold placeholder (no emoji cup).
 */
function productThumb(img, name){
  if(img){
    return `<img src="${img}" alt="${name}" loading="lazy"
      onerror="this.parentElement.classList.add('item-thumb--placeholder');this.remove()">`;
  }
  /* Gold placeholder — no emoji, just a warm gradient mark */
  return '';
}

/* ---------- Atmospheric dust particles ----------
   Each particle gets its OWN @keyframes injected with
   literal pixel values — no var() inside @keyframes,
   no animation shorthand with var() in the delay slot.
   This guarantees cross-browser compatibility.
   --------------------------------------------------- */
(function spawnDust(){
  /* Skip entirely on mobile — CSS also hides them, but this saves JS + memory */
  if(window.innerWidth <= 768) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const field = document.getElementById('dustField');
  if(!field) return;

  /* A shared <style> tag we'll append unique keyframes into */
  const styleEl = document.createElement('style');
  document.head.appendChild(styleEl);
  const sheet = styleEl.sheet;

  /* Reduced from 30 → 18 particles for better GPU performance */
  const COUNT = 18;

  for(let i = 0; i < COUNT; i++){
    /* Position */
    const x   = (Math.random() * 98).toFixed(1);        /* % across screen */
    const y   = (15 + Math.random() * 72).toFixed(1);   /* % down screen   */

    /* Size: 1–3 px, mostly tiny */
    const sz  = (.9 + Math.random() * 2.1).toFixed(1);

    /* Drift: slight horizontal wobble + rise */
    const dx  = Math.round((Math.random() - 0.5) * 70); /* px, ±35 */
    const dy  = -Math.round(70 + Math.random() * 110);  /* px, upward */

    /* Peak opacity — subtle warm glow */
    const op  = (.15 + Math.random() * 0.30).toFixed(2);

    /* Timing */
    const dur = (11 + Math.random() * 17).toFixed(1);   /* seconds */
    const del = -(Math.random() * parseFloat(dur));      /* pre-offset so not all sync */

    /* Unique keyframe name for this particle */
    const kfName = `dp${i}`;

    /* Inject @keyframes with LITERAL values (no var()) */
    const kfRule = `
      @keyframes ${kfName} {
        0%   { opacity:0;           transform:translate(0px, 0px)        scale(1)   }
        18%  { opacity:${op}                                                        }
        82%  { opacity:${op}                                                        }
        100% { opacity:0;           transform:translate(${dx}px,${dy}px) scale(.35) }
      }`;
    try{ sheet.insertRule(kfRule, sheet.cssRules.length); }
    catch(e){ styleEl.textContent += kfRule; }

    /* Build the element */
    const d = document.createElement('div');
    d.className = 'dust';

    /* Inline styles — use individual animation-* props, never the shorthand */
    d.style.left                    = x   + '%';
    d.style.top                     = y   + '%';
    d.style.width                   = sz  + 'px';
    d.style.height                  = sz  + 'px';
    d.style.background              = `rgba(212,167,60,${op})`;
    d.style.animationName           = kfName;
    d.style.animationDuration       = dur + 's';
    d.style.animationTimingFunction = 'ease-in-out';
    d.style.animationDelay          = del.toFixed(1) + 's';
    d.style.animationIterationCount = 'infinite';
    d.style.animationFillMode       = 'both';

    field.appendChild(d);
  }
})();


/* ---------- render categories ---------- */
function renderCategories(){
  const wrap = $("categories");
  wrap.innerHTML = MENU.map((c,i)=>`
    <article
      class="card"
      style="animation-delay:${i * 0.13}s"
      data-id="${c.id}"
      tabindex="0"
      aria-label="${c.name}"
    >
      <!-- Full-bleed image layer -->
      <div class="card-img-wrap${c.img ? '' : ' no-img'}">
        ${c.img
          ? `<img src="${c.img}" alt="${c.name}" loading="lazy"
               onerror="this.parentElement.classList.add('no-img');this.style.display='none';this.insertAdjacentHTML('afterend','<span class=\\'card-emoji-fallback\\'>${c.emoji}</span>')">`
          : `<span class="card-emoji-fallback">${c.emoji}</span>`
        }
      </div>

      <!-- Gradient overlay for text legibility -->
      <div class="card-gradient"></div>

      <!-- Category label -->
      <div class="card-name">${c.name}</div>
    </article>`).join("");

  wrap.querySelectorAll(".card").forEach(el=>{
    el.addEventListener("click", () => openCategory(el.dataset.id));
    el.addEventListener("keydown", e => {
      if(e.key === "Enter" || e.key === " ") openCategory(el.dataset.id);
    });
  });
}

/* ---------- open a category ---------- */
function openCategory(id){
  const cat = MENU.find(c=>c.id===id);
  $("catTitle").textContent = cat.name;

  /* Build product cards — vertical layout, image on top */
  $("productsGrid").innerHTML = cat.items.map((p, i) => {
    const hasImg = Boolean(p.img);
    const delayMs = i * 90; /* 90 ms stagger between cards */
    return `
    <article
      class="item"
      style="--stagger:${delayMs}ms"
      aria-label="${p.name}, ${p.price} ${CURRENCY}"
    >
      <!-- Product image or placeholder -->
      <div class="item-thumb${hasImg ? '' : ' item-thumb--placeholder'}">
        ${hasImg
          ? `<img src="${p.img}" alt="${p.name}" loading="lazy"
               onerror="this.parentElement.classList.add('item-thumb--placeholder');this.remove()">`
          : ''
        }
      </div>

      <!-- Text content -->
      <div class="item-body">
        <div class="item-info">
          <h4 class="item-name">${p.name}</h4>
          <p  class="item-desc">${p.desc}</p>
        </div>
        <div class="item-price">${p.price} <span class="item-currency">${CURRENCY}</span></div>
      </div>
    </article>`;
  }).join("");

  $("categories").classList.add("hidden");
  $("products").classList.remove("hidden");
  $("backBtn").classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});

  /* Push a history entry so phone back button returns to categories */
  history.pushState({ page: 'category', id }, '', '#category');
}

function backToCategories(){
  $("products").classList.add("hidden");
  $("backBtn").classList.add("hidden");
  $("categories").classList.remove("hidden");
  renderCategories();
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ---------- start ---------- */
/* Hide social footer on load — it appears after entering the menu */
$("socialFooter").classList.add("hidden");

$("enterBtn").addEventListener("click",()=>{
  const intro = $("intro");
  intro.style.transition = "opacity .6s, transform .6s";
  intro.style.opacity = 0; intro.style.transform = "scale(1.08)";
  setTimeout(()=>{
    intro.classList.add("hidden");

    /* Show the discount banner with a slide-down entrance */
    const banner = $("discountBanner");
    banner.classList.remove("hidden");

    const app = $("app");
    app.classList.remove("hidden");
    app.classList.add("with-banner");

    /* Show social media footer */
    $("socialFooter").classList.remove("hidden");

    renderCategories();

    /* Push initial menu state — prevents back button from leaving the site */
    history.pushState({ page: 'menu' }, '', '#menu');
  },600);
});

/* ---------- Handle phone / browser back button ---------- */
window.addEventListener('popstate', (e) => {
  const state = e.state;

  /* Back pressed while inside a category → go back to categories grid */
  if (state && state.page === 'menu') {
    /* User went back to #menu state — if products are visible, close them */
    if (!$("products").classList.contains('hidden')) {
      backToCategories();
      /* Re-push the menu state so back button doesn't leave next time */
      history.pushState({ page: 'menu' }, '', '#menu');
    }
    return;
  }

  /* Back pressed while on categories (no state / before #menu) → re-push to stay */
  if (!$("app").classList.contains('hidden')) {
    /* Still inside the menu — keep the user here */
    if (!$("products").classList.contains('hidden')) {
      backToCategories();
    }
    history.pushState({ page: 'menu' }, '', '#menu');
  }
});
$("backBtn").addEventListener("click", backToCategories);
