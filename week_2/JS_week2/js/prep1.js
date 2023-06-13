//intrduction
var firstName = prompt("What is your first name ?");
var surname = prompt("What is your surname ?")

//getting into proper grammar : name 
var upperCasing = firstName.slice(0,1);
var lowerCasing = firstName.slice(1,firstName.length);

//getting into proper grammar : surname 
var upperCasingSurname = surname.slice(0,1);
var lowerCasingSurname = surname.slice(1,surname.length);

//concatination
var wishing =alert("Hello "+ upperCasing.toUpperCase() + lowerCasing.toLowerCase() + " "+ upperCasingSurname.toUpperCase() + lowerCasingSurname.toLowerCase()+"! Lets strat todays work. Let me check your todays mood !!" );

//asking about mood 

var mood = prompt("How is your mood today ? (Please answer the above question in 'Good'or'Bad' only)");

var goodMood  = mood.slice(0,4);
var goodMood = goodMood.toLowerCase();

var badMood = mood.slice(0,3);
var badMood = badMood.toLowerCase();

function moodChecker(){
    if(goodMood == "good"){
    alert ("Common , Lets do some work !. I like this enthusiasum of yours !!");
}
if(badMood == "bad"){
    alert ("Oops , try refreshing yourself !. You have to work hard come what may !!");
}
else{
    alert("Please give appropriate input ! ");
    alert ("Thank you !");
    
}
}

moodChecker();