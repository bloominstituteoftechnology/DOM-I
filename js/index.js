const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Home",
    "nav-item-8": "Log In",
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


//First find our the selectors 'a' 
let allNavSelectors = document.querySelectorAll('a');

allNavSelectors.forEach(function (selector, index, selectors) {
  selector.innerHTML=siteContent['nav'][`nav-item-${index+1}`];
});

//Update cta
let ctaKeys = Object.keys(siteContent['cta']);
let ctaText = document.querySelectorAll(".cta-text");
let ctaTextElements = ctaText[0].children;

for(let i = 0; i < ctaTextElements.length; i++)
{
  ctaTextElements[i].innerHTML=siteContent['cta'][ctaKeys[i]];
}

document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

//Update main content
let mainContentKeys = Object.keys(siteContent['main-content']);
let textContent = document.querySelectorAll(".text-content");
let textContentElements = '';
let counter = 0;

for (let index = 0; index < 5; index++) {
  textContentElements = textContent[index].children;
  for(let i = 0; i < textContentElements.length; i++)
  {
    textContentElements[i].innerHTML=siteContent["main-content"][mainContentKeys[counter]];
    counter === 3 ? counter+=2 : counter++;
  }  
}

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"][mainContentKeys[4]]);

//Update contact information
let contactKeys = Object.keys(siteContent['contact']);
let contact = document.querySelectorAll(".contact");
let contactElements = contact[0].children;

for(let i = 0; i < contactElements.length; i++)
{
  contactElements[i].innerHTML=siteContent["contact"][contactKeys[i]];
}  

//Update footer
document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

//Add two new items to navigation system

var nav = document.getElementsByTagName("nav");
var navItem7 = document.createElement("a");
var navItem8 = document.createElement("a");

navItem7.setAttribute("href", "#");
navItem7.innerHTML=siteContent.nav["nav-item-7"];
nav[0].prepend(navItem7);

navItem8.setAttribute("href", "#");
navItem8.innerHTML=siteContent.nav["nav-item-8"];
nav[0].appendChild(navItem8);

//Change the color navegation to green

allNavSelectors = document.querySelectorAll('a');

allNavSelectors.forEach(function (selector, index, selectors) {
  selector.style.color = "green";
});