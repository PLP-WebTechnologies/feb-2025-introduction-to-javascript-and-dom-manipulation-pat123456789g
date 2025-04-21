// Change text content
document.getElementById("changeTextBtn").addEventListener("click", () => {
  const introText = document.getElementById("intro-text");
  introText.textContent = "🎉 The text has been changed dynamically!";
});

// Modify CSS styles
document.getElementById("changeColorBtn").addEventListener("click", () => {
  const colorBox = document.getElementById("color-box");
  colorBox.style.backgroundColor = 
    colorBox.style.backgroundColor === "lightblue" ? "lightcoral" : "lightblue";
});

// Add or remove an element
let isElementVisible = false;

document.getElementById("toggleElementBtn").addEventListener("click", () => {
  const area = document.getElementById("toggle-area");
  if (isElementVisible) {
    area.innerHTML = "";
  } else {
    const newElement = document.createElement("p");
    newElement.textContent = "🧩 New element added!";
    area.appendChild(newElement);
  }
  isElementVisible = !isElementVisible;
});
