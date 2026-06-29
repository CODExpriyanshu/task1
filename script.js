const productDiv = document.getElementById("products");

fetch("https://dummyjson.com/products?limit=194")
    .then(res => res.json())
    .then(data => {

        data.products.forEach(product => {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `

<img src="${product.thumbnail}">

<h3>${product.title}</h3>

<p>$${product.price}</p>

<button onclick="viewProduct(${product.id})">
View Details
</button>

`;

            productDiv.appendChild(card);

        });

    });

function viewProduct(id) {

    window.location.href = `product.html?id=${id}`;

}