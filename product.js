const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(product => {

        document.getElementById("productDetails").innerHTML = `

<h2>${product.title}</h2>

<img src="${product.thumbnail}" width="300">

<p>${product.description}</p>

<h3>Price : $${product.price}</h3>

<button onclick="addToCart()">
Add To Cart
</button>

`;

        window.currentProduct = product;

    });

function addToCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(window.currentProduct);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart");

}