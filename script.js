async function sendMessage() {
    const input = document.getElementById("userInput").value;
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><b>Aap:</b> ${input}</p>`;
    
    // Yahan API Key wala logic rahega
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: input }] }] })
    });
    const data = await response.json();
    const reply = data.candidates[0].content.parts[0].text;
    chatBox.innerHTML += `<p><b>Neha:</b> ${reply}</p>`;
}
