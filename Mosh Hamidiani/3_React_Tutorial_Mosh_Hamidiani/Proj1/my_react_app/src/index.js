import React from 'react';
// Import object "React" from the module 'react' 

import ReactDOM from 'react-dom';
//  Import object "ReactDOM" from module 'react-dom'

const element = <h1>Hello World</h1>

// Babel , which is a JS compiler for modern browsers would convert the JSX (JavaScript XML) into a call to React to create Elements i.e. it'll lead to React.createElement() .

/* As we've seen in the Babel.io/repl on how babel translates the code into 
React.createElement() ...and so on

just because, babel actually converts the code litterally to React.createElement(), we need to import the object "React" from the module 'react'. APart from this, we will never be using the object 'React'.

We just need to ensure, it is available for Babel, so that it converts the JSX into browser understandable code.

* so in our components, we'll always be using JSX and we'll  leave it up to Babel to convert that JSX code into calls to React that create ELements
*/

console.log(element)

/* 
todo: sidenote:  
Projects that are created using "create-react-app", whenever you save the cahnges, this application is automatically restarted

so you wont have to go back to browser and refresher it

todo: This automatic reloading is known as "Hot module reloading"
*/

/*
* In the console, What we get is an output of a JSX expression (e.g. <h1>Hello World</h1>), aka "React Element" 
* This appears in the form of a simple JavaScript Object 
*The type property of this object has been set to 'h1' and the content i.e. "Hello World" appears in another property 'props', which initself is an object.

? As briefd earlier, this entire output aka "React ELement" is part of the virtual dom, ..

? so whenever the state of this object changes, then  

? 1.  React will generate, the new React element 
? 2.  React will compare this new element with the previous one ?and will figure out what has changed
? 3. React will reach out to the real DOM and will update it accordingly
*/

// Now we need to render this output "Hello World" inside real DOM, and that's why we have imported the object 'ReactDOM' from 'react-dom' module.
let reactOutput=ReactDOM
console.log(reactOutput)

ReactDOM.render(element, document.getElementById("root"))

/*
 * In real world application, instead of rendering one JSX element in the DOM, we'd like to replace this simple JSX expression <h1>Hello World</h1>, with the app component
* This app component is the root component for our application, it includes children like navigation bar, side bar, profile etc and other elements. so we'll have a tree of components, and which will produce a complex looking markup. 
*/

