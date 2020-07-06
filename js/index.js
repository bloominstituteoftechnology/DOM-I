const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// step one: style the nav bar: 

// create a reference to the nav links, using querySelectorAll
let nav = document.querySelectorAll('a')
// console.log(nav) 

// assign the text values for the links in the nav 
nav[0].textContent = "Services"
nav[1].textContent = "Product"
nav[2].textContent = "Vision"
nav[3].textContent = "Features"
nav[4].textContent = "About"
nav[5].textContent = "Contact"

// change the text to green!
const navContainer = document.querySelectorAll('nav a')
// console.log(navContainer)

// long form forEach:
// navContainer.forEach(function(item) {
//     item.style.color = 'green'
// })

// arrow function forEach: 
navContainer.forEach((item) => {
  item.style.color = 'green'
})

// ADD to new links to the navigation using append and prepend 
// we already have a reference to the nav set up on line 47, using nav and querySelectorAll
const navigationBox = document.querySelector('nav')
const newLink = document.createElement('a')
console.log(newLink)
newLink.textContent = 'Append'
newLink.style.fontSize = '1.3rem'
newLink.style.color = 'blue'

navigationBox.appendChild(newLink)

const firstLink = document.createElement('a')
firstLink.textContent = 'Prepend'
firstLink.style.fontSize = '1.3rem'
navigationBox.prepend(firstLink);
// step two: style the top body box

// target the h1 that lives inside the section (class: cta) and div (class: cta-text) BUT because it is the only h1 on the page, we can use selectElementByTagName: 
// create a reference to the h1 
const domIsAwesome = document.getElementsByTagName('h1')
// console.log(domIsAwesome)

// now add the heading text to the h1 elements 
// because an HTML collection is LIKE an array, we have to target it as such, not like an element where we would not need the bracket notation to add the correct text 
domIsAwesome[0].textContent = 'Dom is Awesome!'
// grab the button HTML element, and add text/style, just as we did for the h1. We can re-use getElementByTagName because the button is the only one on the
const bigButton = document.getElementsByTagName('button')
// console.log(bigButton)

// add text to the button 
bigButton[0].textContent = 'Get Started'
// now we need to add the code image to the top body box by using .setAttributes, after creating a reference to the image tag that has an id of cta-img
const roundImg = document.querySelector('#cta-img')
// console.log(roundImg)
// now we can assign the src using 1 of 2 approaches: dot notation or .setAttribute method (which takes 2 strings as arguments), we will use dot notation 
roundImg.src = '/img/header-img.png'

// step three: add the mid-page image that separates the paragraphs 

// now add the code snippet image to the box using a querySelector, assign the src. This element lives in the img tag with the class name 'middle-child' AND id 'middle-img', either could be used. We will use the id for specificity reasons 
const codeImg = document.querySelector('#middle-img')
// console.log(codeImg)
// now we want to assign attributes, using the setAttribute method
codeImg.src = '/img/mid-page-accent.jpg'
// console.log(codeImg)

// step four: establish the body paragraphs and their headlines, add the text with .textContent, and target them with querySelectorAll

// all of the headers for the paragraphs live in the divs with class 'text-content', in the h4 tag. Create a reference to the h4s using querySelectorAll because there are more than one! 
const contentHeader = document.querySelectorAll('.text-content h4')
// console.log(contentHeader) // this returns a nodeList that we can manipulate like an array 
// target the h4's based on their index and manipulate the text 
contentHeader[0].textContent = 'Features'
contentHeader[1].textContent = 'About'
contentHeader[2].textContent = 'Services'
contentHeader[3].textContent = 'Product'
contentHeader[4].textContent = 'Vision'
// now we must grab and manipulate the p tags, and fill them with the ipsum text with .textContent, just as we did with the h4 tags 
const content = document.querySelectorAll('.text-content p')
// console.log(content)
content[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
content[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
content[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
content[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
content[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// step five: manipulate the footer section of the page, the div class is 'contact'

const footerTitle = document.querySelector('.contact h4')
// console.log(footerTitle)
footerTitle.textContent = 'Contact'
// because there are more than one p tags beneath the title, we need to use querySelectorAll, and target them like an array, as before
const footerDetails = document.querySelectorAll('.contact p')
// console.log(footerDetails)
footerDetails[0].textContent = "123 Way 456 Street Somewhere, USA"
footerDetails[1].textContent = "1 (888) 888-8888"
footerDetails[2].textContent = "sales@greatidea.io"

// add the copyright information at the bottom of the page, using a querySelector and targeting the p tag. Because this returns as an elements, we do not manipulate it as we would an array

const copyRight = document.querySelector('footer p')
// console.log(copyRight)
copyRight.textContent = "Copyright Great Idea! 2018"