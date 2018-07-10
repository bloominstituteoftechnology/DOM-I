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

//======== selectors ========
const navigationBar = document.querySelector("header nav");
let newLink1 = document.createElement("a");
let newLink2 = document.createElement("a");

let newLinkText1 = document.createTextNode("Is This The Beginning?");
let newLinkText2 = document.createTextNode("Is This The End?");

newLink1.appendChild(newLinkText1);
newLink2.appendChild(newLinkText2);

navigationBar.prepend(newLink1); // Adding link to the beginning of navbar
navigationBar.appendChild(newLink2); // Adding link to the end of the navbar

const navLinks = document.querySelectorAll("nav a");
const logo = document.getElementById("logo-img");
const ctaHeading = document.querySelector(".cta-text h1");
const ctaBtn = document.querySelector(".cta-text button");
const ctaImg = document.getElementById("cta-img");
const textBoxHeadings = document.querySelectorAll(".text-content h4");
const textBoxContent = document.querySelectorAll(".text-content p");
const midImg = document.getElementById("middle-img");
const contactHeading = document.querySelector(".contact h4");
const contactContent = document.querySelectorAll(".contact p");
const footerContent = document.querySelector("footer p");

// ======== Updating Nodes ========

navLinks.forEach(i => i.style.color = "green");

logo.setAttribute('src', siteContent["nav"]["img-src"]);

navLinks[1].innerHTML = siteContent["nav"]["nav-item-1"];
navLinks[2].innerHTML = siteContent["nav"]["nav-item-2"];
navLinks[3].innerHTML = siteContent["nav"]["nav-item-3"];
navLinks[4].innerHTML = siteContent["nav"]["nav-item-4"];
navLinks[5].innerHTML = siteContent["nav"]["nav-item-5"];
navLinks[6].innerHTML = siteContent["nav"]["nav-item-6"];



ctaHeading.innerHTML = siteContent["cta"]["h1"];

ctaBtn.innerHTML = siteContent["cta"]["button"];

ctaImg.src = siteContent["cta"]["img-src"];

textBoxHeadings[0].innerHTML = siteContent["main-content"]["features-h4"];
textBoxContent[0].innerHTML = siteContent["main-content"]["features-content"];

textBoxHeadings[1].innerHTML = siteContent["main-content"]["about-h4"];
textBoxContent[1].innerHTML = siteContent["main-content"]["about-content"];

textBoxHeadings[2].innerHTML = siteContent["main-content"]["services-h4"];
textBoxContent[2].innerHTML = siteContent["main-content"]["services-content"];

textBoxHeadings[3].innerHTML = siteContent["main-content"]["product-h4"];
textBoxContent[3].innerHTML = siteContent["main-content"]["product-content"];

textBoxHeadings[4].innerHTML = siteContent["main-content"]["vision-h4"];
textBoxContent[4].innerHTML = siteContent["main-content"]["vision-content"];

midImg.src = siteContent["main-content"]["middle-img-src"];

contactHeading.innerHTML = siteContent["contact"]["contact-h4"];
contactContent[0].innerHTML = siteContent["contact"]["address"];
contactContent[1].innerHTML = siteContent["contact"]["phone"];
contactContent[2].innerHTML = siteContent["contact"]["email"];

footerContent.innerHTML = siteContent["footer"]["copyright"];
