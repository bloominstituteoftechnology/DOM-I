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

//--------------------------------------------------------
const anchors = document.querySelectorAll("a"); 
const values = Object.values(siteContent.nav); //create a new variable to call the object that is being given on top.
//object.values gives us the value of the keys.

for (let i = 0; i < anchors.length; i++) {
  anchors[i].textContent = values[i];
}

//color
const colorNav = document.querySelectorAll('nav a');
colorNav.forEach((item) => item.style.color = "green")

//appended Item
const navElement = document.querySelector('nav');
const appendedAnchor = document.createElement('a');
appendedAnchor.textContent = "Appended Item";
navElement.appendChild(appendedAnchor);

appendedAnchor.style.color = "blue";
//prepend
const navLastElement = document.querySelector('nav');
const prependedAnchor = document.createElement('a');
prependedAnchor.textContent = "Prepended Item";
navLastElement.prepend(prependedAnchor);

prependedAnchor.style.color = "fuchsia";

//--------------------------------------------------------
//cta content//
const sectionContent = document.querySelector('.cta h1');
console.log(sectionContent);
sectionContent.textContent = "DOM Is Awesome";

const buttonContent = document.querySelector('.cta button');
console.log(buttonContent);
buttonContent.textContent = "Get Started";

const imageVariable = document.querySelector('.cta img');
console.log(imageVariable);
imageVariable.setAttribute('src', "img/header-img.png");

//-----------------------------------------------------------
//main-content//

const topContent = document.querySelector('.main-content .top-content .text-content');
console.log(topContent.children[0]);
topContent.children[0].textContent = "Features";
topContent.children[1].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

console.log(topContent.nextElementSibling.children[0]);
topContent.nextElementSibling.children[0].textContent = "About";
topContent.nextElementSibling.children[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//-----------------------------------------------------------
//middle-image//

const middleImage = document.querySelector('.main-content #middle-img');
console.log(middleImage);
middleImage.setAttribute('src', "img/mid-page-accent.jpg");

//------------------------------------------------------------
//bottom-content

const bottomContent = document.querySelector('.main-content .bottom-content .text-content');
console.log(bottomContent.children);
bottomContent.children[0].textContent = "Services";
bottomContent.children[1].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

console.log(bottomContent.nextElementSibling.children);
bottomContent.nextElementSibling.children[0].textContent = "Product";
bottomContent.nextElementSibling.children[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const lastBottomItem = document.querySelector('.main-content .bottom-content');
console.log(lastBottomItem.children[2].children);
lastBottomItem.children[2].children[0].textContent = "Vision";
lastBottomItem.children[2].children[1].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//-----------------------------------------------------------
//contact//

const contactStuff = document.querySelector('.contact');
console.log(contactStuff);
contactStuff.children[0].textContent = "Contact";
contactStuff.children[1].textContent = "123 Way 456 Street Somewhere, USA";
contactStuff.children[2].textContent = "1 (888) 888-8888";
contactStuff.children[3].textContent = "sales@greatidea.io";

//-----------------------------------------------------------
//footer//

const footer = document.querySelector('footer');
console.log(footer);
footer.children[0].textContent = "Copyright Great Idea! 2018";

//------------------------------------------------------------

