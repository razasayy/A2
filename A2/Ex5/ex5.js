

function Pattern(){
    
    document.getElementById("output").addEventListener("click", pattern);

    var num1 = document.getElementById("num1").value

    var i,j;
    for(i=0; i <= num1; i++) {
       
      for(j=0; j<=i; j++) {
         document.write("XX "+ "");
    }
    document.write("<br/>");
}


document.getElementById("result").innerHTML = num1;

}    
