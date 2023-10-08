
//Global variable, outside the function so other functions can access it
var X = 10;
function Add_numbers_1() {
    document.write(20 + X +"<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// Local variable, function Add_numbers_2 cannot access the variable X
function Add_numbers_3() {
    var Y = 10;
    document.write(20 + Y);
}
function Add_numbers_4() {
    var Y = 10;
    console.log(Y + 100);//In Dev tools this shows as undefined
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function get_Date() {
    if (new Date().getHours() < 17) {
        document.getElementById("Salutations").innerHTML = "How are you today?";
    }
}


function get_Dates() {
    if (new Date().getHours() > 17) {
        document.getElementById("Hello").innerHTML = "How are you this evening?";
    }
}