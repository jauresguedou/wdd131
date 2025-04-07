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


  document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];
    
    
     const productSelect = document.getElementById("item");
     productSelect.innerHTML = `<option value="name" disabled selected>Select a Product ...</option>`;
     products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Assign ID as the value
        option.textContent = product.name; // Display product name
        productSelect.appendChild(option);
    });
    
  })

  document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("reviewForm");

    reviewForm.addEventListener("submit", () => {
        // Retrieve the existing count or initialize at zero
        let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

        // Increment only when the form is submitted
        reviewCount++;

        // Store the updated count
        localStorage.setItem("reviewCount", reviewCount);
    });
});
