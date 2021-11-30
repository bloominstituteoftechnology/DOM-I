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

console.log('project wired!')

const navLinks = document.querySelectorAll('nav a');
const linkTexts = Object.values(siteContent.nav);
navLinks.forEach(function(link, idx){
  link.textContent = linkTexts[idx];
  link.classList.add('italic');
});

//logo
const logoImg = document.querySelector('#logo-img');
console.log(logoImg);
logoImg.src = siteContent.images['logo-img'];

const dom = document.querySelector('.cta-text h1');
dom.textContent = siteContent.cta.h1;

const getStartedButton = document.querySelector('.cta-text Button');
getStartedButton.textContent = siteContent.cta.button;

const codeSnip = document.querySelector('#cta-img');
codeSnip.src = siteContent.images['cta-img'];

const featureTitle = document.querySelector('.main-content .top-content .text-content h4');
featureTitle.textContent = siteContent['main-content']['feature-h4'];


const accentImg = document.querySelector('.middle-img');
accentImg.src = siteContent.images['accent-img'];

const contact = document.querySelector('section.contact');
contact.querySelector('h4').textContent = siteContent.contact['contact-h4'];
contact.children[1].textContent = siteContent.contact['address'];
contact.querySelector('p:nth-of-type(2)').textContent = siteContent.contact['phone'];
contact.children[3].textContent = siteContent.contact['email'];

const topContent = document.querySelector('.top-content');
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content'];

const bottomContent = document.querySelector('.bottom-content');
const h4sbottom = bottomContent.querySelectorAll('h4');
h4sbottom[0].textContent = siteContent['main-content']['about-content'];
h4sbottom[1].textContent = siteContent['main-content']['product-h4'];
h4sbottom[2].textContent = siteContent['main-content']['vision-h4'];
const psBottom = bottomContent.querySelectorAll('p');
psBottom[0].textContent = siteContent['main-content']['services-content'];
psBottom[1].textContent = siteContent['main-content']['product-content'];
psBottom[2].textContent = siteContent['main-content']['vision-content'];


