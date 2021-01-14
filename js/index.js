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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// * My Code Starts Below

// > Nav & Header

// header-img 
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];

// navbar
const aEls = document.querySelectorAll('a');
for (let i=0; i<aEls.length; i++) {
  aEls[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

// Title text
const h1El = document.querySelector('h1');
const titleText = siteContent.cta.h1.split(" ");
const titleHtml = `${titleText[0]} <br /> ${titleText[1]} <br /> ${titleText[2]}`;
h1El.innerHTML = titleHtml;

// button "get started"
const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

// > Main content

//  Top content
const topContent = document.querySelector('.top-content').children;
const topDiv1 = topContent[0].children;

// Features Section
topDiv1[0].innerHTML = siteContent["main-content"]["features-h4"];
topDiv1[1].innerHTML = siteContent["main-content"]["features-content"];

// About Section
const topDiv2 = topContent[1].children;
topDiv2[0].innerHTML = siteContent["main-content"]["about-h4"];
topDiv2[1].innerHTML = siteContent["main-content"]["about-content"];

// Middle-Img
const imgEl = document.querySelector('.middle-img');
imgEl.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom content
const bottomContent = document.querySelector('.bottom-content').children;
bottomContent[0].children[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContent[0].children[1].innerHTML = siteContent["main-content"]["services-content"];
bottomContent[1].children[0].innerHTML = siteContent["main-content"]["product-h4"];
bottomContent[1].children[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContent[2].children[0].innerHTML = siteContent["main-content"]["vision-h4"];
bottomContent[2].children[1].innerHTML = siteContent["main-content"]["vision-content"];

// Contact Section
const contactSection = document.querySelector('section.contact').children;
const splitAddress = siteContent["contact"]["address"].split(" ");
splitAddress.splice(4, 0, "<br />");
contactSection[0].innerHTML = siteContent["contact"]["contact-h4"];
contactSection[1].innerHTML = splitAddress.join(" ");
contactSection[2].innerHTML = siteContent["contact"]["phone"];
contactSection[3].innerHTML = siteContent["contact"]["email"];

// footer Copyright
const footer = document.querySelector('footer').children;
footer[0].innerHTML = siteContent["footer"]["copyright"];