
//Key Value Pairs
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        age:5,// Numbers don't need quote marks
        Sound:"Bark!",
        Sound:"Ruff!"//The addition of a duplicate key causes the script to pull last key's value in the list.
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;//Deletes element, both elements if there is a duplicate.
}