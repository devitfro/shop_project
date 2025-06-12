export function searchFlatByLocationCard() {
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
