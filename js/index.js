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

let navJS = document.querySelectorAll("nav a");
navJS[0].innerHTML = siteContent["nav"]["nav-item-1"];
navJS[1].innerHTML = siteContent["nav"]["nav-item-2"];
navJS[2].innerHTML = siteContent["nav"]["nav-item-3"];
navJS[3].innerHTML = siteContent["nav"]["nav-item-4"];
navJS[4].innerHTML = siteContent["nav"]["nav-item-5"];
navJS[5].innerHTML = siteContent["nav"]["nav-item-6"];
// navJS.style.color = "#b0b0b0";
// navJS.style.alignContent = 

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let mainContentImgJS = document.getElementById("middle-img");
mainContentImgJS.setAttribute('src', siteContent["main-content"]["img-src"]);

let navJS = document.querySelectorAll("nav a");
navJS[0].innerHTML = siteContent["nav"]["nav-item-1"];
navJS[1].innerHTML = siteContent["nav"]["nav-item-2"];
navJS[2].innerHTML = siteContent["nav"]["nav-item-3"];
navJS[3].innerHTML = siteContent["nav"]["nav-item-4"];
navJS[4].innerHTML = siteContent["nav"]["nav-item-5"];
navJS[5].innerHTML = siteContent["nav"]["nav-item-6"];
// navJS.style.color = "#b0b0b0";
// navJS.style.alignContent = 

let ctaTextJS = document.querySelector(".cta-text h1");
ctaTextJS.innerHTML = siteContent["cta"]["h1"];

let ctaButtonJS = document.querySelector(".cta .cta-text button");
ctaButtonJS.innerHTML = siteContent["cta"]["button"];

let ctaImgJS = document.getElementById("cta-img");
ctaimgJS.setAttribute('src', siteContent["cta"]["img-src"]);

let mainTitle = document.querySelectorAll("h4");
mainTitle[0].innerHTML = siteContent["main-content"]["features-h4"];
mainTitle[1].innerHTML = siteContent["main-content"]["about-h4"];
mainTitleS[2].innerHTML = siteContent["main-content"]["services-h4"];
mainTitle[3].innerHTML = siteContent["main-content"]["product-h4"];
mainTitle[4].innerHTML = siteContent["main-content"]["vision-h4"];


let mainContentJS = document.getElementsByTagName("p");
mainContentJS[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentJS[1].innerHTML = siteContent["main-content"]["about-content"];
mainContentJS[2].innerHTML = siteContent["main-content"]["services-content"];
mainContentJS[3].innerHTML = siteContent["main-content"]["product-content"];
mainContentJS[4].innerHTML = siteContent["main-content"]["vision-content"];



let contactJS = document.getElementsByClassName("contact")[0];
contactJS.innerHTML = siteContent["contact"]["contact-h4"];
contactJS.innerHTML = siteContent["contact"]["contact-p"];

let footerJS = document.querySelector("footer");
footerJS.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];