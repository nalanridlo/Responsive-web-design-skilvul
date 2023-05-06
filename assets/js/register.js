//POST data Register from fetch mock api
// Path: register.js
const registerForm = document.getElementById('signupForm');
const registerBtn = document.getElementById('btndaftar');


registerForm.addEventListener('submit', event => {
  event.preventDefault();

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch(`https://64532ddfe9ac46cedf1ede09.mockapi.io/userProfile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: password, nama: nama })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.error('Error posting register information:', response.statusText);
    }
  }).then(data => {
    window.location.replace("index.html");
    alert('Register successful');
  })
  .catch(error => console.error(error));
}
);