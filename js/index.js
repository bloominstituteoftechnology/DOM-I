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

let nav = document.querySelectorAll("a");
for (let i = 0; i<nav.length; i++) {
  nav[i].textContent = Object.values(siteContent.nav)[i]
  nav[i].style.color = 'green';
}

let navtag = document.querySelector("nav");
let newChild = document.createElement("a");
newChild.textContent = "Best Of";
newChild.style.color = "green";
navtag.appendChild(newChild);
let newChild2 = document.createElement("a");
newChild2.textContent = "Don't Click!";
newChild2.style.color = "green";
navtag.prepend(newChild2);

let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent.cta.h1;

let ctaTextbtn = document.querySelector("button");
ctaTextbtn.textContent = siteContent.cta.button;

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"]);

let topContenth4 = document.querySelectorAll("div.top-content > div.text-content > h4");
topContenth4[0].textContent = siteContent["main-content"]["features-h4"];

let topContentp = document.querySelectorAll("div.top-content > div.text-content > p");
topContentp[0].textContent = siteContent["main-content"]["features-content"];

topContenth4[1].textContent = siteContent["main-content"]["about-h4"];

topContentp[1].textContent = siteContent["main-content"]["about-content"];

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContenth4 = document.querySelectorAll("div.bottom-content > div.text-content > h4");
bottomContenth4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContenth4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContenth4[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContentp = document.querySelectorAll("div.bottom-content > div.text-content > p");
bottomContentp[0].textContent = siteContent["main-content"]["services-content"];
bottomContentp[1].textContent = siteContent["main-content"]["product-content"];
bottomContentp[2].textContent = siteContent["main-content"]["vision-content"];

let contacth4 = document.querySelectorAll("section.contact > h4");
contacth4[0].textContent = siteContent.contact["contact-h4"];

let contactp = document.querySelectorAll("section.contact > p");
contactp[0].textContent = siteContent.contact.address;
contactp[1].textContent = siteContent.contact.phone;
contactp[2].textContent = siteContent.contact.email;

let footer = document.querySelector("footer");
footer.textContent = siteContent.footer.copyright;