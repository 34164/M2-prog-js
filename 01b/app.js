class App 
{
    runApplication()
    { 


        
        this.greeting = "Staring up";
       
        this.appNaam = "mijnApp";
        
        
        this.versieNummer = 0.9;
        
        
        this.versieDatum = 21-11-2023;
       
        
        this.auteur = "Amir";
        
        
        this.copyright = "copyRight";
        

        this.distributeur = "leraarSoft";
        

        this.drakmode = true;
        

    }
}

let app = new App();
app.runApplication(); 



{
    console.log(app.greeting);
    console.log(" naam van de app = " + app.appNaam);
    console.log(" versienummer  " + app.versieNummer );
    console.log(" versiedatum " + app.versieDatum);
    console.log(" auteur" + app.auteur);
    console.log(" copyright " +  app.copyright);
    console.log(" diributeur " + app.leraarSoft);
    if (app.drakmode) {
        console.log("drakmode is ingeschakeld");}else{
    
    } 
    console.log("drakmode uitgeschakeld");


}







