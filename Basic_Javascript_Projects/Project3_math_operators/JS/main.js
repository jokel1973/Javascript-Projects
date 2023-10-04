
function addition_Function() {
    var addition = 356 + 459;
    document.getElementById("Math").innerHTML = "356 + 459 = " + addition;
} //addition function using Math as the ID in the HTML file

function Subtraction_Function() {
    var Subtraction = 86 - 44;
    document.getElementById("Minus").innerHTML = "86 - 44 = " + Subtraction;
} //Subtraction Function using Minus as the ID in the index file

function multiplication () {
    var multiply = 7 * 6;
    document.getElementById("multiply") .innerHTML = "7 x 6 = " + multiply
} //multiplication function using multiply in the index file

function division() {
    var divide = 42 / 6;
    document.getElementById("divide") .innerHTML = "42 / 6 = " + divide;
} //Division function using divide for the var id and in the HTML to return the answer

function hard_math() {
    var operations = (1 + 2) * 10 / 2 -5;
    document.getElementById("operations") .innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + operations;
} //Multiple operations function, using operations as the var and hard_math to name the function.

function modulus_Operator() {
    var remainder = 25 % 6;
    document.getElementById("remainder") .innerHTML = "When you divide 25 by 6 you have a remainder of : " + remainder;
} //using the % symbol to show a remainder 

function negation_Opertator() {
    var x = 10;
    document.getElementById("Maths").innerHTML = -x;
} // negation operator to convert a number from positive to negative


var X = 5;
X++;
document.write (X);
//using the ++ to show incremental increase

var Y = 5.25;
Y--;
document.write(Y);//using the ++ to show incremental decrease

window.alert(Math.random() * 100);//random number generator 1-100

function demo() {
document.getElementById("demo").innerHTML = Math.pow(8,2);
}


