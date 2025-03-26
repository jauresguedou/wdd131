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

const temperature = 12;
const windSpeed = 20;

function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
}

function displayWindChill(temp, wind) {
    const windChillElement = document.querySelector('.weather .windchill p');

    if (temp <= 10 && wind >= 4.8) { // Updated condition for clarity
        const windChill = calculateWindChill(temp, wind);
        windChillElement.textContent = `Wind Chill: ${windChill}°C`;
    } else {
        windChillElement.textContent = `Wind Chill: N/A`;
    }
}

// Replace unload event with pagehide for bfcache compatibility
window.addEventListener('pagehide', () => {
    console.log('Page is being hidden or navigated away.');
    // Perform any cleanup tasks here
});

// Handle WebSocket (if applicable)
let socket = new WebSocket("wss://example.com");

window.addEventListener('pagehide', () => {
    if (socket.readyState === WebSocket.OPEN) {
        socket.close();
        console.log("WebSocket connection closed.");
    }
});

window.addEventListener('beforeunload', () => {
    if (socket.readyState === WebSocket.OPEN) {
        socket.close();
        console.log("WebSocket connection closed (beforeunload).");
    }
});


document.addEventListener('DOMContentLoaded', () => {
    displayWindChill(temperature, windSpeed);
});
