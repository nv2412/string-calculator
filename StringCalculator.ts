export class StringCalculator {
    // Method to add numbers from a string
    public add(numbers: string): number {
      if (!numbers) return 0; // If the input is an empty string, return 0.

      let numberArray: any[] = [];

      // Find delimiter and filter it to get number string with that delimiter only
      if (numbers.includes('//')) {
          // Remove occurrences of '//' from the string
          let numbersStr = numbers.replace('//', '');
          const tempArray = numbersStr.split(/[\n]+/).map(n => (n.trim()));
          numberArray = tempArray[1].split(tempArray[0]).map(n => parseInt(n.trim(), 10));
      } else {
          // Split the input string by commas convert to an array of numbers.
          numberArray = numbers.split(/[\n,]+/).map(n => parseInt(n.trim(), 10));
      }

      console.log(numberArray);
      // Return the sum of the numbers.
      return numberArray.reduce((sum, current) => sum + current, 0);
    }
}

const stringCalculator = new StringCalculator();
console.log(stringCalculator.add("")); // should be 0
console.log(stringCalculator.add("3,2,6")); // should be 11

