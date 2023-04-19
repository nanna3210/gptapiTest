const url = "https://api.openai.com/v1/chat/completions";
const apiKey = "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";
async function callingGptFun() {

    const questionGot = document.getElementById('questionBox').value
    console.log(questionGot);
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `write s javascript code for this question: ${questionGot}`,
                    },
                ],
            }),
        });

        const data = await response.json();
        console.log(data);
        //   const respnsetext = data.choices[0].message.content.trim();
        const respnsetext = data.error;
        const errMessage = respnsetext.message;

        const card = document.createElement("pre");
        card.innerHTML = 'nanna <br>'+errMessage;
        document.getElementById("chat-area").appendChild(card);
    }
    catch {

    }



}