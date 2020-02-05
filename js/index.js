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

// Update Remaining Images
let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent.cta["img-src"];

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Update Navbar
const navBar = document.querySelectorAll("nav a")
navBar.forEach((item, index) => item.textContent = siteContent.nav["nav-item-"+(index+1)])

//Update the rest of the Header
const heading = document.querySelector('h1');
heading.innerHTML = siteContent.cta.h1.split(' ').join('<br>');

const buttonText = document.querySelector('button');
buttonText.textContent = siteContent.cta.button;

//Update the Main content
const arrOfSmallHeadings = Object.values(siteContent["main-content"]).filter(item =>
    item.split(' ').length < 2 && !item.includes('jpg'));

const smallHeadings = document.querySelectorAll('h4');
smallHeadings.forEach((item, index) => item.textContent = arrOfSmallHeadings[index]);

const arrOfContent = Object.values(siteContent["main-content"]).filter(item =>
  item.split(' ').length > 1);
const textBoxes = document.querySelectorAll('.text-content p');
textBoxes.forEach((item, index) => item.textContent = arrOfContent[index]);

//Update the contact section
const contactSectionHeader = document.querySelector('.contact h4');
contactSectionHeader.textContent = siteContent.contact["contact-h4"];

const contactArr = Object.values(siteContent.contact).map(item => item.includes('et') ? item.split('et').join('et<br>') : item);
const contactPs = document.querySelectorAll('.contact p')
contactPs.forEach((item, index) => item.innerHTML = contactArr[index+1]);

//Update the footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;