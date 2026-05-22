// WhatsApp yapılandırması
const whatsappNumber = "905302479714";
const defaultMessage =
  "Merhaba, EREN MOTOR FILO üzerinden motor kiralamak istiyorum. Bilgi alabilir miyim?";

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav a");
const waButtons = document.querySelectorAll(".wa-btn");
const header = document.querySelector(".header");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const revealItems = document.querySelectorAll(".reveal");
const motorCards = document.querySelectorAll(".motor-card");

const licenseFilter = document.getElementById("licenseFilter");
const priceFilter = document.getElementById("priceFilter");
const calcMotor = document.getElementById("calcMotor");
const calcDays = document.getElementById("calcDays");
const calcBtn = document.getElementById("calcBtn");
const calcResult = document.getElementById("calcResult");


function openWhatsapp(message) {
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

// Mobil menü aç/kapat
menuToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Menü linklerinde smooth scroll + mobil menüyü kapatma
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    navMenu.classList.remove("open");
  });
});

// Motor bazlı WhatsApp mesajı
waButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const bikeName = button.dataset.bike;
    const message = bikeName
      ? `Merhaba, ${bikeName} modeli için kiralama yapmak istiyorum. Bilgi alabilir miyim?`
      : defaultMessage;
    openWhatsapp(message);
  });
});

// Scroll durumunda header gölgesi
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Form kontrolü ve WhatsApp gönderimi
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const bike = document.getElementById("bike").value.trim();
  const date = document.getElementById("date").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !bike || !date || !message) {
    formNote.textContent = "Lütfen tüm alanları doldurunuz.";
    formNote.style.color = "#ff7b7b";
    return;
  }

  const formMessage = `Merhaba, EREN MOTOR FILO üzerinden kiralama talebi oluşturmak istiyorum.
Ad Soyad: ${name}
Telefon: ${phone}
Motor: ${bike}
Tarih Aralığı: ${date}
Mesaj: ${message}`;

  formNote.textContent = "Talebiniz WhatsApp'a yönlendiriliyor...";
  formNote.style.color = "#9df7a4";
  openWhatsapp(formMessage);
  contactForm.reset();
});

// Motor filtreleme
function applyFilters() {
  const selectedLicense = licenseFilter?.value || "all";
  const selectedPrice = priceFilter?.value || "all";

  motorCards.forEach((card) => {
    const cardLicense = card.dataset.license || "";
    const cardPrice = Number(card.dataset.price || 0);

    const licenseMatch =
      selectedLicense === "all" || cardLicense.includes(selectedLicense);
    const priceMatch =
      selectedPrice === "all" || cardPrice <= Number(selectedPrice);

    card.style.display = licenseMatch && priceMatch ? "" : "none";
  });
}

licenseFilter?.addEventListener("change", applyFilters);
priceFilter?.addEventListener("change", applyFilters);

// Canlı fiyat hesaplama
calcBtn?.addEventListener("click", () => {
  const dailyPrice = Number(calcMotor?.value || 0);
  const days = Number(calcDays?.value || 0);
  const selectedOption = calcMotor?.selectedOptions?.[0];
  const deposit = Number(selectedOption?.dataset.deposit || 0);

  if (!dailyPrice || !days) {
    calcResult.textContent = "Lütfen motor seçin ve gün sayısı girin.";
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

// Scroll görünürlük animasyonu
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));
