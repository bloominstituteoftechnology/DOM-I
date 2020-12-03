// DOM - Document Object Model

// selectors
// single selectors
// getElementById, querySelector

const mainNav = document.getElementById('mainNav');
// console.log('mainNav', mainNav);

// grabs the first element that matches the given query
const header = document.querySelector('header');
console.log('header', header);
// console.log('header', header);

// need to specify if you're searching for a class or id
const logoTitle = document.querySelector('#logoTitle');
// console.log('logoTitle', logoTitle);
const logoContainer = document.querySelector('.logo-container');
// console.log('logoContainer', logoContainer);

// we can use pseudoclasses in our selectors too
const firstCard = document.querySelector('.card:nth-of-type(1)');
// console.log('firstCard', firstCard);

// traversal with dot notation
// const cardText = document.querySelector('.card-text');
// const catPicLink = cardText.nextElementSibling;
// const catIpsumLink = catPicLink.nextElementSibling;
// console.log(cardText);
// console.log(catPicLink);
// console.log(catIpsumLink);

// multi-selectors
// getElementsByTagName, getElementsByClassName, querySelectorAll
// in order of performance: HTMLCollection > NodeList > Array
const navLinks = document.querySelectorAll('nav a');
console.log('navLinks', navLinks);
// navLinks.forEach(link => console.log(link.textContent));

// we can change it into an array if we want though :)
const arrayFromNavLinks = Array.from(navLinks);
console.log('arrayFromNavLinks', arrayFromNavLinks);

// changing text content
const cardTitle = document.querySelector('.card-title');
const cardSubtitle = document.querySelector('.card-subtitle');
const cardText = document.querySelector('.card-text');

cardTitle.textContent = 'Dogs are Superior';
cardSubtitle.textContent = 'For Real';
cardText.textContent = 'Dogs are the best, the run fast and are happy.'

// change any property on an element
const cardImgTop = document.querySelector('.card-img-top');
const catPicLink = cardText.nextElementSibling;
const catIpsumLink = catPicLink.nextElementSibling;

// can select a specific element with dot syntax, or can use setAttribute to specify
cardImgTop.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg';
catPicLink.setAttribute('href', 'https://www.pexels.com/search/dog/');
catIpsumLink.setAttribute('href', 'https://doggoipsum.com/');

// update styling
// change classes
// console.log(header);
header.classList.add('gibberish');
// console.log(header);
header.classList.remove('gibberish');
// console.log(header);
// setInterval(() => header.classList.toggle('gibberish'), 1000);

// update inline styles
header.style.fontSize = '2em';
catPicLink.style.color = 'green';
firstCard.style.backgroundColor = 'purple';

// creating new elements for the DOM
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog Here';
blogLink.href = '#';
document.querySelector('nav').appendChild(blogLink);

// copying elements
const secondCard = firstCard.cloneNode(true);
document.querySelector('.card-group').appendChild(secondCard);

// remove and put back an element
header.remove();
document.body.append(header);