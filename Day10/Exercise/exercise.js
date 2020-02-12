// DEFAULT
var arrProduct = [
    { id: 19530839043940, category: 'Fast Food', name: 'Noodle', price: '3500', stock: 9 },
    { id: 19530839043941, category: 'Electronic', name: 'Headphone', price: '4300000', stock: 8 },
    { id: 19530839043942, category: 'Cloth', name: 'Hoodie', price: '300000', stock: 7 },
    { id: 19530839043943, category: 'Fruit', name: 'Apple', price: '10000', stock: 6 }    
];
var arrCategory = ['All', 'Fast Food', 'Electronic', 'Cloth', 'Fruit'];

// SHOW LIST
var showMenu = () => {
    var listMenu = arrProduct.map((elem) => {
        return(
            `
                <tr>
                    <td>${elem.id}</td>
                    <td>${elem.name}</td>
                    <td>${elem.category}</td>
                    <td>${elem.price.toLocaleString("id-ID")}</td>
                    <td>${elem.stock}</td>
                </tr>
            `
        )
    })
    console.log(listMenu);
    document.getElementById('output').innerHTML = listMenu.join('');
}
showMenu();

// SHOW CATEGORY
var showCategory = () => {
    var listCat = arrCategory.map((val) => {
        return(
            `
                <option value="${val}">${val}</option>
            `
        )
    })
    console.log(listCat);
    document.getElementById('categoryInput').innerHTML = listCat.join('');
}
showCategory();

// ADD INPUT
var addData = () => {
    var nama = document.getElementById("nama").value;
    var harga = document.getElementById("harga").value;
    var stok = document.getElementById("stock").value;
    var kategori = document.getElementById("categoryInput").value;
    var time = new Date();

    var newProduct = {
        id: time.getTime(),
        name: nama,
        price: harga,
        stock: stok,
        category: kategori
    };
    arrProduct.push(newProduct);
    showMenu();
}
showMenu();

// FILTER SEARCH
var filterNama = () => {
    var nama = document.getElementById('filter').value;
    var namaLower = nama.toLowerCase();
    var output = arrProduct.filter((val) => {
        var namaProdLower = val.name.toLowerCase();
        return namaProdLower.includes(namaLower);
    })
    showFilterResult(output);
}
var showFilterResult = (hasilFilter) => {
    var result = hasilFilter.map((val) => {
        return(
            `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.category}</td>
                    <td>${val.price.toLocaleString()}</td>
                    <td>${val.stock}</td>
                </tr>
            `
        )
    })
    return document.getElementById('output').innerHTML = result.join('');
}
showMenu();

/*
harga => onkeyup / onchange (2 text box hrs terisi)
category => onchange
*/