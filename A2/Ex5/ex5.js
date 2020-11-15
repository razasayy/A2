
    document.getElementById("output").addEventListener("click", Pattern);

function Pattern(){
    

    var num1 = document.getElementById("num1").value

    var i,j;
    for(i=0; i <= num1; i++) {
       
      for(j=1; j<=i; j++) {
          
         document.getElementById("result").innerHTML+="XX  ";

     }
         document.getElementById("result").innerHTML+="<br/>";
    }



document.getElementById("number").innerHTML = num1;

}    
