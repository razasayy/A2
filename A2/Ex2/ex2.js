
document.getElementById("result").onclick=getGrade

document.getElementById("result").addEventListener("click", displayGrade);

function getGrade(){

    switch(true){

        case myMark >=90 && myMark <=100:
            console.log("The Letter Grade is A+");
            break;
        
            case myMark >=80 && myMark <=89:
            console.log("The Letter Grade is A");
            break;

            case myMark >=75 && myMark <=79:
            console.log("The Letter Grade is B+");
            break;

            case myMark >=70 && myMark <=74:
            console.log("The Letter Grade is B");
            break;

            case myMark >=65 && myMark <=69:
            console.log("The Letter Grade is C+");
            break;

            case myMark >=60 && myMark <=64:
            console.log("The Letter Grade is C");
            break;

            case myMark >=55 && myMark <=59:
            console.log("The Letter Grade is D+");
            break;

            case myMark >=50 && myMark <=54:
            console.log("The Letter Grade is D");
            break;

            case myMark >=40 && myMark <=49:
            console.log("The Letter Grade is E");
            break;

            case myMark >=0 && myMark <=39:
            console.log("The Letter Grade is F");
            break;
    }

}
