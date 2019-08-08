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
// logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = (siteContent["nav"]["img-src"]);

// const middleImage = document.getElementById('middle-img');
// middleImage.src = (siteContent['main-content']['middle-img-src']);

// const newH1 = document.querySelector('h1');
// newH1.textContent = siteContent.cta.h1;

// const newButton = document.querySelector('button');
// newButton.textContent = siteContent.cta.button;

// const ctaImage = document.getElementById('cta-img');
// ctaImage.src = (siteContent["cta"]["img-src"]);

// const newMainContent = document.querySelector('.mainContent');

// const newContact = document.querySelector('.contact');

// const NewContactP = document.querySelectorAll('.contact p');
// console.log(NewContactP);

// const newFooter = document.querySelector('footer');
// console.log(siteContent.contact);

// newFooter.textContent - siteContent.footer.copyright;

let navTags = document.querySelectorAll('nav a');
navTags[0].textContent = siteContent.nav["nav-item-1"];
navTags[1].textContent = siteContent.nav["nav-item-2"];
navTags[2].textContent = siteContent.nav["nav-item-3"];
navTags[3].textContent = siteContent.nav["nav-item-4"];
navTags[4].textContent = siteContent.nav["nav-item-5"];
navTags[5].textContent = siteContent.nav["nav-item-6"];

let ctaTextH1 = document.querySelector('.cta-text h1');
ctaTextH1.textContent = siteContent.cta.h1;

let ctaTextBtn = document.querySelector('.cta-text button');
ctaTextBtn.textContent = siteContent.cta.button;

let ctaTextImg = document.querySelector('#cta-img');
ctaTextImg.src = siteContent.cta["img-src"];

let mainContentImg = document.querySelector('.main-content img');
let mainContentH4 = document.querySelectorAll('h4'); 
let mainContentP = document.querySelectorAll('.main-content p'); 
mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];

mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];

mainContentImg.src = siteContent["main-content"]["middle-img-src"];

let contactH4 = document.querySelector('.contact h4');
let contactP = document.querySelectorAll('.contact p');
contactH4.textContent = siteContent.contact["contact-h4"];

contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

let footer = document.querySelector('footer p');

footer.textContent = siteContent.footer.copyright;
