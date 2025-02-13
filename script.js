document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { question: "What is the primary source of ATP in the heart under normal conditions?", options: ["Anaerobic glycolysis", "Oxidative phosphorylation", "Pentose phosphate pathway", "Direct phosphorylation of ADP"], answer: "Oxidative phosphorylation" },
        { question: "Which fuel is predominantly used by the heart for energy production?", options: ["Glucose", "Long-chain fatty acids (LCFAs)", "Amino acids", "Ketone bodies"], answer: "Long-chain fatty acids (LCFAs)" },
        { question: "Which transporter facilitates glucose uptake in the heart under insulin stimulation?", options: ["GLUT1", "GLUT2", "GLUT4", "SGLT1"], answer: "GLUT4" },
        { question: "Which cycle regulates the balance between glucose and fatty acid oxidation in the heart?", options: ["Krebs cycle", "Cori cycle", "Randle cycle", "Urea cycle"], answer: "Randle cycle" },
        { question: "Which enzyme is inhibited by acetyl-CoA and NADH during fatty acid oxidation?", options: ["Pyruvate dehydrogenase (PDH)", "Hexokinase", "Phosphofructokinase", "Glucose-6-phosphate dehydrogenase"], answer: "Pyruvate dehydrogenase (PDH)" }
    ];

    const quizContainer = document.getElementById('quiz');

    questions.forEach((q, index) => {
        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionBox.appendChild(questionText);

        q.options.forEach(option => {
            const optionText = document.createElement('p');
            optionText.textContent = option;
            questionBox.appendChild(optionText);
        });

        const answerButton = document.createElement('button');
        answerButton.textContent = "Show Answer";
        answerButton.classList.add('answer-btn');

        const answer = document.createElement('p');
        answer.textContent = `Answer: ${q.answer}`;
        answer.classList.add('answer', 'hidden'); 

        answerButton.addEventListener('click', function () {
            answer.classList.toggle('hidden'); 
        });

        questionBox.appendChild(answerButton);
        questionBox.appendChild(answer);
        quizContainer.appendChild(questionBox);
    });
});
