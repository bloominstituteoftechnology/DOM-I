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
};

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent.nav['img-src']);

// nav bar
const links = document.querySelectorAll('header > nav a');
const sources = Object.keys(siteContent.nav);

for (let i = 0; i < links.length; i++) {
  links[i].innerText = siteContent.nav[sources[i]];
}

// CTA 
const ctaHeader = document.querySelector('.cta .cta-text h1');
ctaHeader.innerText = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerText = siteContent.cta.button;

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.cta['img-src'];

// Main Content
// const topContentSections = document.querySelectorAll('.main-content .top-content .text-content');
// topContentSections.forEach(i => i.style.width = '50%');

const featuresH4 = document.querySelector('.main-content .top-content .text-content h4');
featuresH4.innerText = siteContent['main-content']['features-h4'];

const featuresPara = document.querySelector('.main-content .top-content .text-content p');
featuresPara.innerText = siteContent['main-content']['features-content'];

const aboutSection = document.querySelectorAll('.main-content .top-content .text-content')[1];
const aboutH4 = aboutSection.querySelector('h4');
aboutH4.innerText = siteContent['main-content']['about-h4'];
const aboutPara = aboutSection.querySelector('p');
aboutPara.innerText = siteContent['main-content']['about-content'];


const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// const bottomContentSections = document.querySelectorAll('.main-content .bottom-content .text-content');
// bottomContentSections.forEach(section => section.style.width = '33%');

const servicesH4 = document.querySelector('.main-content .bottom-content .text-content h4');
servicesH4.innerText = siteContent['main-content']['services-h4'];

const servicesPara = document.querySelector('.main-content .bottom-content .text-content p')
servicesPara.innerText = siteContent['main-content']['services-content'];

const productH4 = document.querySelectorAll('.main-content .bottom-content .text-content h4')[1];
productH4.innerText = siteContent['main-content']['product-h4']

const productPara = document.querySelectorAll('.main-content .bottom-content .text-content p')[1];
productPara.innerText = siteContent['main-content']['product-content']

const visionH4 = document.querySelectorAll('.main-content .bottom-content .text-content H4')[2];
visionH4.innerText = siteContent['main-content']['vision-h4']

const visionPara = document.querySelectorAll('.main-content .bottom-content .text-content p')[2];
visionPara.innerText = siteContent['main-content']['vision-content']

// Contact

const contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent.contact['contact-h4'];

const contactKeys = Object.keys(siteContent.contact);
const contactParas = document.querySelectorAll('.contact p');

for (let i = 0; i < contactParas.length; i++) {
  contactParas[i].innerText = siteContent.contact[contactKeys[i + 1]];
}

// Footer

document.querySelector('footer p').innerText = siteContent.footer.copyright;

//Task 4: Add new content

links.forEach(l => l.style.color = 'green');

const navBar = document.querySelector('header nav');
const firstLink = document.createElement('a');
const lastLink = document.createElement('a');

firstLink.innerText = 'Justin';
lastLink.innerText = 'Lowry';

navBar.prepend(firstLink);
navBar.appendChild(lastLink);
