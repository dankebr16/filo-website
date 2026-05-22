// WhatsApp yapılandırması
const whatsappNumber = "905302479714";
const defaultMessage =
  "Merhaba, EREN MOTOR üzerinden motor kiralamak istiyorum. Bilgi alabilir miyim?";

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav a");
const waButtons = document.querySelectorAll(".wa-btn");
const header = document.querySelector(".header");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const revealItems = document.querySelectorAll(".reveal");

// Mobil menü aç/kapat
menuToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Menü linklerinde yumuşak kaydırma + mobilde menüyü kapatma
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

// Tüm WhatsApp butonlarına hazır mesaj ile yönlendirme
waButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(waUrl, "_blank");
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

// Basit form kontrolü ve WhatsApp gönderimi
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

  const formMessage = `Merhaba, EREN MOTOR üzerinden kiralama talebi oluşturmak istiyorum.
Ad Soyad: ${name}
Telefon: ${phone}
Motor: ${bike}
Tarih Aralığı: ${date}
Mesaj: ${message}`;

  formNote.textContent = "Talebiniz WhatsApp'a yönlendiriliyor...";
  formNote.style.color = "#9df7a4";

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formMessage)}`;
  window.open(waUrl, "_blank");
  contactForm.reset();
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
