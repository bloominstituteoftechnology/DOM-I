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

// images

let cta = document.getElementById("cta-img");
cta.setAttribute("src", siteContent["cta"]["img-src"])

let middle = document.getElementById("middle-img");
middle.setAttribute("src", siteContent["main-content"]["middle-img-src"])

// nav

let nav = document.getElementsByClassName("container")[0].children[0].children[0];
// console.log(nav.children)
nav.children[0].innerHTML = siteContent.nav["nav-item-1"].fontcolor("green");
nav.children[1].innerHTML = siteContent.nav["nav-item-2"].fontcolor("green");
nav.children[2].innerHTML = siteContent.nav["nav-item-3"].fontcolor("green");
nav.children[3].innerHTML = siteContent.nav["nav-item-4"].fontcolor("green");
nav.children[4].innerHTML = siteContent.nav["nav-item-5"].fontcolor("green");
nav.children[5].innerHTML = siteContent.nav["nav-item-6"].fontcolor("green");

let glorp = document.createElement("a");
glorp.innerHTML = "Glorp".fontcolor("green");
nav.appendChild(glorp);

let clam = document.createElement("a");
clam.innerHTML = "Clam".fontcolor("green");
nav.prepend(clam);

// cta 

let ctaText = document.getElementsByClassName("cta-text")[0];
ctaText.children[0].innerHTML = siteContent.cta["h1"];

ctaText.children[1].innerHTML = siteContent.cta["button"];

// Top Content

let features = document.getElementsByClassName("top-content")[0];
features.children[0].children[0].innerHTML = siteContent["main-content"]["features-h4"]

features.children[0].children[1].innerHTML = siteContent["main-content"]["features-content"]

let about = document.getElementsByClassName("top-content")[0].children[1];
// console.log(about)
about.children[0].innerHTML = siteContent["main-content"]["about-h4"]

about.children[1].innerHTML = siteContent["main-content"]["about-content"]

// Bottom Content 

let services = document.getElementsByClassName("bottom-content")[0].children[0];
services.children[0].innerHTML = siteContent ["main-content"]["services-h4"]

services.children[1].innerHTML = siteContent ["main-content"]["services-content"]

let vision = document.getElementsByClassName("bottom-content")[0].children[1];
vision.children[0].innerHTML = siteContent ["main-content"]["vision-h4"]

vision.children[1].innerHTML = siteContent ["main-content"]["vision-content"]

let product = document.getElementsByClassName("bottom-content")[0].children[2];
product.children[0].innerHTML = siteContent ["main-content"]["product-h4"]

product.children[1].innerHTML = siteContent ["main-content"]["product-content"]


// contact

let contact = document.getElementsByClassName("contact")[0];
contact.children[0].innerHTML = siteContent ["contact"]["contact-h4"];

let address = document.getElementsByClassName("contact")[0];
address.children[1].innerHTML = siteContent ["contact"]["address"]

let phone = document.getElementsByClassName("contact")[0];
phone.children[2].innerHTML = siteContent ["contact"]["phone"];

let email = document.getElementsByClassName("contact")[0];
email.children[3].innerHTML = siteContent ["contact"]["email"];

// footer 

let footer = document.getElementsByTagName("footer")[0].children[0].innerHTML = siteContent ["footer"]["copyright"]