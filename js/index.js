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
// Navigation Links
let nav = document.getElementsByTagName("nav")[0].children;
for (i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}
// CTA Content
let codeImg = document.getElementById("cta-img");
codeImg.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaText = document.querySelector(".cta-text").children;
ctaText[0].textContent = siteContent["cta"]["h1"]; // H1 Text
ctaText[1].textContent = siteContent["cta"]["button"]; // Button Text

// Main Content

let mainText = document.querySelector(".top-content").children;
// Features
mainText[0].childNodes[1].textContent = siteContent["main-content"]["features-h4"];
mainText[0].childNodes[2].textContent = siteContent["main-content"]["features-content"];
// About
mainText[1].childNodes[1].textContent = siteContent["main-content"]["about-h4"];
mainText[1].childNodes[2].textContent = siteContent["main-content"]["about-content"];

// About Image
let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Bottom Content
let btmText = document.querySelector(".bottom-content").children;
// Services
btmText[0].childNodes[1].textContent = siteContent["main-content"]["services-h4"];
btmText[0].childNodes[2].textContent = siteContent["main-content"]["services-content"];
// Product
btmText[1].childNodes[1].textContent = siteContent["main-content"]["product-h4"];
btmText[1].childNodes[2].textContent = siteContent["main-content"]["services-content"];
// Vision
btmText[2].childNodes[1].textContent = siteContent["main-content"]["vision-h4"];
btmText[2].childNodes[2].textContent = siteContent["main-content"]["vision-content"];

// Contact
let info = document.getElementsByClassName("contact");

info[0].childNodes[1].textContent = siteContent["contact"]["contact-h4"]
info[0].childNodes[2].textContent = siteContent["contact"]["address"]
info[0].childNodes[3].textContent = siteContent["contact"]["phone"]
info[0].childNodes[4].textContent = siteContent["contact"]["email"]

// Footer
let foot = document.getElementsByTagName("footer");

foot[0].childNodes[1].textContent = siteContent["footer"]["copyright"]