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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


// Selectors

let logo = document.querySelector("#logo-img");
let navItems = document.querySelectorAll("nav a");
let navigation = document.querySelector("nav");
let ctaH1 = document.querySelector(".cta-text h1");
let ctaBtn = document.querySelector(".cta-text button");
let ctaImg = document.querySelector("#cta-img");
let TCTCH4 = document.querySelectorAll(".top-content .text-content h4");
let TCTCP = document.querySelectorAll(".top-content .text-content p");
let middleImg = document.querySelector("#middle-img");
let BCTCH4 = document.querySelectorAll(".bottom-content .text-content h4");
let BCTCP = document.querySelectorAll(".bottom-content .text-content p");
let contactH4 = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");
let footerP = document.querySelector("footer p");


// Manipulation

logo.src = siteContent["nav"]["img-src"];

navItems[0].textContent = siteContent["nav"]["nav-item-1"]
navItems[1].textContent = siteContent["nav"]["nav-item-2"]
navItems[2].textContent = siteContent["nav"]["nav-item-3"]
navItems[3].textContent = siteContent["nav"]["nav-item-4"]
navItems[4].textContent = siteContent["nav"]["nav-item-5"]
navItems[5].textContent = siteContent["nav"]["nav-item-6"]

ctaH1.textContent = siteContent["cta"]["h1"];
ctaBtn.textContent = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

TCTCH4[0].textContent = siteContent["main-content"]["features-h4"];
TCTCP[0].textContent = siteContent["main-content"]["features-content"];
TCTCH4[1].textContent = siteContent["main-content"]["about-h4"];
TCTCP[1].textContent = siteContent["main-content"]["about-content"];

middleImg.src = siteContent["main-content"]["middle-img-src"];

BCTCH4[0].textContent = siteContent["main-content"]["services-h4"];
BCTCP[0].textContent = siteContent["main-content"]["services-content"];
BCTCH4[1].textContent = siteContent["main-content"]["product-h4"];
BCTCP[1].textContent = siteContent["main-content"]["product-content"];
BCTCH4[2].textContent = siteContent["main-content"]["vision-h4"];
BCTCP[2].textContent = siteContent["main-content"]["vision-content"];

contactH4.textContent = siteContent["contact"]["contact-h4"];
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

footerP.textContent = siteContent["footer"]["copyright"];


// Styles

navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";
navItems[5].style.color = "green";


// .appendChild() and .prepend()

let navFront = document.createElement("a");
let navBack = document.createElement("a");

let navFrontContent = document.createTextNode("Blog");
let navBackContent = document.createTextNode("Courses");

navFront.appendChild(navFrontContent);
navFront.style.color = "green";
navBack.appendChild(navBackContent);
navBack.style.color = "green";

document.querySelector("nav").prepend(navFront);
document.querySelector("nav").appendChild(navBack);

navFront.href = "#";
navBack.href = "#";

// Stretch Goals
// CSS styles added via JavaScript are added inline

document.querySelector(".contact").style.width = "150px";
ctaH1.style.color = "dodgerblue";
TCTCH4[0].style.color = "dodgerblue";
TCTCH4[1].style.color = "dodgerblue";
BCTCH4[0].style.color = "dodgerblue";
BCTCH4[1].style.color = "dodgerblue";
BCTCH4[2].style.color = "dodgerblue";
contactH4.style.color = "dodgerblue";
