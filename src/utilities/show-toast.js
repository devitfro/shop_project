export function showToast(message) {
  const toast = document.getElementById('popUp');
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 2500);
}
