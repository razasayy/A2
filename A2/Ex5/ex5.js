
    document.getElementById("output").addEventListener("click", Pattern);

function Pattern(){
    

    var num1 = document.getElementById("num1").value

    var i,j;
    for(i=0; i <= num1; i++) {
       
      for(j=1; j<=i; j++) {
         document.write("XX "+ "");
    }
    document.write("<br/>");
}


document.getElementById("result").innerHTML = num1;

}    
