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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navLinks = document.querySelectorAll("nav a");


navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

navLinks[0].style.color = "green";
navLinks[1].style.color = "green";
navLinks[2].style.color = "green";
navLinks[3].style.color = "green";
navLinks[4].style.color = "green";
navLinks[5].style.color = "green";


let domAwesome = document.querySelector(".cta-text h1");
domAwesome.textContent = siteContent["cta"]["h1"];

let startButton = document.querySelector(".cta-text button");
startButton.textContent = siteContent["cta"]["button"];

let headerImage = document.querySelector(".cta img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

let features = document.querySelectorAll(".top-content .text-content1 h4");
features.textContent = siteContent["main-content"]["features-h4"];

let featuresText = document.querySelector(".top-content .text-content1 p");
featuresText.textContent = siteContent["main-content"]["features-content"];

let about = document.querySelector(".top-content .text-content2 h4");
about.textContent = siteContent["main-content"]["about-h4"];

let aboutText = document.querySelector(".top-content .text-content2 p");
aboutText.textContent = siteContent["main-content"]["about-content"];

let middleImage = document.querySelector(".middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let services = document.querySelector(".bottom-content .text-content1 h4");
services.textContent = siteContent["main-content"]["services-h4"];

let servicesText = document.querySelector(".bottom-content .text-content1 p");
servicesText.textContent = siteContent["main-content"]["services-content"];

let product = document.querySelector(".bottom-content .text-content2 h4");
product.textContent = siteContent["main-content"]["product-h4"];

let productText = document.querySelector(".bottom-content .text-content2 p");
productText.textContent = siteContent["main-content"]["product-content"];

let vision = document.querySelector(".bottom-content .text-content3 h4");
vision.textContent = siteContent["main-content"]["vision-h4"];

let visionText = document.querySelector(".bottom-content .text-content3 p");
visionText.textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"]

let address = document.querySelector(".contact .p1");
address.textContent = siteContent["contact"]["address"];

let phone = document.querySelector(".contact .p2");
phone.textContent = siteContent["contact"]["phone"];

let email = document.querySelector(".contact .p3");
email.textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];