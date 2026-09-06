/* ANDOON 22 JEWELRY — Shared behaviour */

function formatPrice(n){
  return n.toLocaleString("en-NG");
}

document.addEventListener("DOMContentLoaded", () => {
  const IMG = "assets/images/";

  /* ---------- Mobile menu ---------- */
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const scrim = document.querySelector(".scrim");
  const closeBtn = document.querySelector(".mobile-menu-close");

  function openMenu(){
    mobileMenu?.classList.add("open");
    scrim?.classList.add("open");
    document.body.classList.add("menu-open");
  }
  function closeMenu(){
    mobileMenu?.classList.remove("open");
    scrim?.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
  hamburger?.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);
  scrim?.addEventListener("click", closeMenu);
  document.querySelectorAll(".mobile-menu a").forEach(a => a.addEventListener("click", closeMenu));

  /* ---------- Announcement bar dismiss ---------- */
  const announce = document.querySelector(".announce");
  const announceClose = document.querySelector(".announce-close");
  announceClose?.addEventListener("click", () => announce?.remove());

  /* ---------- Header background on scroll ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if(!header) return;
    if(window.scrollY > 30){ header.style.background = "rgba(255,255,255,0.98)"; }
    else{ header.style.background = "rgba(255,255,255,0.92)"; }
  };
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  /* ---------- Scroll reveal ----------
     Uses a single observer that any element (including ones injected
     later, e.g. product cards) can register with via revealObserve(). */
  let io = null;
  if("IntersectionObserver" in window){
    io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.1, rootMargin:"0px 0px -40px 0px" });
  }
  function revealObserve(el){
    if(io) io.observe(el);
    else el.classList.add("in");
  }
  window.revealObserve = revealObserve;
  document.querySelectorAll(".reveal").forEach(revealObserve);

  /* ---------- Footer year ---------- */
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

  /* ---------- WhatsApp / Facebook links wired from config ---------- */
  document.querySelectorAll("[data-wa-link]").forEach(el => {
    el.href = waLink(el.getAttribute("data-wa-message") || "");
  });
  document.querySelectorAll("[data-fb-link]").forEach(el => {
    el.href = SITE_CONFIG.facebookUrl;
  });
  document.querySelectorAll("[data-ig-link]").forEach(el => {
    if(SITE_CONFIG.instagramUrl){ el.href = SITE_CONFIG.instagramUrl; }
    else{ el.style.display = "none"; }
  });

  /* ======================================================
     Product card builder — used on Home + Shop
     ====================================================== */
  function vitrineHTML(){
    return `<div class="vitrine"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i></div>`;
  }

  function productCard(p, index){
    const a = document.createElement("a");
    a.href = `product.html?id=${p.id}`;
    a.className = "product-card reveal";
    a.style.setProperty("--i", index % 8);
    a.innerHTML = `
      <div class="product-media">
        <span class="product-tag">${p.category}</span>
        ${p.isNew ? `<span class="product-tag product-tag-new">New</span>` : ""}
        <img src="${IMG}${p.images[0]}" alt="${p.name}" loading="lazy">
        ${vitrineHTML()}
        <span class="product-quickview">View Details</span>
      </div>
      <div class="product-info">
        <div class="cat">${p.category}</div>
        <h3>${p.name}</h3>
      </div>`;
    revealObserve(a);
    return a;
  }
  window.productCard = productCard;

  /* ---------- Featured pieces (home) ---------- */
  const featuredGrid = document.querySelector("[data-featured-grid]");
  if(featuredGrid){
    const count = parseInt(featuredGrid.getAttribute("data-count") || "8", 10);
    PRODUCTS.slice(0, count).forEach((p, i) => featuredGrid.appendChild(productCard(p, i)));
  }

  /* ---------- Full shop grid with filters ---------- */
  const shopGrid = document.querySelector("[data-shop-grid]");
  if(shopGrid){
    const tabs = document.querySelectorAll(".filter-tabs button[data-cat]");
    const newToggle = document.querySelector("[data-new-toggle]");
    const countEl = document.querySelector("[data-result-count]");
    const params = new URLSearchParams(window.location.search);
    let activeCat = params.get("category") || "All";
    const searchTerm = (params.get("search") || "").trim().toLowerCase();
    let newOnly = params.get("sort") === "new";
    const toolbarHeading = document.querySelector("[data-shop-heading]");

    function render(){
      shopGrid.innerHTML = "";
      let list = activeCat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCat);
      if(newOnly){
        list = list.filter(p => p.isNew);
      }
      if(searchTerm){
        list = list.filter(p =>
          p.name.toLowerCase().includes(searchTerm) ||
          p.category.toLowerCase().includes(searchTerm) ||
          p.material.toLowerCase().includes(searchTerm)
        );
      }
      if(!list.length){
        shopGrid.innerHTML = `<div class="empty-state">No pieces found — try a different search or category.</div>`;
      } else {
        list.forEach((p, i) => shopGrid.appendChild(productCard(p, i)));
      }
      if(countEl) countEl.textContent = `${list.length} piece${list.length === 1 ? "" : "s"}`;
      tabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-cat") === activeCat));
      newToggle?.classList.toggle("active", newOnly);
      if(toolbarHeading) toolbarHeading.textContent = newOnly ? "New Arrivals" : "The Full Collection";
    }
    tabs.forEach(t => t.addEventListener("click", () => {
      activeCat = t.getAttribute("data-cat");
      render();
    }));
    newToggle?.addEventListener("click", () => {
      newOnly = !newOnly;
      render();
    });
    render();
  }

  /* ======================================================
     Product detail page
     ====================================================== */
  const pdRoot = document.querySelector("[data-product-detail]");
  if(pdRoot){
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

    document.title = `${product.name} — Andoon 22 Jewelry`;

    const mainImg = pdRoot.querySelector("[data-pd-main-img]");
    const thumbWrap = pdRoot.querySelector("[data-pd-thumbs]");
    mainImg.src = IMG + product.images[0];
    mainImg.alt = product.name;
    thumbWrap.innerHTML = "";
    if(product.images.length > 1){
      product.images.forEach((img, i) => {
        const b = document.createElement("button");
        b.className = i === 0 ? "active" : "";
        b.innerHTML = `<img src="${IMG}${img}" alt="${product.name} view ${i+1}">`;
        b.addEventListener("click", () => {
          mainImg.src = IMG + img;
          thumbWrap.querySelectorAll("button").forEach(x => x.classList.remove("active"));
          b.classList.add("active");
        });
        thumbWrap.appendChild(b);
      });
    }

    pdRoot.querySelector("[data-pd-cat]").textContent = product.category;
    pdRoot.querySelector("[data-pd-name]").textContent = product.name;
    pdRoot.querySelector("[data-pd-desc]").textContent = product.description;
    pdRoot.querySelector("[data-pd-material]").textContent = product.material;
    pdRoot.querySelector("[data-pd-category]").textContent = product.category;
    pdRoot.querySelector("[data-pd-availability]").textContent = product.availability;

    const waBtn = pdRoot.querySelector("[data-pd-wa]");
    if(waBtn) waBtn.href = waLink(waProductMessage(product.name));

    const crumb = document.querySelector("[data-pd-crumb]");
    if(crumb) crumb.textContent = product.name;

    /* Related products */
    const relatedGrid = document.querySelector("[data-related-grid]");
    if(relatedGrid){
      const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
      const fallback = related.length ? related : PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);
      fallback.forEach((p, i) => relatedGrid.appendChild(productCard(p, i)));
    }
  }

  /* ---------- Collections (home) ---------- */
  const collectionsGrid = document.querySelector("[data-collections-grid]");
  if(collectionsGrid){
    const layout = ["wide","","tall",""]; // pattern hints applied via classes below
    collectionsGrid.querySelectorAll("[data-collection]").forEach(card => {
      const name = card.getAttribute("data-collection");
      const c = COLLECTIONS.find(x => x.name === name);
      if(!c) return;
      card.href = `shop.html?category=${encodeURIComponent(c.category)}`;
      card.querySelector("img").src = IMG + c.image;
      card.querySelector("img").alt = c.name;
      card.querySelector("[data-c-name]").textContent = c.name;
      card.querySelector("[data-c-desc]").textContent = c.description;
    });
  }
});
