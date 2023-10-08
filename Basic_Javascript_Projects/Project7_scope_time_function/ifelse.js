
//if else function

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Buy = "You are old enough to buy aclohol.";
    }
    else {
        Buy = "You are not old enough to buy alcohol";
    }
    document.getElementById("How_old_are_you?").innerHTML = Buy;
}

//Else If statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 ==Time> 0){
        Reply = "It is morning time!";
    }
    else if (Time >+ 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}