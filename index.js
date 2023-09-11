const slides = document.querySelector(".slides");
const controlRight = document.querySelector(".control__right");
const controlLeft = document.querySelector(".control__left");
const marker = document.querySelector(".user-marker");

let index = 0;
const MAX_INDEX = marker.childElementCount - 1;

controlRight.addEventListener("click", () => nextSlide());
controlLeft.addEventListener("click", () => prevSlide());

function nextSlide() {
  slides.append(slides.firstElementChild);

  for (let i = 0; i <= MAX_INDEX; i++) {
    marker.children[index].setAttribute("visible", "false");
  }

  if (index === MAX_INDEX) {
    index = 0;
    marker.children[index].setAttribute("visible", "true");
  } else {
    index++;
    marker.children[index].setAttribute("visible", "true");
  }
}

function prevSlide() {
  slides.prepend(slides.lastElementChild);

  for (let i = 0; i <= MAX_INDEX; i++) {
    marker.children[index].setAttribute("visible", "false");
  }

  if (index === 0) {
    index = MAX_INDEX;
    marker.children[index].setAttribute("visible", "true");
  } else {
    index--;
    marker.children[index].setAttribute("visible", "true");
  }
}
