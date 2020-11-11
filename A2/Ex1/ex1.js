document.getElementById("calculate").addEventListener("click", validator);

function Ellipsoidvolume(a,b,c){
    return Math.pi * 4/3 * a * b *c;
}
