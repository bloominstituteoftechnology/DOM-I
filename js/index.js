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

const headerimg = document.getElementById("cta-img") 
headerimg.setAttribute('src', siteContent["cta"]["img-src"]);

const midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//nav
const navLinks = document.querySelectorAll("a");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];


const ctaheader = document.querySelector("h1");
ctaheader.textContent = "DOM \r\n Is \r\n Awesome";
ctaheader.setAttribute('style', 'white-space: pre;');

const ctabutton = document.querySelector("button");
ctabutton.textContent = siteContent["cta"]["button"];


const contentHeader = document.querySelectorAll("h4");
contentHeader[0].textContent = siteContent["main-content"]["features-h4"];
contentHeader[1].textContent = siteContent["main-content"]["about-h4"];
contentHeader[2].textContent = siteContent["main-content"]["services-h4"];
contentHeader[3].textContent = siteContent["main-content"]["product-h4"];
contentHeader[4].textContent = siteContent["main-content"]["vision-h4"];

const contentP = document.querySelectorAll("p");
contentP[0].textContent = siteContent["main-content"]["features-content"];
contentP[1].textContent = siteContent["main-content"]["about-content"];
contentP[2].textContent = siteContent["main-content"]["services-content"];
contentP[3].textContent = siteContent["main-content"]["product-content"];
contentP[4].textContent = siteContent["main-content"]["vision-content"];

//contact
const contactHeader = document.querySelectorAll("h4");
contactHeader[5].textContent = siteContent["contact"]["contact-h4"];

const contacttxt = document.querySelectorAll("p");
contacttxt[5].textContent = "123 Way 456 Street \r\n Somewhere, USA";
contacttxt[5].setAttribute('style', 'white-space: pre;');
contacttxt[6].textContent = siteContent["contact"]["phone"];
contacttxt[7].textContent = siteContent["contact"]["email"];

//footer
const footertxt = document.querySelector("footer p");
footertxt.textContent = siteContent["footer"]["copyright"];

navLinks.forEach(function(currentVal){
currentVal.style.color = "grey";
});

let nav = document.querySelector("nav");
const newEnd = document.createElement("a");
newEnd.textContent = "End";
nav.appendChild(newEnd);

const newStart = document.createElement("a");
newStart.textContent = "Start";
nav.prepend(newStart);

