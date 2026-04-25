async function sendMessage() {
    const input = document.getElementById("userInput").value;
    const chatBox = document.getElementById("chat-box");
    
    // Aapka message dikhaye
    chatBox.innerHTML += `<p><b>Aap:</b> ${input}</p>`;
    
    // API KEY yahan daalein (Apni key yahan paste karein)
    const API_KEY = "AIzaSyDwkgzzO7Tw2p0CP0X2ZdHgaNIGLMkbQhY"; 
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: input + " (Answer in the same language as the input: Hindi or Bengali)" }] }]
            })
        });
        
        const data = await response.json();
        const reply = data.candidates[0].content.parts[0].text;
        
        // Neha ka answer dikhaye
        chatBox.innerHTML += `<p><b>Neha AI:</b> ${reply}</p>`;
    } catch (error) {
        chatBox.innerHTML += `<p style="color:red;">Error: API Key check karein.</p>`;
    }
}

}
