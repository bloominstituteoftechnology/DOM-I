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

const logoPic = document.querySelector('header img');
logoPic.src = siteContent['images']['logo-img'];

const headerText = document.querySelector('.cta-text h1');
headerText.textContent = siteContent['cta']['h1'];

const headerButton = document.querySelector('.cta-text button');
headerButton.textContent = siteContent['cta']['button'];

const ctaPic = document.querySelector('.cta img');
ctaPic.src = siteContent['images']['cta-img'];

const firstHeadline = document.querySelector('h4:nth-of-type(1)');
firstHeadline.textContent = siteContent['main-content']['features-h4'];

const headlinesNL = document.querySelectorAll('h4');
const headlinesArray = Array.from(headlinesNL);
headlinesArray[1].textContent = siteContent['main-content']['about-h4'];
headlinesArray[2].textContent = siteContent['main-content']['services-h4'];
headlinesArray[3].textContent = siteContent['main-content']['product-h4'];
headlinesArray[4].textContent = siteContent['main-content']['vision-h4'];

const contentNL = document.querySelectorAll('p');
const contentArray = Array.from(contentNL);
contentArray[0].textContent = siteContent['main-content']['features-content'];
contentArray[1].textContent = siteContent['main-content']['about-content'];
contentArray[2].textContent = siteContent['main-content']['services-content'];
contentArray[3].textContent = siteContent['main-content']['product-content'];
contentArray[4].textContent = siteContent['main-content']['vision-content'];

const midImg = document.querySelector('.main-content img')
midImg.src = siteContent['images']['accent-img']

const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

contentNL[5].textContent = siteContent['contact']['address']
contentNL[6].textContent = siteContent['contact']['phone']
contentNL[7].textContent = siteContent['contact']['email']

const copyrightText = document.querySelector('footer a')
copyrightText.textContent = siteContent['footer']['copyright']

const navNL = document.querySelectorAll('nav a');
const navArray = Array.from(navNL);
navArray[0].textContent = siteContent['nav']['nav-item-1']
navArray[1].textContent = siteContent['nav']['nav-item-2']
navArray[2].textContent = siteContent['nav']['nav-item-3']
navArray[3].textContent = siteContent['nav']['nav-item-4']
navArray[4].textContent = siteContent['nav']['nav-item-5']
navArray[5].textContent = siteContent['nav']['nav-item-6']