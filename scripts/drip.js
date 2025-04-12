document.addEventListener("DOMContentLoaded", () => {
    const fashionItems = [
      { name: "Oversized hoodies", category: "Men'sCloting" },
      { name: "Graphic t-shirts", category: "Men'sCloting" },
      { name: "Slim-fit joggers", category: "Men'sCloting" },
      { name: "Cargo pants", category: "Men'sCloting" },
      { name: "Polo shirts", category: "Men'sCloting" },
  
      { name: "High-waisted jeans", category: "Women'sClothing" },
      { name: "Crop tops", category: "Women'sClothing" },
      { name: "Denim jackets", category: "Women'sClothing" },
      { name: "Biker shorts", category: "Women'sClothing" },
      { name: "Sequin mini dresses", category: "Women'sClothing" },
  
      { name: "Crossbody bags", category: "Accessories" },
      { name: "Statement earrings", category: "Accessories" },
      { name: "Baseball caps", category: "Accessories" },
      { name: "Layered necklaces", category: "Accessories" },
      { name: "Watches", category: "Accessories" },
  
      { name: "Limited-edition sneakers", category: "SpecialOffers" },
      { name: "Exclusive designer handbags", category: "SpecialOffers" },
      { name: "Discounted leather jackets", category: "SpecialOffers" }
    ];
  
    // Variable to store the currently active folder (category)
    let activeFolder = null;
  
    // Function to toggle (unfold/fold) a category folder
    function toggleCategory(category, folder) {
      // If there's an active folder that's not the one we just clicked, close it.
      if (activeFolder && activeFolder !== folder) {
        activeFolder.classList.remove("active");
        activeFolder.innerHTML = "";
      }
  
      // If the clicked folder is already open, close it.
      if (folder.classList.contains("active")) {
        folder.classList.remove("active");
        folder.innerHTML = "";
        activeFolder = null;
      } else {
        // Otherwise, open the clicked folder and display the items.
        folder.classList.add("active");
        folder.innerHTML = ""; // Clear any previous content
  
        const filteredItems = fashionItems.filter(item => item.category === category);
        filteredItems.forEach(item => {
          const itemElement = document.createElement("p");
          itemElement.textContent = item.name;
          folder.appendChild(itemElement);
        });
  
        // Now update the activeFolder reference
        activeFolder = folder;
      }
    }
  
    // Attach event listeners to each category link
    document.querySelectorAll(".category-link").forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const category = event.target.dataset.category;
        const folder = document.getElementById(category);
        
        toggleCategory(category, folder);
      });
    });
  });
  

const searchInput = document.querySelector(".search-bar input");
    if (searchInput) {
        searchInput.addEventListener("focus", () => {
            searchInput.placeholder = ""; // Clear the placeholder
        });

        searchInput.addEventListener("blur", () => {
            searchInput.placeholder = "Search for your outfit ..."; // Restore placeholder on blur
        });
    }    


    