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

//TOP BAR
const links = document.querySelectorAll('a');
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];
links.forEach(a => {
  a.style.color = 'green';
})

let nav = document.querySelector('nav')
let aNode = document.createElement('a');
let textNode = document.createTextNode('Last Extra');
aNode.appendChild(textNode);
nav.appendChild(aNode);

let aNode1 = document.createElement('a');
let textNode1 = document.createTextNode('First Extra');
aNode1.prepend(textNode1);
nav.prepend(aNode1);

aNode.style.color = 'green';
aNode1.style.color = 'green';


//CTA
const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = "Dom Is Awesome";

const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = "Get Started";

const ctaImage = document.getElementById("cta-img");
ctaImage.src = "img/header-img.png";


//HEADERS
const contentHeader = document.querySelectorAll(".text-content h4");
contentHeader[0].textContent = siteContent['main-content']['features-h4']

contentHeader[1].textContent = siteContent['main-content']['about-h4']

contentHeader[2].textContent = siteContent['main-content']['services-h4']

contentHeader[3].textContent = siteContent['main-content']['product-h4']

contentHeader[4].textContent = siteContent['main-content']['vision-h4']


//CONTENT
const mainContent = document.querySelectorAll(".text-content p");
mainContent[0].textContent = siteContent["main-content"]["features-content"];

mainContent[1].textContent = siteContent["main-content"]["about-content"];

mainContent[2].textContent = siteContent["main-content"]["services-content"];

mainContent[3].textContent = siteContent["main-content"]["product-content"];

mainContent[4].textContent = siteContent["main-content"]["vision-content"];


//MIDDLE IMG
const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];


//CONTACT HEADER
const contactHeader = document.querySelector(".contact h4")
contactHeader.textContent = siteContent["contact"]["contact-h4"]

//CONTACT P
const contactText = document.querySelectorAll(".contact p")
contactText[0].textContent = siteContent["contact"]["address"]
contactText[1].textContent = siteContent["contact"]["phone"]
contactText[2].textContent = siteContent["contact"]["email"]

//FOOTER
const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];