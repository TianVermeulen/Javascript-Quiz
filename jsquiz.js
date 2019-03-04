 (function() {
  function buildQuiz() {

    const output = [];


    myQuestions.forEach((currentQuestion, questionNumber) => {
 
      const answers = [];

   
      for (letter in currentQuestion.answers) {
  
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }


      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });


    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
 
    const answerContainers = quizContainer.querySelectorAll(".answers");


    let numCorrect = 0;


    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

 
      if (userAnswer === currentQuestion.correctAnswer) {
 
        numCorrect++;


        answerContainers[questionNumber].style.color = "green";
      } else {


        answerContainers[questionNumber].style.color = "red";
      }
    });

 
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        if (numCorrect <= 10){
          alert("You have gotten less than 10, Try again!");
        } else if (10 > numCorrect < 15 ){
          alert("You have gotten more than 10, Nice try!");
        } else {
          alert("You have gotten more than 15, Well done!");
        }
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "What is 6 + 8:",
      answers: {
        a: "14",
        b: "16",
        c: "18"
      },
      correctAnswer: "a"
    },
    {
      question: "What is 12 x 6:",
      answers: {
        a: "144",
        b: "72",
        c: "113"
      },
      correctAnswer: "b"
    },
    {
      question: "What is 4 + 5:",
      answers: {
        a: "9",
        b: "6",
        c: "17",
      },
      correctAnswer: "a"
    },
    {
      question: "What is 16 - 10:",
      answers: {
        a: "6",
        b: "4",
        c: "16"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the colour of the sky:",
      answers: {
        a: "White",
        b: "Green",
        c: "Blue"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the colour of grass:",
      answers: {
        a: "Green",
        b: "Yellow",
        c: "Orange"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the most important meal of the day:",
      answers: {
        a: "Breakfast",
        b: "Lunch",
        c: "Dinner"
      },
      correctAnswer: "a"
    },
    {
      question: "Why is the world such a terrible place:",
      answers: {
        a: "Wealth",
        b: "It likes to burn",
        c: "The bees"
      },
      correctAnswer: "b"
    },
    {
      question: "What is 4 + 4:",
      answers: {
        a: "8",
        b: "12",
        c: "13"
      },
      correctAnswer: "a"
    },
    {
      question: "What is 10 x 10:",
      answers: {
        a: "110",
        b: "200",
        c: "100"
      },
      correctAnswer: "c"
    },
    {
      question: "What is 10 x 11:",
      answers: {
        a: "110",
        b: "115",
        c: "160"
      },
      correctAnswer: "a"
    },
    {
      question: "What is 12 x 12:",
      answers: {
        a: "165",
        b: "144",
        c: "123"
      },
      correctAnswer: "b"
    },
    {
      question: "Is an orange orange:",
      answers: {
        a: "Yes",
        b: "No",
        c: "Maybe"
      },
      correctAnswer: "a"
    },
    {
      question: "What is 14 + 16:",
      answers: {
        a: "30",
        b: "20",
        c: "50"
      },
      correctAnswer: "a"
    },
    {
      question: "Why do we exist:",
      answers: {
        a: "Because",
        b: "To populate the earth",
        c: "There is no reason"
      },
      correctAnswer: "c"
    },
    {
      question: "What is 20 + 30:",
      answers: {
        a: "50",
        b: "100",
        c: "60"
      },
      correctAnswer: "a"
    },
    {
      question: "What is 1 + 2:",
      answers: {
        a: "3",
        b: "5",
        c: "7"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the colour of the sun:",
      answers: {
        a: "Yellow",
        b: "Blue",
        c: "Green"
      },
      correctAnswer: "a"
    },
    {
      question: "How many questions are in this quiz:",
      answers: {
        a: "14",
        b: "15",
        c: "20"
      },
      correctAnswer: "c"
    },
    {
      question: "What is 4 + 14:",
      answers: {
        a: "18",
        b: "25",
        c: "30"
      },
      correctAnswer: "a"
    },
   
  ];
 

 
  buildQuiz();

 
  submitButton.addEventListener("click", showResults);
})();