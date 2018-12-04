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

//========================Nav Bar
let navBar = document.querySelector("header nav a");
const navLogoImage = document.querySelector("#logo-img");
const links = document.querySelectorAll("a");

links[0].textContent = siteContent[`nav`]["nav-item-1"];
links[1].textContent = siteContent[`nav`]["nav-item-2"];
links[2].textContent = siteContent[`nav`]["nav-item-3"];
links[3].textContent = siteContent[`nav`]["nav-item-4"];
links[4].textContent = siteContent[`nav`]["nav-item-5"];
links[5].textContent = siteContent[`nav`]["nav-item-6"];

// for (let i = 0; i < links.length; i++) {
//   links[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
// }

// navBar.style.color = "green";
// for (let i = 0; i < links.length; i++) {
//   navBar[i].style.color = 'green';
// }

navLogoImage.src = 'img/logo.png';

//========================Header Content


const headerText = document.querySelector(".cta-text h1");
const headerButton = document.querySelector("button");
const headerImage = document.querySelector("#cta-img");

headerText.textContent = siteContent.cta['h1'];
headerButton.textContent = "Get Started";
headerImage.src = 'img/header-img.png';


//========================Main Content

//================== Paragraphs & Headers

//================== H4
const h4 = document.querySelectorAll(".main-content h4");
h4[0].textContent = siteContent[`main-content`]["features-h4"];
h4[1].textContent = siteContent[`main-content`]["about-h4"];
h4[2].textContent = siteContent[`main-content`]["services-h4"];
h4[3].textContent = siteContent[`main-content`]["product-h4"];
h4[4].textContent = siteContent[`main-content`]["vision-h4"];

//================== Paragraphs
const paragraphs = document.querySelectorAll(".main-content p");
paragraphs[0].textContent = siteContent[`main-content`]["features-content"];
paragraphs[1].textContent = siteContent[`main-content`]["about-content"];
paragraphs[2].textContent = siteContent[`main-content`]["services-content"];
paragraphs[3].textContent = siteContent[`main-content`]["product-content"];
paragraphs[4].textContent = siteContent[`main-content`]["vision-content"];


//================== Middle Image
const middleImg = document.querySelector("#middle-img");
middleImg.src = "img/mid-page-accent.jpg"

//=================== Top Content Display Flex
const topContent = document.querySelector(".top-content");
topContent.style.display = "flex";


//=================== Bottom Content Display Flex
const bottomContent = document.querySelector(".bottom-content");
bottomContent.style.display = "flex";


//=================== Contact Section
const contactSection = document.querySelectorAll(".contact");
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent[`contact`]["contact-h4"];

const contactPs = document.querySelectorAll(".contact p");
contactPs[0].textContent = siteContent[`contact`]["address"];
contactPs[1].textContent = siteContent[`contact`]["phone"];
contactPs[2].textContent = siteContent[`contact`]["email"];

//=================== Footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent[`footer`]["copyright"];

