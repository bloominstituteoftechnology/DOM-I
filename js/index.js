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

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((item,i) => {
  item.textContent = siteContent["nav"][`nav-item-${i + 1}`]
});
greenNav = navLinks.fontcolor ("green");

//cta 
const cta = document.querySelector(".cta");
const ctaHeading = cta.querySelector("h1");
ctaHeading.textContent = "DOM Is Awesome"
const ctaButton = cta.querySelector("button");
ctaButton.textContent = "Get Started"
const ctaImg = cta.querySelector("img");
ctaImg.src = siteContent["cta"]["img-src"];

//main-content
const mainContent = document.querySelector(".main-content")
const mainContentHeading = mainContent.querySelectorAll("h4");
const mainContentcontent = mainContent.querySelectorAll("p");
const mainContentImg = mainContent.querySelector("img");
//main-content img
mainContentImg.src = siteContent["main-content"]["middle-img-src"];
//Heading
mainContentHeading[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeading[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeading[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeading[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeading[4].textContent = siteContent["main-content"]["vision-h4"];
//Content
mainContentcontent[0].textContent = siteContent["main-content"]["features-content"];
mainContentcontent[1].textContent = siteContent["main-content"]["about-content"];
mainContentcontent[2].textContent = siteContent["main-content"]["services-content"];
mainContentcontent[3].textContent = siteContent["main-content"]["product-content"];
mainContentcontent[4].textContent = siteContent["main-content"]["vision-content"];

//Contact
const contact = document.querySelector(".contact");
const contactHeading = contact.querySelector("h4");
const contactContent = contact.querySelectorAll("p");
contactHeading.textContent = siteContent["contact"]["contact-h4"];
contactContent[0].textContent = siteContent["contact"]["address"]
contactContent[1].textContent = siteContent["contact"]["phone"]
contactContent[2].textContent = siteContent["contact"]["email"]

//Footer 
const footer = document.querySelector("footer");
