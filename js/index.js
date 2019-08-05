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

//nav
const nav = document.querySelectorAll("header nav a");
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

//cta h1
const sec1 = document.querySelectorAll(".cta .cta-text h1");
sec1[0].textContent = siteContent["cta"]["h1"];

//cta button
const sec1But = document.querySelectorAll(".cta .cta-text button");
sec1But[0].textContent = siteContent["cta"]["button"];

//cta img
let pic = document.getElementById("cta-img");
pic.setAttribute('src', siteContent["cta"]["img-src"]);

//main content h4
const sec2h4 = document.querySelectorAll(".main-content .top-content .text-content h4");
sec2h4[0].textContent = siteContent["main-content"]["features-h4"];
sec2h4[1].textContent = siteContent["main-content"]["about-h4"];

//main content p
const sec2p = document.querySelectorAll(".main-content .top-content .text-content p");
sec2p[0].textContent = siteContent["main-content"]["features-content"];
sec2p[1].textContent = siteContent["main-content"]["features-content"];

//main pic
let mainPic = document.getElementById("middle-img");
mainPic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//main content bot h4
const sec2Both4 = document.querySelectorAll(".main-content .bottom-content .text-content h4");
sec2Both4[0].textContent = siteContent["main-content"]["services-h4"];
sec2Both4[1].textContent = siteContent["main-content"]["product-h4"];
sec2Both4[2].textContent = siteContent["main-content"]["vision-h4"];

//main content bot p
const sec2Botp = document.querySelectorAll(".main-content .bottom-content .text-content p");
sec2Botp[0].textContent = siteContent["main-content"]["services-content"];
sec2Botp[1].textContent = siteContent["main-content"]["product-content"];
sec2Botp[2].textContent = siteContent["main-content"]["vision-content"];

//contact class
const contactBot = document.querySelectorAll(".contact h4");
contactBot[0].textContent = siteContent["contact"]["contact-h4"];

const contactBot2 = document.querySelectorAll(".contact p");
contactBot2[0].textContent = siteContent["contact"]["address"];
contactBot2[1].textContent = siteContent["contact"]["phone"];
contactBot2[2].textContent = siteContent["contact"]["email"];

//footer
const foot = document.querySelectorAll("footer");
foot[0].textContent = siteContent["footer"]["copyright"];


//const ctaTxt = document.querySelector(".cta-text h1");
//ctaTxt.textContent = siteContent["cta"]["h1"];
//document.write("\n");







