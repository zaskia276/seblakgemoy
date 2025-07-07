let cart = [];
let total = 0;

function addToCart(name, price, levelId, toppingId) {
  const level = document.getElementById(levelId).value;
  const topping = document.getElementById(toppingId).value;

  cart.push({ name, price, level, topping });
  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  alert(`${name} (Level ${level}, ${topping}) ditambahkan ke keranjang!`);
}

function toggleCart() {
  const cartSection = document.getElementById("cart");
  cartSection.classList.toggle("hidden");

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${item.name} - Level ${item.level}, ${item.topping} - Rp ${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

function checkout() {
  let receipt = "===== STRUK PEMBELIAN =====\n";
  cart.forEach((item, index) => {
    receipt += `${index + 1}. ${item.name} - Level ${item.level}, ${item.topping} - Rp ${item.price}\n`;
  });
  receipt += `\nTotal Bayar: Rp ${total}`;

  document.getElementById("receipt-content").innerText = receipt;
  document.getElementById("receipt").classList.remove("hidden");
  document.getElementById("cart").classList.add("hidden");
}


