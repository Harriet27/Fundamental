// soal 1
function firstLast (str) {
    /* (method 1)
    return str.substring(1, str.length-1); 
    */
    var split = str.split('');
    split.pop();
    split.shift();
    return split.join('');
}
console.log(firstLast('susilo'));

// soal 2
function repeat (str) {
    /* (method 1)
    return str.repeat(3);
    */
    var res = '';
    for (var i = 1; i <= 3; i++) {
        res += str
    }
    return res;
}
console.log(repeat('lian'));

// soal 3
function namaGG (str) {
    if (str.length % 2 === 0) {
        return "Nama genap";
    }
    return "Nama ganjil";
}
console.log(namaGG('aldrich'));

// soal 4
function arrN (arr, nth) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        res.push(arr[i] * nth);
    }
    return res;
}
console.log(arrN([1,2,3],9));

// soal 5
function filterClone (arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(filterClone(['lian','andi','susilo','joko','romianggur']));

// soal 6
function mapClone () {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}
function kaliDua (num) {
    return num * 2;
}
function bagiDua (num) {
    return num / 2;
}
function tambahDua (num) {
    return num + 2;
}
function kurangDua (num) {
    return num - 2;
}
function modulusDua (num) {
    return num % 2;
}
console.log(mapClone([1,2,3], kaliDua));

// soal 7
function filterClone (arr, fn) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}
function lebihLima (str) {
    if (str.length > 4) {
        return true;
    }
    return false;
}
console.log(filterClone(['lian','andi','susilo','joko','romianggur'], lebihLima));

// soal 8
function questMark (str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '?') {
            count++;
        }
    }
    return count;
}
console.log(questMark('aa???b?c??ddeeee'));

// soal 9
/*
function terima number (94718)
9 - 4 + 7 -1 + 8 = (output / 11 return true else false)
*/
function loop (num) {
    var str = num.toString();
    var arr = str.split('');
    var Genap = [];
    var Ganjil =[];
    var totalGenap = 0;
    var totalGanjil = 0;
    
    for (i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            Genap.push(arr[i]);
        }
        else {
            Ganjil.push(arr[i]);
        }
    }

    for(i = 0; i < Genap.length; i++) {
        totalGenap += (parseInt(Genap[i]));
    }
    
    for(i = 0; i < Ganjil.length; i++) {
        totalGanjil += (parseInt(Ganjil[i]));
    }
    
    var result =totalGenap - totalGanjil;
    
    if (result % 11 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(loop(9592));

// ATAU

function loop (num) {
    let output = 0;
    let i = 0;
    while (num !== 0) {
        let a = num % 10;
        if (i % 2 === 0) {
            output += a;
        } else {
            output -= a;
        }
        num = Math.floor(num / 10);
        i++;
    }
    if (Math.abs(output) % 11 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(loop(9592));

// soal 10
function mid (str) {
    if (str.length % 2 !== 0) {
        return str.substring((str.length/2), ((str.length/2)+1));
    }
    return str.substring(((str.length/2)-1), ((str.length/2)+1));
}
console.log(mid("haha"));
console.log(mid("idiot"));

// soal 11
function xando (xo) {
    var str = xo.toLowerCase();
    var countX = 0;
    var countO = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            countX++;
        } else if (str[i] === 'o') {
            countO++;
        } else {
            return "Invalid input!";
        }
    }
    if (countX === countO) {
        return true;
    } else {
        return false;
    }
}
console.log(xando('xxoo'));
console.log(xando('xoo'));
console.log(xando('malibu'));

// soal 12
function objLoop (obj) {
    // var count = 0;
    // var arr = Object.values(obj);
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] === true) {
    //         count++;
    //     }
    // }
    // return count;
    return Object.values(obj).filter((val) => {
        return val;
    }).length
}
var obj = {
    a: true,
    b: false,
    c: true,
    d: true,
    e: true,
    f: true,
    g: false,
}
console.log(objLoop(obj));
