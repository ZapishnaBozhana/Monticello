$(document).ready(function () {
  $(".hero__scroll-btn, .header__link").on("click", function (event) {
    event.preventDefault();

    var target = $(this).attr("href");
    var $section = $(target);
    var scrollPoint;

    if ($(this).hasClass("hero__scroll-btn")) {
      scrollPoint = $section.offset().top;
    } else {
      scrollPoint =
        $section.offset().top +
        $section.outerHeight() / 2 -
        $(window).height() / 2;
    }
    $("html, body").animate(
      {
        scrollTop: scrollPoint,
      },
      1000,
    );
  });
});
//Slider
$(document).ready(function () {
  $(".news__list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    dotsClass: "my-custom-dots",
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><svg width="6" height="16"><use href="./images/sprite.svg#icon-arrow"></use></svg></button>',
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><svg width="6" height="16"><use href="./images/sprite.svg#icon-arrow-right"></use></svg></button>',
  });
});
//Map
document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([40.678, -73.944], 16);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution: "© OpenStreetMap contributors",
    },
  ).addTo(map);

  var myIcon = L.icon({
    iconUrl: "./images/marker.png",
    iconSize: [40, 40],
  });

  L.marker([40.681, -73.939])
    .addTo(map)
    .bindPopup("Monticello Office")
    .openPopup();
});
