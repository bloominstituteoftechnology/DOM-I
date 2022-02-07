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

//Images
const logo = document.querySelector('#logo-img');
logo.src = siteContent.images['logo-img'];

const cta = document.querySelector('#cta-img');
cta.src = siteContent.images['cta-img'];

const mid = document.querySelector('#middle-img');
mid.setAttribute('src', siteContent.images['accent-img']);

//Footer
const footer = document.querySelector('footer a');
footer.textContent = siteContent.footer.copyright

//Contact
const contact = document.querySelector('section.contact');
contact.querySelector('h4').textContent = siteContent.contact['contact-h4']
contact.querySelector('p:nth-of-type(1)').textContent = siteContent.contact['address']
contact.querySelector('p:nth-of-type(2)').textContent = siteContent.contact['phone']
contact.querySelector('p:nth-of-type(3)').textContent = siteContent.contact['email']

//TopContent
const top = document.querySelector('.top-content')
top.children[0].children[0].textContent = siteContent['main-content']['features-h4']
top.children[0].children[1].textContent = siteContent['main-content']['features-content']
top.children[1].children[0].textContent = siteContent['main-content']['about-h4']
top.children[1].children[1].textContent = siteContent['main-content']['about-content']

//Bottom
const bottom = document.querySelector('.bottom-content')
const h4sBottom = bottom.querySelectorAll('h4')
h4sBottom[0].textContent = siteContent['main-content']['services-h4']
h4sBottom[1].textContent = siteContent['main-content']['product-h4']
h4sBottom[2].textContent = siteContent['main-content']['vision-h4']
const psBottom = bottom.querySelectorAll('p')
psBottom[0].textContent = siteContent['main-content']['services-content']
psBottom[1].textContent = siteContent['main-content']['product-content']
psBottom[2].textContent = siteContent['main-content']['vision-content']

//Cta
const ctaa = document.querySelector('.cta')
ctaa.children[0].children[0].textContent = siteContent['cta']['h1']
ctaa.children[0].children[1].textContent = siteContent['cta']['button']

