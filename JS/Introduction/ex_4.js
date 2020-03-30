// Write a function that, given a total of years of study, returns how experienced the user is:

// From 0-1 year: Beginner
// From 1-3 years old: Intermediate
// 3-6 years old: Advanced
// From 7 up: Jedi Master
function experience(years) {
    if (years >= 0 && years < 1) return "Beginner";
    if (years >= 1 && years < 3) return "Intermediate";
    if (years >= 3 && years < 6) return "Advanced";
    if (years >= 7) return "Jedi Master";
}

var yearsOfStudy = 7;
console.log(experience(yearsOfStudy));