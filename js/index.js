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

let navAnchors = document.querySelectorAll('nav a');
navAnchors[0].textContent = "Services";
navAnchors[1].textContent = "Product";
navAnchors[2].textContent = "Vision";
navAnchors[3].textContent = "Features";
navAnchors[4].textContent = "About";
navAnchors[5].textContent = "Contact";

let ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = "Dom Is Awesome";

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = "Get Started";

let Img = document.querySelectorAll("img");
Img[0].src = "img/logo.png";
Img[1].src = "img/header-img.png";
Img[2].src = "img/mid-page-accent.jpg";

let contentH4 = document.querySelectorAll(".text-content h4");

let contentP = document.querySelectorAll(".text-content p");
contentH4[0].textContent = "Features";
contentH4[1].textContent = "About";
contentH4[2].textContent = "Services";
contentH4[3].textContent = "Product";
contentH4[4].textContent = "Vision";


contentP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentP[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentP[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentP[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = "Contact";

let contactP = document.querySelectorAll(".contact p");

contactP[0].textContent = "123 Way 456 Street Somewhere, USA";

contactP[1].textContent = "1 (888) 888-8888";

contactP[2].textContent = "sales@greatidea.io";

let footerP = document.querySelector("footer p");
footerP.textContent = "Copyright Great Idea! 2018";

let navColor = document.querySelectorAll("header nav a");
navColor[0].style.color = "green";

let navAdd = document.querySelector("nav");

navAdd.appendChild("Coming Soon");
