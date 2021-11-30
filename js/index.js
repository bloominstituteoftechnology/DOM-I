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
  "images": {
    "logo-img": "img/logo.png",
    "cta-img": "img/header-img.png",
    "accent-img": "img/mid-page-accent.jpg",
  },
};

//nav
const navLinks = document.querySelectorAll('nav a');
const linkTexts = Object.values(siteContent.nav)
navLinks.forEach((link, index) => link.textContent = linkTexts[index]);

const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img'];

//cta
const ctaHeader = document.querySelector('h1');
ctaHeader.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.images['cta-img'];

//main-content
const topContent = document.querySelector('.top-content')
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4']
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content']
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4']
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content']

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent.images['accent-img'];

const bottomContent = document.querySelector('.bottom-content')
bottomContent.children[0].children[0].textContent = siteContent['main-content']['services-h4']
bottomContent.children[0].children[1].textContent = siteContent['main-content']['services-content']
bottomContent.children[1].children[0].textContent = siteContent['main-content']['product-h4']
bottomContent.children[1].children[1].textContent = siteContent['main-content']['product-content']
bottomContent.children[2].children[0].textContent = siteContent['main-content']['vision-h4']
bottomContent.children[2].children[1].textContent = siteContent['main-content']['vision-content']

//contact
const contact = document.querySelector('section.contact')
contact.querySelector('h4').textContent = siteContent.contact['contact-h4']
contact.children[1].textContent = siteContent.contact['address']
contact.children[2].textContent = siteContent.contact['phone']
contact.children[3].textContent = siteContent.contact['email']

//footer
const footNote = document.querySelector('footer');
footNote.textContent = siteContent.footer.copyright;
footNote.classList.add('bold')


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
