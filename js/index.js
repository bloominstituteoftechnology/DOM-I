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



// USE SITECONTENT

const nav = document.querySelectorAll('nav a');
nav[0].innerText = siteContent['nav']['nav-item-1'];
nav[1].innerText = siteContent['nav']['nav-item-2'];
nav[2].innerText = siteContent['nav']['nav-item-3'];
nav[3].innerText = siteContent['nav']['nav-item-4'];
nav[4].innerText = siteContent['nav']['nav-item-5'];
nav[5].innerText = siteContent['nav']['nav-item-6'];

const ctaText = document.querySelector('.cta-text');
ctaText.innerHTML = "DOM <br> IS <br> AWESOME!";

// not working
const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

// top section
const h4 = document.querySelectorAll('h4');
const h4TopText1 = h4[0];
h4TopText1.innerText = siteContent['main-content']['features-h4'];

const p = document.querySelectorAll('p');
const pTopText1 = p[0];
pTopText1.innerText = siteContent['main-content']['features-content'];


const h4TopText2 = h4[1];
h4TopText2.innerText = siteContent['main-content']['about-h4'];

const pTopText2 = p[1];
pTopText2.innerText = siteContent['main-content']['about-content'];



// middle section

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]['middle-img-src']);


// bottom section

const h4BottomText1 = h4[2];
h4BottomText1.innerText = siteContent['main-content']['product-h4'];
const pBottomText1 = p[2];
pBottomText1.innerText = siteContent['main-content']['product-content'];

const h4BottomText2 = h4[3];
h4BottomText2.innerText = siteContent['main-content']['vision-h4'];
const pBottomText2 = p[3];
pBottomText2.innerText = siteContent['main-content']['vision-content'];







// Question: if the anchor tags already exist, is what I am doing below redundant?
// const servicesLink = document.createElement("a");
// servicesLink.textContent = "Services";
// servicesLink.href = "#";
// document.querySelector("nav").appendChild(servicesLink);

// const productLink = servicesLink.nextElementSibling;
// productLink.textContent = "Product";

// const visionLink = productLink.nextElementSibling;
// visionLink.textContent = "Vision";

// const featuresLink = visionLink.nextElementSibling;
// featuresLink.textContent = 'Features'

// const aboutLink = featuresLink.nextElementSibling;
// aboutLink.textContent = "About"

// const contactLink = aboutLink.nextElementSibling;
// contactLink.textContent='Contact'

// const servicesLink = document.createElement("a");
// servicesLink.textContent = "Services";
// servicesLink.href = "#";
// document.querySelector("nav").appendChild(servicesLink);

// const productLink = document.createElement("a");
// productLink.textContent = "Product";
// productLink.href = "#";
// document.querySelector("nav").appendChild(productLink);