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
    "h1": "DOM<br>Is<br>Awesome",
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

//Header - Nav bar
const anchorTag = document.querySelectorAll("header nav a")
anchorTag.forEach ((element, text)=> {
  element.textContent=siteContent.nav[`nav-item-${text + 1}`]
})

//Dom is Awesome, button, and circle image 

document.querySelector(".cta h1").innerHTML = siteContent.cta.h1

document.querySelector(".cta button").textContent = siteContent.cta.button

document.querySelector(`.cta img`).src=siteContent.cta["img-src"];

//-------- main content -------

const all4Headings = document.querySelectorAll(".main-content h4");

const {"main-content": {
  "address": featuresH4,
  "phone": aboutH4,
  "email": servicesH4,
  "product-h4": productH4,
  "vision-h4": visionH4
}} = siteContent;

all4Headings[0].textContent = featuresH4,
all4Headings[1].textContent = aboutH4,
all4Headings[2].textContent = servicesH4,
all4Headings[3].textContent = productH4,
all4Headings[4].textContent = visionH4

// ---------Middle Image ---------
document.querySelector(`.middle-img`).src = siteContent["main-content"]["middle-img-src"]

//----------- Main Content Paragraphs
const all4Paragraphs = document.querySelectorAll(".main-content p");

const {"main-content": {
  "features-content": featuresP,
  "about-content": aboutP,
  "services-content": servicesP,
  "product-content": productP,
  "vision-content": visionP
}} = siteContent;


all4Paragraphs[0].textContent = featuresP,
all4Paragraphs[1].textContent = aboutP,
all4Paragraphs[2].textContent = servicesP,
all4Paragraphs[3].textContent = productP,
all4Paragraphs[4].textContent = visionP

// ----- contact -----

document.querySelector(".contact h4").textContent = siteContent.contact["contact-h4"]

const contactInfo = document.querySelectorAll(".contact p");

const {"contact": {
  "address": address,
  "phone": phone,
  "email": email,
}} = siteContent;

contactInfo[0].textContent = address,
contactInfo[1].textContent = phone,
contactInfo[2].textContent = email,

//------ footer -------
document.querySelector("footer p").textContent = siteContent.footer.copyright
