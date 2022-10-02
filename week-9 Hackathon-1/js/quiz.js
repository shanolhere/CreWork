const myQuestions = [
  {
    correctAnswer:"A Chick",
    answers:["A Bunny","A Poult","An Owlet","A Chick"],
    question:"What is the word for a young bird?",
  },
{
  correctAnswer:"Mongolia",
  answers:["Sri Lanka","Thailand","Vietnam","Mongolia"],
  question:"Where would you find the city of Ulaanbaatar?"
},
{
  correctAnswer:"Nero",
  answers:["Claudius","Augustus","Nero","Marcus Aurelius"],
  question:"The Colosseum received its name not for its size, but for a colossal statue of which Emperor that stood close by?"
},
{
  correctAnswer:"Three Times",
  answers:["Once","No Times", "Three Times","Five Times"],
  question:"How many times did Peter deny Jesus?"
},
{
  correctAnswer:"1921",
  answers:["1921","1940","1951","1968"],
  question:"In which year was the vaccine for tuberculosis created?"
},
{
  correctAnswer:"Audrey Hepburn",
  answers:["Audrey Hepburn","Bette Davis","Catherine Deneuve","Selena Gomez"],
  question:"Which actress starred in films including My Fair Lady and Roman Holiday?"

},
{
  correctAnswer:"1976",
  answers:["1966","1976","1971","1981"],
  question:"Rocky was released in which year?"
},
{
  correctAnswer:"Lou Reed",
  answers:["David Bowie","Lou Reed","Neil Young","Chic"],
  question:"Who Released The 70's Album Entitled 'Transformer'?"
},
{
  correctAnswer:"Seychelles",
  answers:["Madagascar","Costa Rica","Seychelles","Comoros"],
  question:"Which region of the world uses '.sc' at the end of its web addresses?"
},
{
  correctAnswer:"Vanir",
  answers:["Vanir","Maiar","Frost Giants","Valhallans"],
  question:"In Norse myth, there were two separate races of gods: the Aesir gods which included Odin and Thor, and the ____ gods from whom descended Freya."
}];


const name = prompt("Enter name:")

const timer = document.querySelector(".timer");
const time = document.querySelector(".time");
const answersContainer = document.querySelector(".quiz-answersContainer");

const quizContainer = document.querySelector(".quiz-container");
const quizQuestion = document.querySelector('.quiz-question');
const quizAnswers = document.querySelectorAll('.quiz-answer');

const prices = document.querySelectorAll('.price');

const scoreValue = document.querySelector('.scoreValue');
const nameValue = document.querySelector('.nameValue');
nameValue.innerHTML = name;

//timer functionality
// var timeleft = 25;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     time.innerHTML = "0";
//   } else {
//     time.innerHTML = timeleft ;
//   }
//   timeleft -= 1;
// }, 1000);


//display first question from myQuestions Array;
let id=0;
let score = 0;
let flag = false;

const intro = new Audio('./sounds/Kaun Banega Crorepati.mp3');
const audio = new Audio('./sounds/play.mp3');

//onloading starting audio plays
window.addEventListener('load', audio.play())
function displayNextQues(id){

   if(id<myQuestions.length){

    quizQuestion.innerHTML =  myQuestions[id].question;

    const quizAnswerArray = [...myQuestions[id].answers];

    for(let j=0;j<quizAnswers.length;j++){
      quizAnswers[j].innerHTML= quizAnswerArray[j]
    }

    prices[id].style.background = "#C9A02A";

  }
  else{
    quizQuestion.style.display="none";
    answersContainer.style.display="none";
    //timer.style.display="none"
    audio1.pause();
    intro.play();
    //intro.loop = false;
    quizContainer.innerHTML = `
    <div class="score-details">

    <img src="./assets/trophy.jfif" alt="trophy"/>
    <p>You won: <span>${score}</span></p>
    <a href="./index.html">Play Again</a>
    </div>`
  }



}

function checkAnswer(id, answerSelected){
  //console.log(id,answerSelected,flag)

     const correctAns = myQuestions[id].correctAnswer;
     flag = false;
     console.log(correctAns)
     if(correctAns===answerSelected){
       flag=true;
       score = prices[id].textContent;
       scoreValue.innerHTML = score;
     }
     else{
       flag=false;
       score=score;
       scoreValue.innerHTML = score;
     }
     return [score,id,flag]
}

function addActive(id){
  for (let i = 0; i < quizAnswers.length; i++) {
     quizAnswers[i].classList.remove('active')
  }
   id.classList.add('active')
}


displayNextQues(id);

const audio1= new Audio('./sounds/wait.mp3');
const audio2= new Audio('./sounds/correct.mp3');
const audio3= new Audio('./sounds/wrong.mp3');
audio1.play()
quizAnswers.forEach((answer)=> {
  answer.addEventListener('click', (e)=> {
    //addActive(e.target);

    //store answer
    let answerSelected = e.target.textContent;
    //console.log(answerSelected)


    if(answerSelected){
    [score,id,flag]  = checkAnswer(id,answerSelected)
    //console.log(score,id,flag,e.target);

    if(flag){
      audio1.pause();
      audio2.play();
      // setInterval(()=> {e.target.style.background = "green"},1000)
      // setInterval(()=> {e.target.style.background = "rgb(90,47,120)"},3000)
      //e.target.style.background = "green"

      id++;
      setInterval(()=> {
        audio1.play()
        flag=false;
        removeActives(e.target);
        displayNextQues(id);

      },6000)
    }
    else{
      audio3.play();
      audio1.pause()
      setInterval(()=> {
        e.target.style.background = "red"},1000)
      id=100;
      setInterval(()=> {displayNextQues(id);},6000)
    }
    }


})
})



function removeActives(e){
  for (let i = 0; i < quizAnswers.length; i++) {
     quizAnswers[i].style.background = "rgb(90,47,120)";
  }
   e.style.background = "rgb(90,47,120)";
   // //setInterval(()=> {e.target.style.background = "rgb(90,47,120)"},2000)
}
