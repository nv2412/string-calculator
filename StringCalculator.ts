class StringCalculator {
  // Method to add numbers from a string
  public add(numbers: string): number {
    if (!numbers) return 0; // If the input is an empty string, return 0.

    // Split the input string by commas convert to an array of numbers.
    const numberArray = numbers.split(/[,]+/).map(n => parseInt(n.trim(), 10));

    // Return the sum of the numbers.
    return numberArray.reduce((sum, current) => sum + current, 0);
  }
}

console.log(StringCalculator.add("")); // 0
console.log(StringCalculator.add("3,2,6")); // 12

