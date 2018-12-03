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

const navItems = document.querySelectorAll('a');
navItems.forEach((item, index) => item.textContent = siteContent.nav[`nav-item-${index+1}`]);

const ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];

const allH4 = document.querySelectorAll('.main-content h4');
allH4[0].textContent = siteContent["main-content"]["features-h4"];
allH4[1].textContent = siteContent["main-content"]["about-h4"];
allH4[2].textContent = siteContent["main-content"]["services-h4"];
allH4[3].textContent = siteContent["main-content"]["product-h4"];
allH4[4].textContent = siteContent["main-content"]["vision-h4"];

const allMainP = document.querySelectorAll('.main-content p');
allMainP[0].textContent = siteContent["main-content"]["features-content"];
allMainP[1].textContent = siteContent["main-content"]["about-content"];
allMainP[2].textContent = siteContent["main-content"]["services-content"];
allMainP[3].textContent = siteContent["main-content"]["product-content"];
allMainP[4].textContent = siteContent["main-content"]["vision-content"];

const mainMiddleImg = document.querySelector('#middle-img');
mainMiddleImg.src = siteContent["main-content"]["middle-img-src"];