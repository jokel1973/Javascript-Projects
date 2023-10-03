window.alert("Hello World!"); //Opens window with text and ok button to dismiss
document.write("Hello, World!"); //Write command to print the text on screen
var A ="This is a string"; //Creates a variable
document.write(A); //Writes the variable on the screen
var B ="camelCase is a way of typing text where the first capital letter is not the first letter of the word"; //Creates a variable
window.alert(B); //Opens window with text and ok button to dismiss 
document.write("It is good etiquette to start a conversation with co-workers with a salutation such as \"Good Morning\" instead of diving into the work discussion.") //Writes a line while ignoring key operators
document.write("\"Be of good cheer\!"+"The End is almost here\!\""+"-Anonymous coworker 5 minutes to closing.")//Creates a string using concatenate
var C = "Use a \+ sign"+" to concatenate a string." //Creates a string using concatenate
document.write(C);//Writes the variable on the screen
var Vehicles = "My Cars", Ford ="F150", Dodge = "Durango", Mitsubishi = "Lancer"; //Creates a list of variables with IDs
document.write(Dodge);
var D = "Ford " + " Dodge " + " Mitsubishi"; //Expression to pull manufactures from previous line
document.write(D);
var Sent1 = "This is the begining of the string ";
var Sent2 = " and this is the end of the string.";
document.write(Sent1 + "<br>"+ Sent2);
function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled == true) {
      text = "Cookies are enabled.";
    } else {
      text = "Cookies are not enabled.";
    }
    document.getElementById("demo").innerHTML = text;
  }