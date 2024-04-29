import { selectedAnswers, updateAnswers } from "../data/sessionStore";


/**
 * 
This handles handles the click event on each answer option 
*/
export default function handleChoice(index, option){
    
let choiceStore = selectedAnswers();
let choiceOfInterest = choiceStore.find(choice => choice.index == index);

if(choiceOfInterest){
    choiceOfInterest.option = option;
    updateAnswers(choiceStore);
} else{
    choiceStore.push({index,option});
    updateAnswers(choiceStore);
}
}