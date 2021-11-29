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
// Nav Section
const navServices = document.querySelector('.nav-item-1');
const navProduct = document.querySelector('.nav-item-2');
const navVision = document.querySelector('.nav-item-3');
const navFeatures = document.querySelector('.nav-item-4');
const navAbout = document.querySelector('.nav-item-5');
const navContact = document.querySelector('.nav-item-6');

navServices.textContent = siteContent['nav']['nav-item-1'];
navProduct.textContent = siteContent['nav']['nav-item-2'];
navVision.textContent = siteContent['nav']['nav-item-3'];
navFeatures.textContent = siteContent['nav']['nav-item-4'];
navAbout.textContent = siteContent['nav']['nav-item-5'];
navContact.textContent = siteContent['nav']['nav-item-6'];

// Images
const logoImage = document.getElementById('logo-img');
logoImage.src = "http://localhost:9000/img/logo.png"

const ctaImage = document.getElementById('cta-img');
ctaImage.src = "http://localhost:9000/img/cta.png"

const middleImage = document.getElementById('middle-img');
middleImage.src = "http://localhost:9000/img/accent.png"
    
//CTA
const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

//Main Content
const features = document.querySelector('.text-content:nth-of-type(1) h4');
features.textContent = siteContent['main-content']['features-h4'];
const featuresContent = document.querySelector('.text-content:nth-of-type(1) p');
featuresContent.textContent = siteContent['main-content']['features-content'];

const about = document.querySelector('.text-content:nth-of-type(2) h4');
about.textContent = siteContent['main-content']['about-h4'];
const aboutContent = document.querySelector('.text-content:nth-of-type(2) p');
aboutContent.textContent = siteContent['main-content']['about-content'];

const services = document.querySelector('.text-content:nth-of-type(3) h4');
services.textContent = siteContent['main-content']['services-h4'];
const servicesContent = document.querySelector('.text-content:nth-of-type(3) p');
servicesContent.textContent = siteContent['main-content']['services-content'];

const product = document.querySelector('.text-content:nth-of-type(4) h4');
product.textContent = siteContent['main-content']['product-h4'];
const productContent = document.querySelector('.text-content:nth-of-type(4) p');
productContent.textContent = siteContent['main-content']['product-content'];

const vision = document.querySelector('.text-content:nth-of-type(5) h4');
vision.textContent = siteContent['main-content']['vision-h4'];
const visionContent = document.querySelector('.text-content:nth-of-type(4) p');
visionContent.textContent = siteContent['main-content']['vision-content'];


//Contact
const contactHeading = document.querySelector(".contact-h4");
const address = document.querySelector(".address");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

contactHeading.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
phone.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];

//Footer