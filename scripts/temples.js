try {
    // Dynamically add the current year to the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Dynamically add the last modified date to the footer
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;
} catch (error) {
    console.error("Error updating the footer date information:", error);
}
// Select the hamburger button and navigation menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Add event listener to toggle the menu visibility
hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden"); // Toggle the 'hidden' class on the menu
    // Change the button symbol between ☰ (open) and ✖ (close)
    hamburger.textContent = menu.classList.contains("hidden") ? "☰" : "✖";
});
