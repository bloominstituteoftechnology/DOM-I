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

let navigation = document.querySelectorAll('a');
for (let i = 0; i < navigation.length; i++) {
  navigation[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  navigation[i].style.textDecoration = 'none';
};

const header = document.querySelector('h1');
header.textContent=siteContent.cta.h1;
header.style.textAlign="center";


const headerButton = document.querySelector('button');
headerButton.textContent=siteContent.cta.button;

const ctaImg = document.getElementById("cta-img");
ctaImg.src=siteContent.cta["img-src"];

const contentHeader = document.querySelectorAll('.text-content h4');
contentHeader[0].textContent=siteContent["main-content"]["features-h4"];
contentHeader[1].textContent=siteContent["main-content"]["about-h4"];
contentHeader[2].textContent=siteContent["main-content"]["services-h4"];
contentHeader[3].textContent=siteContent["main-content"]["product-h4"];
contentHeader[4].textContent=siteContent["main-content"]["vision-h4"];


const contentParagraph = document.querySelectorAll('.text-content p')
contentParagraph[0].textContent= siteContent["main-content"]["features-content"];
contentParagraph[1].textContent= siteContent["main-content"]["about-content"];
contentParagraph[2].textContent= siteContent["main-content"]["services-content"];
contentParagraph[3].textContent=siteContent["main-content"]["product-content"];
contentParagraph[4].textContent= siteContent["main-content"]["vision-content"];


let image = document.getElementById("middle-img");
image.src=siteContent["main-content"]["middle-img-src"];
image.style.height="120px";
image.style.width="100%";

const contactheader =document.querySelector('.contact h4');
contactheader.textContent="Contact";

const contactParagraph = document.querySelectorAll('.contact p');
contactParagraph[0].textContent= siteContent ['contact']['address'];
contactParagraph[1].textContent=siteContent.contact.phone;
contactParagraph[2].textContent=siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent ['footer']['copyright'];