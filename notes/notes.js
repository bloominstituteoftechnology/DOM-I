// create something for the DOM progratically

var myNewParagraph = document.createElement('p');

myNewParagraph.textContent = 'The nice new content';

myNewParagraph.classList.add('cats', 'green');

myNewParagraph.setAttribute('id', 'theBestParagraph');

var section = document.querySelector('section');

section.appendChild(myNewParagraph);






// 1- Traverse the DOM until you reach the children of the section element. This is an HTMLCollection which has a length property. Log it to the console. Does it match the number of elements inside the section element?

// 2- Traverse the DOM until you reach the h3 heading. Save it to a variable. Change the innerText of the h3 to be something else.

// 3- What is the difference between a HTMLCollection and a NodeList?

// 4- How many ways do you know to capture the h1 element?

// 5- Use the setAttribute method of elements to slap some inline styles to the h1.

// 6- Use the setAttribute method of elements to slap a class of "cursive" to an element. Does it work?

// 7- Use the style property of elements to slap some more inline styles to an element.

// 8- Create a new paragraph from scratch and append it using insertAdjacentElement.

// 9-
//    * Create an anchor element using document.createElement and save it to a variable.
//    * Add it to the document using appendChild or insertAdjacentHTML method.
//    * Add some text content to this element so it displays something to the user.
//    * Use dot notation to give it an href attribute so the link will work.
//    * Add a unique id using dot notation.
//    * Change the id using the setAttribute method on elements.
//    * Get the list of classnames this component has.
//    * Use the add method on the list to add a couple of classnames.
//    * Use the replace method on the class list to edit one of the classnames.
//    * Use the remove method on the class list to remove one of the classnames.
//    * Style the anchor tag using the style property.
