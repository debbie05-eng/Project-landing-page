const cartItems = [];
const cartList = document.getElementById('cart-items');
const form = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

// Add to Cart
function addToCart(name, price) {
  const item = { name, price };
  cartItems.push(item);
  updateCart();
}

// Remove from Cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Update Cart UI
function updateCart() {
  cartList.innerHTML = '';

  if (cartItems.length === 0) {
    cartList.innerHTML = '<li>Cart is empty.</li>';
    return;
  }

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      item.name -item.price.toFixed(2) 
      <button onclick="removeFromCart({index})">Remove</button>
    `;
    cartList.appendChild(li);
  });
}

// Form Submission
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
  alert('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
  }

  formSuccess.textContent = 'Message sent successfully!';
  form.reset();
});