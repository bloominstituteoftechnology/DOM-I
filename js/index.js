const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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
let cta = document.querySelector('.cta');
let ctaTextH1 = document.querySelector('.cta .cta-text h1');
let ctaTextButton = document.querySelector('.cta .cta-text button');
let ctaImage = document.getElementById('cta-img');
let topContent = document.querySelectorAll('.top-content .text-content');
let features = topContent[0];
let about = topContent[1];
let middleImage = document.getElementById('middle-img');
let bottomContent = document.querySelectorAll('.bottom-content .text-content');
let services = bottomContent[0];
let product = bottomContent[1];
let vision = bottomContent[2];
let contact = document.querySelector('.contact');
let footer = document.querySelector('footer');

nav[0].innerHTML = siteContent["nav"]["nav-item-1"];
nav[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav[4].innerHTML = siteContent["nav"]["nav-item-5"];

ctaTextH1.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br>');
ctaTextButton.innerHTML = siteContent["cta"]["button"];
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);


features.firstElementChild.innerHTML = siteContent["main-content"]["features-h4"];
features.lastElementChild.innerHTML = siteContent["main-content"]["features-content"];

about.firstElementChild.innerHTML = siteContent["main-content"]["about-h4"];
about.lastElementChild.innerHTML = siteContent["main-content"]["about-content"];

middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

services.firstElementChild.innerHTML = siteContent["main-content"]["services-h4"];
services.lastElementChild.innerHTML = siteContent["main-content"]["services-content"];

product.firstElementChild.innerHTML = siteContent["main-content"]["product-h4"];
product.lastElementChild.innerHTML = siteContent["main-content"]["product-content"];

vision.firstElementChild.innerHTML = siteContent["main-content"]["vision-h4"];
vision.lastElementChild.innerHTML = siteContent["main-content"]["vision-content"];

const contactInfo = contact.children;
const contactSource = Object.values(siteContent["contact"])
for (let i=0; i<contactInfo.length; i++) {
  contactInfo[i].innerHTML = contactSource[i];
}

footer.firstElementChild.innerHTML = siteContent["footer"]["copyright"];