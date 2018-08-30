// https://www.youtube.com/watch?v=cbD6nYK6KAs&feature=youtu.be
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

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let midImg = document.getElementsByClassName("middle-img");
midImg[0].src = siteContent["main-content"]["middle-img-src"];

// TASK 3:
// A. cta
let nav = document.querySelectorAll('nav a');
// console.log(nav)
// nav[0] = siteContent.nav["nav-item-1"]
// nav[1] = siteContent.nav["nav-item-2"]
// nav[2] = siteContent.nav["nav-item-3"]
// nav[3] = siteContent.nav["nav-item-4"]
// nav[4] = siteContent.nav["nav-item-5"]
// nav[5] = siteContent.nav["nav-item-6"]

nav[0].innerHTML = siteContent.nav["nav-item-1"]
nav[1].innerHTML = siteContent.nav["nav-item-2"]
nav[2].innerHTML = siteContent.nav["nav-item-3"]
nav[3].innerHTML = siteContent.nav["nav-item-4"]
nav[4].innerHTML = siteContent.nav["nav-item-5"]
nav[5].innerHTML = siteContent.nav["nav-item-6"]


// let nav = Array.from(document.querySelectorAll('nav a'));
// nav.forEach(item => item.innerHTML = "Yes");
// console.log(Array.from(siteContent.nav).map(item => item));

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = siteContent.cta.h1;
document.querySelector(".cta-text button").innerHTML = siteContent.cta.button;

// console.log(ctaH1)
// cta.querySelector("h1").innerHTML = siteContent.cta.h1;


// B. main content - top content
let topConHeaders = document.querySelectorAll(".text-content h4");
topConHeaders[0].innerHTML = siteContent["main-content"]["about-h4"];
topConHeaders[1].innerHTML = siteContent["main-content"]["services-h4"];
// document.querySelector(".text-content h4").innerHTML = siteContent["main-content"]["about-h4"];

let topConPara = document.querySelectorAll(".text-content p");
topConPara[0].innerHTML = siteContent["main-content"]["features-content"];
topConPara[1].innerHTML = siteContent["main-content"]["about-content"];

// C. Middle image
// Completed in SRC section

// C. bottom content
let botto