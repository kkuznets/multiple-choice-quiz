const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [{
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];

function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);