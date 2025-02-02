function selectOption(option) {
    const imageContainer = document.getElementById('image-container');
    const question = document.getElementById('question');
    const options = document.getElementById('options');

    if (option === 'yes') {
        imageContainer.style.backgroundImage = "url('maksim.gif')";
        question.textContent = "YAAAAAY te sakam:) ❤️";
    } else {
        imageContainer.style.backgroundImage = "url('sad-heart.png')";
        question.textContent = "nikoj ne te saka..💔";
    }

    options.style.display = 'none'; // Hide the buttons
}

// Move "No" button to a random position within the viewport
document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no-button");

    noButton.addEventListener("mouseover", () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Generate random X and Y positions within the viewport
        const randomX = Math.max(10, Math.floor(Math.random() * (viewportWidth - buttonWidth - 20)));
        const randomY = Math.max(10, Math.floor(Math.random() * (viewportHeight - buttonHeight - 20)));

        noButton.style.position = "fixed"; // Keeps it relative to the whole viewport
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
