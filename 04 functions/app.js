class App 
{
    runApplication()
    {

        console.log("hello world!");
      
        //code gaat hier!
        function argumentsAreHandy(shoutout)
        {
            console.log("do you want to give a shoutout?");
            console.log(shoutout);

        }

        argumentsAreHandy("Super Shout out");
        argumentsAreHandy("Super Shout in");
        argumentsAreHandy("Super Shout between");


    }
}

let app = new App();
app.runApplication();





