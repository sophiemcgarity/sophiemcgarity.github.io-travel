//Quiz
(function() {
  const myQuestions = [
    {
      question: "Busy or quiet?",
      answers: {
        a: "Busy",
        b: "Quiet",
      },
      answerA: "a",
    },
    {
      question: "City or rural?",
      answers: {
        a: "City",
        b: "Rural",
      },
      answerA: "a",
    },
    {
      question: "English speaking country?",
      answers: {
        a: "Yes",
        b: "No",
      },
      answerA: "a",
    },
    {
    question: "Relaxed or adventurous?",
    answers: {
      a: "Relaxed",
      b: "Adventurous",
    },
    answerA: "a",
  },
  {
  question: "Close to home or far away?",
  answers: {
    a: "Close to home",
    b: "Far away",
  },
  answerA: "a",
  },
];

function buildQuiz() {
  const output = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (var letter in currentQuestion.answers) {
      answers.push(
        `<form action="">

           <input type="radio" name="question${questionNumber}" value="${letter}">

            ${letter} :
            ${currentQuestion.answers[letter]}
         </form>`
      );
    }
    output.push(
      `<div class="slide">
         <div class="question"> ${currentQuestion.question} </div>
         <div class="answers"> ${answers.join("")} </div>
       </div>`
    );
  });
  quizContainer.innerHTML = output.join("");
}

//shows results
  function showResults() {

    const answerContainers = quizContainer.querySelectorAll(".answers");

     let answers = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;


//assign score
  if (userAnswer === currentQuestion.answerA) {
  answers ++;
  }


//change to give custom message and page link
      if (answers == 3){
        document.getElementById("resultMessage").innerHTML=
        "<div class='align imageSize'><div class='container'><div class='content'><div class='content-overlay'></div><a class='center' href ='pages/destinations/japan.html'><img class='content-image' src='../Homepage/images/Japan.JPG'><div class='content-details fadeIn-bottom'><h4 class='content-title'>Why not try <br>Japan!</h4></div></div></div></div></a>";
      } else if (answers == 4){
        document.getElementById("resultMessage").innerHTML= "<div class='align imageSize'><div class='container'><div class='content'><div class='content-overlay'></div><a class='center' href ='pages/destinations/spain.html'><img class='content-image' src='../Homepage/images/spain.jpg'><div class='content-details fadeIn-bottom'><h4 class='content-title'>Why not try <br>Spain!</h4></div></div></div></div></a>"
      } else if (answers == 5){
        document.getElementById("resultMessage").innerHTML=
        "<div class='align imageSize'><div class='container'><div class='content'><div class='content-overlay'></div><a class='center' href ='pages/destinations/newzealand.html'><img class='content-image' src='../Homepage/images/new-zealand.jpg'><div class='content-details fadeIn-bottom'><h4 class='content-title'>Why not try <br>New Zealand!</h4></div></div></div></div></a>"
      }
      else {
        document.getElementById("resultMessage").innerHTML= "<div class='align imageSize'><div class='container'><div class='content'><div class='content-overlay'></div><a class='center' href ='pages/destinations/newyork.html'><img class='content-image' src='../Homepage/images/newyork.jpg'><div class='content-details fadeIn-bottom'><h4 class='content-title'>Why not try <br>New York!</h4></div></div></div></div></a>";
      }
});


  };

  //show next question

  function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

//Code adapted from https://www.sitepoint.com/simple-javascript-quiz/
