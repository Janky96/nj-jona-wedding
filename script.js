const hamburgerIcon = document.querySelector(".hamburger-icon");
const xIcon = document.querySelector(".x-icon");
const navbarList = document.querySelector(".navbar-ul");
const navbarListItem = document.querySelectorAll(".navbar-li");
let prev = window.scrollY;

function switchIconToShow(iconString) {
  if (iconString === "hamburger") {
    hamburgerIcon.classList.remove("remove");
    xIcon.classList.add("remove");
  }

  if (iconString === "x") {
    hamburgerIcon.classList.add("remove");
    xIcon.classList.remove("remove");
  }
}

function removeChecked() {
  navbarList.classList.remove("checked");
  switchIconToShow("hamburger");
}

hamburgerIcon.addEventListener("click", () => {
  navbarList.classList.add("checked");
  switchIconToShow("x");
});

xIcon.addEventListener("click", () => {
  removeChecked();
});

navbarListItem.forEach((item) =>
  item.addEventListener("click", () => {
    removeChecked();
  })
);

// Closing navbar when scrolling
window.addEventListener("scroll", function () {
  let current = window.scrollY;
  if (prev < current) {
    removeChecked();
  }

  prev = current;
});

// Set the date we're counting down to
var countDownDate = new Date("May 24, 2025 17:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown-timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "GOT MARRIED";
  }
}, 1000);

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hamburger-icon").style.top = "1rem";
  } else {
    document.getElementById("hamburger-icon").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
