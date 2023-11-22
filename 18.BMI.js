function calculateBMI(weight, height) {
    // Convert height to meters
    height = height / 100; // Assuming height is in centimeters

    // Calculate BMI
    var bmi = weight / (height * height);

    // Determine BMI classification
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Example: Calculate BMI for a person with weight 70kg and height 175cm
var personWeight = 60;
var personHeight = 185;
var bmiClassification = calculateBMI(personWeight, personHeight);

console.log("BMI Classification:", bmiClassification);
