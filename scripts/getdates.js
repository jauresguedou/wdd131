// Dynamically populate the current year 
const  currentYear= new Date().getFullYear();
document.getElementById("currentyear").textContent= currentYear;

//Dynamically populate the last modified date 
const lastModifiedDate= document.lastModified;
document.getElementById("lastModified").textContent=`Last modification: ${lastModifiedDate}`;