import { getCart, saveCart, updateCartCount } from '../utilities/cart.js';
import { showToast } from '../utilities/show-toast.js';

export class HouseCard {
   constructor(data) {
      this.data = data;
   }

   createCardElement () {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-area', this.data.district);
      card.setAttribute('data-location', this.data.location.toLowerCase());

      card.innerHTML = `
      <a href="#">
        <img src="${this.data.image}" class="card-img-top" alt="Flat image">
        <div class="card-body">
          <h5 class="card-title">${this.data.title}</h5>
          <span>${this.data.price}</span>
          <p>
            <a href="${this.data.mapLink}" target="_blank" rel="noopener noreferrer">
              <img src="src/images/point.svg" alt="point">
              <span>${this.data.location}</span>
            </a>
          </p>
          <ul class="list_comfort">
            <li class="list_item"><img src="src/images/bathtub.svg" alt="Bathtub logo">${this.data.features.bath}</li>
            <li class="list_item"><img src="src/images/bed.svg" alt="Bed logo">${this.data.features.bed}</li>
            <li class="list_item"><img src="src/images/square_foot.svg" alt="Square foot logo">${this.data.features.area}</li>
          </ul>
           <button class="add_to_cart" title="Add to cart">
            <img src="src/images/shopping_bag.svg" alt="Add to cart" />
          </button>
        </div>
      </a>
    `;
    
    const cardBttn = card.querySelector('.add_to_cart');
    cardBttn.addEventListener('click', (e) => {
      e.stopPropagation();
      const added = addToCart(this.data);
      if (added) {
        showToast(`Add to cart: ${this.data.title}`);
      } else {
        showToast(`The product is already in the cart.`);
      }
    });

    return card;
   }
}

function addToCart(item) {
  const cart = getCart();
  console.log("item.id = ", item.id);
  console.log("cart = ", cart);
  console.log("cart[item.id] = ", cart[item.id]);

  if (cart[item.id]) {
    return false;
  }

  cart[item.id] = item;
  saveCart(cart);
  updateCartCount(Object.keys(cart).length);
  return true;
}
