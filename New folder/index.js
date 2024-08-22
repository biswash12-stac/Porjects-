const containerE1 = document.querySelector(".container"); // Use the correct selector

const careers = ["Student", "Aspiring web developer", "Small Youtuber", "Freelancer"];
let careersIndex = 0;
let characterIndex = 0;

updatetext();

function updatetext() {
    characterIndex++;
    containerE1.innerHTML = `
        <h1>I am ${careers[careersIndex].charAt(0).toLowerCase() === "i" ? "an" : "a"} ${careers[careersIndex].slice(0, characterIndex)}</h1>
    `;

    if (characterIndex === careers[careersIndex].length) {
        careersIndex++;
        characterIndex = 0; // Reset characterIndex without incrementing
    }
    
    if (careersIndex === careers.length) {
        careersIndex = 0; // Reset careersIndex to start over
    }
    
    setTimeout(updatetext, 400);
}
