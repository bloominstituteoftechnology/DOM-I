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
//------------------------
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

navLinks.forEach(link => link.style.color = "green");

let navi = document.querySelector('nav');

let newLink = document.createElement('a');
navi.appendChild(newLink);

newLink = document.createElement('a');
navi.prepend(newLink);

navLinks = document.querySelectorAll('nav a');
console.log(navLinks);

navLinks[0].textContent = "I'm new!";
navLinks[0].href = "#";

navLinks[7].textContent = "Me too!"
navLinks[7].href = "#";

navLinks.forEach(link => link.style.color = "green");

let heading1 = document.querySelector('h1');
heading1.textContent = siteContent["cta"]["h1"];

let getStarted = document.querySelector('.cta-text button');
getStarted.textContent = siteContent["cta"]["button"];

let headerImage = document.querySelector("#cta-img");
headerImage.src = siteContent["cta"]["img-src"];

let h4Content = document.querySelectorAll("h4");

h4Content[0].textContent = siteContent["main-content"]["features-h4"];
h4Content[0].nextSibling.textContent = siteContent["main-content"]["features-content"];
h4Content[1].textContent = siteContent["main-content"]["about-h4"];
h4Content[1].nextSibling.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector(".middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

h4Content[2].textContent = siteContent["main-content"]["services-h4"];
h4Content[2].nextSibling.textContent = siteContent["main-content"]["services-content"];
h4Content[3].textContent = siteContent["main-content"]["product-h4"];
h4Content[3].nextSibling.textContent = siteContent["main-content"]["product-content"];
h4Content[4].textContent = siteContent["main-content"]["vision-h4"];
h4Content[4].nextSibling.textContent = siteContent["main-content"]["vision-content"];


h4Content[5].textContent = siteContent["contact"]["contact-h4"];

let contactText = document.querySelectorAll('.contact p');

contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

let copyright = document.querySelector('footer p');
copyright.textContent = siteContent["footer"]["copyright"];

