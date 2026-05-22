const whatsappNumber = "905302479714";
const defaultMessage =
  "Merhaba, EMRE MOTOR BAKIM FILO uzerinden motor kiralamak istiyorum. Bilgi alabilir miyim?";

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav a");
const waButtons = document.querySelectorAll(".wa-btn");
const header = document.querySelector(".header");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const revealItems = document.querySelectorAll(".reveal");
const motorCards = document.querySelectorAll(".motor-card");
const langButtons = document.querySelectorAll(".lang-btn");

const licenseFilter = document.getElementById("licenseFilter");
const priceFilter = document.getElementById("priceFilter");
const calcMotor = document.getElementById("calcMotor");
const calcDays = document.getElementById("calcDays");
const calcBtn = document.getElementById("calcBtn");
const calcResult = document.getElementById("calcResult");
const pdfDownloadBtn = document.getElementById("pdfDownloadBtn");
const compareBikeA = document.getElementById("compareBikeA");
const compareBikeB = document.getElementById("compareBikeB");
const compareBtn = document.getElementById("compareBtn");
const compareResult = document.getElementById("compareResult");

const durationType = document.getElementById("durationType");
const durationCount = document.getElementById("durationCount");
const waSummaryBtn = document.getElementById("waSummaryBtn");
const bikeSelect = document.getElementById("bike");
const dateInput = document.getElementById("date");
const messageInput = document.getElementById("message");
const sumBike = document.getElementById("sumBike");
const sumDate = document.getElementById("sumDate");
const sumDuration = document.getElementById("sumDuration");
const sumRental = document.getElementById("sumRental");
const sumDeposit = document.getElementById("sumDeposit");
const sumTotal = document.getElementById("sumTotal");

const i18n = {
  tr: {
    nav_home: "Ana Sayfa",
    nav_bikes: "Motorlar",
    nav_terms: "Kiralama Sartlari",
    nav_faq: "SSS",
    nav_reviews: "Yorumlar",
    nav_about: "Hakkimizda",
    nav_contact: "Iletisim / WhatsApp",
    hero_eyebrow: "Bursa'da Profesyonel Motor Hizmeti",
    hero_title: "Bursa'da Guvenilir Motor Kiralama",
    hero_text:
      "Gunluk ve haftalik motor kiralama secenekleriyle ekonomik, bakimli ve guvenilir motosikletler EMRE MOTOR BAKIM FILO'da.",
    hero_cta: "Motorlari Incele",
    trust_1_t: "Bakimli Motorlar",
    trust_1_d: "Her teslimattan once teknik kontrolleri yapilmis, guvenli motorlar.",
    trust_2_t: "Hizli Kiralama",
    trust_2_d: "Kisa surede islem, net bilgilendirme ve kolay rezervasyon sureci.",
    trust_3_t: "Seffaf Sartlar",
    trust_3_d: "Surpriz maliyet olmadan acik fiyat ve net kiralama kosullari.",
    badge_1: "Sozlesmeli",
    badge_2: "Bakimli Teslim",
    badge_3: "Hizli Destek",
    bikes_eyebrow: "Motor Secenekleri",
    bikes_title: "Size Uygun Motoru Hemen Secin",
    filter_title: "Motor Filtrele",
    calc_title: "Canli Fiyat Hesaplama",
    calc_btn: "Hesapla",
    calc_hint: "Toplam tutari gormek icin hesapla.",
    compare_title: "Karsilastirma Modu",
    compare_btn: "Karsilastir",
    compare_hint: "Iki motor secip karsilastirma butonuna basin.",
    rent_btn: "WhatsApp'tan Kirala",
    detail_btn: "Detay Gor",
    faq_eyebrow: "Sik Sorulan Sorular",
    faq_title: "Kiralama Sureci Hakkinda",
    reviews_eyebrow: "Musteri Yorumlari",
    reviews_title: "Gercek Deneyimler",
    terms_eyebrow: "Kiralama Sartlari",
    terms_title: "Net ve Guvenilir Surec",
    pdf_btn: "Kiralama Sozlesmesi PDF Indir",
    word_btn: "Kiralama Sozlesmesi Word Indir",
    about_eyebrow: "Hakkimizda",
    contact_eyebrow: "Iletisim",
    contact_title: "Bize Ulasin",
    call_btn: "Tek Tik Ara",
    form_title: "Hizli Talep Formu",
    f_name: "Ad Soyad",
    f_phone: "Telefon",
    f_bike: "Kiralamak istediginiz motor",
    f_date: "Tarih",
    f_message: "Mesaj",
    send_btn: "Gonder",
    wa_float: "WhatsApp",
    duration_type: "Sure Tipi",
    duration_count: "Sure Adedi",
    wa_summary_btn: "Ozeti WhatsApp'a Gonder",
    summary_title: "Rezervasyon Ozeti",
    summary_bike: "Motor:",
    summary_date: "Tarih:",
    summary_duration: "Sure:",
    summary_rental: "Kiralama:",
    summary_deposit: "Depozito:",
    summary_total: "Toplam:",
  },
  en: {
    nav_home: "Home",
    nav_bikes: "Bikes",
    nav_terms: "Rental Terms",
    nav_faq: "FAQ",
    nav_reviews: "Reviews",
    nav_about: "About",
    nav_contact: "Contact / WhatsApp",
    hero_eyebrow: "Professional Motorcycle Service in Bursa",
    hero_title: "Reliable Motorcycle Rental in Bursa",
    hero_text:
      "Economical, well-maintained and reliable motorcycles with daily and weekly rental options at EMRE MOTOR BAKIM FILO.",
    hero_cta: "Browse Bikes",
    trust_1_t: "Maintained Bikes",
    trust_1_d: "Safe motorcycles with technical checks before every delivery.",
    trust_2_t: "Fast Rental",
    trust_2_d: "Quick process, clear information and easy reservation flow.",
    trust_3_t: "Transparent Terms",
    trust_3_d: "Clear pricing and terms without hidden costs.",
    badge_1: "Contract-Based",
    badge_2: "Maintained Delivery",
    badge_3: "Fast Support",
    bikes_eyebrow: "Bike Options",
    bikes_title: "Choose the Right Bike for You",
    filter_title: "Filter Bikes",
    calc_title: "Live Price Calculator",
    calc_btn: "Calculate",
    calc_hint: "Calculate to see the total amount.",
    compare_title: "Comparison Mode",
    compare_btn: "Compare",
    compare_hint: "Select two bikes and click compare.",
    rent_btn: "Rent on WhatsApp",
    detail_btn: "View Details",
    faq_eyebrow: "Frequently Asked Questions",
    faq_title: "About the Rental Process",
    reviews_eyebrow: "Customer Reviews",
    reviews_title: "Real Experiences",
    terms_eyebrow: "Rental Terms",
    terms_title: "Clear and Reliable Process",
    pdf_btn: "Download Rental Contract PDF",
    word_btn: "Download Rental Contract Word",
    about_eyebrow: "About Us",
    contact_eyebrow: "Contact",
    contact_title: "Get in Touch",
    call_btn: "Call Now",
    form_title: "Quick Request Form",
    f_name: "Full Name",
    f_phone: "Phone",
    f_bike: "Bike You Want to Rent",
    f_date: "Date",
    f_message: "Message",
    send_btn: "Send",
    wa_float: "WhatsApp",
    duration_type: "Duration Type",
    duration_count: "Duration Count",
    wa_summary_btn: "Send Summary to WhatsApp",
    summary_title: "Reservation Summary",
    summary_bike: "Bike:",
    summary_date: "Date:",
    summary_duration: "Duration:",
    summary_rental: "Rental:",
    summary_deposit: "Deposit:",
    summary_total: "Total:",
  },
};

const compareData = {
  "Honda Dio 110": {
    gunluk: "750 TL",
    haftalik: "4.800 TL",
    aylik: "10.000 TL",
    depozito: "3.000 TL",
    ehliyet: "A1 / A2",
    motor: "110 cc",
  },
  "Yamaha NMAX 125": {
    gunluk: "1.100 TL",
    haftalik: "7.000 TL",
    aylik: "16.000 TL",
    depozito: "5.000 TL",
    ehliyet: "A1 / A2",
    motor: "125 cc",
  },
  "Honda PCX 125": {
    gunluk: "1.000 TL",
    haftalik: "6.500 TL",
    aylik: "16.000 TL",
    depozito: "5.000 TL",
    ehliyet: "A1 / A2",
    motor: "125 cc",
  },
};

const reservationPricing = {
  "Honda Dio 110": { daily: 750, weekly: 4800, monthly: 10000, deposit: 3000 },
  "Yamaha NMAX 125": { daily: 1100, weekly: 7000, monthly: 16000, deposit: 5000 },
  "Honda PCX 125": { daily: 1000, weekly: 6500, monthly: 16000, deposit: 5000 },
};

function setLanguage(lang) {
  const active = i18n[lang] ? lang : "tr";
  localStorage.setItem("siteLang", active);
  document.documentElement.lang = active;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[active][key]) el.textContent = i18n[active][key];
  });
  langButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === active));
}

function openWhatsapp(message) {
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

function formatMoney(value) {
  return `${value.toLocaleString("tr-TR")} TL`;
}

function getReservationSummary() {
  const bike = bikeSelect?.value || "";
  const dateValue = dateInput?.value.trim() || "-";
  const period = durationType?.value || "daily";
  const count = Number(durationCount?.value || 0);
  const pricing = reservationPricing[bike];
  if (!bike || !pricing || !count) {
    return {
      bike: bike || "-",
      date: dateValue,
      durationText: "-",
      rental: 0,
      deposit: 0,
      total: 0,
      valid: false,
    };
  }
  const unit = period === "weekly" ? "hafta" : period === "monthly" ? "ay" : "gun";
  const unitPrice = pricing[period];
  const rental = unitPrice * count;
  const total = rental + pricing.deposit;
  return {
    bike,
    date: dateValue,
    durationText: `${count} ${unit}`,
    rental,
    deposit: pricing.deposit,
    total,
    valid: true,
  };
}

function updateReservationSummary() {
  if (!sumBike) return;
  const summary = getReservationSummary();
  sumBike.textContent = summary.bike;
  sumDate.textContent = summary.date;
  sumDuration.textContent = summary.durationText;
  sumRental.textContent = summary.valid ? formatMoney(summary.rental) : "-";
  sumDeposit.textContent = summary.valid ? formatMoney(summary.deposit) : "-";
  sumTotal.textContent = summary.valid ? formatMoney(summary.total) : "-";
}

const savedLang = localStorage.getItem("siteLang") || "tr";
setLanguage(savedLang);
langButtons.forEach((btn) => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));

menuToggle?.addEventListener("click", () => navMenu.classList.toggle("open"));

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    navMenu.classList.remove("open");
  });
});

waButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const bikeName = button.dataset.bike;
    const message = bikeName
      ? `Merhaba, ${bikeName} modeli icin kiralama yapmak istiyorum. Bilgi alabilir miyim?`
      : defaultMessage;
    openWhatsapp(message);
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

["change", "input"].forEach((eventName) => {
  bikeSelect?.addEventListener(eventName, updateReservationSummary);
  dateInput?.addEventListener(eventName, updateReservationSummary);
  durationType?.addEventListener(eventName, updateReservationSummary);
  durationCount?.addEventListener(eventName, updateReservationSummary);
});
updateReservationSummary();

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = messageInput?.value.trim() || "";
  const summary = getReservationSummary();
  if (!name || !phone || !summary.valid || !message) {
    formNote.textContent = "Lutfen tum alanlari doldurunuz.";
    formNote.style.color = "#ff7b7b";
    return;
  }
  const formMessage = `Merhaba, EMRE MOTOR BAKIM FILO uzerinden kiralama talebi olusturmak istiyorum.
Ad Soyad: ${name}
Telefon: ${phone}
Motor: ${summary.bike}
Tarih: ${summary.date}
Sure: ${summary.durationText}
Kiralama: ${formatMoney(summary.rental)}
Depozito: ${formatMoney(summary.deposit)}
Toplam: ${formatMoney(summary.total)}
Mesaj: ${message}`;
  formNote.textContent = "Talebiniz WhatsApp'a yonlendiriliyor...";
  formNote.style.color = "#9df7a4";
  openWhatsapp(formMessage);
  contactForm.reset();
  updateReservationSummary();
});

waSummaryBtn?.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = messageInput?.value.trim() || "-";
  const summary = getReservationSummary();
  if (!name || !phone || !summary.valid) {
    formNote.textContent = "Ozet gondermek icin ad, telefon ve rezervasyon bilgilerini doldurun.";
    formNote.style.color = "#ff7b7b";
    return;
  }
  const summaryMessage = `Merhaba, rezervasyon ozeti gondermek istiyorum.
Ad Soyad: ${name}
Telefon: ${phone}
Motor: ${summary.bike}
Tarih: ${summary.date}
Sure: ${summary.durationText}
Kiralama: ${formatMoney(summary.rental)}
Depozito: ${formatMoney(summary.deposit)}
Toplam: ${formatMoney(summary.total)}
Mesaj: ${message}`;
  openWhatsapp(summaryMessage);
});

function applyFilters() {
  const selectedLicense = licenseFilter?.value || "all";
  const selectedPrice = priceFilter?.value || "all";
  motorCards.forEach((card) => {
    const cardLicense = card.dataset.license || "";
    const cardPrice = Number(card.dataset.price || 0);
    const licenseMatch = selectedLicense === "all" || cardLicense.includes(selectedLicense);
    const priceMatch = selectedPrice === "all" || cardPrice <= Number(selectedPrice);
    card.style.display = licenseMatch && priceMatch ? "" : "none";
  });
}
licenseFilter?.addEventListener("change", applyFilters);
priceFilter?.addEventListener("change", applyFilters);

calcBtn?.addEventListener("click", () => {
  const dailyPrice = Number(calcMotor?.value || 0);
  const days = Number(calcDays?.value || 0);
  const selectedOption = calcMotor?.selectedOptions?.[0];
  const deposit = Number(selectedOption?.dataset.deposit || 0);
  if (!dailyPrice || !days) {
    calcResult.textContent = "Lutfen motor secin ve gun sayisi girin.";
    calcResult.style.color = "#ff7b7b";
    return;
  }
  const rentalTotal = dailyPrice * days;
  const grandTotal = rentalTotal + deposit;
  calcResult.style.color = "#9df7a4";
  calcResult.textContent = `Kiralama: ${rentalTotal.toLocaleString("tr-TR")} TL | Depozito: ${deposit.toLocaleString(
    "tr-TR"
  )} TL | Toplam: ${grandTotal.toLocaleString("tr-TR")} TL`;
});

compareBtn?.addEventListener("click", () => {
  const bikeA = compareBikeA?.value;
  const bikeB = compareBikeB?.value;
  if (!bikeA || !bikeB) {
    compareResult.innerHTML = "Lutfen iki motor da secin.";
    return;
  }
  if (bikeA === bikeB) {
    compareResult.innerHTML = "Lutfen farkli iki motor secin.";
    return;
  }
  const dataA = compareData[bikeA];
  const dataB = compareData[bikeB];
  compareResult.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Ozellik</th>
          <th>${bikeA}</th>
          <th>${bikeB}</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Gunluk Fiyat</td><td>${dataA.gunluk}</td><td>${dataB.gunluk}</td></tr>
        <tr><td>Haftalik Fiyat</td><td>${dataA.haftalik}</td><td>${dataB.haftalik}</td></tr>
        <tr><td>Aylik Fiyat</td><td>${dataA.aylik}</td><td>${dataB.aylik}</td></tr>
        <tr><td>Depozito</td><td>${dataA.depozito}</td><td>${dataB.depozito}</td></tr>
        <tr><td>Ehliyet</td><td>${dataA.ehliyet}</td><td>${dataB.ehliyet}</td></tr>
        <tr><td>Motor Hacmi</td><td>${dataA.motor}</td><td>${dataB.motor}</td></tr>
      </tbody>
    </table>
  `;
});

pdfDownloadBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  const pdfPath = "./EREN_MOTOR_Kiralama_Sozlesmesi.pdf";
  try {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "EREN_MOTOR_Kiralama_Sozlesmesi.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    window.open(pdfPath, "_blank");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 }
);
revealItems.forEach((item) => observer.observe(item));
