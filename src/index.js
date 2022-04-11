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

//Header
// const serviceNav = document.querySelector('nav a:nth-of-type(1)');
// serviceNav.textContent = 'Services'

// const productNav = document.querySelector('nav a:nth-of-type(2)');
// productNav.textContent = 'Product';

// const visionNav = document.querySelector('nav a:nth-of-type(3)');
// visionNav.textContent = 'Vision';

// const featuresNav = document.querySelector('nav a:nth-of-type(4)');
// featuresNav.textContent = 'Features';

// const aboutNav = document.querySelector('nav a:nth-of-type(5)');
// aboutNav.textContent = 'About';

// const contactNav = document.querySelector('nav a:nth-of-type(6)');
// contactNav.textContent = 'Contact';

const navItem = document.querySelectorAll('header nav a')
const navItemLinks = Object.values(siteContent.nav)
navItem.forEach((link, index) => {
  link.textContent = navItemLinks[index]
  link.classList.add('italic')
});

//images
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img'];
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.images['cta-img'];
const accentImg = document.querySelector('#middle-img');
accentImg.src = siteContent.images['accent-img'];

//Top left section
const headOne = document.querySelector('h1');
headOne.textContent = siteContent.cta.h1;
const button = document.querySelector('button');
button.textContent = siteContent.cta.button
//siteContent['cta']['button']

//Top Main Content
const topContent = document.querySelector('.top-content')
const h4Top = topContent.querySelectorAll('h4')
h4Top[0].textContent = siteContent['main-content']['features-h4']
h4Top[1].textContent = siteContent['main-content']['about-h4']

//bottom Content h4
const botContent = document.querySelector('.bottom-content')
const h4Bot = botContent.querySelectorAll('h4')
h4Bot[0].textContent = siteContent['main-content']['services-h4']
h4Bot[1].textContent = siteContent['main-content']['product-h4']
h4Bot[2].textContent = siteContent['main-content']['vision-h4']

//top Ps
const topP = topContent.querySelectorAll('p')
topP[0].textContent = siteContent['main-content']['features-content']
topP[1].textContent = siteContent['main-content']['about-content']

//bot Ps
const botP = botContent.querySelectorAll('p')
botP[0].textContent = siteContent['main-content']['services-content']
botP[1].textContent = siteContent['main-content']['product-content']
botP[2].textContent = siteContent['main-content']['vision-content']

//contact section
const contactHeading = document.querySelector('.contact')
contactHeading.querySelector('h4').textContent = siteContent.contact['contact-h4']
const contactPara = document.querySelectorAll('.contact p')
contactPara[0].textContent = siteContent['contact']['address']

contactPara[1].textContent = siteContent['contact']['phone']

contactPara[2].textContent = siteContent['contact']['email']

//footer
const copyright = document.querySelector('footer a');
copyright.classList.add('bold')
copyright.textContent = siteContent.footer.copyright
