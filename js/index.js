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

const nav = document.querySelectorAll("nav a");

for (let i = 0; i < nav.length; i++) {
nav[i].innerHTML = siteContent["nav"][`nav-item-${i+1}`];
nav[i].style.color = "green";
}



const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = siteContent["cta"]["h1"];

const button = document.querySelector("button");
button.innerHTML = siteContent["cta"]["button"];

const featuresH4 = document.querySelectorAll(".top-content .text-content h4");
featuresH4[0].innerHTML = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelectorAll(".top-content .text-content p");
featuresContent[0].innerHTML = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelectorAll(".top-content .text-content h4");
aboutH4[1].innerHTML = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelectorAll(".top-content .text-content p");
aboutContent[1].innerHTML = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector(".main-content .middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const servicesH4 = document.querySelectorAll(".bottom-content .text-content h4");
servicesH4[0].innerHTML = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelectorAll(".bottom-content .text-content p");
servicesContent[0].innerHTML = siteContent["main-content"]["services-content"];

const productH4 = document.querySelectorAll(".bottom-content .text-content h4");
productH4[1].innerHTML = siteContent["main-content"]["product-h4"];

const productContent = document.querySelectorAll(".bottom-content .text-content p");
productContent[1].innerHTML = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelectorAll(".bottom-content .text-content h4");
visionH4[2].innerHTML = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelectorAll(".bottom-content .text-content p");
visionContent[2].innerHTML = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

const contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerHTML = siteContent["contact"]["address"];
contactContent[1].innerHTML = siteContent["contact"]["phone"];
contactContent[2].innerHTML = siteContent["contact"]["email"];

const footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"];

let navA = document.createElement("a");
let homeNav = document.querySelector("nav");

homeNav.appendChild(navA);
navA.innerHTML = "Help";

let navB = document.createElement("a");
homeNav.prepend(navB);
navB.innerHTML = "IR";