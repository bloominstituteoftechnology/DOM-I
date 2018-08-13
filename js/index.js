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

// Task2: Create selectors by using any of the DOM element's methods
let images = document.querySelectorAll("img");
const middleImage = document.querySelector("#middle-img");
let ctaImage = document.getElementById("cta-img");
// Task2: Note that IDs have been used on all images.  Use the IDs to update src path content
middleImage.src = "img/mid-page-accent.jpg";
// logoImage.src = "img/logo.png";
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// ##Task 3: Using your selectors, update the content to match the example file.
// # header nav a
let nav = document.querySelectorAll("nav a");
nav[0].innerHTML = "Services";
nav[1].innerHTML = "Product";
nav[2].innerHTML = "Vision";
nav[3].innerHTML = "Features";
nav[4].innerHTML = "About";
nav[5].innerHTML = "Contact";
// # .cta-text
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = "DOM <br> Is <br> Awesome";
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];
// # .top-content
// features
let topHeaders = document.querySelectorAll(".top-content h4");
topHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
let topTexts = document.querySelectorAll(".top-content p");
topTexts[0].innerHTML = siteContent["main-content"]["features-content"];
// about
topHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
topTexts[1].innerHTML = siteContent["main-content"]["about-content"];
// # .bottom-content
let bottomHeaders = document.querySelectorAll(".bottom-content h4");
let bottomTexts = document.querySelectorAll(".bottom-content p");
bottomHeaders[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomHeaders[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomHeaders[2].innerHTML = siteContent["main-content"]["vision-h4"];
bottomTexts[0].innerHTML = siteContent["main-content"]["services-content"];
bottomTexts[1].innerHTML = siteContent["main-content"]["product-content"];
bottomTexts[2].innerHTML = siteContent["main-content"]["vision-content"];
// # .contact
let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];
let contactLines = document.querySelectorAll(".contact p");
contactLines[0].innerHTML = siteContent["contact"]["address"];
contactLines[1].innerHTML = siteContent["contact"]["phone"];
contactLines[2].innerHTML = siteContent["contact"]["email"];
// # footer
let footerText = document.querySelector("footer p");
footerText.innerHTML = siteContent["footer"]["copyright"];

// ## Task 4
// # Change the color of the navigation text to be green.
navstyle.color='green';
// # Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
const navElement = querySelector('nav');
const appendee = document.createElement("a");
document.navElement.appendChild(appendee);
const prependee = document.createElement("a");
document.navElement.prepend(prependee);
