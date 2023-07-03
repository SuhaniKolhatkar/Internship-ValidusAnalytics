//to strat with
//global variables 


document.querySelector(".submit").addEventListener("click", display);

function display(){
    
    alert(
        "(a11) = "+document.querySelector(".a11").value + "  " +
        "(a12) = "+document.querySelector(".a12").value + "  " +
        "(a21) = "+document.querySelector(".a21").value + "  " +
        "(a22) = "+document.querySelector(".a22").value

         
    )
    function equation(){
        var a11 = Number(document.querySelector(".a11").value) ;
        var a12 = Number(document.querySelector(".a12").value) ;
        var a21 = Number(document.querySelector(".a21").value) ;
        var a22 = Number(document.querySelector(".a22").value) ;

        //findinh trace
        var traceValue = a11 + a22 ;
        document.querySelector(".tracePrint").innerText = "Value of its trace = "+ traceValue ;

        //finding determinant
        var detValue =  a11*a22 - a12*a21;
        document.querySelector(".detPrint").innerText = "Value of its Determinant = " + detValue ;
        
        var traceCalc = (-1)*traceValue ;

        //writing an equation 
        document.querySelector(".equation").innerText = "Characteristic Equation is λ^2"+" + "+"( "+ traceCalc +" )λ "+"+"+"( "+ detValue + " ) = 0 "

        //solving an equation for grtting final eigrn values 
        var a = 1 ;
        var b = traceCalc ;
        var c = detValue ;

        var eigenValue_1 = (-b + Math.sqrt(b*b - 4*a*c))/2*a ;
        var eigenValue_2 = (-b - Math.sqrt(b*b - 4*a*c))/2*a ;

        document.querySelector(".eValue_1").innerText = "First Eigen Value = " + eigenValue_1 ;
        document.querySelector(".eValue_2").innerText = "Second Eigen Value = " + eigenValue_2 ;

         
    }
    
  equation();
    
    
}

 $(".ans").on("click",function(){
    $(".val").addClass("evalues");
 }) 

$(".submit").hover(function(){
    $(".submit").addClass("big")
}, function(){
    $(".submit").removeClass("big")
})