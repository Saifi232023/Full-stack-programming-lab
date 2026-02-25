let cart = [];

// Rest operator
function addToCart(...items) {
    cart.push(...items);
}

// Function triggered by button
function addProducts() {

    addToCart("Laptop", "Phone", "Headphones");

    // Spread operator to clone cart
    const clonedCart = [...cart];

    // Array Destructuring
    const [firstItem, ...remainingItems] = cart;

    // Display results
    document.getElementById("total").textContent = cart.length;
    document.getElementById("first").textContent = firstItem;
    document.getElementById("remaining").textContent = remainingItems.join(", ");
    document.getElementById("cloned").textContent = clonedCart.join(", ");
}