import { mockReviews } from './mockReviews.js';

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slider__slide");
const prevButton = document.querySelector(".slider__slide-arrow_prev");
const nextButton = document.querySelector(".slider__slide-arrow_next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  nextButtonState();
  togglePrevButtonState();
  toggleNextButtonState();
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  prevButtonState();
  togglePrevButtonState();
  toggleNextButtonState();
});


const reviewsCount = mockReviews.length;
let nextState = 1;
let prevState = 1;

function prevButtonState() {
  if (prevState !== 1) {
    prevState -= 1;
    nextState -= 1;
  }
}

function nextButtonState() {
  if (nextState !== reviewsCount) {
    nextState += 1;
    prevState += 1;

  }
}

function togglePrevButtonState() {
  if (prevState === 1) {
    prevButton.classList.add('slider__slide-arrow_disabled');
    prevButton.disabled = true;
  } else if (prevButton.classList.contains('slider__slide-arrow_disabled')) {
    prevButton.classList.remove('slider__slide-arrow_disabled');
    prevButton.disabled = false;
  }
}
togglePrevButtonState();

function toggleNextButtonState() {
  if (nextState === reviewsCount) {
    nextButton.classList.add('slider__slide-arrow_disabled');
    nextButton.disabled = true;
  } else if (nextButton.classList.contains('slider__slide-arrow_disabled')) {
    nextButton.classList.remove('slider__slide-arrow_disabled');
    nextButton.disabled = false;
  }
}
toggleNextButtonState();



