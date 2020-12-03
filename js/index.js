





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
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src'])

let navAttributes = document.querySelectorAll('nav a');
//console.log('navAttributes', navAttributes);
navAttributes[0].textContent = 'Services';
//console.log(navAttributes[0]);
navAttributes[1].textContent = 'Product';
navAttributes[2].textContent = 'Vision';
navAttributes[3].textContent = 'Features';
navAttributes[4].textContent = 'About';
navAttributes[5].textContent = 'Contact';

let firstHeading = document.querySelector('h1');
console.log(firstHeading);

firstHeading.textContent = "DOM Is Awesome";

let circleImage = document.getElementById('cta-img');
//console.log(circleImage);
circleImage.src = "img/header-img.png";

let midImage = document.querySelector('.middle-img');
console.log(midImage);
midImage.src = "img/mid-page-accent.jpg";


const startButton = firstHeading.nextElementSibling;
console.log(startButton);
startButton.textContent = "Get Started";

//Top Content
const topContentContainerDiv = document.querySelectorAll('.top-content .text-content');
const firstTextContent = topContentContainerDiv[0];
const secondTextContent = topContentContainerDiv[1];
// First
const firstTextContentTitleElement = firstTextContent.querySelector("h4");
const firstTextContentParagraphElement = firstTextContent.querySelector("p");
firstTextContentTitleElement.textContent = "Features";
firstTextContentParagraphElement.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
// Second
//const firstTextContentTitleElement = secondTextContent.querySelector("h4");
//const firstTextContentParagraphElement = secondTextContent.querySelector("p");
//firstTextContentTitleElement.textContent = "Features";
//firstTextContentParagraphElement.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const secondTextContentTitleElement = secondTextContent.querySelector('h4');
const secondTextContentParagraphElement = secondTextContent.querySelector('p');
secondTextContentTitleElement.textContent = "About";
secondTextContentParagraphElement.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// BOTTOM CONTENT

const bottomContentContainerDiv = document.querySelectorAll('.bottom-content .text-content');
const thirdTextContent = bottomContentContainerDiv[0];
const fourthTextContent = bottomContentContainerDiv[1];
const fifthTextContent = bottomContentContainerDiv[2];
console.log(bottomContentContainerDiv);
//First - Services

const thirdTextContentTitleElement = thirdTextContent.querySelector('h4');
thirdTextContentTitleElement.textContent = "Services";
const thirdTextContentParagraphElement = thirdTextContent.querySelector('p');
thirdTextContentParagraphElement.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
//Second - Product
const fourthTextContentTitleElement = fourthTextContent.querySelector('h4');
fourthTextContentTitleElement.textContent = "Product";
const fourthTextContentParagraphElement = fourthTextContent.querySelector('p');
fourthTextContentParagraphElement.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";
//Third - Vision
const fifthTextContentTitleElement = fifthTextContent.querySelector('h4');
fifthTextContentTitleElement.textContent = "Vision";
const fifthTextContentParagraphElement = fifthTextContent.querySelector('p');
fifthTextContentParagraphElement.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";


/////////////////////////////////////TO DO TODAY//////////////////////////////////////////////////////////////////////////////////////////
/////*[x] Need to complete this second text-content above, then do the same for the bottom three, complete the footer contact
/////* Need to organize and clean up my code with comments 
/////*Need to complete the Add New Content section of the README

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// creating new elements for the DOM
//const blogLink = document.createElement('a');
//blogLink.textContent = 'Blog Here';
//blogLink.href = '#';
//document.querySelector('nav').appendChild(blogLink);


