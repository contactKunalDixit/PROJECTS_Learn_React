// todo:    Module 2:  JavaScript Refresher

/*
? What should you know first?

? Data Types, variables, functions, loops etc
? Promises & Asynchronous programming
? Array methods like forEach() & map()
? Fetch API & making HTTP requests

!   Chapter 11 to 23 - Summary ***************

*/


/*
Reacts apps are  writtern with most updated JavaScripts features. e.g. ES6

todo: Chapter 11 : Understanding "let" and "const"

* Earlier practice of using "var", for declaring variable has been replaced with "let" and "const"

* Use "let" if you'd want to declare a variable whose value can be changed later.
* Use "const" is you'd like to declare a variable and keep its value fixed, which is mostly the case in general.

todo: Chapter 12 : Arrow Functions

Imp Pointers:

*   You can omit the parameters brackets and shorten the syntax if there is only one arguement...but this may not work if there are more than one arguement.

* Also, if there is no code written above the return statement, we can also omit the curly braces, and the code can be shortened further 

let nameFunc = (name)=>{
    return name
}
can be written as 

let nameFunc = name => name         

*/


let numMultiply = (num) => {
    return num * 2
};

let product = numMultiply(2)
console.log(product)
   
/*   
** Brackets for arguements can only be omitted if there's only one arguement....AND the actual code can be shortened to something like above only if there is no code above the retuern statement. Thus the above function can be shortened as:
*/
let numMultiply1 = num => num*2

let product1 = numMultiply1(2)
console.log(product1)


/* 

todo: Chapter 12 : Modules (Export and import)



* Though multiple files for Javascript can be added as script in the right order in HTML pages but there are Advantages of using Modules: 

* The long javascript file can be broken and then subsequent pieces can be used where apropriate
* It adds a layer of abstraction to your code
 
 


*/

//  * Few of the important Array prototype functions that are frequntly used:
let numArray = [1, 2, 3, 4]


let result1 = numArray.find((i) => { return i > 2 })
console.log(result1)

let result2 = numArray.findIndex((i) => { return i >2 })
console.log(result2)

let result3 = numArray.map((num) => { return num * 2 })
console.log(result3)

let result4 = numArray.filter((i) => { return i%3})
console.log(result4)

let result5 = numArray.reduce((accumulator, currentVal) => {
   return  accumulator+currentVal
})
console.log(result5)

let result6 = numArray.concat(result3)
console.log(result6)

let result7 = numArray.slice(0, 2)
console.log(result7)

let result8 = numArray.splice(0, 2, "Kunal")
console.log(result8)
console.log(numArray)