    
    //hidden password function 1
    const passwordInput = document.getElementById('passwordInput'); // id dari input password
    const showHide = document.getElementById('showHide'); // id span showHide dalam input group password

    passwordInput.type = 'password'; // set type input password menjadi password
    showHide.innerHTML = '<i class="fa fa-eye">'; // masukan icon eye dalam icon bootstrap 5
    showHide.style.cursor = 'pointer'; // ubah cursor menjadi pointer
    // jadi ketika span di hover maka cursornya berubah pointer

    showHide.addEventListener('click', () => {
    // ketika span diclick
        if (passwordInput.type === 'password') {
            // jika type inputnya password
            passwordInput.type = 'text'; // ubah type menjadi text
            showHide.innerHTML = '<i class="fa fa-eye-slash">'; // ubah icon menjadi eye slash
        } else {
            // jika type bukan password (text)
            showHide.innerHTML = '<i class="fa fa-eye">'; // ubah icon menjadi eye
            passwordInput.type = 'password'; // ubah type menjadi password
        }
    });

    //hidden confirm password 2
    const konfirmasiPassword = document.getElementById('konfirmasiPassword'); // id dari input password
    const showHidePassword = document.getElementById('showHidePassword'); // id span showHide dalam input group password

    konfirmasiPassword.type = 'password'; // set type input password menjadi password
    showHidePassword.innerHTML = '<i class="fa fa-eye">'; // masukan icon eye dalam icon bootstrap 5
    showHidePassword.style.cursor = 'pointer'; // ubah cursor menjadi pointer
    // jadi ketika span di hover maka cursornya berubah pointer

    showHidePassword.addEventListener('click', () => {
    // ketika span diclick
        if (konfirmasiPassword.type === 'password') {
            // jika type inputnya password
            konfirmasiPassword.type = 'text'; // ubah type menjadi text
            showHidePassword.innerHTML = '<i class="fa fa-eye-slash">'; // ubah icon menjadi eye slash
        } else {
            // jika type bukan password (text)
            showHidePassword.innerHTML = '<i class="fa fa-eye">'; // ubah icon menjadi eye
            konfirmasiPassword.type = 'password'; // ubah type menjadi password
        }
    });
