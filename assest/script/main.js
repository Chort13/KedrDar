document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");
  const bathhouseTitle = document.getElementById("bathhouse-title");
  const bathhouseDescription = document.getElementById("bathhouse-description");
  const bathhouseImage = document.getElementById("bathhouse-image");
  const bathhousePriceWeekdays = document.getElementById("weekdays");
  const bathhousePriceWeekends = document.getElementById("weekends");
  const sliderTrack = document.getElementById("sliderTrack");
  const prevSlideBtn = document.getElementById("prevSlide");
  const nextSlideBtn = document.getElementById("nextSlide");

  let currentIndex = 0;
  const bathhouseData = [
    {
      title: "Большая двинская баня",
      image: "assest/images/bathhouses-info/bolshaya_dvinskaya_1.jpg",
      sliderImages: [
        "assest/images/bathhouses-info/bolshaya_dvinskaya/bolshaya_dvinskaya_1.jpg",
        "assest/images/bathhouses-info/bolshaya_dvinskaya/bolshaya_dvinskaya_2.jpg",
        "assest/images/bathhouses-info/bolshaya_dvinskaya/bolshaya_dvinskaya_3.jpg",
        "assest/images/bathhouses-info/bolshaya_dvinskaya/bolshaya_dvinskaya_4.jpg",
        "assest/images/bathhouses-info/bolshaya_dvinskaya/bolshaya_dvinskaya_5.jpg",
      ],
      priceWeekdays: "2200 ₽ / час",
      priceWeekends: "2500 ₽ / час",
      description: `
      <p>Большая Двинская баня в банном комплексе «Кедровый дар» - это просторная баня с видом на Северную Двину, идеально подходящая для отдыха в компании до 10–12 человек. Гостей ждет увеличенная парилка с системой «второе дыхание», современная печь с закрытой каменкой прямого нагрева, создающая мелкодисперсный и легкий пар для настоящего банного удовольствия.</p>

      <p>В распоряжении гостей - уютная комната отдыха, купели фурако, терраса с видом на реку, зона для барбекю и ТВ-станция с голосовым помощником.</p>

      <p>Стоимость рассчитана до 5 человек. За дополнительных доплата 500 руб с человека за все время пребывания.Минимальный сеанс - баня 2 часа, баня плюс фурако 3 часа. Фурако не входит в стоимость аренды бани и оплачивается дополнительно.</p>
  `,
    },
    {
      title: "Большая кедровая баня",
      image: "assest/images/bathhouses-info/bolshaya_kegrovaya.jpg",
      sliderImages: [
        "assest/images/bathhouses-info/bolshaya_kegrovaya/bolshaya_kegrovaya_1.jpg",
        "assest/images/bathhouses-info/bolshaya_kegrovaya/bolshaya_kegrovaya_2.jpg",
        "assest/images/bathhouses-info/bolshaya_kegrovaya/bolshaya_kegrovaya_3.jpg",
        "assest/images/bathhouses-info/bolshaya_kegrovaya/bolshaya_kegrovaya_4.jpg",
        "assest/images/bathhouses-info/bolshaya_kegrovaya/bolshaya_kegrovaya_5.jpg",
      ],
      priceWeekdays: "2200 ₽ / час",
      priceWeekends: "2500 ₽ / час",
      description: `
      <p>Большая кедровая баня — просторное и элегантное пространство из сибирского кедра, созданное для комфортного отдыха большой компании. Увеличенная парилка с современной печью и системой «второе дыхание» обеспечивает мягкий и насыщенный пар, а натуральный аромат кедра способствует оздоровлению и расслаблению. В бане есть просторная комната отдыха, зона для барбекю и терраса с видом на природу, что делает её идеальным местом для семейных праздников и дружеских встреч на свежем воздухе.</p>
      
      <p>Стоимость рассчитана до 5 человек. За дополнительных доплата 500 руб с человека за все время пребывания.Минимальный сеанс - баня 2 часа, баня плюс фурако 3 часа. Фурако не входит в стоимость аренды бани и оплачивается дополнительно.</p>         
  `,
    },
    {
      title: "Малая двинская баня",
      image: "assest/images/bathhouses-info/malaya_dvinskaya_3.jpg",
      sliderImages: [
        "assest/images/bathhouses-info/malaya_dvinskaya/malaya_dvinskaya_1.jpg",
        "assest/images/bathhouses-info/malaya_dvinskaya/malaya_dvinskaya_2.jpg",
        "assest/images/bathhouses-info/malaya_dvinskaya/malaya_dvinskaya_3.jpg",
        "assest/images/bathhouses-info/malaya_dvinskaya/malaya_dvinskaya_4.jpg",
        "assest/images/bathhouses-info/malaya_dvinskaya/malaya_dvinskaya_5.jpg",
      ],
      priceWeekdays: "1700 ₽ / час",
      priceWeekends: "2000 ₽ / час",
      description: `
      <p>Малая двинская баня — компактная и функциональная баня с видом на реку, которая сочетает в себе традиционные русские банные традиции и современные технологии. Просторная парилка с эффективной системой вентиляции и современной печью обеспечивает качественный пар и комфорт. В распоряжении гостей — уютная зона отдыха, где можно расслабиться после парения, а также небольшая терраса для отдыха на свежем воздухе. Идеальный вариант для тех, кто ценит качество и атмосферу уюта в небольшом формате.</p>

      <p>Стоимость рассчитана до 5 человек. За дополнительных доплата 500 руб с человека за все время пребывания.Минимальный сеанс - баня 2 часа, баня плюс фурако 3 часа. Фурако не входит в стоимость аренды бани и оплачивается дополнительно.</p>        
  `,
    },
    {
      title: "Малая кедровая баня",
      image: "assest/images/bathhouses-info/malaya_kedrovaya.jpg",
      sliderImages: [
        "assest/images/bathhouses-info/malaya_kedrovaya/malaya_kedrovaya_1.jpg",
        "assest/images/bathhouses-info/malaya_kedrovaya/malaya_kedrovaya_2.jpg",
        "assest/images/bathhouses-info/malaya_kedrovaya/malaya_kedrovaya_3.jpg",
        "assest/images/bathhouses-info/malaya_kedrovaya/malaya_kedrovaya_4.jpg",
        "assest/images/bathhouses-info/malaya_kedrovaya/malaya_kedrovaya_5.jpg",
      ],
      priceWeekdays: "1500 ₽ / час",
      priceWeekends: "1700 ₽ / час",
      description: `
        <p>Малая кедровая баня — это уютное пространство из натурального кедра, где каждый элемент продуман для максимального комфорта и здоровья. Баня оснащена современной печью с закрытой каменкой, создающей мягкий и легкий пар, насыщенный фитонцидами кедра. Здесь можно насладиться традиционным парением в спокойной обстановке, расслабиться в комнате отдыха и восстановить силы. Компактные размеры делают её идеальным выбором для небольшой компании или семейного отдыха.</p>

        <p>Стоимость рассчитана до 5 человек. За дополнительных доплата 500 руб с человека за все время пребывания.Минимальный сеанс - баня 2 часа, баня плюс фурако 3 часа. Фурако не входит в стоимость аренды бани и оплачивается дополнительно.</p>
    `,
    },
    {
      title: "Русская баня-бочка",
      image: "assest/images/bathhouses-info/russkaya.jpg",
      sliderImages: [
        "assest/images/bathhouses-info/russkaya/russkaya_1.jpg",
        "assest/images/bathhouses-info/russkaya/russkaya_2.jpg",
        "assest/images/bathhouses-info/russkaya/russkaya_3.jpg",
        "assest/images/bathhouses-info/russkaya/russkaya_4.jpg",
        "assest/images/bathhouses-info/russkaya/russkaya_5.jpg",
      ],
      priceWeekdays: "1200 ₽ / час",
      priceWeekends: "1400 ₽ / час",
      description: `
        <p>Русская баня-бочка — компактное и уютное пространство, где традиции русской парной сочетаются с современным комфортом. Благодаря округлой форме и эффективной печи, пар в бане распределяется равномерно, создавая мягкий и насыщенный ароматный пар. Внутри — парилка и небольшая зона отдыха, идеально подходящие для дружеских встреч и оздоровительных процедур. Баня-бочка быстро прогревается и сохраняет тепло, обеспечивая настоящий русский банный опыт в компактном формате.</p>

        <p>Стоимость рассчитана до 5 человек. За дополнительных доплата 500 руб с человека за все время пребывания.Минимальный сеанс - баня 2 часа, баня плюс фурако 3 часа. Фурако не входит в стоимость аренды бани и оплачивается дополнительно.</p>            
    `,
    },
  ];

  function updateSlider() {
    const slides = sliderTrack.children;
    if (slides.length === 0) return;
    const slideWidth = slides[0].clientWidth;
    sliderTrack.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }

  function setActivePanel(index) {
    panels.forEach((panel, i) => {
      if (i === index) {
        panel.classList.add("active");
        bathhouseTitle.textContent = bathhouseData[i].title;
        bathhouseImage.src = bathhouseData[i].image;
        bathhouseImage.alt = bathhouseData[i].title;
        bathhouseDescription.innerHTML = bathhouseData[i].description;
        bathhousePriceWeekdays.innerHTML = bathhouseData[i].priceWeekdays;
        bathhousePriceWeekends.innerHTML = bathhouseData[i].priceWeekends;

        // Обновляем слайдер
        currentIndex = 0;
        sliderTrack.style.transition = "none";
        sliderTrack.style.transform = "translateX(0)";
        sliderTrack.innerHTML = "";

        bathhouseData[i].sliderImages.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = bathhouseData[i].title;
          img.classList.add("slider-image");
          sliderTrack.appendChild(img);
        });

        // Включаем transition обратно
        setTimeout(() => {
          sliderTrack.style.transition = "transform 0.5s ease";
        }, 50);
      } else {
        panel.classList.remove("active");
      }
    });
  }

  panels.forEach((panel, index) => {
    panel.addEventListener("click", () => {
      setActivePanel(index);
    });
  });

  prevSlideBtn.addEventListener("click", () => {
    const slidesCount = sliderTrack.children.length;
    currentIndex = (currentIndex - 1 + slidesCount) % slidesCount;
    updateSlider();
  });

  nextSlideBtn.addEventListener("click", () => {
    const slidesCount = sliderTrack.children.length;
    currentIndex = (currentIndex + 1) % slidesCount;
    updateSlider();
  });

  setActivePanel(0);
});

// Открытие/закрытие модалки
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("open");
  lockScroll();
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("open");
  unlockScroll();
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
    unlockScroll();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    modal.classList.remove("open");
    unlockScroll();
  }
});

const galleryPhotos = document.querySelectorAll(".gallery-photo");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeBtn");

const moreImages = [
  "assest/images/gallery/gallery-7.jpg",
  "assest/images/gallery/gallery-8.jpg",
  "assest/images/gallery/gallery-9.jpg",
  "assest/images/gallery/gallery-10.jpg",
  "assest/images/gallery/gallery-11.jpg",
  "assest/images/gallery/gallery-12.jpg",
];

let currentGallery = "main";
let currentIndexGallery = 0;

function openLightbox(index, gallery = "main") {
  currentGallery = gallery;
  currentIndexGallery = index;

  if (gallery === "main") {
    changeImage(galleryPhotos[currentIndexGallery].src);
  } else if (gallery === "more") {
    changeImage(moreImages[currentIndexGallery]);
  }

  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.style.display = "none";
  document.body.style.overflow = "";
}

function nextImage() {
  if (currentGallery === "main") {
    currentIndexGallery = (currentIndexGallery + 1) % galleryPhotos.length;
    changeImage(galleryPhotos[currentIndexGallery].src);
  } else if (currentGallery === "more") {
    currentIndexGallery = (currentIndexGallery + 1) % moreImages.length;
    changeImage(moreImages[currentIndexGallery]);
  }
}

function prevImage() {
  if (currentGallery === "main") {
    currentIndexGallery =
      (currentIndexGallery - 1 + galleryPhotos.length) % galleryPhotos.length;
    changeImage(galleryPhotos[currentIndexGallery].src);
  } else if (currentGallery === "more") {
    currentIndexGallery =
      (currentIndexGallery - 1 + moreImages.length) % moreImages.length;
    changeImage(moreImages[currentIndexGallery]);
  }
}

function changeImage(newSrc) {
  lightboxImg.style.opacity = 0;
  setTimeout(() => {
    lightboxImg.src = newSrc;
    lightboxImg.style.opacity = 1;
  }, 200);
}

document.addEventListener("DOMContentLoaded", () => {
  galleryPhotos.forEach((photo, index) => {
    photo.addEventListener("click", () => openLightbox(index, "main"));
  });

  const moreBtn = document.getElementById("more-images");
  if (moreBtn) {
    moreBtn.addEventListener("click", () => openLightbox(0, "more"));
  }

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);
  closeBtn.addEventListener("click", closeLightbox);

  lightbox
    .querySelector(".lightbox-overlay")
    .addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
  });
});

// Сертификат
document.getElementById("openCertModalBtn").onclick = function () {
  document.getElementById("certModal").classList.add("open");
  lockScroll();
};
document.getElementById("closeCertModalBtn").onclick = function () {
  document.getElementById("certModal").classList.remove("open");
  unlockScroll();
};
document.getElementById("certModal").addEventListener("click", function (e) {
  if (e.target === this) this.classList.remove("open");
  unlockScroll();
});

// Реквизиты
document.getElementById("openRekvModalBtn").onclick = function () {
  document.getElementById("rekvModal").classList.add("open");
  lockScroll();
};
document.getElementById("closeRekvModalBtn").onclick = function () {
  document.getElementById("rekvModal").classList.remove("open");
  unlockScroll();
};
document.getElementById("rekvModal").addEventListener("click", function (e) {
  if (e.target === this) this.classList.remove("open");
  unlockScroll();
});

// Закрытие по Esc
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById("certModal").classList.remove("open");
    document.getElementById("rekvModal").classList.remove("open");
    unlockScroll();
  }
});

function toggleBodyScroll(enable) {
  document.body.style.overflow = enable ? "" : "hidden";
}

modal.addEventListener("show", () => toggleBodyScroll(false));
modal.addEventListener("hide", () => toggleBodyScroll(true));

// Мобильные штуки
document.addEventListener("DOMContentLoaded", function () {
  // Обработка тапов на мобильных устройствах
  document.addEventListener("touchstart", function () {}, { passive: true });

  // Оптимизация для мобильных устройств
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.addEventListener("click", function () {
      this.classList.add("active");
      panels.forEach((p) => {
        if (p !== this) p.classList.remove("active");
      });
    });
  });

  // Оптимизация галереи для мобильных
  const galleryPhotos = document.querySelectorAll(".gallery-photo");
  galleryPhotos.forEach((photo) => {
    photo.addEventListener("click", function () {
      // Упрощенное открытие изображения на мобильных
      if (window.innerWidth <= 768) {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        lightboxImg.src = this.src;
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Закрытие лайтбокса по тапу на оверлей
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }
});

function lockScroll() {
  document.body.style.overflow = "hidden";
}

function unlockScroll() {
  document.body.style.overflow = "";
}

// let touchStartX = 0;
// let touchEndX = 0;

// lightbox.addEventListener(
//   "touchstart",
//   function (e) {
//     touchStartX = e.changedTouches[0].screenX;
//   },
//   { passive: true }
// );

// lightbox.addEventListener(
//   "touchend",
//   function (e) {
//     touchEndX = e.changedTouches[0].screenX;
//     handleSwipe();
//   },
//   { passive: true }
// );

// function handleSwipe() {
//   const swipeThreshold = 50; // Минимальная дистанция для свайпа

//   if (touchStartX - touchEndX > swipeThreshold) {
//     // Свайп влево - следующее изображение
//     nextImage();
//   } else if (touchEndX - touchStartX > swipeThreshold) {
//     // Свайп вправо - предыдущее изображение
//     prevImage();
//   }
// }

// // Обновляем функцию openLightbox для мобильных устройств
// function openLightbox(index, gallery = "main") {
//   currentGallery = gallery;
//   currentIndexGallery = index;

//   if (gallery === "main") {
//     changeImage(galleryPhotos[currentIndexGallery].src);
//   } else if (gallery === "more") {
//     changeImage(moreImages[currentIndexGallery]);
//   }

//   lightbox.style.display = "flex";
//   document.body.style.overflow = "hidden";

//   // Для мобильных - скрываем стрелки
//   if (window.innerWidth <= 768) {
//     prevBtn.style.display = "none";
//     nextBtn.style.display = "none";
//   } else {
//     prevBtn.style.display = "block";
//     nextBtn.style.display = "block";
//   }
// }

// let isAnimating = false;
// const animationDuration = 300;

// lightbox.addEventListener(
//   "touchstart",
//   function (e) {
//     if (isAnimating) return;
//     touchStartX = e.changedTouches[0].screenX;
//   },
//   { passive: true }
// );

// lightbox.addEventListener(
//   "touchmove",
//   function (e) {
//     if (isAnimating || touchStartX === 0) return;

//     const touchX = e.changedTouches[0].screenX;
//     const diff = touchX - touchStartX;

//     if (Math.abs(diff) > 10) {
//       lightboxImg.style.transition = "none";
//       lightboxImg.style.transform = `translateX(${diff}px)`;
//     }
//   },
//   { passive: true }
// );

// lightbox.addEventListener(
//   "touchend",
//   function (e) {
//     if (isAnimating || touchStartX === 0) return;

//     touchEndX = e.changedTouches[0].screenX;
//     const diff = touchEndX - touchStartX;
//     const swipeThreshold = 50;

//     lightboxImg.style.transition = `transform ${animationDuration}ms ease-out`;

//     if (Math.abs(diff) < swipeThreshold) {
//       lightboxImg.style.transform = "translateX(0)";
//     } else if (diff < 0) {
//       swipeToNext();
//     } else {
//       swipeToPrev();
//     }

//     touchStartX = 0;
//   },
//   { passive: true }
// );

// function swipeToNext() {
//   if (isAnimating) return;
//   isAnimating = true;

//   lightboxImg.style.transform = "translateX(-100%)";

//   setTimeout(() => {
//     nextImage();
//     lightboxImg.style.transform = "translateX(0)";
//     setTimeout(() => {
//       isAnimating = false;
//     }, 50);
//   }, animationDuration);
// }

// function swipeToPrev() {
//   if (isAnimating) return;
//   isAnimating = true;

//   lightboxImg.style.transform = "translateX(100%)";

//   setTimeout(() => {
//     prevImage();
//     lightboxImg.style.transform = "translateX(0)";
//     setTimeout(() => {
//       isAnimating = false;
//     }, 50);
//   }, animationDuration);
// }

// function changeImage(newSrc) {
//   lightboxImg.style.opacity = 0;
//   lightboxImg.style.transform = "translateX(0)";
//   setTimeout(() => {
//     lightboxImg.src = newSrc;
//     lightboxImg.style.opacity = 1;
//   }, 200);
// }
