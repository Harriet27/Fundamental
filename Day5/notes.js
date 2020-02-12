function oddEven (num) {
    if (num % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}
console.log(oddEven(1));
console.log(oddEven(2));
console.log(oddEven(3));
console.log(oddEven(4));
console.log(oddEven(5));

function pyramid1 (row) {
    var asterisk = '';
    for (var i = 0; i <= row; i++) {
        for (var j = 0; j < i; j++) {
            asterisk += '*';
        }
      asterisk += '\n';
    } 
    return asterisk;
}
console.log(pyramid1(10));

function permenAndi (days) {
    var permen = 0;
    for (var i = 1; i <= days; i++) {
        if (i % 2 === 0) {
            permen += 2;
        } else {
            permen += 1;
        }
    }
    return permen;
}
console.log(permenAndi(5)); // 7 permen

/**
menu = array of objects
listMenu = function
*/