class App 
{
    runApplication()
    {

        console.log("hello world!");
        //code gaat hier!
        // Selecteer het element met de id "newstitle"

        
        let title = document.getElementById("newstitle");
        console.log("Title element:", title);

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.background = "#FF0000";
        }

        // Selecteer het element met de class "gamenews" en "headline"
        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        console.log("Newsitem 1 (Mario Kart):", newsitem1);

        // Selecteer het element met de class "fromsoftware"
        let newsitem2 = document.getElementsByClassName("gamenews")[1];
        console.log("Newsitem 2 (From Software):", newsitem2);

        if (title) {
            title.style.background = "red"
        
        }

        if (newsitem1) {
            newsitem1.style.backgroundColor = "lightgreen";
        } else {
            console.error("Newsitem 1 niet gevonden!");
        }

        if (newsitem2) {
            newsitem2.style.backgroundColor = "lightcoral";
        } else {
            console.error("Newsitem 2 niet gevonden!");
        }

    }
}

let app = new App();
app.runApplication();