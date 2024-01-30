class App 
{
    runApplication()
    {

        console.log("hello world!");
      
        //code gaat hier!
       

    }
}

let app = new App();
app.runApplication();




function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);

}

argumentsAreHandy("Super Shout out");
argumentsAreHandy("Super Shout in");
argumentsAreHandy("Super Shout between");

function heeftEenResultaart()
{
    let resultaat =1;
    return resultaat;
}

let hetresultaat = heeftEenResultaart();
console.log(hetresultaat);
console.log(heeftEenResultaart());

let x =9;
let a =3;
let b =4;
let c =89

let y = (a*(x*x) )+ (b*x) +c;
console.log(y); 

function ax2bcWiskunde(x,a,b,c)
{ 
  let y = (a*(x*x) )+ (b*x) +c;
  return y; 
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);


let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

let u = 9;
let h = 8;
let l = 15
function berekening(u,h,l){
    let logY = Math.log(l) + h + Math.pow(u,2);
    return logY 
}

let u2 = berekening(2,5,7);
console.log(u2);







