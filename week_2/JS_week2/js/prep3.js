//shop numbers 
var shop1 = Math.ceil(Math.random()*10);
var shop2 = Math.ceil(Math.random()*100);
var shop3 = Math.ceil(Math.random()*90);
var shop4 = Math.ceil(Math.random()*12);

//var in function
var money = prompt("How much money do you have ? (Enter the amount in numbers )");
var numOfBottles = prompt("How much bottles of milk do you want ?");
function check(){
    if (money >> "0" && numOfBottles >> "0"){
        var shop = prompt("Please select shop number . Shops with following shop numbers are only open today . "+ shop1+" , " + shop2 +" , "+ shop3 +" , "+ shop4 );

        //function getmilk 
        function getMilk (money , numOfBottles ,shop){
            if(shop%2 == 0){
               alert("Cost of one milk bottle is 2$") ;
               var costOfBottle = "2" 
            }
            if( shop%2 == 1){
                alert("Cost of one milk bottle is 3$") ;
                var costOfBottle = "3" 
            }
            var moneyNeeded = (numOfBottles*costOfBottle);
            var moneyLend = money - moneyNeeded ;
        
            if( Math.floor(moneyNeeded) > Math.floor(moneyLend) ){
                  alert("You have done purchasing of "+ Math.floor(moneyNeeded) +" $ . You lend us the amount " + Math.floor(moneyLend*(-1)) +" $ !");
          
            }
            if( Math.floor(moneyNeeded) < Math.floor(moneyLend) ){
                  alert("You have done purchasing of "+ Math.floor(moneyNeeded) +" $ . We lend you the amount " + Math.floor(moneyLend) +" $ !");
            }
            
            alert("Thank you for visiting shop "+ shop + " !. Visit again !!");
        }
        
        //calling function
        getMilk (money , numOfBottles ,shop);
    }
    else{
        alert("Enter proper input . Thank you !");
    }

}

check();
    

