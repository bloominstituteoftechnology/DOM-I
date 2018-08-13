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

let nav = document.querySelectorAll('nav a');
nav[0].innerHTML = (siteContent["nav"]["nav-item-1"]);

let nav1 = document.querySelectorAll('nav a');
nav1[1].innerHTML = (siteContent["nav"]["nav-item-2"]);

let nav2 = document.querySelectorAll('nav a');
nav2[2].innerHTML = (siteContent["nav"]["nav-item-3"]);

let nav3 = document.querySelectorAll('nav a');
nav3[3].innerHTML = (siteContent["nav"]["nav-item-4"]);

let nav4 = document.querySelectorAll('nav a');
nav4[4].innerHTML = (siteContent["nav"]["nav-item-5"]);

let nav5 = document.querySelectorAll('nav a');
nav5[5].innerHTML = (siteContent["nav"]["nav-item-6"]);

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = (siteContent["cta"]["h1"]);

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.innerHTML = (siteContent["cta"]["button"]);

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let mainContent1 = document.querySelectorAll('.top-content .text-content h4');
mainContent1[0].innerHTML = (siteContent["main-content"]["features-h4"]);

let mainText1 = document.querySelectorAll('.top-content .text-content p');
mainText1[0].innerHTML = (siteContent["main-content"]["features-content"]);

let mainContent2 = document.querySelectorAll('.top-content .text-content h4');
mainContent2[1].innerHTML = (siteContent["main-content"]["about-h4"]);

let mainText2 = document.querySelectorAll('.top-content .text-content p');
mainText2[1].innerHTML = (siteContent["main-content"]["about-content"]);

let mainContent3 = document.querySelectorAll('.bottom-content .text-content h4');
mainContent3[0].innerHTML = (siteContent["main-content"]["services-h4"]);

let mainText3 = document.querySelectorAll('.bottom-content .text-content p');
mainText3[0].innerHTML = (siteContent["main-content"]["services-content"]);

let mainContent4 = document.querySelectorAll('.bottom-content .text-content h4');
mainContent4[1].innerHTML = (siteContent["main-content"]["product-h4"]);

let mainText4 = document.querySelectorAll('.bottom-content .text-content p');
mainText4[1].innerHTML = (siteContent["main-content"]["product-content"]);

let mainContent5 = document.querySelectorAll('.bottom-content .text-content h4');
mainContent5[2].innerHTML = (siteContent["main-content"]["vision-h4"]);

let mainText5 = document.querySelectorAll('.bottom-content .text-content p');
mainText5[2].innerHTML = (siteContent["main-content"]["vision-content"]);
let contact = document.querySelector(".contact h4");

contact.innerHTML = (siteContent["contact"]["contact-h4"])
let contact0 = document.querySelectorAll(".contact p");

contact0[0].innerHTML = (siteContent["contact"]["address"])
let contact1 = document.querySelectorAll(".contact p");

contact1[1].innerHTML = (siteContent["contact"]["phone"])
let contact2 = document.querySelectorAll(".contact p");

contact2[2].innerHTML = (siteContent["contact"]["email"])
let footer = document.querySelector("footer p");

footer.innerHTML = (siteContent["footer"]["copyright"]);
let oldNav = document.querySelector("nav");

