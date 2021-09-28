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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav bar section
const navbar1 = document.querySelectorAll('nav a')

navbar1[0].textContent = siteContent['nav']['nav-item-1'];
navbar1[1].textContent = siteContent['nav']['nav-item-2'];
navbar1[2].textContent = siteContent['nav']['nav-item-3'];
navbar1[3].textContent = siteContent['nav']['nav-item-4'];
navbar1[4].textContent = siteContent['nav']['nav-item-5'];
navbar1[5].textContent = siteContent['nav']['nav-item-6'];

// top middle section

const bigImg = document.querySelector('#cta-img');
bigImg.setAttribute('src', siteContent['cta']['img-src'])

const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1']

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button']

// middle info

const feature = document.querySelectorAll('.main-content .text-content h4');
feature[0].textContent = siteContent['main-content']['features-h4'];
feature[1].textContent = siteContent['main-content']['about-h4'];
feature[2].textContent = siteContent['main-content']['services-h4']
feature[3].textContent = siteContent['main-content']['product-h4']
feature[4].textContent = siteContent['main-content']['vision-h4']


const featurep = document.querySelectorAll('.main-content .text-content p');
featurep[0].textContent = siteContent['main-content']['features-content'];
featurep[1].textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
featurep[2].textContent = siteContent['main-content']['services-content'];
featurep[3].textContent = siteContent['main-content']['product-content'];
featurep[4].textContent = siteContent['main-content']['vision-content'];

// contact
const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4']

const contactp = document.querySelectorAll('.contact p');
contactp[0].textContent = siteContent['contact']['address']
contactp[1].textContent = siteContent['contact']['phone']
contactp[2].textContent = siteContent['contact']['email']

// footer
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright']