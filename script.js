document.addEventListener("DOMContentLoaded", function () {
    // Array of tips
    const tips = [
        "Tip 1: Lorem ipsum dolor sit amet.",
        "Tip 2: Consectetur adipiscing elit.",
        "Tip 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Tip 4: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Tip 5: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Tip 6: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Tip 7: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Tip 8: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Tip 9: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Tip 10: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Tip 11: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Tip 12: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        // Add more tips as needed
    ];

    // Get the current day of the year
    const dayOfYear = new Date().getDay();

    // Use the day of the year to select a tip
    const randomTipIndex = dayOfYear % tips.length;
    const randomTip = tips[randomTipIndex];

    // Display the random tip on the webpage
    const tipTextElement = document.getElementById("tip-text");
    tipTextElement.textContent = randomTip;
});