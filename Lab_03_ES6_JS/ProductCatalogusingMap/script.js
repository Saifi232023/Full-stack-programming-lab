const products = new Map();

products.set(1, { name: "Laptop", price: 1200 });
products.set(2, { name: "Phone", price: 800 });
products.set(3, { name: "Tablet", price: 600 });
products.set(4, { name: "Headphones", price: 200 });
products.set(5, { name: "Keyboard", price: 150 });

function searchProduct() {
    const id = Number(document.getElementById("searchId").value);
    const resultDiv = document.getElementById("result");

    if (products.has(id)) {
        const product = products.get(id);
        resultDiv.innerHTML = `
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Total Products:</strong> ${products.size}</p>
        `;
    } else {
        resultDiv.innerHTML = "Product not found!";
    }
}

function deleteProduct() {
    const id = Number(document.getElementById("searchId").value);
    products.delete(id);
    document.getElementById("result").innerHTML =
        `Product deleted. Total Products: ${products.size}`;
}