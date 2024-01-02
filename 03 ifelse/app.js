class App 
{
    runApplication()
    {

        console.log("hello world!");
        //code gaat hier!
        // Selecteer het element met de id "newstitle"
        let nieuwsTitelElement = document.getElementById("newstitle");
        console.log("Element met ID 'newstitle':", nieuwsTitelElement);

        // Selecteer het element met de class "gamenews" en "headline"
        let gameNewsElement = document.querySelector(".gamenews.headline");
        console.log("Element met class 'gamenews' en 'headline':", gameNewsElement);

        // Selecteer het element met de class "fromsoftware"
        let fromSoftwareElement = document.querySelector(".fromsoftware");
        console.log("Element met class 'fromsoftware':", fromSoftwareElement);

    }
}

let app = new App();
app.runApplication();