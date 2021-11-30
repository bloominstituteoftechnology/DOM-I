const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// console.log('project wired!')
// let logo = document.getElementById('logo-img');
// logo.setAttribute('src', siteContent['nav']['img-src'])
// console.log("HEEEYYY!!!! IT'S A ME, MARIOOOO!!!!")

// const nav = document.getElementsByTagName('nav')
// const links = document.querySelectorAll('nav a')

// Nav Bar
const navLinks = document.querySelectorAll('nav a');
const linkTexts = Object.values(siteContent.nav)
console.log(linkTexts)
navLinks.forEach(function(link, idx){
  link.textContent = linkTexts[idx]
});

// Images
const logoImage = document.querySelector('#logo-img');
console.log(logoImage);
logoImage.src = siteContent.images['logo-img'];

const codeImage = document.querySelector('#cta-img');
codeImage.src = siteContent.images['cta-img'];

const accentImage = document.querySelector('.middle-img');
accentImage.src = siteContent.images['accent-img'];

// Header
const h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent.cta.h1;

const getStartedButton = document.querySelector('.cta-text button');
getStartedButton.textContent = siteContent.cta.button;

// const features = document.querySelector('.text-content h4');
// features.textContent = siteContent["main-content"]['features-h4'];

// const featContent = document.querySelector('.text-content p')
// featContent.textContent = siteContent['main-content']['features-content'];

// const about = document.querySelector('.main-content h4');
// about.textContent = siteContent['main-content']['about-h4']

// const aboutContent = document.querySelector('.text-content p')
// aboutContent.textContent = siteContent['main-content']['about-content']

//Footer Link
const footerLink = document.querySelector('footer a')
footerLink.textContent = siteContent.footer.copyright
footerLink.classList.add('bold')

// Contact
const contact = document.querySelector('section.contact')
contact.children[0].textContent = siteContent.contact['contact-h4']
contact.children[1].textContent = siteContent.contact['address']
contact.children[2].textContent = siteContent.contact['phone']
contact.children[3].textContent = siteContent.contact['email']

// Top Content
const topContent = document.querySelector('.top-content')
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4']
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content']
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4']
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content']

// Bottom Content
const bottomContent = document.querySelector('.bottom-content')
const h4sBottom = bottomContent.querySelectorAll('h4')
h4sBottom[0].textContent = siteContent['main-content']['services-h4']
h4sBottom[1].textContent = siteContent['main-content']['product-h4']
h4sBottom[2].textContent = siteContent['main-content']['vision-h4']
const bottomP = bottomContent.querySelectorAll('p')
bottomP[0].textContent = siteContent['main-content']['services-content']
bottomP[1].textContent = siteContent['main-content']['product-content']
bottomP[2].textContent = siteContent['main-content']['vision-content']