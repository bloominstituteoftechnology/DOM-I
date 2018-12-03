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

let navLinks = document.querySelectorAll("nav a");

for (let i = 0; i < 6; i++) {
  navLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  navLinks[i].style.color = "green";
}

let nav = document.querySelector("nav");

let catPics = navLinks[5].cloneNode(true);
let giveUsMoney = navLinks[5].cloneNode(true);
catPics.textContent = "Cat Pics";
giveUsMoney.textContent = "Money Please";

nav.appendChild(catPics);
nav.appendChild(giveUsMoney);

let ctaH1 = document.querySelector(".cta h1");
ctaH1.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let topContent = document.querySelectorAll(".main-content .top-content .text-content");

topContent[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
topContent[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];

topContent[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
topContent[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

let bottomContent = document.querySelectorAll(".main-content .bottom-content .text-content");

bottomContent[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].querySelector("p").textContent = siteContent["main-content"]["services-content"];

bottomContent[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];

bottomContent[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];

let contactTexts = document.querySelectorAll(".contact p");
contactTexts[0].textContent = siteContent["contact"]["address"];
contactTexts[1].textContent = siteContent["contact"]["phone"];
contactTexts[2].textContent = siteContent["contact"]["email"];

let footerCopyright = document.querySelector("footer p");
footerCopyright.textContent = siteContent["footer"]["copyright"];


