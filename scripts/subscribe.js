document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");
    
    // Listen for input changes on the confirm password field
    confirmPasswordField.addEventListener("input", function () {
        if (confirmPasswordField.value !== passwordField.value) {
            // Template literal used to inject current values into the error message.
            confirmPasswordField.setCustomValidity(
                `Passwords do not match: "${confirmPasswordField.value}" does not equal "${passwordField.value}".`
            );
            console.log(`Passwords do not match: Expected "${passwordField.value}", but got "${confirmPasswordField.value}".`);
        } else {
            confirmPasswordField.setCustomValidity("");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const createAccountButton = document.getElementById("submit-button");

    createAccountButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get user input values and trim any extra spaces
        const firstName = document.getElementById("fname").value.trim();
        const lastName = document.getElementById("lname").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const email = document.getElementById("email").value.trim();

        // Retrieve stored accounts from localStorage (or initialize an empty array)
        const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
        console.log(`Stored Accounts: ${JSON.stringify(storedAccounts)}`);

        // Check if an account with the provided username OR email already exists
        const accountExists = storedAccounts.some(account =>
            account.username === username || account.email === email
        );

        if (accountExists) {
            alert(`An account with the username "${username}" or email "${email}" already exists!`);
            return;
        }

        // Create and store the new account data
        const newAccount = { firstName, lastName, username, password, email };
        storedAccounts.push(newAccount);
        localStorage.setItem("accounts", JSON.stringify(storedAccounts));

        alert(`Account successfully created for ${firstName} ${lastName}!`);

        // Redirect to the Thank You page
        window.location.href = "thank-you.html";
    });
});
