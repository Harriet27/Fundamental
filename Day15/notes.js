// Object
// {}
var obj = {
    nama : 'lian',
    pekerjaan : 'coder'
};
console.log(obj.pekerjaan);
console.log(obj['pekerjaan']);

// Object literal
// Constructor
var obj = {
    nama : 'lian',
    pekerjaan : 'coder'
};
obj.sekolah = 'purwadhika'; // tambah property ke object
console.log(obj.pekerjaan);
delete obj.nama; // delete salah satu property
console.log(obj.pekerjaan);

// Object class
var manusia = new Object;
manusia.mata = 2;
manusia.hidung = 1;
manusia.mulut = 1;
manusia.kumis = false;
manusia.jenggot = false;
console.log(manusia);

// constructor
class Manusia {
    constructor (a,b,c) {
        this.mata = a
        this.alis = b
        this.kumis = c
    }
}
var lian = new Manusia('hitam',2,false);
console.log(lian);

// Inheritance
class Manusia {
    constructor (a,b,c) {
        this.mata = a
        this.alis = b
        this.kumis = c
    }
}
class Jantan extends Manusia {
    constructor (a,b,c,d) {
        super(a,b,c)
        this.testosterone = d
        this.macho = true
    }
}
class Betina extends Manusia {
    constructor (a,b,c,d) {
        super(1,b,c)
        this.estrogen = d
        this.macho = false
        this.tambahHormon = function() {
            return this.estrogen + this.mata
        }
    }
}
class Pizza {
    constructor() {
        this.diameter = 30
    }
}
class Pepperoni extends Pizza {
    constructor() {
        super()
        this.peperoni = 10
    }
}
class Cheese extends Pepperoni {
    constructor() {
        super()
        this.cheese = 2
    }
}
var italian = new Cheese ();
var arthur = new Jantan (2,2,false,1);
var romiah = new Betina (2,2,false,1);
console.log(arthur);
console.log(romiah.tambahHormon());
console.log(italian);

// Loop thru objects
// Object.keys | Object.values | Object.entries
// loop For...in
var arrOutput = [];
for (val in italian) {
    arrOutput.push(italian[val]);
}
console.log(arrOutput); // array value dari class Italian

var output = [];
for (val in italian) {
    var arr = [];
    arr.push(val, italian[val]);
    output.push(arr);
}
console.log(output); // print nested array berisi property dan value dari class Italian

var newArr = arr.map((val) => {
    return val.cheese;
})
var output = [];
for (var i = 0; i < arr.length; i++) {
    output.push(arr[i].cheese);
}
arr.forEach((val) => {
    output.push(val.cheese)
})
console.log(newArr);
console.log(output); // print array of objects isi class Cheese

