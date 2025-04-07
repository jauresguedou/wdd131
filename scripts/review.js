document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the stored review count
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    // Display the count in the review confirmation page
    const reviewCountDisplay = document.getElementById("reviewCountDisplay");
    if (reviewCountDisplay) {
        reviewCountDisplay.textContent = reviewCount;
    }
});
