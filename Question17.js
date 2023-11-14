function ageClassification(age) {
    if (age >= 0 && age <= 12) {
        return "MIMICRY";
    } else if (age >= 13 && age <= 19) {
        return "SELF-DISCOVERY";
    } else if (age >= 20 && age <= 45) {
        return "COMMITMENT";
    } else {
        return "LEGACY";
    }
}

// Example: Determine the classification for age 12
var personAge = 12;
var classification = ageClassification(personAge);

console.log("Age Classification:", classification);
