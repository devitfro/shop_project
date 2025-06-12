export async function loadCards({ url, containerSelector, cardClass }) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();

    const container = document.querySelector(containerSelector);
    container.innerHTML = ''; // очищаємо контейнер, якщо потрібно

    data.forEach((item, index) => {
      const cardInstance = new cardClass(item, index); // index передається як ідентифікатор
      const cardElement = cardInstance.createCardElement();
      container.appendChild(cardElement);
    });
  } catch (error) {
    console.error('Помилка завантаження карток:', error);
  }
}