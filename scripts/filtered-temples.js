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
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Abidjan Ivory Coast Temple",
      location: "Cocody Abidjan",
      dedicated:"2025, May, 25",
      area:"118",
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58324-main.jpg"
    },
      
    {
        templeName: "Chicago Illinois Temple", 
        location: "Chicago Illinois ",
        dedicated: "1985, August, 9-13",
        area: "37062",
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg"
    },
    {
       templeName: "Accra Ghana Temple",
       location: "Accra Temple",
       dedicated: "2004, January,  11",
       area:"17500",
       imageUrl:
         "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg" 
    },
    // Add more temple objects here...
  ];

  document.addEventListener("DOMContentLoaded", function() {
    // Ensure the 'temples' array is declared before this block.
    // Example temple object:
    // {
    //   templeName: "Chicago Illinois Temple",
    //   location: "Chicago Illinois",
    //   dedicated: "1985, August, 9-13",
    //   area: 37062,
    //   imageUrl: "https://example.com/chicago.jpg"
    // }
    
    const templeCardsContainer = document.querySelector('.temple-cards');
    const navLinks = document.querySelectorAll("nav a");
    const currentYearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");
    const hamburgerButton = document.getElementById("hamburger");
    const navMenu = document.getElementById("menu");
    
  
    // Helper function to display temple cards
    function displayTemples(templesArray) {
      templeCardsContainer.innerHTML = ""; // Clear existing cards
  
      templesArray.forEach(function(temple) {
        // Debugging (optional): Log each temple to verify its properties.
        console.log(temple);
  
        const templeCard = document.createElement("article");
        templeCard.classList.add("temple-card");
  
        // Wrap all text details in a container for vertical stacking.
        templeCard.innerHTML = `
          <div class="temple-details">
            <h3 class="temple-name">${temple.templeName}</h3>
            <p class="temple-location">Location: ${temple.location}</p>
            <p class="temple-dedicated">Dedicated: ${temple.dedicated}</p>
            <p class="temple-area">Area: ${temple.area} sq.ft</p>
          </div>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        templeCardsContainer.appendChild(templeCard);
      });
    }
  
    // Initially display all temples.
    displayTemples(temples);
  
    // Navigation filtering based on menu items.
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const filterType = link.getAttribute("href").substring(1);
        let filteredTemples = [];
  
        if (filterType === "Old") {
          filteredTemples = temples.filter(function(temple) {
            const year = parseInt(temple.dedicated.split(",")[0].trim(), 10);
            return year < 1900;
          });
        } else if (filterType === "New") {
          filteredTemples = temples.filter(function(temple) {
            const year = parseInt(temple.dedicated.split(",")[0].trim(), 10);
            return year > 2000;
          });
        } else if (filterType === "Large") {
          filteredTemples = temples.filter(function(temple) {
            return Number(temple.area) > 90000;
          });
        } else if (filterType === "Small") {
          filteredTemples = temples.filter(function(temple) {
            return Number(temple.area) < 10000;
          });
        } else {
          // "Home" or an unrecognized filter shows all temples.
          filteredTemples = temples;
        }
        
        displayTemples(filteredTemples);
      });
    });
  
    // Update the footer dynamically.
    currentYearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;
  
    // Toggle the mobile navigation menu.
    hamburgerButton.addEventListener("click", function() {
      navMenu.classList.toggle("hidden");
    });
  });
  