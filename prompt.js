async function rap() {
  prompt = document.getElementById("prompt").value;

  localStorage.setItem("prompt", prompt);
}

async function text() {
  prompt = localStorage.getItem("prompt");
  try {
    const reponse = await fetch("https://api.openai.com/v1/chat/completions", {
      methods: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify({
        temperature: 0.7,
        max_tokens: 150,
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content:
              "Give me 20 lines in where 2 rappers are rapping against each other and each get 4 lines each, in the format of '1: lines 2: lines...' with the theme of " +
              prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      console.log(response.error);
      throw new Error("Failed to fetch response from API");
    }

    const responseData = await response.json();
    const generatedText = responseData.choice[0].message.content;
  } catch (error) {
    console.error("Error:", error);
  }
}
