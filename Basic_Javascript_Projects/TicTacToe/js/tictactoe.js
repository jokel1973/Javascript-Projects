//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //The .some() method is used to check easch element of the selectSquare array 
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage ='url("images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //if active player is 'X' change to 'O'.
            activePlayer = 'O';
            //if avtive player is anything other than 'X'    
        } else {
            //chnage the activePlayer to 'X'
            activePlayer = 'X';
        }
        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checkd to see if it is the coumputers turn.
        if (activePlayer === 'O') {
            //this function disables clicking for computers turn.
            disableClick();
            //This function waits 1 second befoer the couputer places an image and enables the click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is neede for our computersTurn() function to work. 
        return true;
    }
    //This function results in a random square being selected by the computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            //A random number between 0 and 8 is selelcted. 
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random numger evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line calls the fucntion.
                placeXOrO(pickASquare);
                //This changes our boolean an dends the loop.
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawline() function is called to draw a line on the screen if a condition is met.
function checkWinConditions() {
    //X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X','2X')) { drawWinLine(50,100, 558, 100) }
    // X 3, 4, 5 conditon.
    else if (arrayIncludes ('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    //X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50,100, 558) }
    //X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X','7X')) { drawWinLine(304, 50, 50, 558) }
    //X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X','2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    //O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    //O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    //O 6, 7, 8 condition.
    else if (arrayIncludes('6O','7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    //O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //O 6, 4, 8 condition.
    else if (arrayIncludes('6O', '4O', '8O')) { drawWinLine(100, 508, 510, 90) }
    //O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. if none of the above conditions are met and
    //9 squares are selelcted the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('.media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 500)
    }
    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to checck for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then
        //true is retuned and our else if condition executes the dreaLine() function.
        if (a === true && b === true && c === true) { return true; }
    }
}

//THis function makes our body element temportarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto';}, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound('./media/place/mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play mehtod plays our audio sound.
    audio.play();
}


