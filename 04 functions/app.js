function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

let x =9;
let a =3;
let b =4;
let c =89;

let y = (a*(x*x) )+ (b*x) +c;
console.log(y);

function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    return y;
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3)


function calculateLogY(u, h) {
    return Math.log(1) + h + Math.pow(u, 2);
}


let u = 91.70805020110221;
let h = 10602.465735902799;
let logYTest = calculateLogY(u, h);
console.log(logYTest)








function argumentAreHandy(shoutout)
{
    console.log("do you want to give my a shoutout?");
    console.log(shoutout);
}
argumentAreHandy("gelukt");
argumentAreHandy("gelukt");
argumentAreHandy("gelukt");


function superMooieGlobalFunctions()
{
    console.log("ik ben global")
    console.log("dus je mag mij overal aanroepen");
}

superMooieGlobalFunctions()
superMooieGlobalFunctions()
superMooieGlobalFunctions()







class App
{
    runApplication()
    {
        console.log("Hello world");
        superMooieGlobalFunctions()
    }
    
}

let app = new App();
app.runApplication();