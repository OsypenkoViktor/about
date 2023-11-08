// Ваш кодовое слово: shrt
// Пример без развернутых комментариев

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const body = document.querySelector("body");
const introCard = document.querySelector(".intro");
const skillsTable = document.querySelector(".skillTable");

// Список фоновых изображений для предварительной загрузки
const backgroundImages = ["assets/images/introBG.jpg", "assets/images/skillsTableBG.jpg"];
const preloadedImages = [];

// Функция для предварительной загрузки изображений
function preloadImages(images) {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      preloadedImages.push(src);
      // Проверить, что все изображения загружены
      if (preloadedImages.length === images.length) {
        window.addEventListener("scroll", () => {
          if (isElementInViewport(introCard) && preloadedImages.includes("assets/images/introBG.jpg")) {
            body.style.backgroundImage = "url('assets/images/introBG.jpg')";
          }
          if (isElementInViewport(skillsTable) && preloadedImages.includes("assets/images/skillsTableBG.jpg")) {
            body.style.backgroundImage = "url('assets/images/skillsTableBG.jpg')";
          }
        });
      }
    };
  });
}

// Предварительно загрузить изображения
preloadImages(backgroundImages);
