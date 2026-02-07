const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

// Make the "No" button fly away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Show the surprise when "Yes" is clicked
yesBtn.addEventListener("click", () => {
    question.classList.add("hidden");
    document.querySelector(".buttons").classList.add("hidden");
    message.classList.remove("hidden");
});
