class App 
{
    runApplication()
    {

        
    //line
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
let canvas = document.getElementById("Canvasid");
let g = canvas.getContext("2d");

 g.fillStyle = "red";
 g.beginPath();
 g.moveTo(30,10);
 g.lineTo(20,30);
 g.lineTo(60,50);
 g.lineTo(70,20);
 g.closePath();
 g.stroke();
 g.fill(); 

 g.fillStyle = "gray";
 g.beginPath();
 g.moveTo(20,30);
 g.lineTo(20,50);
 g.lineTo(60,60);
 g.lineTo(60,40);
 g.closePath();
 g.stroke();
 g.fill();

 g.fillStyle = "gray";
 g.beginPath();
 g.moveTo(70,20);
 g.lineTo(60,40);
 g.lineTo(80,30);
  g.closePath();
 g.stroke();
 g.fill();

 
 g.fillStyle = "gray";
 g.beginPath();
 g.moveTo(60,40);
 g.lineTo(60,60);
 g.lineTo(80,50);
 g.lineTo(80,30);
 g.closePath();
 g.stroke();
 g.fill();

 g.fillStyle = "lightblue";
 g.beginPath();
 g.moveTo(30,40);
 g.lineTo(30,40);
 g.lineTo(40,40);
 g.lineTo(40,45);
 g.lineTo(30,45);
 g.closePath();
 g.stroke();
 g.fill();
 
        

            
        

    

    }
}

let app = new App();
app.runApplication();
