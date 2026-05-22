const whatsappNumber = "905302479714";
const titleEl = document.getElementById("detailTitle");
const imageEl = document.getElementById("detailImage");
const specsEl = document.getElementById("detailSpecs");
const waBtn = document.getElementById("detailWaBtn");

const bikes = {
  "Honda Dio 110": {
    image: "./honda-dio-110.jpg",
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

if (!bike) {
  titleEl.textContent = "Motor bulunamadı";
  specsEl.innerHTML = "<li>Lütfen motorlar sayfasından tekrar seçim yapın.</li>";
  waBtn.style.display = "none";
} else {
  titleEl.textContent = model;
  imageEl.src = bike.image;
  imageEl.alt = model;

  specsEl.innerHTML = `
    <li><strong>Günlük Fiyat:</strong> ${bike.dailyPrice}</li>
    <li><strong>Haftalık Fiyat:</strong> ${bike.weeklyPrice}</li>
    <li><strong>Aylık Fiyat:</strong> ${bike.monthlyPrice}</li>
    <li><strong>Depozito:</strong> ${bike.deposit}</li>
    <li><strong>Ehliyet:</strong> ${bike.license}</li>
    <li><strong>Motor Hacmi:</strong> ${bike.engine}</li>
    <li><strong>Yakıt:</strong> ${bike.fuel}</li>
  `;

  waBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const message = `Merhaba, ${model} modeli için kiralama yapmak istiyorum. Bilgi alabilir miyim?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
}
