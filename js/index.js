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

////////////// Navigation Links
let navLinks = document.querySelectorAll("nav a");
let navKeys = Object.keys(siteContent["nav"]);
navKeys.pop();
navLinks.forEach(function(ele,index){
  ele.textContent = siteContent["nav"][navKeys[index]];
})

////////////// CTA
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// DOM is Awesome
let ctaH1 = document.querySelector(".cta-text");
ctaH1.prepend(document.createElement("h1"));
ctaH1.prepend(document.createElement("h1"));
ctaH1 = document.querySelectorAll(".cta-text h1");

ctaH1.forEach(function(ele,index){
  ele.textContent = siteContent["cta"]["h1"].split(" ")[index];
})

let gsButton = document.querySelector(".cta-text button");
gsButton.textContent = siteContent["cta"]["button"];

////////////// Main Content
let topContent = document.querySelectorAll(".main-content .text-content h4, .main-content .text-content p");
let mainContactKeys = Object.keys(siteContent["main-content"]);
mainContactKeys.splice(4,1);

topContent.forEach(function(ele,index){
    ele.textContent = siteContent["main-content"][mainContactKeys[index]];
})

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

////////////// Contact
let contactText = document.querySelectorAll(".contact *");
let contactKeys = Object.keys(siteContent["contact"]);
contactText.forEach(function(ele,index){
  ele.textContent = siteContent["contact"][contactKeys[index]];
})

////////////// Footer
let footerText = document.querySelector("footer p");
footerText.textContent = siteContent["footer"]["copyright"];

