const { METHODS } = require("http")

let productslist=document.getElementById("product")
productslist.firstElementChild('/products',{
    method:'GET',
    headers:{
        "Content-type":"application/json"
    }
})


let vegetableslist=document.getElementById("product")
productslist.firstElementChild('/products',{
    method:'GET',
    headers:{
        "Content-type":"application/json"
    }
})
