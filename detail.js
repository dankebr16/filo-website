const whatsappNumber = "905302479714";
const titleEl = document.getElementById("detailTitle");
const imageEl = document.getElementById("detailImage");
const specsEl = document.getElementById("detailSpecs");
const waBtn = document.getElementById("detailWaBtn");
const langButtons = document.querySelectorAll(".lang-btn");
const prevImageBtn = document.getElementById("prevImageBtn");
const nextImageBtn = document.getElementById("nextImageBtn");
const thumbGrid = document.getElementById("thumbGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
let currentLang = localStorage.getItem("siteLang") || "tr";
let currentImageIndex = 0;

const i18n = {
  tr: {
    back_bikes: "Motorlara Dön",
    contact: "İletişim",
    detail_eyebrow: "Motor Detayı",
    detail_info: "Teknik ve Kiralama Bilgileri",
    rent_btn: "WhatsApp’tan Kirala",
    back_btn: "Geri Dön",
    not_found: "Motor bulunamadı",
    retry: "Lütfen motorlar sayfasından tekrar seçim yapın.",
    loading: "Model Yükleniyor...",
    labels: {
      daily: "Günlük Fiyat",
      weekly: "Haftalık Fiyat",
      monthly: "Aylık Fiyat",
      deposit: "Depozito",
      license: "Ehliyet",
      engine: "Motor Hacmi",
      fuel: "Yakıt",
    },
    prev_btn: "Önceki",
    next_btn: "Sonraki",
  },
  en: {
    back_bikes: "Back to Bikes",
    contact: "Contact",
    detail_eyebrow: "Bike Details",
    detail_info: "Technical & Rental Info",
    rent_btn: "Rent on WhatsApp",
    back_btn: "Back",
    not_found: "Bike not found",
    retry: "Please select a bike again from the bikes page.",
    loading: "Loading model...",
    labels: {
      daily: "Daily Price",
      weekly: "Weekly Price",
      monthly: "Monthly Price",
      deposit: "Deposit",
      license: "License",
      engine: "Engine",
      fuel: "Fuel",
    },
    prev_btn: "Previous",
    next_btn: "Next",
  },
};

const bikes = {
  "Honda Dio 110": {
    image: "./honda-dio-110.jpg",
    gallery: [
      "./honda-dio-110.jpg",
      "./honda-dio-110.jpg",
      "./honda-dio-110.jpg",
      "./honda-dio-110.jpg",
      "./honda-dio-110.jpg",
      "./honda-dio-110.jpg",
    ],
    dailyPrice: "750 TL",
    weeklyPrice: "4.800 TL",
    monthlyPrice: "10.000 TL",
    deposit: "3.000 TL",
    license: "A1 / A2",
    engine: "110 cc",
    fuel: "Benzin",
  },
  "Yamaha NMAX 125": {
    image: "./yamaha-nmax-125.jpg",
    gallery: [
      "./yamaha-nmax-125.jpg",
      "./yamaha-nmax-125.jpg",
      "./yamaha-nmax-125.jpg",
      "./yamaha-nmax-125.jpg",
      "./yamaha-nmax-125.jpg",
      "./yamaha-nmax-125.jpg",
    ],
    dailyPrice: "1.100 TL",
    weeklyPrice: "7.000 TL",
    monthlyPrice: "16.000 TL",
    deposit: "5.000 TL",
    license: "A1 / A2",
    engine: "125 cc",
    fuel: "Benzin",
  },
  "Honda PCX 125": {
    image: "./honda-pcx-125.jpg",
    gallery: [
      "./honda-pcx-125.jpg",
      "./honda-pcx-125.jpg",
      "./honda-pcx-125.jpg",
      "./honda-pcx-125.jpg",
      "./honda-pcx-125.jpg",
      "./honda-pcx-125.jpg",
    ],
    dailyPrice: "1.000 TL",
    weeklyPrice: "6.500 TL",
    monthlyPrice: "16.000 TL",
    deposit: "5.000 TL",
    license: "A1 / A2",
    engine: "125 cc",
    fuel: "Benzin",
  },
};

const params = new URLSearchParams(window.location.search);
const model = params.get("model");
const bike = bikes[model];

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[currentLang][key]) el.textContent = i18n[currentLang][key];
  });
  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function renderGallery() {
  if (!bike) return;
  const images = bike.gallery || [bike.image];
  const safeIndex = ((currentImageIndex % images.length) + images.length) % images.length;
  currentImageIndex = safeIndex;
  imageEl.src = images[currentImageIndex];
  lightboxImage.src = images[currentImageIndex];
  thumbGrid.innerHTML = "";

  images.forEach((src, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `thumb-item ${index === currentImageIndex ? "active" : ""}`;
    item.innerHTML = `<img src="${src}" alt="Galeri görseli ${index + 1}" />`;
    item.addEventListener("click", () => {
      currentImageIndex = index;
      renderGallery();
    });
    thumbGrid.appendChild(item);
  });
}

function renderSpecs() {
  if (!bike) return;
  const l = i18n[currentLang].labels;
  specsEl.innerHTML = `
    <li><strong>${l.daily}:</strong> ${bike.dailyPrice}</li>
    <li><strong>${l.weekly}:</strong> ${bike.weeklyPrice}</li>
    <li><strong>${l.monthly}:</strong> ${bike.monthlyPrice}</li>
    <li><strong>${l.deposit}:</strong> ${bike.deposit}</li>
    <li><strong>${l.license}:</strong> ${bike.license}</li>
    <li><strong>${l.engine}:</strong> ${bike.engine}</li>
    <li><strong>${l.fuel}:</strong> ${bike.fuel}</li>
  `;
}

applyLanguage();
langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem("siteLang", currentLang);
    applyLanguage();
    renderSpecs();
  });
});

if (!bike) {
  titleEl.textContent = i18n[currentLang].not_found;
  specsEl.innerHTML = `<li>${i18n[currentLang].retry}</li>`;
  waBtn.style.display = "none";
} else {
  titleEl.textContent = model;
  imageEl.src = bike.image;
  imageEl.alt = model;

  renderSpecs();
  renderGallery();

  waBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const message = `Merhaba, ${model} modeli için kiralama yapmak istiyorum. Bilgi alabilir miyim?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });

  prevImageBtn?.addEventListener("click", () => {
    currentImageIndex -= 1;
    renderGallery();
  });

  nextImageBtn?.addEventListener("click", () => {
    currentImageIndex += 1;
    renderGallery();
  });

  imageEl.addEventListener("click", () => {
    lightbox.classList.add("open");
  });

  lightboxClose?.addEventListener("click", () => {
    lightbox.classList.remove("open");
  });

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("open");
    }
  });
}
