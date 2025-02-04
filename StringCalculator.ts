/**
 * StringCalculator is an simple class that owns the responsibility for adding numbers in a string.
 * 
 * @class
 * @description This class contains basic attributes and methods for performing the desired operations.
 */
export class StringCalculator {
    /**
     * To store call count
     * @type number
     */
    private callCount: number = 0;

    /**
     * Final array of numbers to sum
     * @type array
     */
    private numberArray: any[] = [];

    /**
     * Method to add numbers from a string
     * 
     * @param numbers The number string
     * 
     */
    public add(numbers: string): number {
      this.getCalledCount();

      try {
        // If the input is an empty string, return 0.
        if (!numbers) return 0; 

        // Check for delimiters
        if (this.hasDelimiter(numbers)) {
          this.processDelimiters(numbers);
        } else {
          // Split the input string by commas or \n and convert to an array of numbers.
          this.numberArray = numbers.split(/[\n,]+/).map(n => parseInt(n.trim(), 10));      
        }

        // Return the sum of the numbers.
        console.log(this.numberArray);
        this.processNegatives();
        this.ignoreThousands();
        return this.numberArray.reduce((sum, n) => sum + n, 0);
      } catch(error) {
        return error.message;
      }
    }

    /**
     * Function to throw error
     * 
     */
    public throwError(message: string): never {
        throw new Error(message);
    }

    /**
     * Function to count method call
     * 
     */
    public getCalledCount(): number {
      return ++this.callCount;
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
     * Function to check if negatives are present
     * 
     * @param numbers The number string
     * 
     */
    public processNegatives(): void {
      let negativeNumbers = this.numberArray.filter(num => num < 0);
      if (negativeNumbers.length>0) {
          console.log(negativeNumbers.join(','));
          return this.throwError('Negatives not allowed :' + negativeNumbers.join(','));
      }
    }

    /**
     * Function to ignore thousands
     * 
     * @param numbers The number string
     * 
     */
    public ignoreThousands(): void {
      this.numberArray = this.numberArray.filter(num => num < 1000);
    }

    /**
     * Method to process number array from a string having delimiter
     * 
     * @param numbers The number string
     * 
     */
    public processDelimiters(numbers: string): void {
      // Remove occurrences of '//' from the string
      let numbersStr = numbers.replace('//', '');

      // Find delimiter and filter it to get number string with that delimiter only
      const tempArray = numbersStr.split(/[\n]+/).map(n => (n.trim()));
      let delimiters = tempArray[0].split(/\[|\]/).map(n => (n.trim()));
      console.log(delimiters);
      const regex = new RegExp(`[${delimiters.join('')}]`, 'g');
      this.numberArray = tempArray[1].split(regex).map(n => parseInt(n.trim(), 10));
    }
}

