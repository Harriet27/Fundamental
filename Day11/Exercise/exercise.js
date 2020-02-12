// DEFAULT
var arrProduct = [
    { id: 1579581080923, category: 'Fast Food', name: 'Noodle', price: 3500, stock: 9},
    { id: 1579581081130, category: 'Electronic', name: 'Headphone', price: 4300000, stock: 8},
    { id: 1579581081342, category: 'Cloth', name: 'Hoodie', price: 300000, stock: 7},
    { id: 1579581080971, category: 'Fruit', name: 'Apple', price: 10000, stock: 6},
];
var arrCategory = ['All', 'Fast Food', 'Electronic', 'Cloth', 'Fruit'];

// SHOW MENU
/* loop in array nth will be stored at [index], syntax bawaan */
var showMenu = (idProduct) => {
    var listMenu = arrProduct.map((elem, index) => {
        if (elem.id === idProduct) {        
            return (
                `   
                    <tr>
                        <td>${elem.id}</td>
                        <td><input type="text" value="${elem.name}" id="editNama"></td>
                        <td>${elem.category}</td>
                        <td><input type="number" value="${elem.price}" id="editPrice"></td>
                        <td><input type="number" value="${elem.stock}" id="editStock"></td>
                        <td><input type="button" value="Cancel" onclick="cancelEdit()"></td>
                        <td><input type="button" value="Save" onclick="saveData(${index})"></td>
                    </tr>    
                `
            );
        }
        return(
            `
                <tr>
                    <td>${elem.id}</td>
                    <td>${elem.name}</td>
                    <td>${elem.category}</td>
                    <td>${elem.price}</td>
                    <td>${elem.stock}</td>
                    <td><input type="button" value="Delete" onclick="deleteData(${elem.id})"></td>
                    <td><input type="button" value="Edit" onclick="editData(${elem.id})"></td>
                </tr>
            `
        );
    })
    document.querySelector('#output').innerHTML = listMenu.join('');
    var listOption = arrCategory.map((elem) => {
        return (
            `
                <option value="${elem}">${elem}</option>
            `
        );
    })
    document.querySelector('#categoryInput').innerHTML = listOption.join('');
    document.querySelector('#categoryInput2').innerHTML = listOption.join('');
}

// ADD INPUT
var addData = () => {
    var nama = document.querySelector('#nama').value;
    var harga = document.querySelector('#harga').value;
    var stock = document.querySelector('#stock').value;
    var category = document.querySelector('#categoryInput').value;
    var time = new Date();

    var newProduct = {
        id: time.getTime(),
        name: nama,
        price: harga,
        stock,
        category
    };
    arrProduct.push(newProduct);
    showMenu();
}

// SHOW RESULT
var showFilterResult = (hasilFilter) => {
    var result = hasilFilter.map((val) => {
        return (
            `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.category}</td>
                    <td>${val.price}</td>
                    <td>${val.stock}</td>
                </tr>
            `
        );
    })
    return document.getElementById('output').innerHTML = result.join('');
}

// FILTER BY NAME
var filterNama = () => {
    var namaInput =  document.querySelector('#namaFilter').value;
    console.log(namaInput);
    var output = arrProduct.filter((val) => {
        return val.name.toUpperCase().includes(namaInput.toUpperCase());
    })
    showFilterResult(output);
}

// FILTER BY PRICE
var filterHarga = () => {
    if (document.querySelector('#hargaMin').value && document.querySelector('#hargaMax').value) {
        var hargaMin = document.querySelector('#hargaMin').value;
        var hargaMax = document.querySelector('#hargaMax').value;
        var output = arrProduct.filter((val) => {
            return val.price >= hargaMin && val.price <= hargaMax;
        })
        showFilterResult(output);
    }
}

// FILTER BY CATEGORY
var filterCategory = () => {
    var category = document.querySelector('#categoryInput2').value
    if (category === 'All') {
        showMenu();
    } else {
        var output = arrProduct.filter((val) => {
            return val.category === category;
        })
        showFilterResult(output);
    }
}

// DELETE DATA
var deleteData = (idProduct) => {
    console.log(idProduct);
    arrProduct = arrProduct.filter((val) => {
        return val.id !== idProduct;
    })
    showMenu();
}

// EDIT DATA
var editData = (id) => {
    showMenu(id);
}

// CANCEL
var cancelEdit = () => {
    showMenu();
}

// SAVE
var saveData = (index) => {
    console.log(index);
    var nama = document.getElementById('editNama').value;
    var price = document.getElementById('editPrice').value;
    var stock = document.getElementById('editStock').value;
    arrProduct[index].name = nama;
    arrProduct[index].price = price;
    arrProduct[index].stock = stock;
    /* OR */
    // arrProduct[index] = {
    //     ...arrProduct[index],
    //     name: nama,
    //     price,
    //     stock
    // };
    showMenu();
}

showMenu();