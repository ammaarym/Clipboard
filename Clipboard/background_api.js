chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "analyzeText") {
    fetch("https://api.openrouter.ai/v1/summarize", {
      method: "POST",
      headers: {
        "Authorization": "Bearer sk-xxxxx",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input: msg.payload.text })
    })
    .then(res => res.json())
    .then(data => {
      chrome.tabs.sendMessage(sender.tab.id, {
        action: "aiResponse",
        result: data.summary
      });
    });
  }
});
