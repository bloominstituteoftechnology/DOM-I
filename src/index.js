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

console.log('project wired!')

const nav = document.querySelectorAll('nav a');
const linkTexts = Object.values(siteContent.nav)

nav.forEach((link,idx) => {
  link.textContent = linkTexts[idx]
});

const logoTitle = document.querySelector('.logo');
logoTitle.src = "http://localhost:9000/img/logo.png";

const domHead = document.querySelector('.cta-text h1');
domHead.textContent = siteContent.cta.h1;

const awesomeButton = document.querySelector('.cta-text button');
awesomeButton.textContent = siteContent.cta.button;

const snippetImg = document.querySelector('#cta-img');
snippetImg.src = "http://localhost:9000/img/cta.png";

const featuresContent = document.querySelector('.text-content h4');
featuresContent.textContent = siteContent['main-content']['features-h4'];

const featuresContext = document.querySelector('.text-content p');
featuresContext.textContent = siteContent['main-content']['features-content'];

const aboutContent = document.querySelector('.text-content:nth-of-type(2) h4');
aboutContent.textContent = siteContent['main-content']['about-h4'];

const aboutContext = document.querySelector('.text-content:nth-of-type(2) p');
aboutContext.textContent = siteContent['main-content']['about-content'];

const accentImg = document.querySelector('.middle-img');
accentImg.src = "http://localhost:9000/img/accent.png";

const servicesContent = document.querySelector('.bottom-content .text-content h4');
servicesContent.textContent = siteContent['main-content']['services-h4'];

const servicesContext = document.querySelector('.bottom-content .text-content p');
servicesContext.textContent = siteContent['main-content']['services-content'];

const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productContent.textContent = siteContent['main-content']['product-h4'];

const productContext = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productContext.textContent = siteContent['main-content']['product-content'];

const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionContent.textContent = siteContent['main-content']['vision-h4'];

const visionContext = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionContext.textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact h4');
contact.textContent = siteContent.contact['contact-h4'];

const address = document.querySelector('.contact p');
address.textContent = siteContent.contact.address;

const phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = siteContent.contact.phone;

const email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = siteContent.contact.email;

const footer = document.querySelector('footer a');
footer.textContent = siteContent.footer.copyright;