import quiz from "../data/quizStore";

/**
 * This is basically the renderEach function with just a slight twist for displaying answers correct or wrong
 */

export default function showWork(showCounter,buttonsContainerElement){
    
const quizQuestions = quiz();
const max= quizQuestions.length-1;
const min =0;
const nextBtn = buttonsContainerElement.querySelector('.next-btn');
const prevBtn = buttonsContainerElement.querySelector('.prev-btn');
 


/***
 * I added this here cos i noticed a weird bug, since the buttons are part of the page before hand
 * they still have the inactive class from the renderEach operation, this just gives them a clean 
 * slate for the showWork function to do it's job
 */
nextBtn.classList.remove('inactive');
prevBtn.classList.remove('inactive');

if(showCounter == min){
    prevBtn.classList.add('inactive');
    
} else if(showCounter == max){
    nextBtn.classList.add('inactive');

} else if(showCounter > min && showCounter <max){
    prevBtn.classList.remove('inactive');
    nextBtn.classList.remove('inactive')
} 



const bigText = app.querySelector('.big-text');
bigText.innerHTML = quizQuestions[showCounter].question;
const answerMenu = app.querySelector('.answer-menu');

answerMenu.innerHTML = ''; // destroy before rendering
for (const option of quizQuestions[showCounter].options){
    const optionItem =  document.createElement('li');
    option == quizQuestions[showCounter].answer ? optionItem.classList.add('bg-correct','answer-menu-item'): optionItem.classList.add('bg-wrong','answer-menu-item');
    optionItem.innerHTML = (`<p>${option}</p>`);
    answerMenu.appendChild(optionItem);
}
}