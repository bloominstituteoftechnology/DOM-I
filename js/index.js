const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
//Grab the nav links
let navLink1 = document.querySelector("nav a");
let navLink2 = document.querySelector("nav a:nth-of-type(2)");
let navLink3 = document.querySelector("nav a:nth-of-type(3)");
let navLink4 = document.querySelector("nav a:nth-of-type(4)");
let navLink5 = document.querySelector("nav a:nth-of-type(5)");
let navLink6 = document.querySelector("nav a:nth-of-type(6)");
//Chnage the text of the nav links
navLink1.textContent = "Services";
navLink2.textContent = "Product";
navLink3.textContent = "Vision";
navLink4.textContent = "Features";
navLink5.textContent = "About";
navLink6.textContent = "Contact";
//grab the h1
let domText = document.querySelector("h1");
//change the h1 text
domText.innerHTML = "DOM <br> IS <br> AWESOME";
//grab the button
const myButton = document.querySelector("button");
myButton.textContent = "Get Started";
//grab the img
const codeImage = document.querySelector("#cta-img");
//chnage image src
codeImage.src = "img/header-img.png";

//Grab the features
const firstH4 = document.querySelector(".text-content h4");
//features text content
firstH4.textContent = "Features";
//grab features p
const firstP = document.querySelector("p");
//features p text content
firstP.textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//Grab the about
const secondH4 = document.querySelector(".text-content:nth-of-type(2) h4");
//about text content
secondH4.textContent = "About";
//grab about second p
const secondP = document.querySelector(".text-content:nth-of-type(2) p");
//second p text content
secondP.textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//grab image under second P
middleImage = document.querySelector(".middle-img");
//change middle image src
middleImage.src = "img/mid-page-accent.jpg";

//Grab bottom content h4
const servicesH4 = document.querySelector(".bottom-content .text-content h4");
//servies text content
servicesH4.textContent = "Services";
//grab bottom content p
const servicesP = document.querySelector(".bottom-content .text-content p");
//bottom text content
servicesP.textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//grab second bottom h4
const productH4 = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) h4"
);
//second bottom h4 text content
productH4.textContent = "Product";
//grab second bottom p
const productP = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) p"
);
//second bottom p text content
productP.textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
//grab the third bottom h4
const visionH4 = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) h4"
);
//third bottom h4 text content
visionH4.textContent = "Vision";
//grab third bottom p
const visionP = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) p"
);
//third bottom p text content
visionP.textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
//grab contact h4
const contactH4 = document.querySelector(".contact h4");
//contact h4 text content
contactH4.textContent = "Contact";
//grab contact first p
const contactP = document.querySelector(".contact p");
//contact first p text content
contactP.textContent = "23 Way 456 Street Somewhere, USA";
//grab contact second p
const contactSecondP = document.querySelector(".contact p:nth-of-type(2)");
//second P text content
contactSecondP.textContent = "1 (888) 888-8888";
//grab contact third P
const contactThirdP = document.querySelector(".contact p:nth-of-type(3)");
//third P text content
contactThirdP.textContent = "sales@greatidea.io";
//grab footer p
const footerP = document.querySelector("footer p");
//footer p text content
footerP.textContent = "Copyright Great Idea! 2018";


