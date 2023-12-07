class App {
    runApplication() 
    {
        //code gaat hier!
        console.log("hello world")
    }

    newClassFunction()
    {
        console.log("hello world in de nieuwClassFunction");
    }
    
    anotherFunctionWithArguments(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier:");
        console. log( aArgument);
    }

    mario()
    {
        console.log("MARIO!!");
    }

    lach()
    {
        console.log("BWAHAHA!!!");
        return "BWAHAHA!!!";
    }

    optellen(number1, number2){
        return number1+number2;
    }
}

let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionWithArguments("mijn argument is iets...");
app.lach();
app.optellen(5,6);







let u = 9;
let h = 8;
let i = 15
let logY = Math.log(1) + h + Math.pow(u,2);
console.log(logY);
function logging(u, h, i)
{
    let logY = Math.log(i) + h + Math.pow(u,2);
    console.log(logY);
    return logY;

}
logging(91.70805020110221, 10602.465735902799, 125.79175946922885)




function ax2bcWiskunde(x, a, b, c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    //console. log(y);
    return y;


}
let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1, 2,13);
console. log(y3);


function berekening()
{
    let x = 9;
    let a =3;
    let b =4;
    let c =89;
    
    let y = (a*(x*x) )+ (b*x) +c;
    console. log(y);
    return y;

}



function heeftEenResultaat()
{
let resultaat =1;
return resultaat;
}

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console. log(heeftEenResultaat());

heeftEenResultaat();


function argumentsAreHandy(shoutout)
{
console.log("do you want to give a shoutout?");
console. log(shoutout);
}

argumentsAreHandy("Super Shout out");
argumentsAreHandy("hou het netjes!");
argumentsAreHandy("hou het niet netjes!");

function superMooieGlobalFunction()
{
console.log("ik ben global");
console. log("dus je mag mij overal aanroepen");
}

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();


//class App {
//    runApplication() {
//
//        //code gaat hier!
//        console.log("hello world")
//        superMooieGlobalFunction();
//        
//        
//    }
//}
//
//let app = new App();
//app.runApplication();