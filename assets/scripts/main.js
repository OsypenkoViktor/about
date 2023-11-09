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

        window.addEventListener("scroll", () => {
          isElementInViewport(introCard) &&(body.style.setProperty('--bgImage', "url('../images/introBG.jpg')"))
          isElementInViewport(skillsTable) &&(body.style.setProperty('--bgImage', "url('../images/skillsTableBG.jpg')"))
      });
      
