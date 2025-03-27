// document.title.innerText or document.head

// document.body.children[2].id

// s = "myButton"
// doc = document.getElementById(s)

// console.log(document.body.children[1]);



// if (typeof document === 'undefined'){
//     console.log('During server evalutation');
// }
// else{
//     //
//     console.log('During client evalutation');

// }

// document.title = "Hello, world!";

// console.log("Document body: ", document.body);

// console.log("Document basr uri: ", document.body.baseURI);


// text = document.getElementById('main-heading').innerText;
// console.log(text);



// text1 = document.getElementById('example').innerText;
// console.log(text1);

// text2 = document.getElementById('example').innerHTML;
// console.log(text2);

//******************************************************************* */


console.log("What is the URL?: ", document.body.baseURI);

x = document.body.baseURI = "adelaide.edu.au";
// console.log("What is the URL?: ", document.body.baseURI);
console.log("What is the URL?: ", x);




document.title = "Hello World"; // we can manipulate the html by injecting javascript into it. 



// Log the entire body element
console.log("Lecture 3 materials involve getting started with JS and how to use JS to access and modify html your HTML documents.");
console.log("We'll work with some common but useful functions below:");
console.log("A message will be printed out before the colon symbol and the content of the message is displayed on the right of the colon symbol.");
console.log("document.body: ", document.body);



// Log direct children of the body
console.log("document.body.children",document.body.children);



heading_id = "main-heading";
text = document.getElementById(heading_id).innerText; // .textContent or /.innerHTML ...
console.log("Text: " + text);


// 


// Access and log the first child (h1 element)
console.log("document.body.children[0]: ", document.body.children[0]);

// Access and log the second children (div element)
console.log("document.body.children[1]: ", document.body.children[1]);


// Access and log children inside the div
let div_children = document.body.children[1].children; // returns a list/array of html elements inside the <div> element.
console.log("Array of div's children: ", div_children);
console.log("with length: ", div_children.length);

// Using print concatenation when logging can block content that we want to see displayed.
// Instead, using the comma-separated printing to get around that.

// Display complete information about the children of the body's second element - div. 
// Child 1's element 
// Child 2's element 
// Total number of elements in the list











console.log("---------------------------------------------------------\n");
/*
innerText:
- only picks up visible text and ignore hidden ones.
- ignores extra spaces and formatting (style).

result: Hello World!


textContent: 
- includes all text, even hidden ones
- keeps whitespace formatting (spaces and return characters)

result:  Hello Hidden World!




innerHTML: 
- returns or sets html 
- includes html tags inside the element 
- used for modifying or reading html structure 

result: Hello <span style="display: none">Hidden<span> World!
*/


// d = document.getElementById("myButton").innerHTML;
// console.log("HTML's content of myButton: " + d);











