document.body.style.backgroundColor = 'pink'

/*Question 01 */
//use  filter method to filter negative numbers from array
//
const array = [1, -2, 3, -4, 5, -6, 7, 8, 9, -10, 11, 12, -13, 14, 15];
console.log(array.filter( (n: number ) => n >= 0))
//


/*Question 02 */
//use map method to return new array multiplies each item with 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const newArray = numbers.map((number:number)=> number*2)
console.log(newArray);
//


/*Question 03 */
//use filter method to filter from array of strings whose length is greater than 5
const fruits : string[] = ['Apples','Bananas','Coffee','Dino','Eclair','Orange','PineApples','Guava']
console.log(fruits.filter((value:string) => value.length > 5));
//


/*Question 04 */
//use map and filter method together to create new array containing sq of all evens
const wholeNumbers: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
const squardNumbers = wholeNumbers.filter(n => n%2 === 0).map(n => n*n);
console.log(squardNumbers);
//


/*Question 05 */
//use map method to generate fahrenheit of numbers given in celsius
const celsiusNumbers: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const fahrenheitNumbers = celsiusNumbers.map(n => ((n*9/5)+32))
console.log(fahrenheitNumbers);
//


/*Question 06 */
// use map and filter methods to doubled the odd values of array
const mulple3 : number[] = [3,6,9,12,15,18,21,24,27,30]
const doubledOdds = mulple3.filter(n => n % 2 !== 0).map(n => n+n);
console.log(doubledOdds);
//


/*Question 06 */
//use forEach method to log names with exclamation mark as i.e. "Albert!".
const names : string[] = ["Ali",'Albert','Alia','Hamza','Bob','Smith']
names.forEach(name => console.log(`"${name}!".`));

//