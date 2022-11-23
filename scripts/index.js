import { mockReviews } from '../scripts/mockReviews.js';

const reviewsContainer = document.querySelector('.slider__slides-container');

function createReviews(object) {
  const reviewTemplate = reviewsContainer.querySelector('.slider-template').content;
  const reviewItem = reviewTemplate.querySelector('.slider__slide').cloneNode(true);
  reviewItem.querySelector('.reviews__photo').src = object.photo;
  reviewItem.querySelector('.reviews__name').textContent = object.name;
  reviewItem.querySelector('.reviews__text').textContent = object.review;
  return reviewItem;
}

function addReview (newReview) {
  reviewsContainer.append(newReview);
}


mockReviews.forEach(review => {
  addReview(createReviews(review));
});