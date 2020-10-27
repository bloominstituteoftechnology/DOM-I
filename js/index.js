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

const navItems = document.querySelector('nav a');
navItems.textContent = "Services";

const navItems2 = navItems.nextElementSibling;
navItems2.textContent = "Product";

const navItems3 = navItems2.nextElementSibling;
navItems3.textContent = "Vision";

const navItems4 = navItems3.nextElementSibling;
navItems4.textContent = "Features";

const navItems5 = navItems4.nextElementSibling;
navItems5.textContent = "About";

const navItems6 = navItems5.nextElementSibling;
navItems6.textContent = "Contact";


let bigLogo = document.getElementById("cta-img")
bigLogo.src = "img/header-img.png";


const bigText = document.querySelector("h1");
bigText.innerHTML = "Dom <br> is <br> Awesome";

const buttonText = document.querySelector("button");
buttonText.textContent = "Get Started";

//Edit for main content/ top middle of page

const feats = document.querySelector(".top-content .text-content:nth-of-type(1) h4:nth-of-type(1)");
feats.textContent = "Features";
const featsText = document.querySelector(".top-content .text-content:nth-of-type(1) p:nth-of-type(1)");
featsText.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const about = document.querySelector(".top-content .text-content:nth-of-type(2) h4:nth-of-type(1)");
about.textContent = "About";
const aboutText = document.querySelector(".top-content .text-content:nth-of-type(2) p:nth-of-type(1)");
aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//wide image
const widelogo = document.getElementById("middle-img");
widelogo.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Edit for main content/ bottom middle of page
const services = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4:nth-of-type(1)");
services.textContent = "Services";
const serviceText = document.querySelector(".bottom-content .text-content:nth-of-type(1) p:nth-of-type(1)");
serviceText.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const product = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4:nth-of-type(1)");
product.textContent = "Product";
const productText = document.querySelector(".bottom-content .text-content:nth-of-type(2) p:nth-of-type(1)");
productText.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const vision = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4:nth-of-type(1)");
vision.textContent = "Vision";
const visionText = document.querySelector(".bottom-content .text-content:nth-of-type(3) p:nth-of-type(1)");
visionText.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


//Bottom section
const contact = document.querySelector(".contact h4");
contact.textContent = "CONTACT";

const bottomText = document.querySelector(".contact p");
bottomText.innerHTML = "123 Way 456 Street <br>Somewhere, USA";

const bottomText2 = bottomText.nextElementSibling;
bottomText2.textContent = "1 (888) 888-8888";

const bottomText3 = bottomText2.nextElementSibling;
bottomText3.textContent = "sales@greatidea.io";

//Footer
const copyRight = document.querySelector("footer p");
copyRight.textContent = "Copyright Great Idea! 2018";

//Nav Text color
navItems.style.color = "green";
navItems2.style.color = "green";
navItems3.style.color = "green";
navItems4.style.color = "green";
navItems5.style.color = "green";
navItems6.style.color = "green";

//Adding to nav bar
const shopLink = document.createElement("a");
shopLink.textContent = "Shop";
shopLink.href = "#";
document.querySelector("nav").appendChild(shopLink);
shopLink.style.color = "green";

const education = document.createElement("a");
education.textContent = "Education";
education.href = "#";
document.querySelector("nav").prepend(education);
education.style.color = "green";


