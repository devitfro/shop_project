export class LocationCard {
   constructor(data) {
      this.data = data;
   }

   createCardElement() {
      const card = document.createElement('li');
      card.classList.add('location_card');

      card.innerHTML = 
      `
         <h4>${this.data.location}</h4>
         <div class="card_link_box">
            <a href="#">View Properties</a>
            <img src="${this.data.image}" alt="Arrow logo">
         </div>
      `;

      return card;
   }
}