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

//images
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent['images']['logo-img'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['images']['cta-img'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['images']['accent-img'];

//footer
const footer = document.querySelector('footer');
const footerLink = document.querySelector('footer a');
footerLink.classList.add('bold')
footerLink.textContent = siteContent['footer']['copyright'];

//contact
const contact = document.querySelector('.contact');
const contactHeading = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');

contactHeading.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

//middle content
const mainContent = document.querySelector('.main-content');
const topContent = mainContent.children[0];
const features = topContent.children[0];
const featuresH4 = features.querySelector('h4');
const featuresText = features.querySelector('p');
const about = topContent.children[1];
const aboutH4 = about.querySelector('h4');
const aboutText = about.querySelector('p');

featuresH4.textContent = siteContent['main-content']['features-h4'];
featuresText.textContent = siteContent['main-content']['features-content'];
aboutH4.textContent = siteContent['main-content']['about-h4'];
aboutText.textContent = siteContent['main-content']['about-content'];



const bottomContent = mainContent.children[2];
const services = bottomContent.children[0];
const servicesH4 = services.querySelector('h4');
const servicesText = services.querySelector('p');
const product = bottomContent.children[1];
const productH4 = product.querySelector('h4');
const productText = product.querySelector('p');
const vision = bottomContent.children[2];
const visionH4 = vision.querySelector('h4');
const visionText = vision.querySelector('p');

servicesH4.textContent = siteContent['main-content']['services-h4'];
servicesText.textContent = siteContent['main-content']['services-content'];
productH4.textContent = siteContent['main-content']['product-h4'];
productText.textContent = siteContent['main-content']['product-content'];
visionH4.textContent = siteContent['main-content']['vision-h4'];
visionText.textContent = siteContent['main-content']['vision-content'];


