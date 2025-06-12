export class BlogCard {
   constructor(data) {
      this.data = data;
   }

   createCardElement() {
      const card = document.createElement('div');
      card.classList.add('blog_card');

      card.innerHTML = 
      `
         <img src="${this.data.image}" alt="${this.data.imageAltText}">
         <div class="blog_descr">
            <div class="time_wrapper">
               <button>${this.data.buttonText}</button>
               <span>${this.data.date}</span>
            </div>
            <h4>${this.data.title}</h4>
            <p>${this.data.text}</p>
            <div class="link_box">
               <a href="${this.data.link}">Read more</a>
               <img src="${this.data.linkIcon}" alt="${this.data.linkIconAltText}">
            </div>
         </div>
      `;

      return card;
   }
}