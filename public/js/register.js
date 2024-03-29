const registerFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-register').value.trim();
  const password = document.querySelector('#password-register').value.trim();
  const name = document.querySelector('#name-register').value.trim();
  if (email && password && name) {
    // Send the e-mail and password to the server
    const response = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.register-form')
  .addEventListener('submit', registerFormHandler);
