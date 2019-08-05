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

//Navigation
let navItems = document.querySelectorAll('nav a');
navItems.forEach((a, i=1) => {
 a.textContent = siteContent.nav[`nav-item-${i}`];
})

//Task 3
navItems.forEach((a) => a.style.color = 'green');

let home = document.createElement("a");
home.textContent = "Home";
home.style.color = "green";

let cont = document.createElement("a");
cont.textContent = "Content";
cont.style.color = "green";

let navig = document.querySelector('nav')
navig.prepend(home);
navig.appendChild(cont);


//CTA
let title = document.querySelector(".cta h1");
let btn = document.querySelector(".cta button");
let ctImg = document.querySelector(".cta img");

title.textContent = siteContent.cta.h1;
btn.textContent = siteContent.cta.button;
ctImg.setAttribute('src', siteContent.cta["img-src"]);

//Main
let mheadings = document.querySelectorAll(".text-content h4");
let mtext = document.querySelectorAll(".text-content p");
let mImg = document.querySelector(".middle-img");
mImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Main headings
mheadings[0].textContent = siteContent["main-content"]["features-h4"];
mheadings[1].textContent = siteContent["main-content"]["about-h4"];
mheadings[2].textContent = siteContent["main-content"]["services-h4"];
mheadings[3].textContent = siteContent["main-content"]["product-h4"];
mheadings[4].textContent = siteContent["main-content"]["vision-h4"];

//Main text
mtext[0].textContent = siteContent["main-content"]["features-content"];
mtext[1].textContent = siteContent["main-content"]["about-content"];
mtext[2].textContent = siteContent["main-content"]["services-content"];
mtext[3].textContent = siteContent["main-content"]["product-content"];
mtext[4].textContent = siteContent["main-content"]["vision-content"];


//Stretch
mheadings.forEach((a)=> a.style.color = 'slateblue');
title.style.color = 'slategray';


//Contact
contHead = document.querySelector(".contact h4");
contText = document.querySelectorAll(".contact p");

contHead.textContent = siteContent.contact["contact-h4"];

contText[0].textContent = siteContent.contact.address;
contText[1].textContent = siteContent.contact.phone;
contText[2].textContent = siteContent.contact.email;

//Footer
document.querySelector("footer p").textContent = siteContent.footer.copyright;


