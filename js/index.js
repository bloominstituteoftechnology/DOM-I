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

let nav = document.querySelector('nav');
nav.childNodes[1].textContent = siteContent["nav"]["nav-item-1"];
nav.childNodes[3].textContent = siteContent["nav"]["nav-item-2"];
nav.childNodes[5].textContent = siteContent["nav"]["nav-item-3"];
nav.childNodes[7].textContent = siteContent["nav"]["nav-item-4"];
nav.childNodes[9].textContent = siteContent["nav"]["nav-item-5"];
nav.childNodes[11].textContent = siteContent["nav"]["nav-item-6"];

let ctaH1 = document.querySelector('.cta h1');
ctaH1.textContent = siteContent.cta.h1;

let ctaBtn = document.querySelector('.cta button');
ctaBtn.textContent = siteContent.cta.button;

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];

let featuresH4 = document.querySelector('.top-content .text-content h4');
featuresH4.textContent = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelector('.top-content .text-content p');
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector('.top-content').childNodes[3].querySelector('h4');
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelector('.top-content').childNodes[3].querySelector('p');
aboutContent.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

let servicesH4 = document.querySelector('.bottom-content .text-content h4');
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let servicesContent = document.querySelector('.bottom-content .text-content p');
servicesContent.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelector('.bottom-content').childNodes[3].querySelector('h4');
productH4.textContent = siteContent["main-content"]["product-h4"];

let productContent = document.querySelector('.bottom-content').childNodes[3].querySelector('p');
productContent.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelector('.bottom-content').childNodes[5].querySelector('h4');
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = document.querySelector('.bottom-content').childNodes[5].querySelector('p');
visionContent.textContent = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector('.contact').childNodes[1];
contactH4.textContent = siteContent["contact"]["contact-h4"];

let address = document.querySelector('.contact').childNodes[3];
address.textContent = siteContent["contact"]["address"];

let phone = document.querySelector('.contact').childNodes[5];
phone.textContent = siteContent["contact"]["phone"];

let email = document.querySelector('.contact').childNodes[7];
email.textContent = siteContent["contact"]["email"];

let secondLink = document.createElement('a');
secondLink.href = '#';
secondLink.textContent = 'Team';
document.querySelector('nav').prepend(secondLink);

let firstLink = document.createElement('a');
firstLink.href = '#';
firstLink.textContent = 'Home';
document.querySelector('nav').prepend(firstLink);

let navText = document.querySelectorAll('nav a');
navText.forEach((x) => x.style.color = 'green');
