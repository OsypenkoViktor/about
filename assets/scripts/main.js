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
const introCard = document.querySelector(".photo");
const skillsTable = document.querySelector(".skillTable");
const dynamicTitle = document.querySelector(".dynamicTitle")

const pageData={
  introCard:{
    img:"url('../images/introBG.jpg')",
    dynamicTitle:"Головна"
  },
  skillsTable:{
    img:"url('../images/skillsTableBG.jpg')",
    dynamicTitle:"Таблиця хард-скілів"
  }
}

function findParentIndex(title) {
  for (const key in pageData) {
    if (pageData[key].dynamicTitle === title) {
      return key;
    }
  }
  return -1; // Return -1 if not found
}


let currentElem;
//функція для оновлення данних документу
function updatePage(newElem,newBackground,newDTitle){
  if(newElem==currentElem) return
  currentElem=newElem
  body.style.setProperty('--bgImage', newBackground);
  let oldDTitle = dynamicTitle.innerText;
  if(!oldDTitle) {
    dynamicTitle.innerText = newDTitle;
  }
  if(oldDTitle){
    if(findParentIndex(oldDTitle)>findParentIndex(newDTitle)){
      console.log("up");
      dynamicTitle.classList.add("fadeDown")
      setTimeout(()=>{
        dynamicTitle.innerText = newDTitle;
        dynamicTitle.classList.add("showUp")
        dynamicTitle.classList.remove("showUp","fadeDown")
      },300)
      
    }
    if(findParentIndex(oldDTitle)<findParentIndex(newDTitle)){
      console.log("down");
      dynamicTitle.classList.add("fadeUp")
      setTimeout(()=>{
        dynamicTitle.innerText = newDTitle;
        dynamicTitle.classList.add("showDown")
        setTimeout(()=>{
          dynamicTitle.classList.remove("showDown","fadeUp")
        },200)
        
      },400)
      
    }
    
  }
}
//функція для оновлення сторінки в залежності від елементів у вьюпорті
function renderPage(){
  isElementInViewport(introCard) && 
  updatePage(introCard,pageData.introCard.img,pageData.introCard.dynamicTitle);
  isElementInViewport(skillsTable) &&
  updatePage(skillsTable,pageData.skillsTable.img,pageData.skillsTable.dynamicTitle)
}

window.addEventListener("scroll", renderPage);

renderPage()

const modal = document.querySelector(".modal")
const modalLinks = modal.querySelectorAll("a")
const modalSidebar = modal.querySelector(".guideOptions")

modalLinks.forEach((link)=>{
  link.addEventListener("click",()=>{
    modal.classList.add("hidden")
    modalSidebar.classList.remove("setModalOptions")
  })
})
dynamicTitle.addEventListener("click",()=>{
  modal.classList.remove("hidden")
  modal.classList.add("setModal")
  modalSidebar.classList.add("setModalOptions")
})

modal.addEventListener("click",()=>{
  modal.classList.add("hidden")
  modalSidebar.classList.remove("setModalOptions")
})