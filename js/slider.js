let slides = document.querySelectorAll(".slide");
let indicator = document.querySelectorAll(".indicator");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let index = 0;

for (let i = 0; i < slides.length; i++) {
  if (slides[i].classList.contains("active")) {
    index = i
  }
}

prev.onclick = prevSlide;
next.onclick = nextSlide;

indicator.forEach(x => {
  x.onclick = display;
});

function display() {
  let num;
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove("active");
    slides[i].classList.remove("active");
  }
  this.classList.add("active");
  for (let i =0; i < indicator.length; i++) {
    if (indicator[i].classList.contains("active")) {
     num = i;
    }
  }
  slides[num].classList.add("active");
  index = num;
}

function prevSlide() {
  slides[index].classList.remove("active");
  indicator[index].classList.remove("active");
  index--;
  console.log(index);
  if (index < 0) {
    index = slides.length - 1;
  }
  slides[index].classList.add("active");
  indicator[index].classList.add("active");
}

function nextSlide() {
  slides[index].classList.remove("active");
  indicator[index].classList.remove("active");
  index++;
  console.log(index);
  if (index == slides.length) {
    index = 0;
  }
  console.log(index);
  slides[index].classList.add("active");
  indicator[index].classList.add("active");
}