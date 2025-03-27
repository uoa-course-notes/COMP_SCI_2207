// Get elements by id 
let welcomeMessage = document.getElementById("welcome-message");
let infoSection = document.getElementById("info-section");


// Gets the entire element (including its tag)
console.log(welcomeMessage);
console.log(infoSection);


// Log innerHTML (includes HTMl tags) within a given html element
console.log("welcome-message's innerHTML: ", welcomeMessage.innerHTML);
console.log("info-section's innerHTML: ", infoSection.innerHTML);


// Log text content (includes hidden text, ignores HTML tags)
console.log("welcome-message's innerHTML: ", welcomeMessage.textContent);
console.log("info-section's innerHTML: ", infoSection.textContent);


// log innerText (excludes hidden text, ignores HTML tags)
console.log("welcome-message innerText:", welcomeMessage.innerText);
console.log("info-section innerText:", infoSection.innerText);





// welcomeMessage.innerText = "Greetings Earthling!";
welcomeMessage.innerHTML = "<h1>Greetings Earthling</h1>";



id_demo = "cat";
src = document.getElementById(id_demo).getAttribute("src");
console.log("logo's src: ", src);

// or recall that the attributes are properties of the elements and so we can the dot operator to access it.
s = document.getElementById(id_demo).src;
console.log(s);
// the above lines of code do the similar things: give a direct path to where the elements are. although the second part maybe more desirable.



// besides getting attribute, we can also set attributes
attribute_to_be_set = "src"; // still the same attribute
new_value_of_attribute = "../Lec1/campus_tour_s1_1.jpg";
document.getElementById(id_demo).setAttribute(attribute_to_be_set, new_value_of_attribute);

// or we can also remove/reset attributes as follows:
attribute_to_be_removed = "id"; // still the same 
document.getElementById(id_demo).removeAttribute(attribute_to_be_removed);



// Time to be more interactive. 
buttonID = "clickBtn";
document.getElementById(buttonID).addEventListener("click", 
    function(){
        alert("Button clicked!");
    }
);






























