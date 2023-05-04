// fetch data from JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const registerForm = document.getElementById('signupForm');

    registerForm.addEventListener('submit', e => {
      e.preventDefault(); // prevent default form submit behavior

      const nama = registerForm.elements.nama.value;
      const email = registerForm.elements.email.value;
      const password = registerForm.elements.password.value;

      // check if username already exists
      const existingUser = data.users.find(user => user.nama === nama);

      if (existingUser) {
        alert('Username already exists. Please choose a different one.');
      } else {
        // add new user to the array
        const newUser = { nama, email, password };
        data.users.push(newUser);

        // save data to file
        saveDataToFile(data);

        alert('User registered successfully!');
        registerForm.reset();
      }
    });
  })
  .catch(error => console.error(error));

function saveDataToFile(data) {
  const jsonData = JSON.stringify(data);

  fetch('data.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData
  })
  .catch(error => console.error(error));
}
