export class DescriptionCard {
   constructor(data) {
      this.data = data;
   }

   createCardElement() {
      const card = document.createElement('div');
      card.classList.add('card_box');

      card.innerHTML = 
      `
         <img src="${this.data.image}" alt="${this.data.imageAltText}">
         <h3>${this.data.title}</h3>
         <p>${this.data.text} </p>
      `
   
      return card;
   }
}