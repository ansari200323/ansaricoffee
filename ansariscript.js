function showAlert() {
    alert("Thanks for visiting Ansari Coffee House!");
}
// Order form submission handler
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from refreshing the page

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const coffee = document.getElementById("coffee").value;
    const quantity = document.getElementById("quantity").value;
    const notes = document.getElementById("notes").value;

    const message = `Thank you, ${name}! Your order for ${quantity} ${coffee}(s) has been received. We will contact you shortly at ${phone}.`;
    
    document.getElementById("confirmationMessage").innerText = message;

    // Clear form
    document.getElementById("orderForm").reset();
});
