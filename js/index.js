window.onload = function (){
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




let headerNav = document.querySelectorAll("header a");
headerNav[0].innerHTML = siteContent.nav['nav-item-1'];
headerNav[1].innerHTML = siteContent.nav['nav-item-2'];
headerNav[2].innerHTML = siteContent.nav['nav-item-3'];
headerNav[3].innerHTML = siteContent.nav['nav-item-4'];
headerNav[4].innerHTML = siteContent.nav['nav-item-5'];
headerNav[5].innerHTML = siteContent.nav['nav-item-6'];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = siteContent.nav["img-src"];


let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent.cta["h1"];
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent.cta["button"];


let ctaLogo = document.querySelector("#cta-img");
ctaLogo.src = "img/header-img.png";

let topCont = document.querySelectorAll(".main-content h4")
let mainCont = document.querySelectorAll(".main-content p")

topCont[0].innerHTML = siteContent["main-content"]["features-h4"];
mainCont[0].innerHTML = siteContent["main-content"]["features-content"];

topCont[1].innerHTML = siteContent["main-content"]["about-h4"];
mainCont[1].innerHTML = siteContent["main-content"]["about-content"];

topCont[2].innerHTML = siteContent["main-content"]["services-h4"];
mainCont[2].innerHTML = siteContent["main-content"]["services-content"];

topCont[3].innerHTML = siteContent["main-content"]["product-h4"];
mainCont[3].innerHTML = siteContent["main-content"]["product-content"];

topCont[4].innerHTML = siteContent["main-content"]["vision-h4"];
mainCont[4].innerHTML = siteContent["main-content"]["vision-content"];

document.querySelector(".middle-img").src = siteContent["main-content"]["middle-img-src"];

document.querySelector(".contact h4").innerHTML = siteContent["contact"]["contact-h4"];
let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["phone"];
contactInfo[2].innerHTML = siteContent["contact"]["email"];

document.querySelector("footer p").innerHTML = siteContent["footer"]["copyright"];
};