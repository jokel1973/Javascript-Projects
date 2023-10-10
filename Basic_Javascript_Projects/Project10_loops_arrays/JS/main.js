//Loop using while, as long as the while statement is true it will continue to loop.
function count_to_Five() {
    var Digit = "";
    var X = 1;
    while (X < 6) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Count_to_Five").innerHTML = Digit;
}
//The length property returns the length of the string
function string_Length() {
    let text = "Mary had a little lamb.";
    let length = text.length;

    document.getElementById("howLong").innerHTML = length;
}
//This is a for Loop, used for known number of iterations, continues until condition is false.
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
// Array with properties and methods
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}
// Using the constant keyword
function constant_function () {
    const Musical_Instrument = {type:"guitar", brand:"Jackson", color:"black"};
    Musical_Instrument.color = "red";
    Musical_Instrument.price = "$300";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color  +  Musical_Instrument.type + " was " + Musical_Instrument.price;
}
// Using the keyword let in block scope
function Let_Block_Scope() {
    var X = 25;
    document.write(X);
    {
        let X = 55;
        document.write("<br" + X);
    }
    document.write("<br>" + X);

    document.getElementsById(Block_Scope).innerHTML = (X)
}
// Return statement demo. Note: reeturn statement nested so the statement can be called with a button
function holder_Function() {
    function return_Function() {
        return Math.PI;
    }
    document.getElementById("Return").innerHTML = return_Function();
}
//Object with porperties and a method
let car = {
    make: "AMC ",
    model: "Matador ",
    year: "1976 ",
    color: "Blue ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();//note this is part of the above Object code, so it will execute in the html
//Using the break statement 
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("break").innerHTML = text;
//Using the continue statement
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("Continue").innerHTML = text;