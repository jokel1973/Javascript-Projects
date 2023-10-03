

function displayDate() {
  document.getElementById("demo").innerHTML = Date(); // Gets the current date and time and displays in index.html
  
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!"; //Uses the += to combine the two into one sentence when displayed
    document.getElementById("Concatenate") .innerHTML = sentence; //tells the JS to find the element ID and print the result there
}
