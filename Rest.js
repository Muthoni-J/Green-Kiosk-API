let products = document.getElementById("products")
let fruits = document.getElementById("fruList")
let vegetables = document.getElementById("vegList")
document.getElementById("title").style.color="green";
document.body.style.backgroundColor = "silver";

const baseUrl='http://localhost:5000';

fetch(`${baseUrl}/products/fruits`)
.then(response=>{
    response.json()
    .then(data=>{
        console.log(data)
        data.forEach(element=>{
            fruits.innerHTML += `<li>${element.name}</li>`
        });
    })

})

.catch(error=>{
    console.log(error)

})
 
fetch(`${baseUrl}/products`)
.then(response=>{
    response.json()
    .then(data=>{
        console.log(data)
        data.forEach(element=>{
            products.innerHTML += `<li>${element.name}</li>`
        });
    })
})

.catch(error=>{
     console.log(error)
})

fetch(`${baseUrl}/products/vegetables`)
.then(response=>{
    response.json()
    .then(data=>{
        console.log(data)
        data.forEach(element=>{
            vegetables.innerHTML += `<li>${element.name}</li>`
        });
    })
})
.catch(error=>{
    console.log(error)
})

