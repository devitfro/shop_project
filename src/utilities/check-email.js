export function checkEmail() {
   document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('emailInput');
      const email = emailInput.value.trim();

      if (!validateEmail(email)) {
         alert("Please enter a valid email address.");
         return;
      }

      emailInput.value = '';
      const message = document.querySelector('.subscribe_form p:last-of-type');
      message.innerText = "Thank you! We will contact you soon.";
      message.style.color = '#939878';
      message.style.fontWeight = 'bold';
   });
}


function validateEmail(email) {
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);
}