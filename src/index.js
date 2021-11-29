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


const servicesNav = document.querySelector('nav a:nth-of-type(1)');
servicesNav.textContent = siteContent['nav']['nav-item-1'];
servicesNav.classList.add('italic');
const productNav = servicesNav.nextElementSibling;
productNav.textContent = siteContent['nav']['nav-item-2'];
productNav.classList.add('italic');
const visionNav = productNav.nextElementSibling;
visionNav.textContent = siteContent['nav']['nav-item-3'];
visionNav.classList.add('italic');
const featuresNav = visionNav.nextElementSibling;
featuresNav.textContent = siteContent['nav']['nav-item-4'];
featuresNav.classList.add('italic');
const aboutNav = featuresNav.nextElementSibling;
aboutNav.textContent = siteContent['nav']['nav-item-5'];
aboutNav.classList.add('italic');
const contactNav = aboutNav.nextElementSibling;
contactNav.textContent = siteContent['nav']['nav-item-6'];
contactNav.classList.add('italic');

// const links = document.querySelectorAll('nav a');
// links.forEach(function(link) {
//   const linksArray = Array.from(links);
//   linksArray.classList.add('italic')
// });



const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['images']['logo-img']);

const headline = document.querySelector('h1');
headline.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const ctaLogo = document.getElementById('cta-img');
ctaLogo.setAttribute('src', siteContent['images']['cta-img']);

const featuresTitle = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
featuresTitle.textContent = siteContent['main-content']['features-h4'];
const featuresText = document.querySelector('.top-content .text-content:nth-of-type(1) p');
featuresText.textContent = siteContent['main-content']['features-content'];

const aboutTitle = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
aboutTitle.textContent = siteContent['main-content']['about-h4'];
const aboutText = document.querySelector('.top-content .text-content:nth-of-type(2) p');
aboutText.textContent = siteContent['main-content']['about-content'];

const accentLogo = document.getElementById('middle-img');
accentLogo.setAttribute('src', siteContent['images']['accent-img']);

const servicesTitle = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
servicesTitle.textContent = siteContent['main-content']['services-h4'];
const servicesText = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
servicesText.textContent = siteContent['main-content']['services-content'];

const productTitle = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productTitle.textContent = siteContent['main-content']['product-h4'];
const productText = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productText.textContent = siteContent['main-content']['product-content'];

const visionTitle = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionTitle.textContent = siteContent['main-content']['vision-h4'];
const visionText = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionText.textContent = siteContent['main-content']['vision-content'];

const footerContact = document.querySelector('.contact h4');
footerContact.textContent = siteContent['contact']['contact-h4'];

const footerAddress = document.querySelector('.contact p:nth-of-type(1)');
footerAddress.textContent = siteContent['contact']['address'];

const footerPhone = document.querySelector('.contact p:nth-of-type(2)');
footerPhone.textContent = siteContent['contact']['phone'];

const footerEmail = document.querySelector('.contact p:nth-of-type(3)');
footerEmail.textContent = siteContent['contact']['email'];

const copyright = document.querySelector('footer a');
copyright.textContent = siteContent['footer']['copyright'];
copyright.classList.add('bold');