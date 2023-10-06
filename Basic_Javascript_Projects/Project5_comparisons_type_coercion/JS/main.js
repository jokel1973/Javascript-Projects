
document.write("Ten" + 4);//Using Type Coercion to print Ten4

function my_Function() {
   document.getElementById("Test").innerHTML = 0/0;
}//0 divided by 0 is nothing or Not a number (NaN)

function my_Function1() {
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}//Using isNaN to see if 'This is a string' is a number or NaN, should return a 'True'

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('313');
}//Using isNaN to see if '313' is a number or NaN, should return a 'False'

document.getElementById("Test3").innerHTML = (2E310);//Returns infinity as the nuber si too large

document.getElementById("Test4").innerHTML =  (-3E310);// Returns -Infinity as the negative number is too large

document.write(10>4);//Boolean logic returns True 

document.write(10<4);//Boolean logic returns False

console.log(3 + 4); //performs a math operation within the console

console.log(4 > 10);// Performs a Boolean logic function in the console

document.write(5 == 5);//Uses == as a comparison of the 2 numbers, should return a True


document.write(10 == 5);//Uses == as a comparison of the 2 numbers, should return a False

document.write(73 === 73);//Uses the === to verify both value and data type are the same

document.write("70" === 73);//the data type and the value do not match, returns a Falsle

document.write("73" === 73);//While the value is the same the first 73 is a string and not a numerical data type so we get False

document.write(73 === 70)//While the data type matches the values do not. false is returned.

document.write(7 > 4 && 14 > 8);// Using the && (AND) function to verify both are true or false, this should return True.

document.write(7 < 4 && 14 > 8);// Using the && (AND) function to verify both are true or false, this should return False.

document.write(6 > 11 || 11 > 5);// Using the || (OR) function to verify both are true or false, this should return True, because one is true.

document.write(6 > 11 || 11 < 5);// Using the || (OR) function to verify both are true or false, this should return False, because both are false.

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}// Not function using ! . the statement reads ! (Not) 20 is greater than 10. this is not a true statement as 20 is greater than 19, this should return a False.

function not_Function1() {
    document.getElementById("Not1").innerHTML = !(20 < 10);
}//Not function with a double negative, returns True.

