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
 
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const links = document.querySelectorAll('a');

links.forEach((currentValue, i) => (currentValue.textContent =
  Object.values(siteContent.nav)[i]));

links.forEach((item) => (item.style.color='green'));

const addLink = document.querySelector('nav');

const newAtag = document.createElement('a');
newAtag.textContent = 'Outreach';
newAtag.href = '#';
newAtag.style.color = 'green';
addLink.appendChild(newAtag);

const newH3 = document.createElement('h3');
newH3.textContent = 'Navigation';
newH3.style.fontSize = '20px';
addLink.prepend(newH3);

const ctaH1 = document.querySelectorAll('h1');
ctaH1[0].innerHTML = siteContent.cta.button;

const btn = document.querySelectorAll('button');
btn[0].textContent = siteContent.cta.button;

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];

const topH4 = document.querySelectorAll('h4');
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];
topH4[2].textContent = siteContent['main-content']['services-h4'];
topH4[3].textContent = siteContent['main-content']['product-h4'];
topH4[4].textContent = siteContent['main-content']['vision-h4'];
topH4[5].textContent = siteContent['contact']['contact-h4];']