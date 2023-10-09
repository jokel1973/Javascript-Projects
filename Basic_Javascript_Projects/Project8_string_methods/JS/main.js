//Concat Method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "a dream ";
    var part_3 = "to code ";
    var part_4 = "in full sentences.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//Slice Method
function slice_Method() {
    var Sentence = "Mary had a little lamb, whose fleece was white as snow.";
    var Section = Sentence.slice(30,37);
    document.getElementById("Slice").innerHTML = Section;
}
// The toUpperCase() method writes a new string with all caps
function Upper_Case() {
    let text = "hello world";
    document.getElementById("Upper").innerHTML = text.toUpperCase();
}
// The search() method specifies the position of the first match
function search_Method() {
    let text = "Mr. Blue has a blue house"
    let position = text.search("Blue");
    document.getElementById("search").innerHTML = position; 
}
//The toString Method, converts numbers to be a string
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//Precision Method, limits a number to a specified number of characters.
function precision_Method() {
    var X = 3.1415926535;
    document.getElementById("Precision").innerHTML = X.toPrecision(6);
}
//The toFixed method rounds the numbers after the decimal point
function toFixed() {
    var X = 3.1415926535;
    document.getElementById("Rounded").innerHTML = X.toFixed(3);
}

//The valueOf() method returns the primitive value of a string.
function value_Of() {
    let text = "Humpty Dumpty sat on a wall";
    let result = text.valueOf();
    document.getElementById("Value").innerHTML = result;
}