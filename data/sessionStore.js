 /**
  * I was using local storage initially to handle all of thes , but After some revaluation sessionStorage was 
  * the best way to go
  */
 
 /**
  * 
  * This does as the name of the function implies
  */
 export function selectedAnswers(){
  return JSON.parse(sessionStorage.getItem("selectedAnswers") || "[]");
}

export function updateAnswers (updatedAnswers){
 return sessionStorage.setItem("selectedAnswers", JSON.stringify(updatedAnswers));
}


/**
 * This is where all the state management magic starts happening
 */

export function checkForStarted(){
  return JSON.parse(sessionStorage.getItem("started") || "[]");
  
}

export function started(conditional){
   return sessionStorage.setItem("started", JSON.stringify(conditional));
}



 export function whereWeAt(){
   return JSON.parse(sessionStorage.getItem("number") || 0);
   
 }

 export function setThePlace(number){
   return sessionStorage.setItem("number", JSON.stringify(number));
 }


 export function currentTime(){
   return JSON.parse(sessionStorage.getItem("time") || 0);
   
 }


 
 export function setTime(sec){
   return sessionStorage.setItem("time", JSON.stringify(sec));
 }



/**
 * Nha only showWork no get state management, I honestly believe that e no need am
 */
