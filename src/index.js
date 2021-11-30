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

// navigation
const nav = document.querySelectorAll('nav a');
const linkTexts = Object.values(siteContent.nav)
nav.forEach((link, idx)=> {link.textContent = linkTexts[idx]
  link.classList.add("italic")
});
console.log(nav);

// logo
const logo = document.querySelector('#logo-img');
logo.setAttribute('src', siteContent.images['logo-img']);

// cta
const callToAction = document.querySelector('h1');
callToAction.textContent = siteContent.cta.h1;

// button
const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

// cta image
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.images['cta-img']);

// top content headers
const topContentHeaders = document.querySelectorAll('.top-content .text-content h4')
const topHeaderArr = Array.from(topContentHeaders);
topHeaderArr[0].textContent = siteContent['main-content']['features-h4'];
topHeaderArr[1].textContent = siteContent['main-content']['about-h4'];

// top content
const topContent = document.querySelectorAll('.top-content .text-content p');
const topContentArr = Array.from(topContent);
topContentArr[0].textContent = siteContent['main-content']['features-content'];
topContentArr[1].textContent = siteContent['main-content']['about-content'];

// middle img
const midImg = document.querySelector('#middle-img')
midImg.setAttribute('src', siteContent.images['accent-img']);

// bottom content headers
const bottomContentHeaders = document.querySelectorAll('.bottom-content .text-content h4')
const bottomHeaderArr = Array.from(bottomContentHeaders);
bottomHeaderArr[0].textContent = siteContent['main-content']['services-h4'];
bottomHeaderArr[1].textContent = siteContent['main-content']['product-h4'];
bottomHeaderArr[2].textContent = siteContent['main-content']['vision-h4'];

// bottom content
const bottomContent = document.querySelectorAll('.bottom-content .text-content p');
const bottomContentArr = Array.from(bottomContent);
bottomContentArr[0].textContent = siteContent['main-content']['services-content'];
bottomContentArr[1].textContent = siteContent['main-content']['product-content'];
bottomContentArr[2].textContent = siteContent['main-content']['vision-content'];

// contact
const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent.contact['contact-h4'];

const contactDetails = document.querySelectorAll('.contact p')
contactDetailsArr = Array.from(contactDetails);
contactDetailsArr[0].textContent = siteContent.contact.address;
contactDetailsArr[1].textContent = siteContent.contact.phone;
contactDetailsArr[2].textContent = siteContent.contact.email;

// footer
const footer = document.querySelector('footer a');
footer.textContent = siteContent.footer.copyright;
footer.classList.add('bold');
