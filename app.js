import { HouseCard } from './src/models/HouseCard.js';
import { LocationCard } from './src/models/LocationCard.js';
import { ReviewCard } from './src/models/ReviewCard.js';
import { BlogCard } from './src/models/BlogCard.js';
import { DescriptionCard } from './src/models/DescriprionCard.js';
import { LogoCard } from './src/models/LogoCard.js';
import { MediaCard } from './src/models/MediaCard.js';
import { loadCards } from './src/utilities/load-cards.js';
import { searchFlatByForm } from './src/utilities/search-flat-by-form.js';
import { searchFlatByLocationCard } from './src/utilities/search-flat-by-location.js';
import { loadFooterNavigationItem } from './src/utilities/footer-navigation-menu.js';
import { showArrow} from './src/utilities/arrow.js';
import { checkEmail } from './src/utilities/check-email.js';
import { initReviewSlider } from './src/utilities/review-slider.js';

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
   loadCards({
      url: 'src/data/data.json',
      containerSelector: '#cardsWrapper',
      cardClass: HouseCard
   });

   loadCards({
      url: 'src/data/location.json',
      containerSelector: '.locations_cards_box',
      cardClass: LocationCard
   });

   loadCards({
      url: 'src/data/review.json',
      containerSelector: '.reviews_cards_container',
      cardClass: ReviewCard
   });

   loadCards({
      url: 'src/data/blog.json',
      containerSelector: '.blogs_cards_container',
      cardClass: BlogCard
   });

   loadCards({
      url: 'src/data/description.json',
      containerSelector: '.cards_container',
      cardClass: DescriptionCard
   });

   loadCards({
      url: 'src/data/logo.json',
      containerSelector: '.logos_box',
      cardClass: LogoCard
   });

   loadCards({
      url: 'src/data/media.json',
      containerSelector: '.icon_group',
      cardClass: MediaCard
   });
      // Проверяем, есть ли флаг "первый запуск"
  if (!localStorage.getItem('isFirstLoad')) {
    localStorage.clear(); // очищаем localStorage только при первом запуске
    localStorage.setItem('isFirstLoad', 'true'); // устанавливаем флаг, что первый запуск уже был
  }

   searchFlatByForm();
   searchFlatByLocationCard();
   //loadFooterNavigationItem('src/data/navigation-down.json', '.nav_down_box'); 
   showArrow();
   checkEmail();
   initReviewSlider();
});

// Event on explore button
const exploreBttns = document.querySelectorAll(".explore_bttn");
const cardsContainer = document.getElementById("cardsWrapper");

exploreBttns.forEach(bttn => {
   bttn.addEventListener("click", () => {
      cardsContainer.scrollIntoView({
         behavior: "smooth", 
         block: "center" 
      });
   })
})

// Contact with agent
const agentBttns = document.querySelectorAll('.contact_agent_bttn');
const contactForm = document.getElementById('contactForm');

agentBttns.forEach(bttn => {
   bttn.addEventListener('click', () => {
      contactForm.scrollIntoView({ behavior: "smooth", block: "center" });
   });
});

// Close alert
function closeAlert() {
   let closeAlert = document.getElementById('alertWrapper');
   closeAlert.classList.toggle('hidden')
   closeAlert.classList.toggle('visible')
}

document.getElementById('closeAlertBttn').onclick = closeAlert;

// Registration button
const bttn = document.getElementById('registrationBttn');
bttn.addEventListener('click', () => {
   window.location.href = 'registration.html';
});

// Open cart
const cartBttn = document.getElementById('cart');
cartBttn.addEventListener('click', () => {
   window.location.href = 'cart.html';
})

// One more registration button ("Families are our priority")
const registrationBttn = document.getElementById('registrationBttn2');
registrationBttn.addEventListener('click', () => {
   window.location.href = 'registration.html';
})




