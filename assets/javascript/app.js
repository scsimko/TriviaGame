

//Start timer and quiz
    //used  <meta http-equiv="refresh" content="60;url=end.html"/> on the quiz page.
    //Definintly not a best practise, but it gets the job done. Struggled with multiple event tied to a button click   

//Functions
function handleClick()
      {         
var amountCorrect = 0;          
for(var i = 1; i <= 4; i++) {
var radios = document.getElementsByName('group'+i);
for(var j = 0; j < radios.length; j++) {
var radio = radios[j];
if(radio.value == "correct" && radio.checked) {
    amountCorrect++;
    }
  }
}   
// This is also not a brest practice.                 
        alert("Correct Responses: " + amountCorrect);
        window.location.href="index.html";
      }


