//Menentukan sebuah angka negatif atau positif menggunakan if-else//
let angka =  6

if (angka >= 0) {
    console.log("angka",  angka,   "positif")
} else if (angka < 0) {
    console.log("angka",  angka,   "negatif")
}

//Menentukan angka lebih besar//
let angka1 = 45
let angka2 = 34

if (angka1 > angka2) {
    console.log(angka1,  "lebih besar dari",  angka2)
} else if (angka1 < angka2) {
    console.log(angka1,  "lebih kecil dari",  angka2)
}

//Menentukan jumlah kata lebih dari 5//
let kata = "rindimanis"

if (kata.length> 5) {
    console.log(kata, "memiliki jumlah lebih dari 5 karakter")
} else if (kata.length <= 5) {
    console.log( kata, "memiliki jumlah kurang dari 5 karakter")
}

//Memeriksa sebuah tahun//
let tahun =  2022

if ((tahun % 4 === 0 && tahun % 100 !== 0 && tahun % 400 === 0)) {
    console.log(tahun,  "adalah ahun kabisat")
} else {
    console.log(tahun,  "adalah bukan tahun kabisat")
}

//Menghitung biaya pengiriman barang//
let beratBarang = 6

if (beratBarang >= 5) {
    console.log(beratBarang,  "biaya pengiriman adalah 50.000")
} else if (beratBarang < 5) {
    console.log(beratBarang,  "biaya pengiriman adalah 20.000")
}

//Memeriksa apakah login berhasil atua gagal//
let usernameBenar = "Rindi123"
let passwordBenar = "aku345"

let usernameInput = "Rindi123"
let passwordInput = "aku345"

if (usernameInput === usernameBenar && passwordInput === passwordBenar) {
    console.log("Login Berhasil")
} else if ((usernameInput === usernameSalah && passwordInput === passwordSalah)) {
    console.log("Login Gagal")
}

if (usernameInput === usernameBenar && passwordInput === passwordBenar) {
    console.log("Login Gagall")
} else if ((usernameInput === usernameSalah && passwordInput === passwordSalah)) {
    console.log("Login Berhasil")
}

//Menentukan bilangan bulat//
let bilangan = 3

if (bilangan % 2 === 0) {
    console.log(bilangan,  "adalah bilangan ganjil")
} else {
    console.log(bilangan, "adalah bilangan genap")
}

//Menentukan bilangan bukan yang memiliki kelipatan 3 atau 5//
let bilanganBilangan = 9

if (bilanganBilangan % 3 === 0){
    console.log(bilanganBilangan,  "adalah kelipatan dari 3")
} else if (bilanganBilangan % 3 === 0 && bilanganBilangan % 5 === 0){
    console.log(bilanganBilangan,  "adalah kelipatan dari 3 dan 5")
} else {
    console.log(bilanganBilangan,  "adalah kelipatan dari 5")
}

//Menentukan sebuah kata palindrom (bacaan dari depan maupun dari belakang sama)//
let kataKata = "kupu-kupu"

if (kataKata = true){
    console.log(kataKata,  "adalah palindrom")
} else {
    console.log(kataKata,  "bukan palindrom")
}

//Memeriksa apakah seorang pengguna memiliki cukup usia untuk mendapatkan SIM//
let pengguna = 15

if (pengguna >= 17) {
    console.log(pengguna,  "cukup usia untuk mendapatkan SIM")
} else if (pengguna < 17){
    console.log(pengguna,  " belum cukup usia untuk mendapatkan SIM")
}