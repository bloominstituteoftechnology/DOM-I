const cl = console.log;
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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//This is the header section
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navBarA = document.querySelectorAll('nav a');
navBarA.forEach(function (obj, i) {
  obj.innerHTML = siteContent.nav["nav-item-" + (i + 1)]
});
newA = document.createElement('a');
newAtwo = document.createElement('a');
newA.innerHTML ="After Contact";
newAtwo.innerHTML = "Before About";
navBarA[5].appendChild(newA);
navBarA[4].prepend(newAtwo);

navBarA.forEach(function (obj) {
  obj.style.color = "green"
});
//This beginsthe class cta section
let hOneCta = document.querySelector(".cta-text h1");
hOneCta.innerHTML = "DOM Is Awesome";
let btnCta = document.querySelector(".cta-text button");
btnCta.innerHTML = "Get Started";

let ctaImg = document.getElementById("cta-img");
ctaImg.src = "img/header-img.png";
//This begins the main content section
let mainContentHFours = document.querySelectorAll(".top-content .text-content h4");
mainContentHFours[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentHFours[1].innerHTML = siteContent["main-content"]["about-h4"];

let mainContentPTags = document.querySelectorAll(".top-content .text-content p");
mainContentPTags[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentPTags[1].innerHTML = siteContent["main-content"]["about-content"];


let bottomContentHFours = document.querySelectorAll(".bottom-content .text-content h4");
bottomContentHFours[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContentHFours[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentHFours[2].innerHTML = siteContent["main-content"]["vision-h4"];

let midImg = document.getElementById("middle-img");
midImg.src = "img/mid-page-accent.jpg";

let bottomContentPTags = document.querySelectorAll(".bottom-content .text-content p");
bottomContentPTags[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContentPTags[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentPTags[2].innerHTML = siteContent["main-content"]["vision-content"];
// This begins the contact section
let contactHFour = document.getElementsByTagName("h4")[5];
contactHFour.innerHTML = "Contact";

let contactSection = document.querySelectorAll(".contact p");
contactSection[0].innerHTML = siteContent["contact"]["address"];
contactSection[1].innerHTML = siteContent["contact"]["phone"];
contactSection[2].innerHTML = siteContent["contact"]["email"]

//This is the footer
let footerPTag = document.querySelector("footer p");
footerPTag.innerHTML = "Copyright Great Idea! 2018"

