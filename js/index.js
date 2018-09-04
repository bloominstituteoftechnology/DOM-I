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

/* header & nav*/

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.querySelectorAll("nav a");
links.forEach((elem, i) => elem.innerText = siteContent["nav"][`nav-item-${i+1}`]);

/* call to action */

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerText = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerText = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

/* main content */

let topContentHeaders = document.querySelectorAll(".top-content .text-content h4");
topContentHeaders[0].innerText = siteContent["main-content"]["features-h4"];
topContentHeaders[1].innerText = siteContent["main-content"]["about-h4"];

let topContentParagraphs = document.querySelectorAll(".top-content .text-content p");
topContentParagraphs[0].innerText = siteContent["main-content"]["features-content"];
topContentParagraphs[1].innerText = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContentHeaders = document.querySelectorAll(".bottom-content .text-content h4");
bottomContentHeaders[0].innerText = siteContent["main-content"]["services-h4"];
bottomContentHeaders[1].innerText = siteContent["main-content"]["product-h4"];
bottomContentHeaders[2].innerText = siteContent["main-content"]["vision-h4"];

let bottomContentParagraphs = document.querySelectorAll(".bottom-content .text-content p");
bottomContentParagraphs[0].innerText = siteContent["main-content"]["services-content"];
bottomContentParagraphs[1].innerText = siteContent["main-content"]["product-content"];
bottomContentParagraphs[2].innerText = siteContent["main-content"]["vision-content"];

/* contact */

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerText =siteContent["contact"]["contact-h4"];

let contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].innerText = siteContent["contact"]["address"];
contactParagraphs[1].innerText = siteContent["contact"]["phone"];
contactParagraphs[2].innerText = siteContent["contact"]["email"];

/* footer */

let footer = document.querySelector("footer p");
footer.innerText = siteContent["footer"]["copyright"];

/* Prepend and appendChild */
let nav = document.querySelector("header nav");
nav.prepend(document.createElement('a').innerText = "Home");

let link = document.createElement('a');
link.innerText = "Shop";
nav.appendChild(link);

/* Stretch goals */
let btn = document.querySelector(".cta .cta-text button");
btn.addEventListener("click", function(e) {
  console.log("You've clicked the button");
  alert("You've clicked the button");
});