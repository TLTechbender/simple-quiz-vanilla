import { checkForStarted, currentTime, setThePlace, setTime, started, whereWeAt , updateAnswers} from "../data/sessionStore";
import quiz from "../data/quizStore";
import renderEach from "./renderEach";
import calculateScore from "../helpers/calculateScore";
import showWork from "./showWork";

export function Main (app){
    
let getQuizLength = quiz(); 
let startCounter =getQuizLength.length - getQuizLength.length; //had to hack this together
let showCounter = getQuizLength.length - getQuizLength.length;
let numeral = whereWeAt();
  app.innerHTML = (`
 <h1 class="font-nunito text-white font-bolder leadind-50px">Quizie</h1>
 <div class="content-wrapper font-lato mx-auto">
    <div class="content-container flex">

      <div class="big-text-container flex flex-column">
        <span class="flex justify-between">
          <p class="text-white counter"></p>
          <p class="text-white timer"></p>
        </span>
       <h3 class="my-20px text-center text-white big-text"></h3>
      </div>
     
      <div class="interactive-text-container bg-white flex flex-column">
 <ul class="text-gray text-left flex flex-column answer-menu gap-15px justify-center items-center basis-80">
  
 </ul>
 <div class="basis-20 flex flex-column gap-15px justify-center items-center action-btns text-left">
  <span class="action-btns-row-one"><button class="bg-pinkish border-none  prev-btn">
    previous
  </button>
  <button class="bg-purplish border-none next-btn">
    next
    
  </button>
  </span>

  <span class="action-btns-row-two"><button class="bg-pinkish border-none  prev-btn">
    previous
  </button>
  <button class="bg-purplish border-none next-btn">
    next
    
  </button>
  </span>

  <span class="action-btns-row-three">
    <button class="submit">submit</button>
    <button class="retake" >retake</button>
    <button class="showWorking">show working</button>

  </span>


</div>      
</div>

      
    </div>

   </div>
 `);

const checkStarted = checkForStarted();

if(checkStarted == false){
    const bigText = app.querySelector('.big-text');
    bigText.innerHTML = 'Welcome to my little project';
    const welcomeMessage = document.createElement('ul');
    welcomeMessage.classList.add('welcomeMessage');
    welcomeMessage.innerHTML = (`
    <li class="text-white welcome-item">This is a basic quiz app</li>
<li class="text-white welcome-item">Have fun dawg </li>
<li class="text-white welcome-item">Thank you for checking out this lil project be sure to give me a star on github
<a class="text-orange" href="https://github.com/TLTechbender"><i class="fa-brands fa-github"></i></a></li>
`);

   const bigTextContainer = app.querySelector('.big-text-container');
   bigTextContainer.appendChild(welcomeMessage);
   const startBtnHolder = document.createElement('span');
   startBtnHolder.classList.add('startBtnHolder');
   startBtnHolder.innerHTML = (`<button class="bg-pinkish border-none action-btns-row-one start-btn">
   start
 </button>`);
  const actionBtns = app.querySelector('.action-btns');
  actionBtns.classList.add('hide');


  /**
   * The reason I am leaving this action listener here is cos I did not want to run into any issues with display none
   */
  const startBtn = startBtnHolder.querySelector('.start-btn');
  startBtn.addEventListener('click', ()=>{
    startQuiz(0);
  })
  
  
  const answerMenu = app.querySelector('.answer-menu');
  answerMenu.appendChild(startBtnHolder);

} else {
 startQuiz(numeral);
}


function setupListeners(){
  /**
   * Swrs Kenbot is a fucking genius, damn!!!
   * Dude taught me to do this and it solved about a billion errors, omo I dey grateful
   * Next time, I finna be setting up my actionlisteners like this..
   * 
   */
  const actionBtns = app.querySelector('.action-btns');
  const btnRowOne = actionBtns.querySelector('.action-btns-row-one');
  const btnRowTwo = actionBtns.querySelector('.action-btns-row-two');
  const btnRowThree = actionBtns.querySelector('.action-btns-row-three');
  const nextBtnOne = btnRowOne.querySelector('.next-btn');
  const prevBtnOne = btnRowOne.querySelector('.prev-btn');
  nextBtnOne.addEventListener('click', nextButtonOneHandler);
  prevBtnOne.addEventListener('click', prevButtonOneHandler);
  const nextBtnTwo = btnRowTwo.querySelector('.next-btn');
  const prevBtnTwo = btnRowTwo.querySelector('.prev-btn');
  nextBtnTwo.addEventListener('click', nextButtonTwoHandler);
  prevBtnTwo.addEventListener('click', prevButtonTwoHandler);

  const submitBtn = app.querySelector('.submit'); 
  submitBtn.addEventListener('click', initSubmit);
  const dialog = document.querySelector('.modal');
  const yesSubmit = dialog.querySelector('.yesSubmit');
  const noSubmit = dialog.querySelector('.noSubmit');
  yesSubmit.addEventListener('click', runSubmit);
  noSubmit.addEventListener('click', cancelSubmit);


  const retakeBtn = btnRowThree.querySelector('.retake');
  retakeBtn.addEventListener('click', retakeQuiz);

  

const showWorking = btnRowThree.querySelector('.showWorking');
showWorking.addEventListener('click',showCorrectAnswers)
}

setupListeners();


function startQuiz(numeral){
  started(true); 
  startCounter=numeral;
  // if(startCounter > 0 && numeral >= 0 ) startCounter=numeral; // to make sure everything starts from index 0
   const startBtnHolder = app.querySelector('.startBtnHolder');
    if(startBtnHolder){
        startBtnHolder.classList.add('display-none');
    }
    
 const actionBtns = app.querySelector('.action-btns');
 actionBtns.classList.remove('hide');
 const btnRowThree = actionBtns.querySelector('.action-btns-row-three');
 const btnRowTwo = actionBtns.querySelector('.action-btns-row-two');
 const retakeBtn = btnRowThree.querySelector('.retake');
 const showWorkingBtn = btnRowThree.querySelector('.showWorking');
 btnRowTwo.classList.add('hide');
 retakeBtn.classList.add('hide');
 showWorkingBtn.classList.add('hide');

    const welcomeMessage = document.querySelector('.welcomeMessage');
    if(welcomeMessage){
        const bigTextContainer = app.querySelector('.big-text-container');
        bigTextContainer.removeChild(welcomeMessage)
    }

   
    
    
    
    
    const btnRowOne = actionBtns.querySelector('.action-btns-row-one');
    const nextBtnOne = btnRowOne.querySelector('.next-btn');
    const prevBtnOne = btnRowOne.querySelector('.prev-btn');
    nextBtnOne.classList.remove('inactive');
    prevBtnOne.classList.remove('inactive');
    renderEach(startCounter,app); //render the first one
    count(startCounter + 1); // count the first one
    const getSessionTime = currentTime();
    
    const standardTime = 55; // Basically this is the time limit in seconds, the if else below is for the state management
     if(getSessionTime <= 0){
      timer(standardTime)
     } else if(getSessionTime < standardTime){
      timer(getSessionTime);
     }

}



function nextButtonOneHandler(){
  const actionBtns = app.querySelector('.action-btns');
  const btnRowOne = actionBtns.querySelector('.action-btns-row-one');
  startCounter++
  count(startCounter + 1);
  setThePlace(startCounter);
  renderEach(startCounter,btnRowOne);
  }
 

 function prevButtonOneHandler(){
  const actionBtns = app.querySelector('.action-btns');
  const btnRowOne = actionBtns.querySelector('.action-btns-row-one');
    startCounter--
    setThePlace(startCounter);
    renderEach(startCounter,btnRowOne);
    count(startCounter + 1);
 }

  
    
function nextButtonTwoHandler(){
  const actionBtns = app.querySelector('.action-btns');
  const btnRowTwo = actionBtns.querySelector('.action-btns-row-two');
  showCounter++
  count(showCounter + 1);
  showWork(showCounter,btnRowTwo);
  
}

function prevButtonTwoHandler(){
  const actionBtns = app.querySelector('.action-btns');
  const btnRowTwo = actionBtns.querySelector('.action-btns-row-two');
  showCounter--
  count(showCounter + 1);
  showWork(showCounter,btnRowTwo);
  
}
 


function initSubmit(){
const dialog = document.querySelector('.modal');
dialog.showModal();
}

function runSubmit(){
const dialog = document.querySelector('.modal');
dialog.close();
const actionBtns = app.querySelector('.action-btns');
const btnRowOne = actionBtns.querySelector('.action-btns-row-one');
const btnRowTwo = actionBtns.querySelector('.action-btns-row-two');
const btnRowThree = actionBtns.querySelector('.action-btns-row-three');
const retakeBtn = btnRowThree.querySelector('.retake');
const showWorkingBtn = btnRowThree.querySelector('.showWorking');
const submitBtn = app.querySelector('.submit'); 
btnRowOne.classList.add('hide');
btnRowTwo.classList.add('hide');
retakeBtn.classList.remove('hide');
showWorkingBtn.classList.remove('hide');
submitBtn.classList.add('hide');
handleSubmit();
}

function cancelSubmit(){
const dialog = document.querySelector('.modal');
dialog.close();
}

    
      
 function retakeQuiz(){
     updateAnswers([]); //destroy what what the initial values in sessionStorage
     setThePlace(0);
     setTime(0);
     startQuiz(0);
     const timerELement = app.querySelector('.timer');
     timerELement.classList.remove('flashing');
     const actionBtns = app.querySelector('.action-btns');
     const btnRowOne = actionBtns.querySelector('.action-btns-row-one');
     const submitBtn = app.querySelector('.submit'); 
     btnRowOne.classList.remove('hide');    
     submitBtn.classList.remove('hide');
 }

 function showCorrectAnswers(){
  started(false);
  setThePlace(0);
  setTime(0);
  if(showCounter > 0) showCounter=0; // to make sure everything starts from index 0
  count(showCounter + 1); // render the first count
  const actionBtns = app.querySelector('.action-btns');
  const btnRowTwo = actionBtns.querySelector('.action-btns-row-two');
  btnRowTwo.classList.remove('hide');
  const btnRowThree = actionBtns.querySelector('.action-btns-row-three');
  const showWorkingBtn = btnRowThree.querySelector('.showWorking');
  showWorkingBtn.classList.add('hide');
  showWork(showCounter,btnRowTwo); // Render the first one
 }

}

/**
 * The reasons these functions below are not in the main function is cos they don't rely on 
 * any parameter within the main fuction, they can get called from inside the main function to handle specific tasks
 */

function handleSubmit(){
   
const bigText = app.querySelector('.big-text');
bigText.innerHTML = `Welldone dawg 👍, shana🔥! `;

const answerMenu = app.querySelector('.answer-menu');

answerMenu.innerHTML = '';
const counterElement = app.querySelector('.counter');
  counterElement.innerHTML = ``;

const score = calculateScore();
answerMenu.innerHTML = `<p class="result-text">Hallelujah you don bang, nha <strong>${score}</strong> you get!</p>`
}


function count(serialNumber){
  const quizQuestions = quiz();
  const counterElement = app.querySelector('.counter');
  counterElement.innerHTML = `${serialNumber} / ${quizQuestions.length}`;
}



function timer(input){
  const timerELement = app.querySelector('.timer');

  let sec = input;
    let timing = setInterval(function(){
        timerELement.innerHTML='00:'+sec;
        sec--;
        setTime(sec);

        /**
         * This is to stop the timer on submit
         */
        const dialog = document.querySelector('.modal');
        const yesSubmit = dialog.querySelector('.yesSubmit'); // I had to do this here cos of a weird bug
        /**
         * This is the second event listener I am attaching to yesSubmit, I am doing this cos I was runnning into logic
         * errors when I tried to put everything together
         */
        yesSubmit.addEventListener('click', ()=>{
          clearInterval(timing);
          timerELement.innerHTML='';
        })

        if(sec<=10){
          timerELement.classList.add('flashing');
        }
        if (sec < 0) {
            clearInterval(timing);
            timerELement.innerHTML='';
            timerELement.classList.remove('flashing');
            handleSubmit();
            if(dialog.open)dialog.close();
           
            const actionBtns = app.querySelector('.action-btns');
const btnRowOne = actionBtns.querySelector('.action-btns-row-one');
const btnRowTwo = actionBtns.querySelector('.action-btns-row-two');
const btnRowThree = actionBtns.querySelector('.action-btns-row-three');
const retakeBtn = btnRowThree.querySelector('.retake');
const showWorkingBtn = btnRowThree.querySelector('.showWorking');
const submitBtn = app.querySelector('.submit'); 
btnRowOne.classList.add('hide');
btnRowTwo.classList.add('hide');
retakeBtn.classList.remove('hide');
showWorkingBtn.classList.remove('hide');
submitBtn.classList.add('hide');

        }
    }, 1000); 

    /**This timer function was copied from stack overflow, I no event test am fa, I just plug and play 😂 😂 😂 */
}


