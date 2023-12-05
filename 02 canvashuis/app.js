class App 
{
    runApplication()
    {

        console.log("hello world!");
        //code gaat hier!
        let canvas= document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
        g.fillStyle = "#FFD700";
        g.fillRect(0,0,canvas.clientWidth, canvas.height); 

        g.fillStyle = "#000000";
        g.fillRect(0,0,10,10);
        
        

        

            
        

    

    }
}

let app = new App();
app.runApplication();





