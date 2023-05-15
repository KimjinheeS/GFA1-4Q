const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      const firstName = document.querySelector('#firstName').value.trim();
      const lastName = document.querySelector('#lastName').value.trim();
      const email = document.querySelector('#email').value.trim();

      if (!firstName || !lastName || !email) {
        event.preventDefault();
        alert('Please fill in all required fields.');
      }
    });