import quiz from "../data/quizStore";
import { selectedAnswers } from "../data/sessionStore";


/**
 * 
 * Name of the file and function speaks for itself
 */
export default function calculateScore(){

 let is_correct = 0;
 let quizQuestions = quiz();
 let choices = selectedAnswers();
 
for (let choice of choices){
    let myQuestion = quizQuestions.find(quizQuestion => quizQuestions.indexOf(quizQuestion) == choice.index);
    if (myQuestion.answer == choice.option){
        is_correct++;
    }
 
    
    //Kenbot FTW
    
}


    
    return is_correct;
}