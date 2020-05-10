const siteContent = {

  
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png",

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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ## Task 1: Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content
const cta = document.getElementById("cta-img");
cta.setAttribute("src", "img/header-img.png");

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// ## Task 2: Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images
const a = document.getElementsByTagName("a");
a[0].textContent = "Service";
a[1].textContent = "Product";
a[2].textContent = "Vision";
a[3].textContent = "Features";
a[4].textContent = "About";
a[5].textContent = "Contact";

// function appendedanchor() {
// let node = document.createElement("ayyy");
// let textnode = document.createTextNode("lmao");
// node.appendChild(textnode);
// document.getElementsByTagName("a").appendChild(node);
// }

const domIsAwesome = document.getElementsByTagName("h1");
domIsAwesome[0].textContent = "Dom Is Awesome";

const getStarted = document.getElementsByTagName('button');
getStarted[0].textContent = 'Get started';

const mainMiddle = document.getElementsByTagName("h4");
mainMiddle[0].textContent = 'Features';
mainMiddle[1].textContent = 'About';
mainMiddle[2].textContent = 'Services';
mainMiddle[3].textContent = 'Product';
mainMiddle[4].textContent = 'Vision';
mainMiddle[5].textContent = 'Contact';

const mainMiddleText = document.getElementsByTagName("p");
mainMiddleText[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainMiddleText[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainMiddleText[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainMiddleText[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainMiddleText[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainMiddleText[5].textContent = "123 Way 456 Street Somewhere, USA";
mainMiddleText[6].textContent = "1 (888) 888-8888";
mainMiddleText[7].textContent = "sales@greatidea.io";
mainMiddleText[8].textContent = "Copyright Great Idea! 2018"







 
// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser


// new nav a

const firstAnchor = document.createElement('a');
const secondAnchor = document.createElement('a');
const nav = document.querySelector('nav');

nav.prepend(firstAnchor);
nav.appendChild(secondAnchor);
firstAnchor.href = '#';
firstAnchor.innerHTML = 'begin';
secondAnchor.href = '#';
secondAnchor.innerHTML = 'fin';

// change a to green


const linkColor=document.querySelectorAll("a");
linkColor.forEach(function(a) {
  a.style.color = 'green';
});



// ## Stretch Goals
// * [ ] Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.  
// * [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

// ## Stretch Project: Digital Timer
// This project is heavier on logic but employs some DOM manipulation to achieve it's goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get. 