var kendaraan = ['avanza', 'mio', 'boeing'];
// versi for
for (var i = 0; i < kendaraan.length; i++) {
    console.log(kendaraan[i]);
}
// versi while
var i = 0;
while (i < kendaraan.length) {
    console.log(kendaraan[i]);
    i++;
}

var a = ['avanza', 'mio', 'delman', 'truk']
console.log(a.splice(2,0,'bemo','becak'))

var arr = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
];
var countTrue = 0;
var countFalse = 0;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === true) {
    countTrue++;
  } else {
    countFalse++;
  }
}
console.log("true = " + countTrue);
console.log("false = " + countFalse);
