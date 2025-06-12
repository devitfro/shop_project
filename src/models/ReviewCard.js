export class ReviewCard {
   constructor(data) {
      this.data = data;
   }

   createCardElement() {
      const card = document.createElement('li');
      card.classList.add('reviews_card');

      card.innerHTML = 
      `
         <img src="${this.data.icon}" alt="S${this.data.iconAltText}">
         <p>
            "${this.data.reviewText}"
         </p>
         <div class="user">
            <img src="${this.data.userImage}" alt="${this.data.userImageAltText}">
            <div class="user_name_wrap">
               <span>${this.data.name}</span>
               <span>${this.data.position}</span>
            </div>
         </div>
      `;

      return card;
   }
}