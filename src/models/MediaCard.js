export class MediaCard {
   constructor(data) {
      this.data = data;
   }

   createCardElement() {
      const card = document.createElement('li');
      card.classList.add('media_item');

      card.innerHTML = 
      `
         <a href="${this.data.url}">
            <img src="${this.data.image}" alt="${this.data.imageAltText}">
         </a>
      `

      return card;
   }
}