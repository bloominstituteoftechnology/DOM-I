const siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  'cta': {
    'h1': 'DOM Is Awesome',
    'button': 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4':'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4':'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4':'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4':'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4':'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4' : 'Contact',
    'address' : '123 Way 456 Street Somewhere, USA',
    'phone' : '1 (888) 888-8888',
    'email' : 'sales@greatidea.io',
  },
  'footer': {
    'copyright' : 'Copyright Great Idea! 2018'
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);


// Selectors

let navLinks = document.querySelectorAll('nav a');

let ctaHdr = document.querySelector('.cta-text h1');
let ctaBtn = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('#cta-img');

let featHdr = document.querySelector('.top-content .text-content h4');
let featContent = document.querySelector('.top-content .text-content p');
let aboutHdr = document.querySelectorAll('.top-content h4')[1];
let aboutContent = document.querySelectorAll('.top-content p')[1];

let middleImg = document.querySelector('.middle-img');

let servicesHdr = document.querySelector('.bottom-content h4');
let servicesContent = document.querySelector('.bottom-content p');
let productHdr = document.querySelectorAll('.bottom-content h4')[1];
let productContent = document.querySelectorAll('.bottom-content p')[1];
let visionHdr = document.querySelectorAll('.bottom-content h4')[2];
let visionContent = document.querySelectorAll('.bottom-content p')[2];

let contactHdr = document.querySelector('.contact h4');
let contactAddress = document.querySelector('.contact p');
let contactNum = document.querySelectorAll('.contact p')[1];
let contactEmail = document.querySelectorAll('.contact p')[2];

let copyright = document.querySelector('footer p');


// Added content

navLinks.forEach((a, ind) => {
  a.textContent = siteContent['nav'][`nav-item-${ind + 1}`] // nav links
  a.style.color = 'green';
});

ctaHdr.innerText = siteContent.cta.h1;
ctaBtn.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];

featHdr.textContent = siteContent['main-content']['features-h4'];
featContent.textContent = siteContent['main-content']['features-content'];
aboutHdr.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];

middleImg.src = siteContent['main-content']['middle-img-src'];

servicesHdr.textContent = siteContent['main-content']['services-h4'];
servicesContent.textContent = siteContent['main-content']['services-content'];
productHdr.textContent = siteContent['main-content']['product-h4'];
productContent.textContent = siteContent['main-content']['product-content'];
visionHdr.textContent = siteContent['main-content']['vision-h4'];
visionContent.textContent = siteContent['main-content']['vision-content'];

contactHdr.textContent = siteContent['contact']['contact-h4'];
contactAddress.textContent = siteContent['contact']['address'];
contactNum.textContent = siteContent['contact']['phone'];
contactEmail.textContent = siteContent['contact']['email'];

copyright.innerText = siteContent['footer']['copyright'];


// New nav items

let nav = document.querySelector('nav');
let first = document.createElement('a'); 
let last = document.createElement('a'); 
first.textContent = 'Sleep';
last.textContent = 'Extra';
nav.appendChild(last);
nav.prepend(first);
navLinks = document.querySelectorAll('nav a');


// New styles

first.style.color = 'green';
last.style.color = 'green';

ctaBtn.addEventListener('click', () => {
  document.body.style.background = 'linear-gradient(#e66465, #9198e5)';
  navLinks.forEach(a => a.style.color = 'rgb(198, 190, 100)');
});