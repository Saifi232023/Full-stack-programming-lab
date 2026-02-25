let cart = [];

function addToCart(...items) {
    cart.push(...items);
}

addToCart("Laptop", "Phone", "Headphones");

const clonedCart = [...cart];

const [firstItem, ...remainingItems] = clonedCart;

const container = document.getElementById("cartContainer");

container.innerHTML = `
    <h3>Total Items: ${clonedCart.length}</h3>
    <p><strong>First Item:</strong> ${firstItem}</p>
    <p><strong>Remaining Items:</strong> ${remainingItems.join(", ")}</p>
    <p><strong>Updated Cart:</strong> ${clonedCart.join(", ")}</p>
`;