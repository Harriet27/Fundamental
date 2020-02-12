// let products = [];
let products = [{namaProduct : "Mouse", hargaProduct : 100000, stokProduct : 20, category : "Elektronik", condition : "New"}];

function addNewProduct() {
    let namaProduct = document.getElementById("name").value;
    let hargaProduct = document.getElementById("price").value;
    let stokProduct = document.getElementById("stock").value;
    let category = document.getElementById("category").value;
    let condition = document.querySelector("input[name=condition]:checked").value;

    let obj = {
        namaProduct,
        hargaProduct,
        stokProduct,
        category,
        condition
    };
    products.push(obj);
    console.log(products);
    showList();
}

function showList() {
    let list = products.map(function(element){
        return(
            `
                <tr>
                    <td>${element.namaProduct}</td>
                    <td>${element.hargaProduct}</td>
                    <td>${element.stokProduct}</td>
                    <td>${element.category}</td>
                    <td>${element.condition}</td>
                </tr>
            `
        )
    })
    document.getElementById('hasil').innerHTML = list.join('');
}
showList();