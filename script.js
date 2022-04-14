const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const img_car = document.querySelector(".img-car");
const capt = document.querySelector(".caption");

// NAV
const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", function () {
  console.log("clicked");
  nav.style.width = "100%";
  nav.style.transition = "ease-in .3s";
});

nav.addEventListener("click", function () {
  nav.style.width = "0";
  nav.style.transition = "ease-out .4s";
});

let links = document.querySelectorAll(".nav ul li a");
links.forEach(function (element) {
  element.addEventListener("click", function (e) {
    links.forEach(function (element) {
      element.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// CAPTION
const caption = ["04:20 AM", "p1", "p2", "p3", "p4"];

// NUM OF PHOTOS
let num, current_photo;
num = 9;

current_photo = 0;

next.addEventListener("click", function () {
  if (current_photo < num) {
    current_photo++;
    $.get(`assets/p${current_photo}.png`)
      .done(function () {
        img_car.src = `assets/p${current_photo}.png`;
        capt.innerHTML =
          caption[current_photo] + " (" + (current_photo + 1) + ")";
      })
      .fail(function () {
        img_car.src = `assets/p${current_photo}.gif`;
        capt.innerHTML =
          caption[current_photo] + " (" + (current_photo + 1) + ")";
      });
  } else {
    img_car.src = `assets/main_1.png`;
    current_photo = 0;
    capt.innerHTML = caption[0] + " (1)";
  }
});

prev.addEventListener("click", function () {
  current_photo--;
  if (current_photo > 0) {
    $.get(`assets/p${current_photo}.png`)
      .done(function () {
        img_car.src = `assets/p${current_photo}.png`;
        capt.innerHTML =
          caption[current_photo] + " (" + (current_photo + 1) + ")";
      })
      .fail(function () {
        img_car.src = `assets/p${current_photo}.gif`;
        capt.innerHTML =
          caption[current_photo] + " (" + (current_photo + 1) + ")";
      });
  } else {
    img_car.src = `assets/main_1.png`;
    current_photo = 0;
    capt.innerHTML = caption[0] + " (1)";
  }
});
