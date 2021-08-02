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

//nav bar
const navBar = document.querySelector("container nav");

//a tags in nav bar
// const navItem1 = document.querySelector("nav a:nth-of-type(1)");
// navItem1.textContent = siteContent["nav"]["nav-item-1"];

// const navItem2 = document.querySelector("nav a:nth-of-type(2)");
// navItem2.textContent = siteContent["nav"]["nav-item-2"];

// const navItem3 = document.querySelector("nav a:nth-of-type(3)");
// navItem3.textContent = siteContent["nav"]["nav-item-3"];

// const navItem4 = document.querySelector("nav a:nth-of-type(4)");
// navItem4.textContent = siteContent["nav"]["nav-item-4"];

// const navItem5 = document.querySelector("nav a:nth-of-type(5)");
// navItem5.textContent = siteContent["nav"]["nav-item-5"];

// const navItem6 = document.querySelector("nav a:nth-of-type(6)");
// navItem6.textContent = siteContent["nav"]["nav-item-6"];

let links = Object.entries(siteContent.nav);

for (let i = 0; i <links.length - 1; i++){
  let navItem = document.querySelector(`nav a:nth-of-type(${i + 1})`);
  navItem.textContent = siteContent["nav"][`nav-item-${i+1}`]
}


//cta section

//cta h1
const title = document.querySelector("h1");
title.innerHTML = "Dom </br> Is </br> Awesome"

//cta button 
const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent["cta"]["button"];

//cta img
const ctaImg = document.querySelector(".cta img");
ctaImg.src = siteContent["cta"]["img-src"];



//main content section 

//features
const featuresTitle = document.querySelector(".top-content .text-content:nth-of-type(1) h4");
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

const featureContent = document.querySelector(".top-content .text-content:nth-of-type(1) p");
featureContent.textContent = siteContent["main-content"]["features-content"];

//about 
const aboutTitle = document.querySelector(".top-content .text-content:nth-of-type(2) h4");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector(".top-content .text-content:nth-of-type(2) p");
aboutContent.textContent = siteContent["main-content"]["about-content"];

// middle image 
const midImg = document.querySelector("#middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

//services
const servicesTitle = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
servicesContent.textContent = siteContent["main-content"]["services-content"];

//product 
const productTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
productTitle.textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
productContent.textContent = siteContent["main-content"]["product-content"];

//vision
const visionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
visionContent.textContent = siteContent["main-content"]["vision-content"];



//contact
const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const address = document.querySelector(".contact p:nth-of-type(1)");
address.innerHTML = "123 Way 456 Street </br> Somewhere, USA";

const phoneNum = document.querySelector(".contact p:nth-of-type(2)");
phoneNum.textContent = siteContent["contact"]["phone"];

const email = document.querySelector(".contact p:nth-of-type(3)");
email.textContent = siteContent["contact"]["email"];



//footer
const copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"];