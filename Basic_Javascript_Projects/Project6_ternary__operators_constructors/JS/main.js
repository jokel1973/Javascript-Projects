
//Ternary Operator

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}//Ternary, 3 values, height, ? gives us a condition, can or can't ride


function vote_Function() {
    var Birth_Year, Can_vote;
    Birth_Year = document.getElementById("Birth_Year").value;
    Can_vote = (Birth_Year > 2005) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}//Ternary, 3 values, height, ? gives us a condition, can or can't vote


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}//This is an object constructor. it sets up the object with it's properties
var Jack = new Vehicle("Class", "Viper",2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");//fills in the details so we can call the varibles 
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}//calls the details using the keywords new and this.
function myFunction1() {
    document.getElementById("New_and_This").innerHTML = "Jack drives a " + Jack.Vehicle_Class  + Jack.Vehicle_Model + " colored " + Jack.Vehicle_Color;
}//For this one I changed Jack's vehicle to have a Class instead of a model. this returns as undefined when the function is run. 

function Dog(Breed, Hair, Age, Color) {
    this.Dog_Breed = Breed;
    this.Dog_Hair = Hair;//This will refer to long or short, or coat type
    this.Dog_Age = Age;
    this.Dog_Color = Color;
}//This is the object constructor

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }//Function Count is nested within the count_Function
}//This is a nested function demo.




