const hamburgerIcon = document.querySelector(".hamburger-icon");
const xIcon = document.querySelector(".x-icon");
const navbarList = document.querySelector(".navbar-ul");
const navbarListItem = document.querySelectorAll(".navbar-li");
let prev = window.scrollY;

function switchIconToShow(iconString) {
  if(iconString === "hamburger") {
    hamburgerIcon.classList.remove("remove");
    xIcon.classList.add("remove");
  }

  if(iconString === "x") {
    hamburgerIcon.classList.add("remove");
    xIcon.classList.remove("remove");
  }
}

function removeChecked() {
  navbarList.classList.remove("checked");
  switchIconToShow("hamburger")
}

hamburgerIcon.addEventListener("click", () => {
  navbarList.classList.add("checked");
  switchIconToShow("x");
})

xIcon.addEventListener("click", () => {
  removeChecked();
})

navbarListItem.forEach(item => item.addEventListener("click", () => {
  removeChecked();
}));

// Closing navbar when scrolling
window.addEventListener('scroll', function(){
  let current = window.scrollY;
  if(prev < current){
    removeChecked();
  }

  prev = current;

})