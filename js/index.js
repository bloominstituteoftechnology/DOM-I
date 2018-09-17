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


// body selector


let navLinks = document.querySelectorAll("nav a");
let navItems = "nav-item-";


for (i = 1; i < navLinks.length; i++) {
  navLinks[i].innerHTML = siteContent["nav"][navItems+i];

}
// DOM Image Manipulation

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let bigCircle = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


let ctaButton = document.querySelector("button");
ctaButton.innerHTML = siteContent.cta.button;


let ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = siteContent.cta.h1;

// features

let featuresH4 = document.querySelectorAll(".main-content .text-content h4")[0];
featuresH4.innerHTML = siteContent["main-content"]["features-h4"];

let featuresP1 = document.querySelectorAll(".main-content .text-content p")[0];
featuresP1.innerHTML = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelectorAll(".main-content .text-content h4")[1];
aboutH4.innerHTML = siteContent["main-content"]["about-h4"];

let aboutP1 = document.querySelectorAll(".main-content .text-content p")[1];
aboutP1.innerHTML = siteContent["main-content"]["about-content"];

let banner = document.getElementById("middle-img");
banner.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let servicesH4 = document.querySelectorAll(".main-content .text-content h4")[2];
servicesH4.innerHTML = siteContent["main-content"]["services-h4"];

let servicesP1 = document.querySelectorAll(".main-content .text-content p")[2];
servicesP1.innerHTML = siteContent["main-content"]["services-content"];

let productsH4 = document.querySelectorAll(".main-content .text-content h4")[3];
productsH4.innerHTML = siteContent["main-content"]["products-h4"];

let productsP1 = document.querySelectorAll(".main-content .text-content p")[3];
productsP1.innerHTML = siteContent["main-content"]["products-content"];

let visionH4 = document.querySelectorAll(".main-content .text-content h4")[4];
visionH4.innerHTML = siteContent["main-content"]["vision-h4"];

let visionP1 = document.querySelectorAll(".main-content .text-content p")[4];
visionP1.innerHTML = siteContent["main-content"]["vision-content"];
//contact

let contact = document.querySelectorAll(".contact");
contact.innerHTML = siteContent["contact"];

console.log('contactH4:', contactH4);



// footer



