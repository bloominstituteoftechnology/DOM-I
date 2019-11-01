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


// VARIABLES
let index = 0; 

// NAVIGATION 

const navBar = document.querySelectorAll("nav"); 
const navLinks = document.querySelectorAll("a"); 
const logo = document.querySelector("#logo-img");

for(index; index < navLinks.length; index++){
  navLinks[index].textContent = siteContent.nav[`nav-item-${index + 1}`];
}

navLinks[0].style.color = "green"
navLinks[1].style.color = "green"
navLinks[2].style.color = "green"
navLinks[3].style.color = "green"
navLinks[4].style.color = "green"
navLinks[5].style.color = "green"


logo.src = "../img/logo.png";


//APPENDING  
const Forum = document.createElement('a');
Forum.href = "#";
Forum.textContent = "Forum";

const mainNavBar = document.querySelector('nav');
mainNavBar.append(Forum);
Forum.style.color = "green";

//PREPENDING
const Login = document.createElement('a');
Login.href = "#"; 
Login.textContent = "Login";

const mainNavBar2 = document.querySelector('nav');
mainNavBar2.prepend(Login);
Login.style.color = "green";


// BANNER TEXT

const bannerText = document.querySelector(".cta-text h1"); 
bannerText.textContent = siteContent.cta["h1"]; 

const bannerButton = document.querySelector("button");
bannerButton.textContent = siteContent.cta["button"]; 

const bannerImg = document.querySelector("#cta-img");
bannerImg.src = "../img/header-img.png";
 

// BODY TEXT 

const bodyH4 = document.querySelectorAll(".main-content h4");
const bodyParagraphs = document.querySelectorAll(".main-content p");

//top content
bodyH4[0].textContent = siteContent[`main-content`]["features-h4"]; 
bodyParagraphs[0].textContent = siteContent[`main-content`]["features-content"]; 

bodyH4[1].textContent = siteContent[`main-content`]["about-h4"]; 
bodyParagraphs[1].textContent = siteContent[`main-content`]["about-content"];

//bottom content
bodyH4[2].textContent = siteContent[`main-content`]["services-h4"];
bodyParagraphs[2].textContent = siteContent[`main-content`]["services-content"];

bodyH4[3].textContent = siteContent[`main-content`]["product-h4"]; 
bodyParagraphs[3].textContent = siteContent[`main-content`]["product-content"];

bodyH4[4].textContent = siteContent[`main-content`]["vision-h4"]; 
bodyParagraphs[4].textContent = siteContent[`main-content`]["vision-content"];

//mid image
let bodyImg = document.getElementById("middle-img"); 
bodyImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]); 


// FOOTER 

const contactBlock = document.querySelectorAll(".contact");

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent[`contact`] ["contact-h4"];

const contactPTags = document.querySelectorAll(".contact p");
contactPTags[0].textContent = siteContent[`contact`] ["address"];
contactPTags[0].style.width = "9rem";
contactPTags[1].textContent = siteContent[`contact`] ["phone"];
contactPTags[2].textContent = siteContent[`contact`] ["email"];


const footerBlock = document.querySelector("footer p");
footerBlock.textContent = siteContent[`footer`] ["copyright"];




