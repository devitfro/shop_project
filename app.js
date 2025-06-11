import { HouseCard } from './HouseCard.js';
import { LocationCard } from './LocationCard.js';

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
      url: 'data.json',
      containerSelector: '#cardsWrapper',
      cardClass: HouseCard
   });

   loadCards({
      url: 'location.json',
      containerSelector: '.locations_cards_box',
      cardClass: LocationCard
   });

})


// SEARCH FLAT BY INPUT FIELD
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
// const searchBttn = document.getElementById("searchButton");
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

// Scrolling to matching cards
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

