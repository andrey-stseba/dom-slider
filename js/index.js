"use strict";

const images = [
  "https://img3.akspic.ru/originals/4/5/0/1/41054-pastbishhe-pejzazhi_gor-vygon-pole-utro-1080x1920.jpg?attachment=1",
  "https://klike.net/uploads/posts/2019-11/1574514232_49.jpg",
  "http://pristor.ru/wp-content/uploads/2018/08/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-%D0%BB%D0%B5%D1%82%D0%BE-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8-%D0%BB%D0%B5%D1%82%D0%B0-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-%D0%B8-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D1%8F-17.jpg",
];

const imageElement = document.querySelector("img");

const [btnPrev, btnNext] = document.querySelectorAll("#sliderContainer button");
//каррирование
const btnClickHendler =
  (direction = "next") =>
  (e) => {
    slider.currentIndex =
      slider[direction === "next" ? "nextIndex" : "prevIndex"];
    imageElement.classList.add("animation-slider");
    imageElement.setAttribute("src", slider.currentSlide);
    setTimeout(() => {
      imageElement.classList.remove("animation-slider");
    }, 3000);
  };

btnPrev.addEventListener("click", btnClickHendler("prev"));

btnNext.addEventListener("click", btnClickHendler());

loadImage(images[0]);

const slider = new Slider(images);

function loadImage(image) {
  imageElement.setAttribute("src", image);
}
