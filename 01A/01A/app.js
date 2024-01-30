class App 
{
    runApplication()
    {

        console.log("hello world!");
        //code gaat hier!
        let appNaam = "mijnApp";
        console.log(" naam van de app = " + appNaam);
        
        let versieNummer = 0.9;
        console.log("Dit is het versienummer  " + versieNummer );
        
        let versieDatum = 21-11-2023;
        console.log("de versiedatum " +versieDatum);
        
        let autheur = "Amir";
        console.log("de autheur " +autheur);
        
        
        let copyRight = ("copyRight");
        console.log("dit is de copyright" +copyRight);

        let leraarSoft = ("leraarSoft");
        console.log("diributeur" +leraarSoft);

        let drakmode = true;
        if (drakmode) {
            console.log("drakmode is ingeschakeld");}else{
        
        } 
        console.log("drakmode uitgeschakeld");

    }
}

let app = new App();
app.runApplication();





