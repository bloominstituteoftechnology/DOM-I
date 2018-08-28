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


/******************************************Header********************************* */
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"];

const navItems = document.querySelectorAll(".container header nav a ");
const newArray = Array.from(navItems)

const callback  = (item,index,array) =>{
   return array[index].innerHTML = siteContent["nav"][`nav-item-${index + 1}`]
}

navItems.forEach(callback);
/****************************************CTA********************************** */

let ctaText = document.querySelector(".cta .cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1"];

let button = document.querySelector(".cta .cta-text button");
button.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

/*********************************** Main *********************************** */
let mainContent = document.querySelectorAll(".main-content .top-content .text-content ")

let firstDiv = mainContent[0];

let featuresH4 = firstDiv.querySelector("h4");
featuresH4.innerHTML = siteContent["main-content"]["features-h4"];

let featuresContent = firstDiv.querySelector("p");
featuresContent.innerHTML = siteContent["main-content"]["features-content"];

let secondDiv = mainContent[1];

let aboutH4 = secondDiv.querySelector("h4");
aboutH4.innerHTML = siteContent["main-content"]["about-h4"];

let aboutContent = secondDiv.querySelector("p");
aboutContent.innerHTML = siteContent["main-content"]["about-content"];

let middleImgSrc = document.getElementById("middle-img")
middleImgSrc.src = siteContent["main-content"]["middle-img-src"];

let bottomContent = document.querySelectorAll(".main-content .bottom-content .text-content ")

let services = bottomContent[0].querySelector(".text-content h4");
services.innerHTML = siteContent["main-content"]["services-h4"];

let servicesContent = bottomContent[0].querySelector(".text-content p");
servicesContent.innerHTML = siteContent["main-content"]["services-content"];

let products = bottomContent[1].querySelector(".text-content h4");
products.innerHTML = siteContent["main-content"]["product-h4"];

let productContent = bottomContent[1].querySelector(".text-content p");
productContent.innerHTML = siteContent["main-content"]["product-content"];

let vision = bottomContent[2].querySelector(".text-content h4");
vision.innerHTML = siteContent["main-content"]["vision-h4"];

let visionContent = bottomContent[2].querySelector(".text-content p");
visionContent.innerHTML = siteContent["main-content"]["vision-content"];

/***********************************Contact****************************** */
let contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

let contacts = document.querySelectorAll(".contact p");
contacts[0].innerHTML = siteContent["contact"]["address"];
contacts[1].innerHTML = siteContent["contact"]["phone"];
contacts[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"]

