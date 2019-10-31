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
logo.setAttribute('src', siteContent["nav"]["img-src"])


// ## Task 1: Create selectors to point your data into elements

// - [ ] Create selectors by using any of the DOM element's methods
// - [ ] Note that IDs have been used on all images. Use the IDs to update src path content

let container = document.getElementsByClassName('container');

let logoImage = document.querySelector('#logo-img');
logoImage.src = '/Users/omid/Documents/Lambda/2_Web_Applications_I/Applied_Javascript/DOM-I/img/logo.png';

let ctaImage = document.querySelector('#cta-img');
ctaImage.src = '/Users/omid/Documents/Lambda/2_Web_Applications_I/Applied_Javascript/DOM-I/img/header-img.png';

let middleImage = document.querySelector('#middle-img');
middleImage.src = '/Users/omid/Documents/Lambda/2_Web_Applications_I/Applied_Javascript/DOM-I/img/mid-page-accent.jpg'



// ## Task 2: Update the HTML with the JSON data

// - [ ] Remember, NO direct updating of the HTML source is allowed.
// - [ ] Using your selectors, update the content to match the example file.
// - [ ] Remember to update the src attributes on images

const nav = document.querySelectorAll('a');
nav[0].innerHTML = siteContent.nav['nav-item-1'];
nav[1].innerHTML = siteContent.nav['nav-item-2'];
nav[2].innerHTML = siteContent.nav['nav-item-3'];
nav[3].innerHTML = siteContent.nav['nav-item-4'];
nav[4].innerHTML = siteContent.nav['nav-item-5'];
nav[5].innerHTML = siteContent.nav['nav-item-6'];

const ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent.cta.h1;

const ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent.cta.button;


// TOP CONTENT 
const topContentH4 = document.querySelectorAll('.top-content .text-content h4');
topContentH4[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentH4[1].innerHTML = siteContent["main-content"]["about-h4"];

const topContentParagraphs = document.querySelectorAll('.top-content .text-content p');
topContentParagraphs[0].innerHTML = siteContent["main-content"]["features-content"];
topContentParagraphs[1].innerHTML = siteContent["main-content"]["about-content"];


// BOTTOM CONTENT 

const bottomContentH4 = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentH4[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContentH4[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentH4[2].innerHTML = siteContent["main-content"]["vision-h4"];

const bottomContentParagraphs = document.querySelectorAll('.bottom-content .text-content p');
bottomContentParagraphs[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContentParagraphs[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentParagraphs[2].innerHTML = siteContent["main-content"]["vision-content"];

// CONTACT 

const contactH4 = document.querySelector('.contact h4');
const contactParagraphs = document.querySelectorAll('.contact p');

contactH4.innerHTML = siteContent["contact"]["contact-h4"];
contactParagraphs[0].innerHTML = siteContent["contact"].address;
contactParagraphs[1].innerHTML = siteContent["contact"].phone;
contactParagraphs[2].innerHTML = siteContent["contact"].email;

// FOOTER 
const footer = document.querySelector('footer p');
footer.innerHTML = siteContent.footer.copyright;

// ## Task 3: Add new content

// - [ ] Change the color of the navigation text to be green.
// - [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// - [ ] Check your work by looking at the [original html](original.html) in the browser

const navColor = document.querySelectorAll('nav a');
navColor.forEach(item => {
  item.style.color = 'green';
})

const newFooter = document.createElement('footer');
newFooter.textContent = "This 'footer' is ruining the nav bar."

const newHeader = document.createElement('header');
newHeader.textContent = "This 'header' is also ruining the nav bar."

const navAppending = document.querySelector('nav');
navAppending.prepend(newFooter);
navAppending.appendChild(newHeader);

// ## Stretch Goals

// - [ ] Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.
// - [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button. You could build a similar data object with new values to help you test the click event.
topContentH4.forEach(item => {
  item.style.fontSize = '2.5rem';
})

bottomContentParagraphs.forEach(item => {
  item.style.color = 'orange';
})
footer.style.border = "5px solid blue";


// ## Stretch Project: Digital Timer

// This project is heavier on logic but employs some DOM manipulation to achieve it's goals. Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get.