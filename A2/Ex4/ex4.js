//listener


function Palindrome(a){
    //solved by taking advantage of js dynamic typing
    //check a is a positive number
    if (a == "" || isNaN(a)){
        alert("Invalid input. Please enter a number")
        return
    }

    //treat number as string and see if its a palindrome
    var stop = Math.trunc(a.length/2);
    for (let i = 0; i <= stop;i++){
        if (a[i] != a[a.length - i]){
            return false;
        }
    }
    return true;
}