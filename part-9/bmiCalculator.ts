type BMIRange =
  | 'Underweight (Severe thinness)'
  | 'Underweight (Moderate thinness)'
  | 'Underweight (Mild thinness)'
  | 'Normal (healthy weight)'
  | 'Overweight (Pre-obese)'
  | 'Obese (Class I)'
  | 'Obese (Class II)'
  | 'Obese (Class III)';

function calculateBmi(
  heightInCentimeters: number,
  weightInKilograms: number
): BMIRange {
  const heightInMeters = heightInCentimeters / 100;
  const BMI = weightInKilograms / (heightInMeters * heightInMeters);
  if (BMI < 16) return 'Underweight (Severe thinness)';
  if (BMI < 17) return 'Underweight (Moderate thinness)';
  if (BMI < 18.5) return 'Underweight (Mild thinness)';
  if (BMI < 25) return 'Normal (healthy weight)';
  if (BMI < 30) return 'Overweight (Pre-obese)';
  if (BMI < 35) return 'Obese (Class I)';
  if (BMI < 40) return 'Obese (Class II)';
  return 'Obese (Class III)';
}

console.log(calculateBmi(180, 74))
