<h1>String Calculator (TypeScript)</h1>

<p>This is a TypeScript implementation of a String Calculator that sums numbers in a string separated by various delimiters such as commas, newlines, or custom delimiters.</p>

<h2>Features</h2>
<li>Sum of numbers: The calculator can sum numbers in a string.</li>
<li>Multiple delimiters: Numbers can be separated by commas, newlines, or custom delimiters.</li>
<li>Custom delimiters: Allows specifying delimiters of any length to separate numbers with a facility of multiple delimiters at same time</li>
<li>Ignoring number greater than 1000: Any number passed in string greater than 1000 is ignored</li>
<li>Error handling: Throws an error if negative numbers are detected.</li>

<h2>Installation</h2>
<p>To get started with the String Calculator, follow these installation steps:</p>

<h3>Prerequisites</h3>
<li>Node.js (v14 or above)</li>
<li>npm (v9 or above)</li>

<h3>Setup</h3>
<p> 1: Clone the repository:</p>
<div><code><span>clone</span>  https://github.com/nv2412/string-calculator.git </code></div><br>
<p> 2: Go to the project directory:</p>
<div><code><span>clone</span> cd string-calculator </code></div><br>
<p> 3: Install the dependencies:</p>
<div><code><span>clone</span> npm install </code></div><br>
<p> 4: Compile TypeScript code:</p>
<div><code><span>clone</span> npm run build </code></div><br>

<h2>Usage</h2>
<p>You can use the StringCalculator class to sum numbers in a string.</p>
<h3>Basic Usage</h3>
<p>By default, the calculator accepts numbers separated by commas or newlines.</p>
<div><code>const calculator = new StringCalculator();
const result = calculator.add("3,2,6");
console.log(result); // Output: 11</code></div>
<h3>Handling Newlines</h3>
<p>You can use newlines (\n) as delimiters between numbers.</p>
<div><code>const calculator = new StringCalculator();
const result = calculator.add("1\n2,3");
console.log(result); // Output: 6</code></div>
<h3>Custom Delimiters</h3>
<p>To use a custom delimiter, add it in the input string by prefixing the delimiter with // followed by the delimiter on the first line. Multiple delimiters of any length can be used</p>
<div><code>const calculator = new StringCalculator();
const result1 = calculator.add("//;\n1;2");
console.log(result1); // Output: 3
const result2 = calculator.add("//[***]\n1***2***3");
console.log(result2); // Output: 6
const result3 = calculator.add("//[*][%]\n1*2%3");
console.log(result3); // Output: 6
const result4 = calculator.add("//[**][%%]\n1**2%%3");
console.log(result4); // Output: 6
</code></div>
<h3>Ignoring values greater than 1000</h3>
<p>If a value more than 1000 is passed in string, its ignored.</p>
<div><code>const calculator = new StringCalculator();
const result = calculator.add("3000,2,6");
console.log(result); // Output: 8</code></div>
<h3>Error handling of negative values</h3>
<p>The calculator throws an error if any negative numbers are included in the input string. The error message will list the negative numbers.</p>
<div><code>const calculator = new StringCalculator();
const result = calculator.add("1,-2,-3,4");
console.log(result); // Output: Negatives not allowed :-2,-3</code></div>
<h2>Function</h2>
<h3><code>add(numbers: string): number</code></h3>
<b>Parameters</b>: 
<ul><li><code>numbers</code>(string): A string containing numbers separated by delimiters.</li></ul>
<b>Returns</b>: 
<ul><li>A number which is sum of all numbers in the string.</li></ul>
<b>Throws</b>:
<ul><li>Throws an error if negative numbers are found in the string.</li></ul>
