// review-slider.js
import { loadArrayCards } from './load-array-cards.js';
import { ReviewCard } from '../models/ReviewCard.js';

export function initReviewSlider() {
  const reviewsContainer = document.querySelector('.reviews_cards_container');
  const prevBtn = document.querySelector('.slider_btn.prev');
  const nextBtn = document.querySelector('.slider_btn.next');

  let reviewsData = [];
  let currentIndex = 0;
  const visibleCount = 3;

  function renderReviewSlider() {
    reviewsContainer.innerHTML = '';

    const visibleItems = reviewsData.slice(currentIndex, currentIndex + visibleCount);
    visibleItems.forEach(item => {
      const card = new ReviewCard(item).createCardElement();
      reviewsContainer.appendChild(card);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + visibleCount >= reviewsData.length;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderReviewSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex + visibleCount < reviewsData.length) {
      currentIndex++;
      renderReviewSlider();
    }
  });

  loadArrayCards({
    url: 'src/data/review.json',
    containerSelector: null,
    cardClass: ReviewCard
  }).then(data => {
    reviewsData = data;
    currentIndex = 0;
    renderReviewSlider();
  });
}
