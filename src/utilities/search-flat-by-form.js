// SEARCH FLAT BY INPUT FIELD
export function searchFlatByForm() {
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
}
