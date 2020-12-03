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

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"]);

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const navLinks = document.querySelectorAll('nav a');
const navLinks0 = navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
const navLinks1 = navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
const navLinks2 = navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
const navLinks3 = navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
const navLinks4 = navLinks[4].textContent = siteContent["nav"]["nav-item-5"]; 
const navLinks5 = navLinks[5].textContent = siteContent["nav"]["nav-item-6"];
navLinks.forEach( link => { link.style.color = "green"})

const ctaSection = document.querySelector('h1'); 
ctaSection.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

const topSection = document.querySelector('.top-content');
topSection.children[0].children[0].textContent = siteContent['main-content']['features-h4']
topSection.children[0].children[1].textContent = siteContent['main-content']['features-content']
topSection.children[1].children[0].textContent = siteContent['main-content']['about-h4']
topSection.children[1].children[1].textContent = siteContent ['main-content']['about-content']

const bottomSection = document.querySelector('.bottom-content')
bottomSection.children[0].children[0].textContent = siteContent['main-content']['services-h4']
bottomSection.children[0].children[1].textContent = siteContent['main-content']['services-content']
bottomSection.children[1].children[0].textContent = siteContent['main-content']['product-h4']
bottomSection.children[1].children[1].textContent = siteContent['main-content']['product-content']
bottomSection.children[2].children[0].textContent = siteContent['main-content']['vision-h4']
bottomSection.children[2].children[1].textContent = siteContent['main-content']['vision-content']

const contactSection = document.querySelector('.contact');
contactSection.children[0].textContent = siteContent['contact']['contact-h4']
contactSection.children[1].textContent = siteContent['contact']['address']
contactSection.children[2].textContent = siteContent['contact']['phone']
contactSection.children[3].textContent = siteContent['contact']['email']

const newPText = document.getElementsByTagName("p");
newPText[8].textContent = siteContent["footer"]["copyright"];

const navNew = document.querySelector('nav')
navNew.append(navLinks);
navNew.append(navLinks6);