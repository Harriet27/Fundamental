// Notes 1
var arr = [1,2,3,4,5,6];
let arrNew = arr.map(function(element){
    return element * 2;
})
console.log(arrNew);

// Notes 2 w/ arrow fn
var arr = [1,2,3,4,5,6];
let arrNew = arr.map(element => {
    return element * 2;
})
console.log(arrNew);

// Notes 3
var arr = [1,2,3,4,5,6]
let arrNew = arr.filter(function(element){
  return element % 2 === 0;
})
console.log(arrNew);

// Notes 4 fn callback
function tiga() {
  return 3;
}
function lima(x) {
  return 10 + x;
}
function tambah(num, fn) {
  return num + fn(num);
}
console.log(5, lima);