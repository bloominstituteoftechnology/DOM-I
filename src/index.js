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
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

// Imgs 
const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent.images['logo-img'];

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.images['cta-img']

const middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent.images['accent-img']

// footer 
const footerInfo = document.querySelector('footer a');
footerInfo.textContent = siteContent.footer['copyright'];
footerInfo.classList.add('bold');

// section 
const sectionInfo = document.querySelector('.contact');
sectionInfo.children[0].textContent = siteContent.contact['contact-h4']
sectionInfo.children[1].textContent = siteContent.contact['address']
sectionInfo.children[2].textContent = siteContent.contact['phone']
sectionInfo.children[3].textContent = siteContent.contact['email']

// main section 
const mainContent = document.querySelector('.main-content');
mainContent.children[0].children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
mainContent.children[0].children[0].children[1].textContent = siteContent['main-content']['features-content'];

mainContent.children[0].children[1].children[0].textContent = siteContent['main-content']['about-h4']
mainContent.children[0].children[1].children[1].textContent = siteContent['main-content']['about-content'];

const bottomContent = document.querySelector('.bottom-content')

bottomContent.children[0].children[0].textContent = siteContent["main-content"]["product-h4"]
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["product-content"];

bottomContent.children[1].children[0].textContent = siteContent['main-content']['vision-h4']
bottomContent.children[1].children[1].textContent = siteContent['main-content']['vision-content']

// navigation 
const container = document.querySelectorAll('nav a');
const newArr = Array.from(container)
newArr[0].textContent = siteContent.nav['nav-item-1']
newArr[1].textContent = siteContent.nav['nav-item-2']
newArr[2].textContent = siteContent.nav['nav-item-3']
newArr[3].textContent = siteContent.nav['nav-item-4']
newArr[4].textContent = siteContent.nav['nav-item-5']

// cta 
const ctaInfo = document.querySelector('.cta-text');
ctaInfo.children[0].textContent = siteContent.cta['h1']
ctaInfo.children[1].textContent = siteContent.cta['button']