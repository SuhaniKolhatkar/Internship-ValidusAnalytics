// to identify the odd and even numbers 

var number = prompt("Type your favourite number ");
var checkNumber = number % 2 ;


function odd_even (){
    if(checkNumber == 0){
        alert("Given number is an Even number !");
        
    }
    if(checkNumber == 1){
        alert("Given number is an Odd number !");
        
    }
}
odd_even ();