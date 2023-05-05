    
    //hidden password function 1
    // const passwordInput = document.getElementById('passwordInput'); // id dari input password
    // const showHide = document.getElementById('showHide'); // id span showHide dalam input group password

    // passwordInput.type = 'password'; // set type input password menjadi password
    // showHide.innerHTML = '<i class="fa fa-eye">'; // masukan icon eye dalam icon bootstrap 5
    // showHide.style.cursor = 'pointer'; // ubah cursor menjadi pointer
    // jadi ketika span di hover maka cursornya berubah pointer

    // showHide.addEventListener('click', () => {
    // // ketika span diclick
    //     if (passwordInput.type === 'password') {
    //         // jika type inputnya password
    //         passwordInput.type = 'text'; // ubah type menjadi text
    //         showHide.innerHTML = '<i class="fa fa-eye-slash">'; // ubah icon menjadi eye slash
    //     } else {
    //         // jika type bukan password (text)
    //         showHide.innerHTML = '<i class="fa fa-eye">'; // ubah icon menjadi eye
    //         passwordInput.type = 'password'; // ubah type menjadi password
    //     }
    // });

    //hidden confirm password 2
    // const konfirmasiPassword = document.getElementById('konfirmasiPassword'); // id dari input password
    // const showHidePassword = document.getElementById('showHidePassword'); // id span showHide dalam input group password

    // konfirmasiPassword.type = 'password'; // set type input password menjadi password
    // showHidePassword.innerHTML = '<i class="fa fa-eye">'; // masukan icon eye dalam icon bootstrap 5
    // showHidePassword.style.cursor = 'pointer'; // ubah cursor menjadi pointer
    // jadi ketika span di hover maka cursornya berubah pointer

    // showHidePassword.addEventListener('click', () => {
    // // ketika span diclick
    //     if (konfirmasiPassword.type === 'password') {
    //         // jika type inputnya password
    //         konfirmasiPassword.type = 'text'; // ubah type menjadi text
    //         showHidePassword.innerHTML = '<i class="fa fa-eye-slash">'; // ubah icon menjadi eye slash
    //     } else {
    //         // jika type bukan password (text)
    //         showHidePassword.innerHTML = '<i class="fa fa-eye">'; // ubah icon menjadi eye
    //         konfirmasiPassword.type = 'password'; // ubah type menjadi password
    //     }
    // });



//     // fetch data from JSON file
// fetch('data.json')
// .then(response => response.json())
// .then(data => {
//   const loginForm = document.getElementById('loginForm');
  

//   loginForm.addEventListener('submit', e => {
//     e.preventDefault(); // prevent default form submit behavior

//     const email = loginForm.elements.email.value;
//     const password = loginForm.elements.password.value;

//     // find user with matching username and password
//     const user = data.users.find(user => user.email === email && user.password === password);

//     if (user) {
//       // alert(`Welcome, ${user.name}!`);
//       // loginForm.reset();
//       window.location.replace("index.html");
//     } else {
//       alert('Invalid username or password.');
//     }
//   });
// })
// .catch(error => console.error(error));




//GET data login from fetch mock api
// Path: script.js
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('login-btn');


loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch(`https://64532ddfe9ac46cedf1ede09.mockapi.io/userProfile`, {
    method: 'GET'
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.error('Error getting login information:', response.statusText);
    }
  }).then(data => {
    data.forEach(user => {
      if (user.email === email && user.password === password) {
        window.location.replace("landingpage.html");
        alert('Login successful');
      } else {
        console.error('Invalid username or password.')
      }
    });
  })
  .catch(error => console.error(error));
}
);


