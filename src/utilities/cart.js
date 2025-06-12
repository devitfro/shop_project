export function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || {};
}

export function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function updateCartCount(count) {
  const el = document.querySelector('.cart-count');
  if (el) {
    el.textContent = count;
  }
}