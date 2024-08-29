// untuk nama awal di article
replaceName();
function replaceName() {
    let name = prompt("Masukan nama anda?", "");
    document.getElementById('name').innerHTML = name;
  }  

// Program stcky navbar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Program Slide gambar
let indexSlide = 1;
showslide(1);


function nextSlide(n) {
    showslide(indexSlide += n);
    
}
function showslide(n) {
    let listImage = document.getElementsByClassName('MainArticle_Banner_Content');
    console.log(listImage);

    if (n > listImage.length) {
        indexSlide = 1;
    }

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    
}

setInterval(() => nextSlide(1), 3000);

// Program add massageUS

let username = document.querySelector('#input-name')
let date = document.querySelector('#input-Date')
var gender = document.getElementsByName('input_gender');
let pesan = document.querySelector('#input-Pesan')
const submitBtn = document.querySelector('.Button_style')
const commentsCont = document.querySelector('.comment_container')

submitBtn.addEventListener('click', submitFeedback);
//untuk variabel array item newfeedback
feedbackArr = [];

function submitFeedback(e) {  
    //mengambil value nama dan tanggal lahir
    const namevalue = username.value;
    const datevalue = date.value;
    //untuk waktu realtime saat massage submit
    var dateString = new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
    var formattedString = dateString.replace(", ", " - ");
    const pesanvalue = pesan.value;
    //untuk mengambil value jenis kelamin
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked){
            gendervalue = gender[i].value;
        }
    }
    //untuk validasi submit dan proses penambahan comment di bagian massage
    if (namevalue =='' || datevalue == '' || gendervalue == '' || pesanvalue == '') {
        alert('Maaf Proses input tidak dapat diproses karena ada inputan yang kosong');
    }
    else {
        alert ('Proses Input Data Behasil');

        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "names": namevalue,
            "dates": datevalue,
            "genders": gendervalue,
            "clock": formattedString,
            "pesans":pesanvalue
        }
        //pengambilan data array
        feedbackArr.push(newFeedback);
        //menjalankan function addFeedback untuk menambahkan komen di massage
        addFeedback(newFeedback);

    }
    e.preventDefault()

}

function addFeedback(item){
    //menentukan huruf awal dari nama yang di tulis
    const letter = (item.names).charAt(0);
    //membuat div di bagian html
    const div = document.createElement('div');
    //dari div yang telah ditambahkan di tambah class: comment_card
    div.classList = 'comment_card';
    //menulis tab massage ke index.html saat submit, dan mengambil item array dari feedbackArr
    //nilai array yang diambil untuk ditampilkan pada massage saat submit
    div.id = item.id;
    div.innerHTML = `
    <div class = "pic center_display">
                        ${letter}
                    </div>
                    <div class="comment_info">
                        <small class="names">
                            Nama: ${item.names}
                        </small>
                        <samall class="date">
                            Tanggal Lahir: ${item.dates}
                        </samall>
                        <small class="gender">
                            Jenis Kelamin: ${item.genders}
                        </small>
                        <small class="clock">
                            Current Time: ${item.clock}
                        </small>
                        <p class="comment">
                            ${item.pesans}
                        </p>
                    </div>
    `;
    // memasukan "div class = comment_card", dan "div.innerHTML" ke dalam "div class = "comment_container"" yang ada di html
    commentsCont.insertAdjacentElement('beforeend', div);

}
