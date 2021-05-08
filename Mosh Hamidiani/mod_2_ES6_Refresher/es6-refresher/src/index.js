
// ! 1 var vs lst vs const
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


// ! 2 Objects

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


// ! 3  'This' keyword

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


// ! 4 Binding this

