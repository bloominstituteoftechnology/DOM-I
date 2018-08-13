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



// Selectors


const logo = document.getElementById("logo-img");
const nav = document.querySelector("nav");
const navBar = document.querySelectorAll ('nav a');
const ctaHeader = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImage = document.getElementById("cta-img");
const mainContentHeader = document.querySelectorAll(".main-content h4");
const mainContentBody = document.querySelectorAll(".main-content p");
const middleImage = document.getElementById("middle-img");
const contactHeader = document.querySelector(".contact h4");
const contactBody = document.querySelectorAll(".contact p");

// logo
logo.setAttribute('src', siteContent["nav"]["img-src"]);
logo.src =  siteContent["nav"]["img-src"];

// nav
for(let i = 0; i <6; i++) {
  navBar[i].innerHTML = siteContent["nav"]["nav-item-" + (i + 1)];
}

// cta
ctaHeader.innerHTML = siteContent["cta"]["h1"];
ctaButton.innerHTML = siteContent["cta"]["button"];
ctaImage.src = siteContent["cta"]["img-src"];


// main content
mainContentHeader[0].innerHTML = siteContent ["main-content"] ["features-h4"];
mainContentBody[0].innerHTML = siteContent ["main-content"] ["features-content"];
mainContentHeader[1].innerHTML = siteContent ["main-content"] ["about-h4"];
mainContentBody[1].innerHTML = siteContent ["main-content"] ["about-content"];

middleImage.src = siteContent["main-content"]["middle-img-src"];

mainContentHeader[2].innerHTML = siteContent ["main-content"]["services-h4"];
mainContentBody[2].innerHTML = siteContent ["main-content"]["services-content"];
mainContentHeader[3].innerHTML = siteContent ["main-content"]["product-h4"];
mainContentBody[3].innerHTML = siteContent ["main-content"]["product-content"];
mainContentHeader[4].innerHTML = siteContent ["main-content"]["vision-h4"];
mainContentBody[4].innerHTML = siteContent ["main-content"]["vision-content"];

let footer = document.querySelector("footer");

