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

let navItemOne = document.getElementsByTagName('a')[0];
navItemOne.innerHTML = "Services";

let navItemTwo = document.getElementsByTagName('a')[1];
navItemTwo.innerHTML = "Product";

let navItemThree = document.getElementsByTagName('a')[2];
navItemThree.innerHTML = "Vision";

let navItemFour = document.getElementsByTagName('a')[3];
navItemFour.innerHTML = "Features";

let navItemFive = document.getElementsByTagName('a')[4];
navItemFive.innerHTML = "About";

let navItemSix = document.getElementsByTagName('a')[5];
navItemSix.innerHTML = "Contact";


let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent["cta"]["img-src"]);

let button = document.querySelector("button");
button.innerHTML = "Get Started";

let title = document.querySelector('h1');
title.innerHTML = "DOM Is Awesome";


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




