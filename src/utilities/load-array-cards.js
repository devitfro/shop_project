export async function loadArrayCards({ url, containerSelector, cardClass }) {
  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const data = await response.json();

      return data;
  } 
  catch (error) {
      console.error('Помилка завантаження карток:', error);
      return [];
  }
}
