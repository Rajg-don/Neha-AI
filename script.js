async function sendMessage() {
    const input = document.getElementById("userInput").value;
    const chatBox = document.getElementById("chat-box");
    
    chatBox.innerHTML += `<p>User: ${input}</p>`;
    
    // Yahan apni API Key dalein
    const apiKey = "AIzaSyDwkgzzO7Tw2p0CP0X2ZdHgaNIGLMkbQhY"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: "You are a friendly friend named Neha. Reply in Hindi or Bengali. User says: " + input }] }]
        })
    });
    
    const data = await response.json();
    const reply = data.candidates[0].content.parts[0].text;
    chatBox.innerHTML += `<p>Neha: ${reply}</p>`;
}
