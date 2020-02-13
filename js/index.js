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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Task 1: Create selectors to point your data into elements //

// DOM Selectors
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('a');
const logoImg = document.querySelector('#logo-img');
const ctaH1 = document.querySelector('h1');
const ctaButton = document.querySelector('button');
const ctaImage = document.querySelector('#cta-img');
const subhedings = document.querySelectorAll('h4');
const content = document.querySelectorAll('p');
const middleImg = document.querySelector('#middle-img');

// Task 2: Update the HTML with the JSON data //

// Datasets
const navData = siteContent.nav;
const ctaData = siteContent.cta;
const mainData = siteContent['main-content'];
const contactData = siteContent.contact;
const footerData = siteContent.footer;

// Populate the navbar
navItems.forEach((nav, ndx) => {
  nav.innerText = navData['nav-item-' + (ndx + 1)]
})

// Set the logo image
logoImg.setAttribute('src', navData['img-src'])

// Set the text for the h1 & button, and the
// src for the image in the cta-text class

let splitWord = ctaData.h1.split(' ');
let awesomeText = `<p>${splitWord[0]}</p><p>${splitWord[1]}</p><p>${splitWord[2]}</p>`
ctaH1.innerHTML = awesomeText
ctaButton.innerText = ctaData.button
ctaImage.setAttribute('src', ctaData['img-src'])

// Add the main content
subhedings[0].innerText = mainData['features-h4']
content[0].innerText = mainData['features-content']
subhedings[1].innerText = mainData['about-h4']
content[1].innerText = mainData['about-content']

// Add the middle image
middleImg.setAttribute('src', mainData['middle-img-src'])

// Add the bottom content
subhedings[2].innerText = mainData['services-h4']
content[2].innerText = mainData['services-content']
subhedings[3].innerText = mainData['product-h4']
content[3].innerText = mainData['product-content']
subhedings[4].innerText = mainData['vision-h4']
content[4].innerText = mainData['vision-content']

// Add the contact info
subhedings[5].innerText = contactData['contact-h4']
content[5].innerText = contactData['address']
content[6].innerText = contactData['phone']
content[7].innerText = contactData['email']

// Add the footer info
content[8].innerText = footerData['copyright']

// Task 3: Add new content  //

// Change the color of the navigation text to be green.
navItems.forEach(nav => nav.style.color = 'green')

// Utilize .appendChild() and .prepend() to add two new items to the navigation system.
const aPrint = document.createElement('a')
const aEmployment = document.createElement('a')

aPrint.setAttribute('href', '#')
aPrint.inerText = 'Print'
aPrint.style.color = 'green'
aEmployment.setAttribute('href', '#')
aEmployment.innerText = 'Employment'
aEmployment.style.color = 'green'

nav.prepend(aPrint)
nav.appendChild(aEmployment)


// Stretch Goals
//  Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.
//  Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button. You could build a similar data object with new values to help you test the click event.
