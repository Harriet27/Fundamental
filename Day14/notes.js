// sort function
var arr = [11,56,2,8,92,23,56,87];
console.log(arr.sort((a,b) => {return a-b}));

// reverse
var nama = 'oloianeoddy'.split('o');
console.log(nama.reverse());

// splice
// (index start dari 0, berapa yang mau dihapus)

// slice
// (index 0 start, berenti di index nth)

nama.push(...newArr) // gabungkan 2 array, without being nested array (hrs pake spread operator)
// atau pake method concat


/*
SOAL CERITA
harga awal = Rp 10.000
tiap menit naik 20%
tiap menit kelipatan 4 naik 10% (Math.ceil)
if total > 30jt => terjual | else total < 30 => return harganya
*/
// Method 1
const lelang = (menit) => {
    var price = 10000;
    var arrMinute = [];
    for (var i = 1; i <= menit; i++) {
        arrMinute.push(i);
    }
    for (var j = 0; j < arrMinute.length; j++) {
        if (arrMinute[j] % 4 === 0) {
            price *= 1.1;
            price = Math.ceil(price);
        } else {
            price *= 1.2;
            price = Math.ceil(price);
        }
    }
    if (price > 30000000) {
        return `Menit ke-${menit}, Barang sudah terjual.`;
    } else {
        return `Menit ke-${menit}, Total adalah Rp ${price}.`;
    }
}
// Method 2
const lelang = (num) => {
    var harga = 10000;
    for (var i = 1; i <= num; i++) {
        if (i % 4 === 0) {
            harga += harga * 0.1;
        } else {
            harga += harga * 0.2;
        }
        harga = Math.ceil(harga);
        if (harga >= 30000000) {
            return `Menit ke-${num}, Barang sudah terjual.`;
        }
    }
    return `Menit ke-${num}, Total adalah Rp ${harga}.`;
}
// Output
console.log(lelang(2)) // Menit ke-2, Total adalah Rp 14400.
console.log(lelang(50)) // Menit ke-50, Barang sudah terjual.
console.log(lelang(49)) // menit ke-49, Total adalah Rp 26697248.

/*
PR ada di whatsapp
*/
const brpThn = (init, rate, immig, target) => {
    var count = 0;
    while (init <= target) {
        init += (init * (rate/100)) + immig;
        count++;
    }
    return `${count} Tahun`;
}
console.log(brpThn(1000, 2, 50, 1200)) // 3 Tahun
console.log(brpThn(1500, 5, 100, 5000)) // 15 Tahun
console.log(brpThn(1500000, 2.5, 10000, 2000000)) // 10 Tahun