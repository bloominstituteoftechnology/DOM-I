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
let header = document.querySelector("header");
const navLogoImage = document.querySelector("#logo-img");
const links = document.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

//header.style.color = "green";

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


//=================== Top Content Flex
const topContent = document.querySelectorAll(".top-content");
topContent.style.display = flex;

//================== Middle Image
const middleImg = document.querySelector("#middle-img");
middleImg = 'img/mid-page-accent.jpg';

//=================== Bottom Content Flex
const bottomContent = document.querySelectorAll(".bottom-content");
bottomContent.style.display = flex;


//=================== Contact Section
const contactSection = document.querySelectorAll(".contact");

//=================== Footer
const footer = document.querySelector(footer);
footer.textContent = siteContent[`main-content`]["footer"];


