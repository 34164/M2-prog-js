class App 
{
    runApplication()
    {

        console.log("hello world!");
        //code gaat hier!
        let artiesten = ["Michael Jackson", "Charlie Puth" , "NF"];
        artiesten.push("Prince", "bob dylan", "The weekend" , "Leon Thomas lll");
        console.log(artiesten);

        for (let i = 0; i < Array.length; i++) {
            const element = artiesten[i];
            console.log(element);
        }

        let nummers = [2,4,6];
        console.log(nummers);

        let indexToRemoveBob = artiesten.indexOf("bob dylan");
        let indexToRemovePrince = artiesten.indexOf("Prince");
        
        artiesten.splice(indexToRemoveBob, 1 );
        artiesten.splice(indexToRemovePrince,1);



        

        

    }
}

let app = new App();
app.runApplication();
