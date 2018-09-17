// observations -
//siteContent = an object with 5 properties, each holding 1 object. 

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Videos",
    "nav-item-8": "Blog",
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

// Header Updates ------------------

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Updates -----------
//* I'm taking a long way to the solution to complete exercise...
// but would like to see how to do this looping through siteContent.nav */

let nav = document.querySelectorAll("nav a"); 
nav[0].innerText = siteContent["nav"]["nav-item-1"];
nav[1].innerText = siteContent["nav"]["nav-item-2"];
nav[2].innerText = siteContent["nav"]["nav-item-3"];
nav[3].innerText = siteContent["nav"]["nav-item-4"];
nav[4].innerText = siteContent["nav"]["nav-item-5"];
nav[5].innerText = siteContent["nav"]["nav-item-6"];

//---added new items to nav -----

let mainNav = document.querySelector("nav");
let newItem = document.createElement('a');
newItem.innerText = siteContent["nav"]["nav-item-7"];
newItem.href = '#';

let newItem2 = document.createElement('a');
newItem2.innerText = siteContent["nav"]["nav-item-8"];
newItem2.href = '#';

mainNav.append(newItem);
mainNav.append(newItem2);


//!!font color not working!!

let navLinks = document.querySelectorAll("header nav a");
for (var i = 0; i < navLinks.length; i++) {navLinks[i].style.color = 'green';};

// CTA Updates----------------------------

let cta = document.querySelector(".cta-text h1"); 
cta.innerText = siteContent.cta.h1;

let ctaButton = document.querySelector(".cta-text button"); 
ctaButton.innerText = siteContent.cta.button;

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content Updates - top content ----------------------

let topContentHeaders = document.querySelectorAll(".top-content .text-content h4"); 
topContentHeaders[0].innerText = siteContent["main-content"]["features-h4"];
topContentHeaders[1].innerText = siteContent["main-content"]["about-h4"];

let topContentParagraphs = document.querySelectorAll(".top-content .text-content p"); 
topContentParagraphs[0].innerText = siteContent["main-content"]["features-content"];
topContentParagraphs[1].innerText = siteContent["main-content"]["about-content"];

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Main Content Updates - bottom content ----------------------

let bottomContentHeaders = document.querySelectorAll(".bottom-content .text-content h4"); 
bottomContentHeaders[0].innerText = siteContent["main-content"]["services-h4"];
bottomContentHeaders[1].innerText = siteContent["main-content"]["product-h4"];
bottomContentHeaders[2].innerText = siteContent["main-content"]["vision-h4"];

let bottomContentParagraphs = document.querySelectorAll(".bottom-content .text-content p"); 
bottomContentParagraphs[0].innerText = siteContent["main-content"]["services-content"];
bottomContentParagraphs[1].innerText = siteContent["main-content"]["product-content"];
bottomContentParagraphs[2].innerText = siteContent["main-content"]["vision-content"];

// Contact Updates ----------------------

let contactHeader = document.querySelectorAll(".contact h4");
contactHeader[0].innerText = siteContent["contact"]["contact-h4"];

let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].innerText = siteContent["contact"]["address"];
contactInfo[1].innerText = siteContent["contact"]["phone"];
contactInfo[2].innerText = siteContent["contact"]["email"];

// Footer Updates ----------------------

let footerInfo = document.querySelectorAll("footer p");
footerInfo[0].innerText = siteContent["footer"]["copyright"];