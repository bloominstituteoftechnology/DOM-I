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


const links = document.querySelector('nav a');
//const realLinks = Array.from(links);
const header = document.querySelector('header');
const logoImage = header.querySelector('img');
const cta = document.querySelector('.cta');
const heading = cta.querySelector('h1');
const button = cta.querySelector('button');
const mainContent = document.querySelector('.main-content');

const link1 = document.querySelector('a:nth-of-type(1)');
link1.textContent = 'Services';

const link2 = document.querySelector('a:nth-of-type(2)');
link2.textContent = 'Product';

const link3 = document.querySelector('a:nth-of-type(3)');
link3.textContent = 'Vision';

const link4 = document.querySelector('a:nth-of-type(4)');
link4.textContent = 'Features';

const link5 = document.querySelector('a:nth-of-type(5)');
link5.textContent = 'About';

const link6 = document.querySelector('a:nth-of-type(6)');
link6.textContent = 'Contact';

logoImage.src = "http://localhost:9000/img/logo.png"
logoImage.alt = 'Great Idea! Company Logo';

console.log('project wired!')
