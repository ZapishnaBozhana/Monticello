// Чекаємо, поки завантажиться вся сторінка
document.addEventListener("DOMContentLoaded", function () {
  // 1. Ініціалізація карти.
  // [40.678, -73.944] — це координати Брукліна з макету.
  // 13 — це масштаб (чим більше число, тим ближче карта).
  var map = L.map("map").setView([40.678, -73.944], 16);

  // 2. Підключаємо шар карти (дизайн).
  // Ми беремо стиль 'light_all', щоб карта була світлою та стильною, як на дизайні.
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution: "© OpenStreetMap contributors",
    },
  ).addTo(map);

  // 3. Створюємо кастомну іконку для маркера (опціонально)
  // Якщо хочеш просто стандартний синій маркер — пропусти цей пункт і читай далі.
  var myIcon = L.icon({
    iconUrl: "./images/marker.png", // шлях до картинки маркера в твоєму проекті
    iconSize: [40, 40], // розмір іконки
  });

  // 4. Ставимо маркер на карту
  L.marker([40.681, -73.939])
    .addTo(map)
    .bindPopup("Monticello Office") // Текст, який з'явиться при кліку
    .openPopup();
});
