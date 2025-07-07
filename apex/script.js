let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalSpan = document.getElementById("total");
  if (!cartContainer) return;

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} 
      <button onclick="removeItem(${index})">Remove</button>`;
    cartContainer.appendChild(li);
    total += item.price;
  });

  totalSpan.textContent = `₹${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

window.onload = displayCart;
