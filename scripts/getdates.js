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
