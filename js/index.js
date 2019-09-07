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

// NavBar..

aTags[0].innerText = siteContent.nav["nav-item-1"];
aTags[1].innerText = siteContent.nav["nav-item-2"];
aTags[2].innerText = siteContent.nav["nav-item-3"];
aTags[3].innerText = siteContent.nav["nav-item-4"];
aTags[4].innerText = siteContent.nav["nav-item-5"];
aTags[5].innerText = siteContent.nav["nav-item-6"];

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

banner.textContent = siteContent.cta.h1;
button.textContent = siteContent.cta.button;
bannerImg.src = siteContent.cta["img-src"];

//Features


headers[0].textContent = siteContent["main-content"]["features-h4"];
content[0].textContent = siteContent["main-content"]["features-content"];

// About

headers[1].textContent = siteContent["main-content"]["about-h4"];
content[1].textContent = siteContent["main-content"]["about-content"];

// Services

headers[2].textContent = siteContent["main-content"]["services-h4"];
content[2].textContent = siteContent["main-content"]["services-content"]

// Product

headers[3].textContent = siteContent["main-content"]["product-h4"];
content[3].textContent = siteContent["main-content"]["product-content"];

// Vision

headers[4].textContent = siteContent["main-content"]["vision-h4"];
content[4].textContent = siteContent["main-content"]["vision-content"];

// Mid Image

contentImg.src = siteContent["main-content"]["middle-img-src"];

// Contact

headers[5].textContent = siteContent.contact["contact-h4"];

// Address

content[5].textContent = siteContent.contact.address;

// Number

content[6].textContent = siteContent.contact.phone;

// Email

content[7].textContent = siteContent.contact.email;

// Footer

content[8].textContent = siteContent.footer.copyright;
