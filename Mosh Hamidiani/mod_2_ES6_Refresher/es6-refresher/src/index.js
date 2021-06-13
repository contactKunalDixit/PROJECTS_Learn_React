
// ? 1 var vs lst vs const
let i = 99;
function sayHello() {
  // for (var i = 0; i < 5; i++){
  for (let i = 0; i < 5;i++){
    console.log(i)
  }
  console.log(i)
}

sayHello()
console.log(i)

/* 
* conclusion: 

* var > function scoped:
variables declared with var are function scoped i.e. they can be accessed anywhere within the function they are defined in
* "let" > block scoped
variables are block scoped i.e. they can be accessed only within the specific block within which they have been declared
* "const" > blocked scoped
are also blocked scoped but their value remains constant 

* var has become redundant. We'd see let and const much in usage unless there's a specific reason for why var should be used

*/


// ? 2 Objects

const person = {
  name: "Kunal",
  walk: function () {
  
  },
  talk(){
      
  }
}


// *  How to access the above properties and methods of the object:
console.log(person.name)  /* *.notation to access a key value pair*/
console.log(person["name"])   /**  bracket notation*/

/*
* In terms of practicality, we use bracket notation when we don't know ahead of time, what method or property we would access 
*/


// ? 3  'This' keyword 

// ***************************************   Do 'this' and 'binding this' in detail from Mosh Javascript courses     **********************************

const personObj = {
  name: "Amaira",
  walk() {
    console.log(this)
  }
}
personObj.walk()
/*
* If keyword 'this' is declared within the object, and is called with refrence to that object, like personObj.walk(), then 'this' will point to that object itself i.e. personObj

* But if you create a reference to this method and then call the method,..then the keyword 'this' refers to the global object window
 */ 

let walkExterior = personObj.walk;
walkExterior()

/* 
todo:  The value of 'this' depends on how the function is called. 

todo: If we call the function as a method in the Object, 'this' will always return reference to that  object  

todo: If we call the function as a stand alone object or outside of an object, 'this' will refer to the global object i.e. windows.


*/

/*
 ? 4 Binding this:

 * As seen above, When we call a function as a standalone function ,without the object, which the function is a part of,...The keyword 'this' refers to the global object (i.e. window object for browser) ..in addition to this, if the 'strict' mode is 'on', then it will always return 'undefined'.

* This absurd changing behaviour can add a lot of confusion for many but this confusion can be taken care off completely. 
* We can make use of 'bind' method to permanantly associate (and hence, the term 'bind'), the keyword 'this' to the object itself.

*/

let walkExterior1 = person.walk.bind(person)
walkExterior1()

// todo:  person.walk is also an object as everything is, in Javascript. The 'walk.bind(person)' method will create a new instance of the walk function, and will set the keyword 'this' to point to the object 'person'.

// todo:  Conclusion: Everything in Javascript is an object as so is person.walk. We can use the 'bind' method to PERMANENTLY associate aka 'bind' the keyword 'this' to point to the object we'll mention in the bind method.

// todo:  so when we call 'bind' on the person.walk function, we get a new walkExterior1 function and in this new walkExterior1 function, the value of 'this' will always point to the arguement we would've passed in the bind method .  Since in this instance, we have used bind(person) and have set it to the variable name 'walkExterior1', whenever we call walkExterior1(); it will always point to the person object even when there is no reference to the object 'person' while running walkExterior1.

  * /

/*
? 3  Arrow.map() Method:

* Very important method that is widely used in React to render list. So, whenever you'd like to render the list of items, we use Aray.map() method.
 
 */

let arrColors = ["red", "green", "blue"]
let newArray= arrColors.map(()=>{})