// todo:    Module 1:  Welcome to the course

/*
? What should you know first?

? Data Types, variables, functions, loops etc
? Promises & Asynchronous programming
? Array methods like forEach() & map()
? Fetxh API & making HTTP requests

!   Chapter 1 to 10 - Summary ***************

?   Q: What is React.js ?

*   React is a Javascript library for building User Interfaces
React is a popular JavaScript client's side library for building reusable, component driven user Interfaces for Web pages or applications.
React combines HTML with JavaScript functionality into its own markup language called as 'JSX'
React also makes it easy to manage the flow of data throughout the application.
React is an open source library created and maintained by facebook. It's a great tool to render the User interface (UI) of modern web applications.

Generally, Mobile apps and Desktop apps (say Netflix) feels a lot different from web pages or web apps in terms of how 'reactive' and 'responsive' they feel. Things happen instantly, you don't wait for new pages to ;load or actions to start.

Tradionally, in web apps or web pages, you click a link and wait for a new page to load. You click a  button and wait for some action to complete. That's because on the backend, what the click triggers, is a request from user's end (browser in this case) and sends it to the server. The server in return, and as a response sends the new HTML file with new data.

This entire long 'request respond' cycle can be broken and can be curtailed with JavaScript as it facilitates DOM manipulation. That means, we can have the new data show up at user's end through DOM manipulation without fetching or requesting a new data from the server. We dont need to request a new HTML page (and wait for the response) as the 'code' written by dev in JavaScript file can manipulate and show the updated and intended data.   


Netflix app is a good example of a react application. It runs very smoothly and gives an absolute feel of being a Mob application even being opened on web browser. It gives higher and better user interaction feel and never lags when moving from one page or section to another. 
That is so because, in case of a normal website, the user types a URl in the browser and the requests is sent to the server which in return sends an appropriate response with the relevant HTML, CSS and javaScript files, which the browser then renders on the screen for the user.
Javascript to a certain extent can let the developer have control through prograaming for DOM manipulation in the JS file itself.

?   Q:  Why use React instead of just "JavaScript" ?

If we are creating an app using just plain JavaScript, more often than not, we'll be finding ourselves using 'Imperative approach' i.e. defining step after step approach which often leads to repetativeness and longer code. 
But instead React.JS helps us structure the entire code into smaller components or building blocks, where every component has a clear task and is easily reusable, hence avoiding repetiveness and thus leading to much cleaner looking code.
The heavy duty task of choosing how the data rendering (on the screen) takes place and how the entire code in shape of little components comes together, is something that is taken careoff by the React library itself.

Thus, React helps us write Declarative, component focussed approach. 'Declarative' because we only define a high level requirement and the React library itself works out the lower level coding that is required to get the high level coding executable. 



?   Q:  Building Single-Page applications (SPAs) with React.js

Since React.js often provides easy way to add certain features on the page, we very commonly would see React.js being used for Single-Page applications. 

* React.js can be used to 'control certain parts' of HTML pages(ref "widget approach") or 'entire' pages (or the entire frontend of a web application including transioning from one page to another e.g. Netflix app).

ref widget approach: widget approach is controlling certain parts(say a specific portion, hence the name 'widget') of the web apps while the other mojority of components being rendered and served through and by a backend server.

for full page or fully React.js application, when user switches from one page to another, it may appear as if the page is being requested to the server but in reality, React.js just directs the JS code to alter or manipulate what the user sees on the final screen, thus giving an impression of a better, lag free user interface experience and smoother transitions withion different pages.

todo: 
Netflix is a single-page application and the user, even when is transitioning to a different page or a link, actually never sends a requests to the server for a second newer HTML page. Hence its a Single-Page application, where after the initial request to the site, React.js takes over and controls what we see on the screen.  

?   Q: How is React differnent from its alternatives i.e. Angular or Vue?

React.js is a front end library which is 'Lean/light weight' library which is deeply focussed on the concept of 'components'. It is very common to make use of other third party community packages  to add more features in React.js to make it more effective and impactful. There are plenty of third party packages available in the community. React basically just focuses on how it structures the code basis 'components' and, how it then renders these components and user interface onto the screen.
Other external functionality which you may need for smooth functioning of your site or app, at times has to be downloaded externally through a third party package

Angular: Is an alternative for React and comprehensively includes more built in features than React. It is also an complete component-based UI framework. It Uses TypeScript from the start. Can be overkill for smaller projects since it has more built-in features. You dont have to depend upon the community as much as you would in case of React.js because it is comprehensivly comprises of more built in features and functionalities.

Vue.js: Vue.js stands somewhere in between Angular and React or one may say that it is kind of a Mixture of ANgular and React.js. It is also a complete component based UI framwework, includes most core features. A bit more built-in features than React.js but less than that of Angular.

*/

let name = kunal
