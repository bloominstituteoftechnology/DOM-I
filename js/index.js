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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Bar / Header
const navBar = document.querySelectorAll('a');

navBar.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i + 1}`];
  link.style.color = "green";
});

let navMenu = document.querySelector("nav");
const linkFirst = document.createElement("a");
linkFirst.textContent = "Home";
navMenu.prepend(linkFirst);
linkFirst.style.color = "green";

const linkLast = document.createElement("a");
linkLast.textContent = "Social";
navMenu.appendChild(linkLast);
linkLast.style.color = "green";


// Call to Action Section
const callToActionText = document.getElementsByTagName('h1');
callToActionText[0].textContent = siteContent["cta"]["h1"];

const callToActionButton = document.getElementsByTagName('button');
callToActionButton[0].textContent = siteContent["cta"]["button"];

const callToActionImg = document.getElementById("cta-img");
callToActionImg.setAttribute('src', siteContent["cta"]["img-src"]);


// Main Content Section
const mainContentHeadings = document.querySelectorAll("h4");
mainContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeadings[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeadings[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

const mainContentText = document.querySelectorAll("p");
mainContentText[0].textContent = siteContent["main-content"]["features-content"];
mainContentText[1].textContent = siteContent["main-content"]["about-content"];
mainContentText[2].textContent = siteContent["main-content"]["services-content"];
mainContentText[3].textContent = siteContent["main-content"]["product-content"];
mainContentText[4].textContent = siteContent["main-content"]["vision-content"];

const midLogo = document.getElementById("middle-img");
midLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Contact
mainContentHeadings[5].textContent = siteContent["contact"]["contact-h4"];
mainContentText[5].textContent = siteContent["contact"]["address"];
mainContentText[6].textContent = siteContent["contact"]["phone"];
mainContentText[7].textContent = siteContent["contact"]["email"];


// Footer
const footerText = document.querySelector("footer > p");
footerText.textContent = siteContent["footer"]["copyright"];