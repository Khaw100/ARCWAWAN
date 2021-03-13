var modal = document.getElementById("boxmodal");
var btn1 = document.getElementById("tombol1");
var btn2 = document.getElementById("tombol2");
var btn3 = document.getElementById("tombol3");
var btn4 = document.getElementById("tombol4");
var btn5 = document.getElementById("tombol5");
var btn6 = document.getElementById("tombol6");
var span = document.getElementsByClassName("close")[0];

btn1.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
  modal.style.display = "block";
};

btn3.onclick = function () {
  modal.style.display = "block";
};

btn4.onclick = function () {
  modal.style.display = "block";
};

btn5.onclick = function () {
  modal.style.display = "block";
};

btn6.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal || event.target == span) {
    modal.style.display = "none";
  }
};

function imgmale1() {
 document.getElementById("nama").innerHTML = "Muhammad Rakha Wiratama";
 document.getElementById("fakultas").innerHTML = "STEI";
 document.getElementById("jurusan").innerHTML = "IF atau STI";
 document.getElementById("umur").innerHTML = "18 tahun";
 document.getElementById("tinggal").innerHTML = "Jakarta";
 document.getElementById("alasan").innerHTML =
   "Meningkatkan soft skill dan hard skill & Menambah relasi";
 document.getElementById("hasil").innerHTML =
   "Seseorang yang ingin menjadi orang sukses di dunia dan di akhirat";
}

function imgmale2() {
 document.getElementById("nama").innerHTML = "Farrel Farandieka";
 document.getElementById("fakultas").innerHTML = "STEI";
 document.getElementById("jurusan").innerHTML = "IF harga mati";
 document.getElementById("umur").innerHTML = "19 tahun";
 document.getElementById("tinggal").innerHTML = "Jakarta";
 document.getElementById("alasan").innerHTML =
   "Meningkatkan soft skill dan hard skill & Menambah relasi";
}

function imgmale4() {
 document.getElementById("nama").innerHTML = "Naufal Bhanu Anargyarahman";
 document.getElementById("fakultas").innerHTML = "STEI";
 document.getElementById("jurusan").innerHTML = "IF atau STEI";
 document.getElementById("umur").innerHTML = "18 tahun";
 document.getElementById("tinggal").innerHTML = "Jakarta";
 document.getElementById("alasan").innerHTML =
   "Meningkatkan soft skill dan hard skill & Menambah relasi";
}

function imgmale3() {
 document.getElementById("nama").innerHTML = "Steven Nathaniel";
 document.getElementById("fakultas").innerHTML = "STEI";
 document.getElementById("jurusan").innerHTML = "IF (Sudah keterima)";
 document.getElementById("umur").innerHTML = "20 tahun";
 document.getElementById("alasan").innerHTML =
   "Karena saat OHU , stand ARC sepi ";
 document.getElementById("hasil").innerHTML =
   "Sudah mulai belajar ngoding kelas 6 SD ";
}

function imgmale5() {
 document.getElementById("nama").innerHTML = "Jeremy Evan";
 document.getElementById("fakultas").innerHTML = "FTSL";
 document.getElementById("jurusan").innerHTML = "Teknik Sipil";
 document.getElementById("umur").innerHTML = "18 tahun";
 document.getElementById("tinggal").innerHTML = "Jakarta";
 document.getElementById("alasan").innerHTML = "Tertarik dengan pemrograman";
}

function imgfemale() {
 document.getElementById("nama").innerHTML = "Febriyola Kurnia Putri";
 document.getElementById("fakultas").innerHTML = "STEI";
 document.getElementById("jurusan").innerHTML = "IF atau STI";
 document.getElementById("umur").innerHTML = "19 tahun";
 document.getElementById("tinggal").innerHTML = "Bandung";
 document.getElementById("alasan").innerHTML =
   "Meningkatkan soft skill dan hard skill & Menambah relasi";
}
