// login
let name = localStorage.getItem('name')
let profile = document.getElementById('name__profile')

profile.innerText = name;

let formPelaporan = document.getElementById('formPelaporan')
let modall = document.getElementById('exampleModal')


$('#formPelaporan').on('submit', function(e){
    let judul = document.getElementById('judul')
    let isi = document.getElementById('isi')
    let kategori = document.getElementById('kategori')
    let instansi = document.getElementById('instansi')
    let tanggal = document.getElementById('tanggal')
    let lokasi = document.getElementById('lokasi')
    $('#exampleModal').modal('show');
    e.preventDefault();

    fetch('https://6454d642f803f34576329b54.mockapi.io/api/v1/pelaporan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id : Math.random().toString(36).substring(2,100),
            judul : judul.value,
            isi : isi.value,
            kategori : kategori.value,
            instansi : instansi.value,
            tanggal : new Date(tanggal.value),
            lokasi : lokasi.value
        })
    }).then(res => {
        if (res.ok){
            return res.json()
        }else{
            console.error(res.statusText)
        }
    }).then(e => {
        window.location.replace('pelaporan.html')
    }).catch(err => console.error(err))
  });