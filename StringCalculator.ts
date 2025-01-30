export class StringCalculator {
    /**
     * Method to add numbers from a string
     * 
     * @param numbers The number string
     * 
     */
    public add(numbers: string): number {
      if (!numbers) return 0; // If the input is an empty string, return 0.
      
      // Split the input string by commas or \n and convert to an array of numbers.
      let numberArray: any[] = [];
      numberArray = numbers.split(/[\n,]+/).map(n => parseInt(n.trim(), 10));      

      // Return the sum of the numbers.
      console.log(numberArray);
      return numberArray.reduce((sum, current) => sum + current, 0);
    }

    public throwError(message: string): never {
        throw new Error(message);
    }
  
    /**
     * Function to check if delimiter present
     * 
     * @param numbers The number string
     * 
     */
    public hasDelimiter(numbers: string): boolean {
      if (numbers.includes('//')) {
          return true;
      } else {
         return false;
      }
    }    

    /**
     * Method to add numbers from a string having delimiter
     * 
     * @param numbers The number string
     * 
     */
    public addWithDelimiter(numbers: string): number {
      // Remove occurrences of '//' from the string
      let numbersStr = numbers.replace('//', '');

      // Find delimiter and filter it to get number string with that delimiter only
      let numberArray: any[] = [];
      const tempArray = numbersStr.split(/[\n]+/).map(n => (n.trim()));
      numberArray = tempArray[1].split(tempArray[0]).map(n => parseInt(n.trim(), 10));
      console.log(numberArray);
      return numberArray.reduce((sum, current) => sum + current, 0);
    }

    /**
     * Main funtion to process add on numbers strings
     * 
     * @param numbers The number string
     * 
     */
    public main(numbers: string): number {
      if (this.hasDelimiter(numbers)) {
          return this.addWithDelimiter(numbers);
      }
      return this.add(numbers);
    }
}

const stringCalculator = new StringCalculator();
console.log(stringCalculator.add("")); // should be 0
console.log(stringCalculator.add("3,2,6")); // should be 11

