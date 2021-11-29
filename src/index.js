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

const navServices = document.querySelector('nav a');
const navProduct = navServices.nextElementSibling;
const navVision = navProduct.nextElementSibling;
const navFeatures = navVision.nextElementSibling;
const navAbout = navFeatures.nextElementSibling;
const navContact = navAbout.nextElementSibling;
const logoImage = document.querySelector('.logo')
const cta = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('button')
const ctaImg = document.querySelector('#cta-img')

const features = document.querySelector('.text-content h4')
const featuresText = features.nextElementSibling;
features.textContent = siteContent['main-content']['features-h4']
featuresText.textContent = siteContent['main-content']['features-content']

const about = document.querySelector('.text-content:nth-of-type(2) h4')
const aboutText = document.querySelector('.text-content:nth-of-type(2) p')
about.textContent = siteContent['main-content']['about-h4']
aboutText.textContent = siteContent['main-content']['about-content']

const middleImg = document.querySelector('.middle-img')
middleImg.src = siteContent['images']['accent-img'];

const services = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
const servicesText = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')
services.textContent = siteContent['main-content']['services-h4']
servicesText.textContent = siteContent['main-content']['services-content']

const product = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
const productText = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
product.textContent = siteContent['main-content']['services-h4']
productText.textContent = siteContent['main-content']['services-content']

const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
const visionText = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
vision.textContent = siteContent['main-content']['vision-h4']
visionText.textContent = siteContent['main-content']['vision-content']

navServices.textContent = siteContent["nav"]["nav-item-1"];
navProduct.textContent = siteContent["nav"]["nav-item-2"];
navVision.textContent = siteContent["nav"]["nav-item-3"];
navFeatures.textContent = siteContent["nav"]["nav-item-4"];
navAbout.textContent = siteContent["nav"]["nav-item-5"];
navContact.textContent = siteContent["nav"]["nav-item-6"];
logoImage.src = siteContent["images"]["logo-img"];
cta.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent["images"]["cta-img"];

const contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent['contact']['contact-h4']

const address = document.querySelector('.contact p')
address.textContent = siteContent['contact']['address']

 const number = document.querySelector('p:nth-of-type(2)')
 number.textContent = siteContent['contact']['phone']

 const email = document.querySelector('p:nth-of-type(3)')
 email.textContent = siteContent['contact']['email']

 const footer = document.querySelector('footer a')
 footer.textContent = siteContent['footer']['copyright']