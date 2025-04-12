document.addEventListener("DOMContentLoaded", () => {
    // Function to collect payment information and store it in an object
    function receipt() {
        // Get payment information from input fields
        const name = document.getElementById("name").value;
        const cardNumber = document.getElementById("cardNumber").value;
        const expDate = document.getElementById("expDate").value;
        const cvv = document.getElementById("cvv").value;
        const billingAddress = document.getElementById("billingAddress").value;

        // Create a JavaScript object to store the payment information
        const paymentInfo = {
            fullName: name,
            cardNumber: cardNumber,
            expiryDate: expDate,
            cvv: cvv,
            billingAddress: billingAddress
        };

        // Log the payment information to the console using template literals
        console.log(`Payment Information:
        Full Name: ${paymentInfo.fullName}
        Card Number: ${paymentInfo.cardNumber}
        Expiry Date: ${paymentInfo.expiryDate}
        CVV: ${paymentInfo.cvv}
        Billing Address: ${paymentInfo.billingAddress}`);

        // Display a confirmation message using template literals
        alert(`Thank you, ${paymentInfo.fullName}! Your payment information has been saved successfully.`);

        // Optionally, store the payment information in localStorage for use on receipt.html
        localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));

        // Return the payment information object
        return paymentInfo;
    }

    // Attach an event listener to the form's submit button
    const paymentForm = document.getElementById("paymentForm");
    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        receipt(); // Call the receipt function to process the payment information

        // Redirect to receipt.html after processing
        window.location.href = "receipt.html";
    });
});


