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