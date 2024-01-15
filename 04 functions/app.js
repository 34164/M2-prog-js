class App 
{
    runApplication()
    {

        console.log("hello world!");
        superMooieGlobalFunction();
        //code gaat hier!
        function superMooieGlobalFunction()
        {
            console.log("ïk ben global");
            console.log("dus je mag mij overal aanroepen");
        }

        superMooieGlobalFunction();
        superMooieGlobalFunction();
        superMooieGlobalFunction();

    }
}

let app = new App();
app.runApplication();





