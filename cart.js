let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");

let total = 0;

cart.forEach(item => {

    total += item.price;

    cartItems.innerHTML += `

<div class="card">

<img src="${item.thumbnail}" width="120">

<h3>${item.title}</h3>

<p>$${item.price}</p>

</div>

`;

});

let tax = total * 0.18;

let finalTotal = total + tax;

document.getElementById("bill").innerHTML = `

<h2>Bill Summary</h2>

<p>Items : ${cart.length}</p>

<p>Subtotal : $${total.toFixed(2)}</p>

<p>GST (18%) : $${tax.toFixed(2)}</p>

<h3>Total : $${finalTotal.toFixed(2)}</h3>

`;