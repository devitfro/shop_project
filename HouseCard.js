export class HouseCard {
   constructor(data) {
      this.data = data;
   }

   createCardElement () {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-area', this.data.district);

      card.innerHTML = `
      <a href="#">
        <img src="${this.data.image}" class="card-img-top" alt="Flat image">
        <div class="card-body">
          <h5 class="card-title">${this.data.title}</h5>
          <span>${this.data.price}</span>
          <p>
            <a href="https://www.google.com/maps?q=${this.data.mapLink}" target="_blank" rel="noopener noreferrer">
              <img src="img/point.svg" alt="point">
              <span>${this.data.location}</span>
            </a>
          </p>
          <ul class="list_comfort">
            <li class="list_item"><img src="img/bathtub.svg" alt="Bathtub logo">${this.data.features.bath}</li>
            <li class="list_item"><img src="img/bed.svg" alt="Bed logo">${this.data.features.bed}</li>
            <li class="list_item"><img src="img/square_foot.svg" alt="Square foot logo">${this.data.features.area}</li>
          </ul>
        </div>
      </a>
    `;

    return card;
   }
}

