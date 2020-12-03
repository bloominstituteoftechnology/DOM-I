//DOM - Document Object Model 1

//single slectors
//getElementById, querySelector

//querySelector - grabs the first element that matches the given query

const header = document.querySelector('header');
//console.log('header', header);


const logoTitle = document.querySelector('#logoTitle');
//console.log('logoTitle', logoTitle); 
//if we're working with classes and id's then you have to specify in query that we're looking for and Id or Class, using the # or . 

const mainNav = document.getElementById('mainNav'); //do not need to specify that it's an ID because you do in 'getElementById'
//console.log('mainNav', mainNav); //this just shows a string first, then displays the string's data. just a comment

//traversal with dot Notation
//const cardText = document.querySelector('.card-text');
//const catPic = cardText.nextElementSibling; //this says to go find the next element down, you could select multiple elements in a row using this dot syntax. A sibling element - something within the same container, on the same heirarcy. 
//console.log(cardText);
//console.log(catPic);

//we can use pseudoclasses in our selectors too
//const firstcard = document.querySelector('.card:nth-of-type(1)');
//console.log('firstCard', firstCard);



///Multi-Selectors
//getElementsByTagName, getElementsByClassName, querySelectorAll // these first two are much more effecient in terms of memory and performance, it takes less memory, and thus a faster running program. For more complexity use querySelectorAll
//in order of performance; HTMLCollection > NodeList > Array
//one of the main things you can do with a NodeList (see MDN) is looping. An HTMLCollection is literally just a container for stuff.
const navLinks = document.querySelectorAll('nav a'); //we're specifying our selector by tag here, it's getting all of the nav a tags 
//console.log(navLinks);
navLinks.forEach(link => link.textContent = "Hello"); //This will change all the nav a (Home, Content) to "hello"

const arrayFromNavLinks = Array.from(navLinks);
//console.log(arrayFromNavLinks);

//change text content
const cardTitle = document.querySelector('.card-title'); //should point to the first card title it finds, the first cat picture
const cardSubtitle = document.querySelector('.card-subtitle');
const cardText = document.querySelector('.card-text');

cardTitle.textContent = 'Dogs are Cool';
cardSubtitle.textContent = 'Fur Real';
cardText.textContent = 'Dogs are the best';

//change any property on an element
//const cardImgTop = document.querySelector('.card-img-top');

//const catIpsumLink = catPicLink.nextElementSibling;
//can select a specific element with a doct syntax, or can use setAttribute to specify
///catPicLink.setAttribute('href', 'some link here');
//catIpsumLink.setAttribute('href', 'some link');
//catIpsumLink.setAttribute('href', 'some link');

//update styling
//change classes, we can add remove or toggle a class
header.classList.add('jibberish'); //showing you can make an entire new class
console.log(header);
header.classList.remove('jibberish'); //showing you can make an entire new class
console.log(header);
setInterval(() => header.classList.toggle('jibberish'), 1000 );
//update inline styles

header.style.fontSize = '2em';
catPicLink.style.color = 'green';
firstCard.style.backgroundColor = 'purple';


//can create and element on the DOM 
document.createElement('some element');
//add before an element, prepend
//add after an element, append 
document.querySelector('some element').appendChild('thing')
//appending after, prepending is prior

//copying elements
//instead of copy/pasting chunks of code
someVariable.cloneNode(true); //cloning the decendants
document.querySelector('some element').appendChild(someVariable); 

//remove and put back an element
//this is not deleting it
header.remove(); //removes the header off the page
document.body.prepend(header); //this puts the header back on the page, at the top of the body