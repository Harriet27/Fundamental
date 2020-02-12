Object.keys(/* isi object */)
// print semua property, dlm bntuk array

Object.values(/* isi object */)
// print semua value, dlm array

Object.entries(/* isi object */)
// print semua property dan value, dalam array of arrays

// pertama
var manusia = {
    mata : 2,
    hidung : 1,
    alis: 2,
    mulut : 1
};
for (var bebas in manusia) {
  console.log(manusia[bebas]);
}

// kedua
var manusia = {
    mata : 2,
    hidung : 1,
    alis: 2,
    mulut : 1
};
var entries = Object.entries(manusia);
function loopToObj (arr) {
    var output = []
    for (var i = 0; i < arr.length; i++) {
        var obj = {};
        obj.prop = arr[i][0];
        obj.value = arr[i][1];
        output.push(obj);
    }
    return output;
}
console.log(loopToObj(entries));

// ketiga
var arr = [['lian','eddy'],['andi','susilo'],['joko','susilo']];
function looping (arr) {
    for (var i = 0; i < arr.length; i++) {
        var obj = {};
        obj.nama = arr[i];
        console.log(obj);
    }
}
looping(arr);

// keempat
var arr = [['lian','eddy'],['andi','susilo'],['joko','susilo']];
function looping (arr) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        var obj = {};
        obj.namaDpn = arr[i][0];
        obj.namaBlkg = arr[i][1];
        output.push(obj);
    }
    return output;
}
looping(arr);

// kelima
class Produk {
    constructor(nama,harga,stok) {
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }
}
var menu = [];
var apel = new Produk('apel', 10000, 10);
var mangga = new Produk('mangga', 20000, 20);
menu.push(apel);
menu.push(mangga);
console.log(menu);

// keenam
class Product {
    constructor(a,b,c) {
        this.nama = a;
        this.harga = b;
        this.stok = c;
    }
}
function menuList (arr) {
    var menuStr = "";
    for (var i = 0; i < arr.length; i++) {
        menuStr += (i+1) + ". " + arr[i].nama + " Rp. " + arr[i].harga + " stok: " + arr[i].stok;
    }
    return menuStr;
}
var menu = [];
var proteksi = true;
while (proteksi) {
    console.log(menu);
    var namaProduk = prompt('Masukkan nama produk');
    var hargaProduk = parseInt(prompt('Masukkan harga produk'));
    var stokProduk = parseInt(prompt('Masukkan stok produk'));
    
    if (namaProduk && hargaProduk && stokProduk) {
        var newProduk = new Product(namaProduk, hargaProduk, stokProduk);
        menu.push(newProduk);
        alert(menuList(menu));
        var back = prompt('kembali ke menu? \n 1. Yes \n 2. No');
        if (back === '1') {
            proteksi = true;
        } else {
            proteksi = false;
        }
    } else {
        proteksi = true;
    }
}

// ketujuh
class Produk {
    constructor(nama,harga,stok) {
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }
}
class Makanan extends Produk{
    constructor(a,b,c,d,e) {
        super(a,b,c);
        this.expired = d;
        this.namaRestoran = e;
    }
}
class Baju extends Produk{
    constructor(a,b,c,d,e) {
        super(a,b,c);
        this.size = d;
        this.warna = e;
    }
}
class fastFood extends Makanan {
    constructor(a,b,c,d,e,f) {
        super(a,b,c,d,e);
        this.cabang = f;
    }
}
var newProduct = new Produk ('nama','harga','stock');
console.log(newProduct);
var newFood = new Makanan ('mcnugget',20000,40,2020,'mcdonald');
console.log(newFood);
var newBaju = new Baju ('tshirt',100000,10,'S','black');
console.log(newBaju);
var mcSpicy = new fastFood ('mcSpicy',40000,20,2020,'mcdonald','bsd');
console.log(mcSpicy);


// PRRRRR
/* 
*semua pakai [nama,stok,harga]*

sugarlvl itu category buah
expired itu category fast food
warranty itu category elektronik
size itu category pakaian
*/