document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the payment information from localStorage
    const paymentInfo = JSON.parse(localStorage.getItem("paymentInfo"));

    if (paymentInfo) {
        // Display the payment information on the page
        document.getElementById("receipt").innerHTML = `
            <h2>Payment Receipt</h2>
            <p><strong>Full Name:</strong> ${paymentInfo.fullName}</p>
            <p><strong>Card Number:</strong> ${paymentInfo.cardNumber}</p>
            <p><strong>Expiry Date:</strong> ${paymentInfo.expiryDate}</p>
            <p><strong>Billing Address:</strong> ${paymentInfo.billingAddress}</p>
        `;
    } else {
        document.getElementById("receipt").innerHTML = "<p>No payment information found.</p>";
    }
});