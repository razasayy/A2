document.getElementById("calculate").addEventListener("click", validator);

function Ellipsoidvolume(a,b,c){
    return (Math.PI * (4 / 3) * a * b *c);
}


function validator(){

    var a = document.getElementById("num1").value
    var b = document.getElementById("num2").value
    var c = document.getElementById("num3").value
    var message = "";

    //check if inputs are numbers that between 1 and 100 inclusive
    if (isNaN(a) || a < 1 || a > 100){
        message += "Invalid entry for a. Please enter a number between 1 and 100\n"
    } 
    if (isNaN(b) || b < 1 || b > 100){
        message += "Invalid entry for b. Please enter a number between 1 and 100\n"
    }
    if (isNaN(c) || c < 1 || c > 100){
        message += "Invalid entry for c. Please enter a number between 1 and 100\n"
    }

    if (message != ""){
        alert(message);
    }

    else{
        var volume = Ellipsoidvolume(a,b,c);
        document.getElementById("result").innerText= volume;
    }
}