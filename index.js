
var cartItems = [];

function formatPrice(amount) {
  return amount.toLocaleString("en-IN");
}

function renderCart() {
  var cartList = document.getElementById("cart-items");
  var emptyMsg = document.getElementById("empty-cart");

  cartList.innerHTML = "";

  cartItems.forEach(function (item, index) {
    var li = document.createElement("li");
    li.textContent = item.name + " - ₹" + formatPrice(item.price) + " ";

    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.setAttribute("aria-label", "Remove " + item.name);
    removeButton.onclick = function () {
      removeCartItem(index);
    };

    li.appendChild(removeButton);
    cartList.appendChild(li);
  });

  var totalAmount = cartItems.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);

  document.getElementById("cart-count").textContent = cartItems.length;
  document.getElementById("cart-total").textContent = formatPrice(totalAmount);

  if (emptyMsg) {
    emptyMsg.style.display = cartItems.length === 0 ? "block" : "none";
  }
}

function addToCart(name, price) {
  cartItems.push({
    name: name,
    price: Number(price)
  });
  renderCart();
}

function removeCartItem(index) {
  cartItems.splice(index, 1);
  renderCart();
}

function clearCart() {
  cartItems = [];
  renderCart();
}

