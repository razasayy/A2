document.getElementById("calculate").addEventListener("click", validator);

function Ellipsoidvolume(a,b,c){
    return Math.pi * 4/3 * a * b *c;
}


function validator(){

var a = document.getElementById("num1").content
var b = document.getElementById("num2").content
var c = document.getElementById("num3").content


    if (a >= 1 && a <= 100){

    }
    
    if (b >= 1 && b <=100){
    
    
    }
    
    if (c >= 1 && c <= 100){
    
    }
}