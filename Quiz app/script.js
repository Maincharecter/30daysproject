const questions = [
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { text: "link", correct: false },
            { text: "a", correct: true },
            { text: "href", correct: false },
            { text: "p", correct: false },
        ],
    },
    {
        question: "Which data type is NOT primitive in JavaScript?",
        answers: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Boolean", correct: false },
            { text: "Object", correct: true },
        ],
    },
    {
        question: "What is the value of 5 + '5' in JavaScript?",
        answers: [
            { text: "10", correct: false },
            { text: "55", correct: true },
            { text: "5 5", correct: false },
            { text: "Error", correct: false },
        ],
    },
    {
        question: "Which CSS property is used to change text color?",
        answers: [
            { text: "font-color", correct: false },
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "background-color", correct: false },
        ],
    },
    {
    question: "Which HTML tag is used to display a paragraph of text?",
    answers: [
        { text: "div", correct: false },
        { text: "span", correct: false },
        { text: "p", correct: true },
        { text: "h1", correct: false },
    ],
}

];
let currentIndex = 0;
let score = 0;

const questiongoes = document.querySelector(".question");
const answerbtns = document.querySelector(".buttons");
const Next = document.querySelector(".Next");

function startquiz(params) {
     currentIndex = 0;
     score = 0;
    Next.innerHTML = "Next"
    showquestion();

}



function showquestion() {
   resetstate()
    const currentquestion = questions[currentIndex];
    const questionIndex = currentIndex + 1;
    questiongoes.innerHTML = questionIndex + "." + currentquestion.question
    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerbtns.appendChild(button)
        button.dataset.correct = answer.correct;
        button.addEventListener("click",selectanswer)
    })

}
function selectanswer(e) {
    const selctbutton = e.target;
    const iscorrect = selctbutton.dataset.correct==="true"
    if (iscorrect) {
        selctbutton.classList.add("correct")
        score++;

    }else{
        selctbutton.classList.add("incorrect")
    }
    Array.from(answerbtns.children).forEach((button)=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    Next.style.display = "block"
}
Next.addEventListener("click", () => {
    if (Next.innerHTML === "Restart") {
        startquiz(); // restart the quiz
    } else {
        currentIndex++;
        if (currentIndex < questions.length) {
            showquestion();
        } else {
            showscore();
        }
    }
});

function showscore() {
    resetstate();
    questiongoes.innerHTML = `You scored ${score} out of ${questions.length}`;
    Next.innerHTML = "Restart"
     Next.style.display="block"
    
}
function resetstate() {
    Next.style.display="none"
    while (answerbtns.firstChild) {
        answerbtns.removeChild(answerbtns.firstChild);
    }
}
startquiz();