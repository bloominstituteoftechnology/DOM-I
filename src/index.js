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

const links = document.querySelectorAll('nav a');

links.forEach(link => link.classList.add('italic'));

links[0].textContent = 'Services';
links[1].textContent = 'Product';
links[2].textContent = 'Vision';
links[3].textContent = 'Features';
links[4].textContent = 'About';
links[5].textContent = 'Contact';

const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;
const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

const logo = document.querySelector('#logo-img');
logo.src = siteContent.images["logo-img"];
const cta = document.querySelector('#cta-img');
cta.src = siteContent.images["cta-img"];
const accent = document.querySelector('#middle-img');
accent.src = siteContent.images["accent-img"];

const paras = document.querySelectorAll('.text-content p');
const h4Content = document.querySelectorAll('.text-content h4');

h4Content[0].textContent = siteContent["main-content"]["features-h4"];
h4Content[1].textContent = siteContent["main-content"]["about-h4"];
h4Content[3].textContent = siteContent["main-content"]["product-h4"];
h4Content[2].textContent = siteContent["main-content"]["services-h4"];
h4Content[4].textContent = siteContent["main-content"]["vision-h4"];

paras[0].textContent = siteContent["main-content"]["features-content"];
paras[1].textContent = siteContent["main-content"]['about-content'];
paras[2].textContent = siteContent["main-content"]['services-content'];
paras[3].textContent = siteContent["main-content"]['product-content'];
paras[4].textContent = siteContent["main-content"]['vision-content'];

const footer = document.querySelector('footer a');
footer.textContent = siteContent.footer.copyright;
footer.classList.add('bold');

console.log(h4Content);