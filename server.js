const express = require('express');
const app = express();

// Utility function to get a cheerful message based on the day of the week
const getDayMessage = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay(); // Get current day of the week (0-6)
    const dayName = days[today];

    switch (dayName) {
        case "Monday":
            return "Happy Monday! Start your week with energy!";
        case "Friday":
            return "It's Friday! The weekend is near!";
        default:
            return "Have a wonderful day!";
    }
};

// GET endpoint at /assistant/greet
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name; // Get the 'name' from query parameters

    if (!name) {
        return res.status(400).json({
            error: "Name query parameter is required. Please provide a name."
        });
    }

    const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`;
    const dayMessage = getDayMessage();

    res.json({
        welcomeMessage,
        dayMessage
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
