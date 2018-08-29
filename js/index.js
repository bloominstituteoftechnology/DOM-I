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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

document.getElementsByTagName('a')[0].innerText = "Services";

document.getElementsByTagName('a')[1].innerText = "Product";

document.getElementsByTagName('a')[2].innerText = "Vision";

document.getElementsByTagName('a')[3].innerText = "Features";

document.getElementsByTagName('a')[4].innerText = "About";

document.getElementsByTagName('a')[5].innerText = "Contact";


// // add unique classes to 'a' tags
// let navigationItems = document.querySelectorAll('a');
// for (let i = 0; i < navigationItems.length; i++) {
//   navigationItems[i].classList.add([i]);
// }

// document.getElementsByClassName([0]).innerHTML = "Services";


// //assign different different object key-values to each unique class
// let navigationLinks = document.getElementsByClassName(`i`);
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].innerText = siteContent["nav"][`nav-item-${i}`];
// }


// Utilize .appendChild() to add two new items to the navigation system
const navItemSeven = document.createElement('a');
const homeElement = document.querySelector('nav');
homeElement.appendChild(navItemSeven);
navItemSeven.innerText = "People";

const navItemEight = document.createElement('a');
const homeElement2 = document.querySelector('nav');
homeElement2.prepend(navItemEight);
navItemEight.innerText = "Jobs";

//Task 4: Add new content

let navAllItems = document.querySelectorAll('a');
for (let i = 0; i < navAllItems.length; i++) {
  navAllItems[i].style.color = '#66ff66';
  navAllItems[i].style.backgroundColor = 'ghostwhite';
}




let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent["cta"]["img-src"]);

let button = document.querySelector("button");
button.innerHTML = "Get Started";

let title = document.querySelector('h1');
title.innerHTML = `DOM <br> Is <br> Awesome`;


let features = document.getElementsByTagName('h4')[0];
features.innerText = "Features";

let featuresPTag = document.getElementsByTagName('p')[0];
featuresPTag.innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


let about = document.getElementsByTagName('h4')[1];
about.innerText = "About";

let aboutPTag = document.getElementsByTagName('p')[1];
aboutPTag.innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let services = document.getElementsByTagName('h4')[2];
services.innerText = "Services";

let servicesPTag = document.getElementsByTagName('p')[2];
servicesPTag.innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let product = document.getElementsByTagName('h4')[3];
product.innerText = "Product";

let productPTag = document.getElementsByTagName('p')[3];
productPTag.innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let vision = document.getElementsByTagName('h4')[4];
vision.innerText = "Vision";

let visionPTag = document.getElementsByTagName('p')[4];
visionPTag.innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contact = document.getElementsByTagName('h4')[5];
contact.innerText = "Contact";

// document.getElementById("contact").getElementsByTagName("p").add("contactPTag");
// querySelector("contact")
// for each 'p' tag child of "contact" .add("contactPTag");
// 


// let circle = document.getElementById("cta-img");
// circle.setAttribute('src', siteContent["cta"]["img-src"]);

let address = document.getElementsByTagName('p')[5];
address.innerText = "123 Way 456 Street Somewhere, USA";

// let phone = document.getElementsByClassName("contact").getElementsByTagName('p');
let phone = document.getElementsByTagName('p')[6];
phone.innerText = "1 (888) 888-8888";
// phone.innerText = setContent["contact"]["phone"];

let email = document.getElementsByTagName('p')[7];
email.innerText = "sales@greatidea.io";

let copyright = document.getElementsByTagName('p')[8];
copyright.innerText = "Copyright Great Idea! 2018";


//Am I on the right track?
// function beDry(str, i) {
//   let str = document.getElementsByTagName('p')[i];
//   str.innerText = "${str} content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
//   return str.innerText;
// }

// beDry(vision, 4);