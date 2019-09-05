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

let navTag = document.querySelector("nav");
let newChild = document.createElement("a");
let newChild2 = document.createElement("a");
let aTags = document.querySelectorAll('a');
let banner = document.querySelector('h1');
let button = document.querySelector('button');
let bannerImg = document.getElementById('cta-img');
let headers = document.querySelectorAll('h4');
let content = document.querySelectorAll('p')
let contentImg = document.getElementById('middle-img');

// NavBar.

aTags[0].setAttribute('class', '.nav-item-1');
aTags[0].innerText = 'Service';
aTags[1].setAttribute('class', '.nav-item-2');
aTags[1].innerText = 'Product';
aTags[2].setAttribute('class', '.nav-item-3');
aTags[2].innerText = 'Vision';
aTags[3].setAttribute('class', '.nav-item-4');
aTags[3].innerText = 'Features';
aTags[4].setAttribute('class', '.nav-item-5');
aTags[4].innerText = 'About';
aTags[5].setAttribute('class', '.nav-item-6');
aTags[5].innerText = 'Contact';

let nav = document.querySelectorAll("a");
for (let i = 0; i < nav.length; i++) {
  nav[i].textContent = Object.values(siteContent.nav)[i]
  nav[i].style.color = 'green';
}

newChild.textContent = "Teammates";
newChild.style.color = "green";
navTag.appendChild(newChild);

newChild2.textContent = "Home";
newChild2.style.color = "green";
navTag.prepend(newChild2);

// Banner

banner.textContent = "DOM is Awesome";
button.textContent = "Get Started";
bannerImg.src = "img/header-img.png"

//Features

headers[0].setAttribute('class', '.features-header');
headers[0].textContent = "Features";
content[0].setAttribute('class', '.features-text');
content[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// About

headers[1].setAttribute('class', '.about-header')
headers[1].textContent = "About";
content[1].setAttribute('class', '.about-text');
content[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Services

headers[2].setAttribute('class', '.services-header')
headers[2].textContent = "Services";
content[2].setAttribute('class', '.services-text');
content[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Product

headers[3].setAttribute('class', '.product-header');
headers[3].textContent = "Product";
content[3].setAttribute('class', '.product-text');
content[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Vision

headers[4].setAttribute('class', '.vision-header');
headers[4].textContent = "Vision";
content[4].setAttribute('class', '.product-text');
content[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Mid Image

contentImg.src = "img/mid-page-accent.jpg";

// Contact

headers[5].setAttribute('class', '.contact-header');
headers[5].textContent = "Contact";

// Address

content[5].setAttribute('class', '.address');
content[5].textContent = "123 Way 456 Street Somewhere, USA";

// Number

content[6].setAttribute('class', '.number');
content[6].textContent = "1 (888) 888-8888";

// Email

content[7].setAttribute('class', '.email');
content[7].textContent = "sales@greatidea.io";

// Footer

content[8].setAttribute = ('class', '.footer');
content[8].textContent = "Copyright Great Idea! 2018";
