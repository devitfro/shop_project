export class LogoCard {
   constructor(data) {
      this.data = data;
   }

   createCardElement() {
      const card = document.createElement('li');
      card.classList.add('logos_item');

      card.innerHTML = 
      `
         <img src="${this.data.image}" alt="${this.data.imageAltText}">
      `

      return card;
   }
}