// Create the GUI element
var gui = document.createElement("div");
gui.style.width = "300px";
gui.style.height = "300px"; // Adjusted height to accommodate the buttons
gui.style.backgroundColor = "#005b96";
gui.style.borderRadius = "10px";
gui.style.position = "absolute";
gui.style.top = "50px";
gui.style.left = "50px";
gui.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
gui.style.display = "flex";
gui.style.flexDirection = "column";
gui.style.justifyContent = "space-between";

// Create the top bar element
var topbar = document.createElement("div");
topbar.style.backgroundColor = "#68324a";
topbar.style.color = "white";
topbar.style.padding = "10px";
topbar.style.cursor = "move";
topbar.style.borderTopLeftRadius = "10px";
topbar.style.borderTopRightRadius = "10px";
topbar.style.display = "flex";
topbar.style.justifyContent = "space-between";
topbar.style.alignItems = "center";

// Create the title element
var title = document.createElement("span");
title.innerHTML = "Anime Clicker Exploits";
topbar.appendChild(title);

// Create the close button element
var closeButton = document.createElement("span");
closeButton.innerHTML = "&#10005;"; // Unicode for 'x'
closeButton.style.color = "#6b0000";
closeButton.style.cursor = "pointer";
closeButton.style.fontSize = "20px";
closeButton.style.marginLeft = "10px";
closeButton.onclick = function() {
    document.body.removeChild(gui);
};
topbar.appendChild(closeButton);

// Append the top bar to the GUI
gui.appendChild(topbar);

// Create a container for the buttons with padding
var buttonContainer = document.createElement("div");
buttonContainer.style.padding = "20px";

// Create the "Inf Slash Power" button
var button1 = document.createElement("button");
button1.innerHTML = "Inf Slash Power";
button1.style.backgroundColor = "#14452F";
button1.style.color = "white";
button1.style.padding = "10px 20px";
button1.style.border = "none";
button1.style.borderRadius = "5px";
button1.style.cursor = "pointer";
button1.style.width = "100%"; // Make the button width 100% of the container

// Button1 click event
button1.onclick = function() {
    // Code to execute when the button is clicked
    swordClassic.power = 99999999999999999999999;
    console.log("Sword power set to:", swordClassic.power);
};

// Append button1 to the button container
buttonContainer.appendChild(button1);

// Create the "Free Seasons" button
var button2 = document.createElement("button");
button2.innerHTML = "Free Seasons";
button2.style.backgroundColor = "#4CAF50"; // Green color for contrast
button2.style.color = "white";
button2.style.padding = "10px 20px";
button2.style.border = "none";
button2.style.borderRadius = "5px";
button2.style.cursor = "pointer";
button2.style.width = "100%"; // Make the button width 100% of the container

// Button2 click event
button2.onclick = function() {
    // Code to execute when the button is clicked
    newSeasonCost = 0;
    console.log("New season cost set to:", newSeasonCost);
};

// Append button2 to the button container
buttonContainer.appendChild(button2);

// Append the button container to the GUI
gui.appendChild(buttonContainer);

// Append the GUI to the body
document.body.appendChild(gui);

// Make the GUI draggable
topbar.onmousedown = function(event) {
    event.preventDefault();
    var shiftX = event.clientX - gui.getBoundingClientRect().left;
    var shiftY = event.clientY - gui.getBoundingClientRect().top;

    document.onmousemove = function(event) {
        gui.style.left = event.pageX - shiftX + "px";
        gui.style.top = event.pageY - shiftY + "px";
    };

    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    };
};

topbar.ondragstart = function() {
    return false;
};
