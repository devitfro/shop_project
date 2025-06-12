export class BlogCard {
   constructor(data, index) {
      this.data = data;
      this.index = index;
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
               <a href="${this.data.link}" class="read-more">Read more</a>
               <img src="${this.data.linkIcon}" alt="${this.data.linkIconAltText}">
            </div>
         </div>   
      `;

      const paragraph = card.querySelector('p');
      const readMoreLink = card.querySelector('.read-more');

      readMoreLink.addEventListener('click', (e) => {
         e.preventDefault();
         paragraph.classList.toggle('expanded');
         readMoreLink.textContent = paragraph.classList.contains('expanded') ? 'Show less' : 'Read more';
      });

      return card;
   }
}