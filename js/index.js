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


// New Variables * * * 
let navMenu = document.querySelectorAll("a");
let title1 = document.querySelector("h1");
let img1 = document.querySelectorAll("img"); 
let newButton = document.querySelector("button");
let allPs = document.querySelectorAll("p");
let allh4 = document.querySelectorAll("h4");
let newContent = document.querySelectorAll("main-content");
let img2 = document.querySelectorAll("img"); 
let newContact = document.querySelector("contact");
let newFooter = document.querySelector("footer");


  // Nav * * *
navMenu[0].textContent = "Services";
navMenu[1].textContent = "Product";
navMenu[2].textContent = "Vision";
navMenu[3].textContent = "Features";
navMenu[4].textContent = "About";
navMenu[5].textContent = "Contact";

  // cta * * * 
title1.innerHTML = "Dom <br>Is <br>Awesome"
  // top photo
img1[1].setAttribute("src", siteContent["cta"]["img-src"]);
  // button
newButton.textContent = siteContent["cta"]["button"];

  
  // Main content * * *
allh4[0].textContent = siteContent["main-content"]["features-h4"];
  allPs[0].textContent = siteContent["main-content"]["features-content"];
allh4[1].textContent = siteContent["main-content"]["about-h4"];
  allPs[1].textContent = siteContent["main-content"]["about-content"];
allh4[2].textContent = siteContent["main-content"]["services-h4"]
  allPs[2].textContent = siteContent["main-content"]["services-content"];
allh4[3].textContent = siteContent["main-content"]["product-h4"];
  allPs[3].textContent = siteContent["main-content"]["product-content"];
allh4[4].textContent = siteContent["main-content"]["vision-h4"];
  allPs[4].textContent = siteContent["main-content"]["vision-content"];
  // middle photo =====
img2[2].setAttribute("src", siteContent["main-content"]["middle-img-src"]);

  
  // Contact * * *   
allh4[5].textContent = siteContent["contact"]["contact-h4"];
allPs[5].textContent = siteContent["contact"]["address"];
allPs[6].textContent = siteContent["contact"]["phone"];
allPs[7].textContent = siteContent["contact"]["email"];

  // Footer * * * 
allPs[8].textContent = siteContent["footer"]["copyright"];