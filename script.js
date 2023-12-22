document.addEventListener("DOMContentLoaded", function () {
    // Array of tips
    const tipsForTheYear = [
        "Start your year with a positive mindset. Set realistic goals and take small steps each day to achieve them.",
        "Stay hydrated! Drink enough water to keep your body and mind functioning at their best.",
        "Practice gratitude. Take a moment each day to appreciate the positive aspects of your life.",
        "Prioritize self-care. Take time for activities that bring you joy and relaxation.",
        "Learn something new. Expand your knowledge and skills in areas that interest you.",
        "Practice active listening. Truly engage in conversations by giving your full attention to others.",
        "Get moving! Incorporate physical activity into your day for improved health and well-being.",
        "Connect with loved ones. Nurture relationships that bring joy and support into your life.",
        "Set boundaries. Know when to say no and prioritize your well-being.",
        "Embrace change. Life is full of transitions, and adapting can lead to personal growth.",
        "Take breaks. Allow yourself moments of rest to recharge and maintain productivity.",
        "Practice mindfulness. Be present in the moment and appreciate the now.",
        "Express gratitude. Let the people around you know that you appreciate them.",
        "Read a book. Engage your mind with literature that inspires, educates, or entertains.",
        "Declutter your space. A tidy environment can contribute to a clearer mind.",
        "Practice deep breathing. Incorporate moments of calm and relaxation into your day.",
        "Set achievable goals. Break larger tasks into smaller, manageable steps.",
        "Stay positive. Focus on solutions rather than dwelling on problems.",
        "Try a new hobby. Discover activities that bring you joy and fulfillment.",
        "Connect with nature. Spend time outdoors for a refreshing perspective.",
        "Express kindness. Small acts of kindness can have a big impact on others.",
        "Reflect on your achievements. Acknowledge and celebrate your progress.",
        "Practice patience. Understand that progress takes time, and be patient with yourself and others.",
        "Get enough sleep. Quality sleep is essential for overall well-being.",
        "Learn from mistakes. View challenges as opportunities for growth.",
        "Practice gratitude. Reflect on the positive aspects of your day.",
        "Connect with others. Foster meaningful relationships in both personal and professional spheres.",
        "Embrace creativity. Allow yourself to explore and express your creative side.",
        "Set boundaries. Establish limits to protect your time and energy.",
        "Focus on the present. Don't let worries about the future overshadow your current moments.",
        "Celebrate achievements. Recognize and appreciate your accomplishments, big and small."
        // Continue with tips for the remaining days of the year
      ];

    // Get the current day of the year
    const dayOfYear = new Date().getDay();

    // Use the day of the year to select a tip
    const randomTipIndex = dayOfYear % tipsForTheYear.length;
    const randomTip = tipsForTheYear[randomTipIndex];

    // Display the random tip on the webpage
    const tipTextElement = document.getElementById("tip-text");
    tipTextElement.textContent = randomTip;
});