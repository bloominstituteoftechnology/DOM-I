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

//nav
const nav = document.querySelectorAll('nav a');
//nav[0].textContent = siteContent['main-content']['nav']['nav-content'];

//top content
const topContent = document.querySelector('.top-content');
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content'];

//bottom content
const botContent = document.querySelector('.bottom-content');
const h4Bottom = botContent.querySelectorAll('h4');
h4Bottom[0].textContent = siteContent['main-content']['services-h4'];
h4Bottom[1].textContent = siteContent['main-content']['product-h4']
h4Bottom[2].textContent = siteContent['main-content']['vision-h4'];
const pBottom = botContent.querySelectorAll('p');
pBottom[0].textContent = siteContent['main-content']['services-content']
pBottom[1].textContent = siteContent['main-content']['product-content'];
pBottom[2].textContent = siteContent['main-content']['vision-content'];

//img
const logo = document.querySelector('#logo-img');
logo.src = siteContent['images']['logo-img'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['images']['cta-img'];

const midImage = document.querySelector('#middle-img');
midImage.src = siteContent['images']['accent-img'];

//Dom & button
const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];
const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];

