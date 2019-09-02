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

let getNav = document.querySelector('nav');
getNav.childNodes[0].textContent = siteContent["nav"]["nav-item-1"]; 
getNav.childNodes[1].textContent = siteContent["nav"]["nav-item-2"]; 
getNav.childNodes[2].textContent = siteContent["nav"]["nav-item-3"]; 
getNav.childNodes[3].textContent = siteContent["nav"]["nav-item-4"]; 
getNav.childNodes[4].textContent = siteContent["nav"]["nav-item-5"]; 
getNav.childNodes[5].textContent = siteContent["nav"]["nav-item-6"]; 


// Change color of links 
getNav.style.color = "green"

// Add two new elements to the Nav
// What We Do Element
let whatWeDo = document.createElement('a');
var whatWeDoText = document.createTextNode("What We Do");
whatWeDo.appendChild(whatWeDoText);

// Our Team Element
let ourTeam = document.createElement('a');
var ourTeamText = document.createTextNode("Our Team");
ourTeam.appendChild(ourTeamText);

getNav.appendChild(whatWeDo);
getNav.appendChild(ourTeam);
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
// logo.setAttribute('src', "img/logo.png")
logo.src = "img/logo.png";

let headerImg = document.getElementById("cta-img");
// logo.setAttribute('src', "img/logo.png")
headerImg.src = "img/header-img.png";

let middleImg = document.getElementById("middle-img");
// logo.setAttribute('src', "img/logo.png")
middleImg.src = "img/mid-page-accent.jpg";


// console.log(getCtaText);
let getCtaText = document.querySelector('.cta-text');
getCtaText.style.width = '500px';
let getCtaTexth1 = document.querySelector('.cta-text h1');
getCtaTexth1.textContent  = 'DOM Is Awesome'
// For the cta Text Button
let getCtaTextButton = document.querySelector('button');
getCtaTextButton.textContent  = "Get Started";

let getCtaTextP = document.querySelector('.cta-text p');
getCtaTextP.textContent  = "click to toggle text";
getCtaTextP.style.fontSize = '14px';
getCtaTextP.style.marginTop = '10px';


getCtaTextButton.addEventListener('click', function() {
  if (getCtaTexth1.textContent === 'DOM Is Awesome' && getCtaTextP.textContent  === "click to toggle text") {
    getCtaTexth1.textContent  = 'Welcome!!!';
    getCtaTextP.textContent  = "click again to toggle text back";
  } else {
    getCtaTexth1.textContent  = 'DOM Is Awesome';
    getCtaTextP.textContent  = "click to toggle text";

  }
})

// For all text contents div
let getTextContent = document.querySelectorAll('.text-content');
// console.log(getTextContent);
// For the first text-content h4 + p
getTextContent[0].childNodes[0].textContent = "Features";
getTextContent[0].childNodes[1].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// For the second text-content h4 + p
getTextContent[1].childNodes[0].textContent  = "About"
getTextContent[1].childNodes[1].textContent  = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// For the third text-content h4 + p
getTextContent[2].childNodes[0].textContent = "Services"
getTextContent[2].childNodes[1].textContent  = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// For the fourth text-content h4 + p
getTextContent[3].childNodes[0].textContent  = "Product"
getTextContent[3].childNodes[1].textContent  = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// For the fourth text-content h4 + p
getTextContent[4].childNodes[0].textContent  = "Vision"
getTextContent[4].childNodes[1].textContent  = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let getContact = document.querySelector('.contact');
getContact.childNodes[0].textContent = "Contact"
getContact.childNodes[1].textContent = "123 Way 456 Street Somewhere, USA";
getContact.childNodes[2].textContent = "1 (888) 888-8888";
getContact.childNodes[3].textContent = "sales@greatidea.io"

let getFooter = document.querySelector('footer');
getFooter.childNodes[0].textContent = "Copyright Great Idea! 2018";