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
// IMAGES
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];

document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];


// NAVIGATION
const tagElements = Array.from(document.getElementsByTagName('a'));

for (let i = 0; i < tagElements.length; i++) {
  tagElements[i].innerText = siteContent["nav"][`nav-item-${i+1}`];
}

// CTA
document.querySelector('.cta-text').getElementsByTagName('h1')[0].innerText = siteContent["cta"]["h1"];
document.querySelector('.cta-text').getElementsByTagName('button')[0].innerText = siteContent["cta"]["button"];

// MAIN CONTENT: TOP
document.querySelector('.main-content').getElementsByTagName('h4')[0].innerText = siteContent["main-content"]["features-h4"];
document.querySelector('.main-content').getElementsByTagName('p')[0].innerText = siteContent["main-content"]["features-content"];

document.querySelector('.main-content').getElementsByTagName('h4')[1].innerText = siteContent["main-content"]["about-h4"];
document.querySelector('.main-content').getElementsByTagName('p')[1].innerText = siteContent["main-content"]["about-content"];

// MAIN CONTENT: TOP
document.querySelector('.top-content').getElementsByTagName('h4')[0].innerText = siteContent["main-content"]["features-h4"];
document.querySelector('.top-content').getElementsByTagName('p')[0].innerText = siteContent["main-content"]["features-content"];

// MAIN CONTENT: BOTTOM
document.querySelector('.bottom-content').getElementsByTagName('h4')[0].innerText = siteContent["main-content"]["services-h4"];
document.querySelector('.bottom-content').getElementsByTagName('p')[0].innerText = siteContent["main-content"]["services-content"];

document.querySelector('.bottom-content').getElementsByTagName('h4')[1].innerText = siteContent["main-content"]["product-h4"];
document.querySelector('.bottom-content').getElementsByTagName('p')[1].innerText = siteContent["main-content"]["product-content"];

document.querySelector('.bottom-content').getElementsByTagName('h4')[2].innerText = siteContent["main-content"]["vision-h4"];
document.querySelector('.bottom-content').getElementsByTagName('p')[2].innerText = siteContent["main-content"]["vision-content"];

// CONTACT
document.querySelector('.contact').getElementsByTagName('h4')[0].innerText = siteContent["contact"]["contact-h4"];
document.querySelector('.contact').getElementsByTagName('p')[0].innerText = siteContent["contact"]["address"];
document.querySelector('.contact').getElementsByTagName('p')[1].innerText = siteContent["contact"]["phone"];
document.querySelector('.contact').getElementsByTagName('p')[2].innerText = siteContent["contact"]["email"];

// FOOTER
document.getElementsByTagName('footer')[0].getElementsByTagName('p')[0].innerText = siteContent["footer"]["copyright"];

// CHANGE NAV COLOR
Array.from(document.querySelector('nav').getElementsByTagName('a')).forEach(link => link.style.color = "green");

// ADD 2 NEW NAV ITEMS
const navElement = document.querySelector('nav');
const newElement1 = document.createElement('a');
const newElement2 = document.createElement('a');

navElement.appendChild(newElement1);
navElement.appendChild(newElement2);

newElement1.innerText = "New 1";
newElement2.innerText = "New 2";

// CHANGES TO THE PAGE
document.querySelector("body").style.backgroundColor = "goldenrod";
document.querySelector(".container").style.backgroundColor = "yellow";
document.querySelector("h1").style.color = "green";
document.querySelectorAll("a").forEach(link => link.style.textDecoration = "overline");