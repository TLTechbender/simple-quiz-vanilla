import quiz from "../data/quizStore";
import handleChoice from "../helpers/handleChoice";
import { selectedAnswers } from "../data/sessionStore";

export default function renderEach(startCounter,buttonsContainerElement){

const quizQuestions = quiz();
const max= quizQuestions.length-1; // to avoid off by one error
const min =0;
const nextBtn = buttonsContainerElement.querySelector('.next-btn');
const prevBtn = buttonsContainerElement.querySelector('.prev-btn');
 


/**
 * What we doing here is to render each quiz questions and possible answers and attach event listeners to the possible answers
 */

if(startCounter == min){
    prevBtn.classList.add('inactive');
} else if(startCounter == max){
    nextBtn.classList.add('inactive');

} else if(startCounter > min && startCounter <max){
    prevBtn.classList.remove('inactive');
    nextBtn.classList.remove('inactive')
} 

const bigText = app.querySelector('.big-text');
bigText.innerHTML = quizQuestions[startCounter].question;

const answerMenu = app.querySelector('.answer-menu');


answerMenu.innerHTML = ''; // destroy before rendering
for (const option of quizQuestions[startCounter].options){
    
    const optionItem =  document.createElement('li');
    optionItem.classList.add('bg-whitish', 'answer-menu-item')
     optionItem.innerHTML = (`<p>${option}</p>`);
   optionItem.addEventListener('click', ()=>{
    const available = answerMenu.querySelectorAll('.answer-menu-item');
   
     available.forEach((avail)=>{
    avail.classList.remove('bg-selected');

   });
   

      handleChoice(startCounter,option);
      optionItem.classList.add('bg-selected');
   });
   
   
   answerMenu.appendChild(optionItem);

}
 

   /**
    * What this basically does is to check local storage whether an answer had been selected, if it had
    * make it appear so;
    */

const choices = selectedAnswers();
let optionToSelect = choices.find(choice => choice.index == startCounter);
if(optionToSelect){
const available = Array.from(document.querySelectorAll('.answer-menu-item'));
available.forEach((avail)=> avail.classList.remove('bg-selected'));
const foundToSelect = available.find(avail => avail.textContent == optionToSelect.option);
foundToSelect.classList.add('bg-selected');
}


}


