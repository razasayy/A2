document.getElementById("calculate").addEventListener("click", convertor);

function convertor(){

    var a = document.getElementById("num1").value
    var message = "";

    //check if inputs are numbers that between 1 and 100 inclusive
    if (isNaN(a) || a < 1 || a > 100){
        message += "Invalid entry for grade. Please enter a number between 1 and 100\n"

    } if (message != ""){
        alert(message);
    }

    else{
        var letter;
        switch(Math.trunc(a/10)){
            case 10:
            case 9:
            case 8:
                letter = "A";
                break;
            case 7:
                letter = "B";
                break;
            case 6:
                letter = "C";
                break;
            case 5:
                letter = "D";
                break;
            default:
                letter = "F";
                break;
        } 
        document.getElementById("result").innerText = letter;
    }
}