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

//Create selectors for each image
let ctaImg = document.getElementById("cta-img");
let middleImg = document.getElementById("middle-img");

//Create selectors for all nav links
let navLinks = Array.from(document.querySelectorAll("header nav a"));

//Create selector for h1
let mainHeader = document.querySelector(".cta-text h1");

//Create selector for button
let button = document.querySelector(".cta-text button");

//Create array with all text-content divs
let textContentDivs = Array.from(document.querySelectorAll(".text-content"));

//Create selectors for features section
let featuresH4 = textContentDivs[0].querySelector("h4");
let featuresP = textContentDivs[0].querySelector("p");

//Create selectors for about section
let aboutH4 = textContentDivs[1].querySelector("h4");
let aboutP = textContentDivs[1].querySelector("p");

//Create selectors for services section
let servicesH4 = textContentDivs[2].querySelector("h4");
let servicesP = textContentDivs[2].querySelector("p");

//create selectors for product section
let productH4 = textContentDivs[3].querySelector("h4");
let productP = textContentDivs[3].querySelector("p");

//create selectors for vision section
let visionH4 = textContentDivs[1].querySelector("h4");
let visionP = textContentDivs[1].querySelector("p");

//create selectors for contact section
let contactH4 = document.querySelector(".contact h4");
let contactParagraphs = Array.from(document.querySelectorAll(".contact p"));
let contactAddress = contactParagraphs[0];
let contactPhone = contactParagraphs[1];
let contactEmail = contactParagraphs[2];

//create selector for footer section
let footerSection = document.querySelector("footer p");