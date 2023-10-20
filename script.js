let currentQuestionIndex = 0;

function nextQuestion() {
    const questionBox = document.querySelector('.container_box');
    const questions = [
        "I hope you're doing well dummy.",
        "I hope you're sleeping well.",
        "You're really pretty.",
        "I can't wait to meet you and hug you",
        "You make me so happy.",
        "I hope you like this website, its not too much but i feel like if its simple its going to be more cute",
        "I hope you have a good day today.",
        "I really miss you i just can't wait to meet you <3."
    ];

    if (currentQuestionIndex < questions.length) {
        const nextQuestion = questions[currentQuestionIndex];
        questionBox.innerHTML = `<p>${nextQuestion}</p><button onclick="nextQuestion()">Next</button>`;
        currentQuestionIndex++;
    } else {
        questionBox.innerHTML = "<p>That's all! You're amazing, Aminah.</p>";
    }
}
