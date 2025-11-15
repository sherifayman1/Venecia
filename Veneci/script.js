function openOrderForm(product, price) {
    document.getElementById("orderProduct").value = product;
    document.getElementById("orderPrice").value = "$" + price;
    document.getElementById("orderForm").style.display = "flex";
}

function closeOrderForm() {
    document.getElementById("orderForm").style.display = "none";
}

function sendOrder() {
    let product = document.getElementById("orderProduct").value;
    let price = document.getElementById("orderPrice").value;
    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;
    let address = document.getElementById("customerAddress").value;

    if (!name || !phone || !address) {
        alert("Please fill all fields.");
        return;
    }

    alert(
        "Order Sent!\n\n" +
        "Product: " + product + "\n" +
        "Price: " + price + "\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Address: " + address
    );

    closeOrderForm();
}
