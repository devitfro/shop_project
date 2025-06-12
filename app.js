import { HouseCard } from './src/models/HouseCard.js';
import { LocationCard } from './src/models/LocationCard.js';
import { ReviewCard } from './src/models/ReviewCard.js';
import { BlogCard } from './src/models/BlogCard.js';
import { DescriptionCard } from './src/models/DescriprionCard.js';
import { LogoCard } from './src/models/LogoCard.js';
import { MediaCard } from './src/models/MediaCard.js';

// CLOSE ALERT 
function closeAlert() {
   let closeAlert = document.getElementById('alertWrapper');
   closeAlert.classList.toggle('hidden')
   closeAlert.classList.toggle('visible')
}

document.getElementById('closeAlertBttn').onclick = closeAlert;

// LOAD CARDS FROM JSON
function loadCards({url, containerSelector, cardClass }) {
   const container = document.querySelector(containerSelector);

   fetch(url)
      .then(response => {
         if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         return response.json();
      })
      .then(data => {
         data.forEach(item => {
            const card = new cardClass(item).createCardElement();
            container.appendChild(card);
         })
      })
    
      .catch(error => {
         console.error(`Error loading data from ${url}:`, error);
      });
}

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
   })

});


// SEARCH FLAT BY INPUT FIELD
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const showAllbttn = document.getElementById("showAllHouseBttn");
let flag = false;

searchForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const query = searchInput.value.toLowerCase().trim();
   const cards = document.querySelectorAll(".card");

   let firstMatch = null;

   cards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const location = card.querySelector("span").textContent.toLowerCase();

      if (title.includes(query) || location.includes(query)) {
         card.style.display = "block";
         card.style.width = "45%";

         if (!firstMatch) {
            firstMatch = card;
         }
      } else {
         card.style.display = "none";
      }
   });

// SCROLLING TO MATCHING CARDS
   if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
      flag = true;
      showAllBttn();
   } else {
      alert("No results found.");
   }
});

function showAllBttn() {
   if (flag) {
      showAllbttn.style.display = "block";
   }
}

showAllbttn.addEventListener("click", () => {
   const cards = document.querySelectorAll(".card");
   cards.forEach(card => {
      card.style.display = "block";
      card.style.width = "30%";
   })
})

// EVENT ON EXPLORE BUTTON
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

// SEARCH FLAT BY LOCATION CARD
function searchByLocationCard() {
   document.addEventListener("click", (e) => {
      const locationCard = e.target.closest(".location_card");
      if (!locationCard) return;

      const location = locationCard.dataset.location.toLowerCase().trim();
      const cards = document.querySelectorAll(".card");

      let firstMatch = null;


      cards.forEach(card => {
         const cardLocation = card.dataset.location.toLowerCase().trim();

         if (cardLocation.includes(location)) {
            card.style.display = "block";
            card.style.width = "45%";
            if (!firstMatch) firstMatch = card;
         } else {
            card.style.display = "none";
         }
      });

      if (firstMatch) {
         firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
         flag = true;
         showAllBttn();
      } else {
         alert("No results found.");
      }
   });
}

searchByLocationCard();

// CONTACT WITH AGENT
const agentBttns = document.querySelectorAll('.contact_agent_bttn');
const contactForm = document.getElementById('contactForm');

agentBttns.forEach(bttn => {
   bttn.addEventListener('click', () => {
      contactForm.scrollIntoView({ behavior: "smooth", block: "center" });
   });
});

// CHECK EMAIL IN FORM
document.getElementById('contactForm').addEventListener('submit', (e) => {
   e.preventDefault(); // Отключаем перезагрузку

   const emailInput = document.getElementById('emailInput');
   const email = emailInput.value.trim();

   if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
   }

   emailInput.value = '';
   const message = document.querySelector('.subscribe_form p:last-of-type');
   message.innerText = "Thank you! We will contact you soon.";
   message.style.color = '#939878';
   message.style.fontWeight = 'bold';
});

function validateEmail(email) {
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);
}

// ARROW
function showArrow() {
   const scrollToTopBtn = document.getElementById("scrollToTopBtn");

   window.addEventListener("scroll", () => {
   if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
   } else {
      scrollToTopBtn.style.display = "none";
   }
   });

   scrollToTopBtn.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
   });
}

showArrow();





