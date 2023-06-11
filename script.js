document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});

//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

function sendToChatGPT() {
  let value = document.getElementById("word-input").value;
  let body = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: value }],
    tempreture: "1",
  };
  let headers = {
    Authorization: "Bearer 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",
  };

  axios
    .post("https://api.openai.com/v1/chat/completions", body, {
      headers: headers,
    })
    .then((response) => {
      let reply = response.data.choices[0].message.content;
      document.getElementById("reply-content").textContent = reply;
    })
    .catch(function (error) {
      console.log(error);
    });
}
