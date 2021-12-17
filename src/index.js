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

//  Access relevant elements
const navItems = document.querySelectorAll('nav a');
const nav1 = document.querySelector('nav a:nth-of-type(1)');
const nav2 = document.querySelector('nav a:nth-of-type(2)');
const nav3 = document.querySelector('nav a:nth-of-type(3)');
const nav4 = document.querySelector('nav a:nth-of-type(4)');
const nav5 = document.querySelector('nav a:nth-of-type(5)');
const nav6 = document.querySelector('nav a:nth-of-type(6)');
const headerImg = document.querySelector('header img');
const ctaTitle = document.querySelector('.cta-text h1');
const ctaBtn = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img');
const featSubtitle = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
const featPar = document.querySelector('.top-content .text-content:nth-of-type(1) p');
const aboutSubtitle = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const aboutPar = document.querySelector('.top-content .text-content:nth-of-type(2) p');
const midImg = document.querySelector('.middle-img');
const servicesSubtitle = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servicesPar = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
const productSubtitle = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const productPar = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
const visionSubtitle = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const visionPar = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
const contactSubtitle = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');
const footerLink = document.querySelector('footer a');

// Header 
nav1.classList.add('italic');
nav2.classList.add('italic');
nav3.classList.add('italic');
nav4.classList.add('italic');
nav5.classList.add('italic');
nav6.classList.add('italic');
nav1.textContent = siteContent['nav']['nav-item-1'];
nav2.textContent = siteContent['nav']['nav-item-2'];
nav3.textContent = siteContent['nav']['nav-item-3'];
nav4.textContent = siteContent['nav']['nav-item-4'];
nav5.textContent = siteContent['nav']['nav-item-5'];
nav6.textContent = siteContent['nav']['nav-item-6'];
headerImg.src = siteContent['images']['logo-img'];

// CTA Section
ctaTitle.textContent = siteContent.cta.h1;
ctaBtn.textContent = siteContent.cta.button;
ctaImg.src = siteContent['images']['cta-img'];

// Top Content Section
featSubtitle.textContent = siteContent['main-content']['features-h4'];
featPar.textContent = siteContent['main-content']['features-content'];
aboutSubtitle.textContent = siteContent['main-content']['about-h4'];
aboutPar.textContent = siteContent['main-content']['about-content'];

// Middle Image
midImg.src = siteContent['images']['accent-img'];

// Bottom Content Section
servicesSubtitle.textContent = siteContent['main-content']['services-h4'];
servicesPar.textContent = siteContent['main-content']['services-content'];
productSubtitle.textContent = siteContent['main-content']['product-h4'];
productPar.textContent = siteContent['main-content']['product-content'];
visionSubtitle.textContent = siteContent['main-content']['vision-h4'];
visionPar.textContent = siteContent['main-content']['vision-content'];

// Contact Section
contactSubtitle.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

// Footer
footerLink.classList.add('bold');
footerLink.textContent = siteContent['footer']['copyright'];