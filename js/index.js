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

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let head = document.getElementById("cta-img");
head.setAttribute('src', siteContent["cta"]["img-src"]);

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["img-src"]);

const frontPage = document.querySelector("h1");
frontPage.textContent = siteContent["cta"]["h1"]
frontPage.innerHTML = "DOM <br> IS <br> AWESOME"

const navLinks = document.querySelectorAll('nav a');
let count = 1
navLinks.forEach(element => {
  element.textContent = siteContent.nav[`nav-item-${count.toString()}`];
  count++;
});

const new1 = document.querySelectorAll(".text-content h4");
new1[0].textContent = siteContent["main-content"]["features-h4"];

 const new2 = document.querySelectorAll(".text-content p");
 
 new2[1].innerText = siteContent["main-content"]["features-content"];

 const new3 = document.querySelectorAll(".text-content h4");
 
 new3[2].innerText = siteContent["main-content"]["about-h4"];

const new4 = document.querySelectorAll(".text-content p");

new4[3].innerText = siteContent["main-content"]["about-content"];

const new5 = document.querySelectorAll(".text-content h4");

new5[4].innerText = siteContent["main-content"]["services-h4"];

const new6 = document.querySelectorAll(".text-content p");
new6[5].innerText = siteContent["main-content"]["services-content"];

const new7 = document.querySelectorAll(".text-content h4");
new7[6].innerText = siteContent["main-content"]["product-h4"];

const new8 = document.querySelectorAll(".text-content p");
new8[7].innerText = siteContent["main-content"]["product-content"];

const new9 = document.querySelectorAll(".text-content h4");
new9[8].innerText = siteContent["main-content"]["vision-h4"];

const new10= document.querySelectorAll(".text-content p");
new10[9].innerText = siteContent["main-content"]["vision-content"];

let contactText = document.querySelectorAll('.contact p')

let contactArray = Array.from(contactText)
contactArray[0].textContent = siteContent['contact']['address']
contactArray[1].textContent = siteContent['contact']['phone']
contactArray[2].textContent = siteContent['contact']['email']