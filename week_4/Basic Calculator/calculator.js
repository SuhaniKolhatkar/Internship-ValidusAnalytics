

//----------------------1--------------------------------------
document.querySelectorAll(".num")[0].addEventListener('click', function() {
   
    if(document.querySelector(".input_1").innerHTML == 'first input'){
         document.querySelector(".input_1").innerHTML = '1'
    }
    else{
        document.querySelector(".input_2").innerHTML = '1'
    }
    });

//----------------------------------2---------------------------------------
    document.querySelectorAll(".num")[1].addEventListener('click', function() {
        if(document.querySelector(".input_1").innerHTML == 'first input'){
            document.querySelector(".input_1").innerHTML = '2'
        }
        else{
            document.querySelector(".input_2").innerHTML = '2'
        }
        });

//---------------------------------3-----------------------------------------------        
        document.querySelectorAll(".num")[2].addEventListener('click', function() {
            if(document.querySelector(".input_1").innerHTML == 'first input'){
                document.querySelector(".input_1").innerHTML = '3'
            }
            else{
                document.querySelector(".input_2").innerHTML = '3'
            }
            });

//---------------------------------4--------------------------------------------------            
            document.querySelectorAll(".num")[3].addEventListener('click', function() {
                if(document.querySelector(".input_1").innerHTML == 'first input'){
                    document.querySelector(".input_1").innerHTML = '4'
                }
                else{
                    document.querySelector(".input_2").innerHTML = '4'
                }
                });

//----------------------------------------5---------------------------------------------                
                document.querySelectorAll(".num")[4].addEventListener('click', function() {
                    if(document.querySelector(".input_1").innerHTML == 'first input'){
                        document.querySelector(".input_1").innerHTML = '5'
                    }
                    else{
                        document.querySelector(".input_2").innerHTML = '5'
                    }
                    });

//----------------------------------------6--------------------------------------------------                    
                    document.querySelectorAll(".num")[5].addEventListener('click', function() {
                        if(document.querySelector(".input_1").innerHTML == 'first input'){
                            document.querySelector(".input_1").innerHTML = '6'
                        }
                        else{
                            document.querySelector(".input_2").innerHTML = '6'
                        }
                        });
//-----------------------------------------7-------------------------------------------------------                        
                        document.querySelectorAll(".num")[6].addEventListener('click', function() {
                            if(document.querySelector(".input_1").innerHTML == 'first input'){
                                document.querySelector(".input_1").innerHTML = '7'
                            }
                            else{
                                document.querySelector(".input_2").innerHTML = '7'
                            }
                            });

//-------------------------------------------------8--------------------------------------------------                            
                            document.querySelectorAll(".num")[7].addEventListener('click', function() {
                                if(document.querySelector(".input_1").innerHTML == 'first input'){
                                    document.querySelector(".input_1").innerHTML = '8'
                                }
                                else{
                                    document.querySelector(".input_2").innerHTML = '8'
                                }
                                });

//-----------------------------------------------9------------------------------------------------------                                
                                document.querySelectorAll(".num")[8].addEventListener('click', function() {
                                    if(document.querySelector(".input_1").innerHTML == 'first input'){
                                        document.querySelector(".input_1").innerHTML = '9'
                                    }
                                    else{
                                        document.querySelector(".input_2").innerHTML = '9'
                                    }
                                    });

//-------------------------------------------------0--------------------------------------------------------                                    
                                    document.querySelectorAll(".num")[9].addEventListener('click', function() {
                                        if(document.querySelector(".input_1").innerHTML == 'first input'){
                                            document.querySelector(".input_1").innerHTML = '0'
                                        }
                                        else{
                                            document.querySelector(".input_2").innerHTML = '0'
                                        }
                                        });
                                                                                                                                                                                    
//--------------------------------------operators-----------------------------------------------------------
document.querySelectorAll(".ops")[0].addEventListener('click',function(){
    document.querySelector(".sign").innerHTML = '+';
})
document.querySelectorAll(".ops")[1].addEventListener('click',function(){
    document.querySelector(".sign").innerHTML = '-';
})
document.querySelectorAll(".ops")[2].addEventListener('click',function(){
    document.querySelector(".sign").innerHTML = '×';
})
document.querySelectorAll(".ops")[3].addEventListener('click',function(){
    document.querySelector(".sign").innerHTML = '÷';
})


//------------------------to calculate the value----------------------------------------------------------




function add(){

}
    
        document.querySelector(".equalto").addEventListener('click',function(){
            if(document.querySelector(".sign").innerHTML == '+'){
               document.querySelector("h5").innerHTML=
               Number(document.querySelector(".input_2").innerHTML) + Number(document.querySelector(".input_1").innerHTML ) ;
            }
            if(document.querySelector(".sign").innerHTML == '-'){
                document.querySelector("h5").innerHTML=
               Number(document.querySelector(".input_2").innerHTML) - Number(document.querySelector(".input_1").innerHTML ) ;
            }
            if(document.querySelector(".sign").innerHTML == '×'){
                document.querySelector("h5").innerHTML=
               Number(document.querySelector(".input_2").innerHTML) * Number(document.querySelector(".input_1").innerHTML ) ;
            }
            if(document.querySelector(".sign").innerHTML == '÷'){
                document.querySelector("h5").innerHTML=
               Number(document.querySelector(".input_1").innerHTML) / Number(document.querySelector(".input_2").innerHTML ) ;
            }
        })
       





    
    
    


        