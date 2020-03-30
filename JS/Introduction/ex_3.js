/*
Write a function that checks whether the passed skill vector has the "Javascript" skill and returns a true / false boolean whether it exists or not. */

function HaveAbility(skills) {

    if (skills.indexOf("Javascript") >= 0) {//returns -1 if not found the element
        return true;
    }

    else {
        return false;
    }
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(HaveAbility(skills)); // true ou false