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


//Begin Changes Here



//Nav bar

//Nav Bar Logo
const logoImg = document.querySelector('#logo-img');
logoImg.src = "http://localhost:9000/img/logo.png";

//Nav Bar Links

// const navTag1 = document.querySelector('nav a:nth-of-type(1)');
// navTag1.textContent = siteContent['nav']['nav-item-1'];

// const navTag2 = document.querySelector('nav a:nth-of-type(2)');
// navTag2.textContent = siteContent['nav']['nav-item-2'];

// const navTag3 = document.querySelector('nav a:nth-of-type(3)');
// navTag3.textContent = siteContent['nav']['nav-item-3'];

// const navTag4 = document.querySelector('nav a:nth-of-type(4)');
// navTag4.textContent = siteContent['nav']['nav-item-4'];

// const navTag5 = document.querySelector('nav a:nth-of-type(5)');
// navTag5.textContent = siteContent['nav']['nav-item-5'];

// const navTag6 = document.querySelector('nav a:nth-of-type(6)');
// navTag6.textContent = siteContent['nav']['nav-item-6'];

//Condensed Nav Bar Links

const nav = document.querySelectorAll('a');
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];


//Nav Bar Links Italics
nav[0].classList.add('italic')
nav[1].classList.add('italic')
nav[2].classList.add('italic')
nav[3].classList.add('italic')
nav[4].classList.add('italic')
nav[5].classList.add('italic')


//Header
const title = document.querySelector('h1');
title.textContent = siteContent['cta']['h1'];

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['images']['cta-img']

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

//Middle

//Top Middle Content
const topContent = document.querySelector('.top-content');
const h4Top = topContent.querySelectorAll('h4');
h4Top[0].textContent = siteContent['main-content']['features-h4'];
h4Top[1].textContent = siteContent['main-content']['about-h4'];

const pTop = topContent.querySelectorAll('p');
pTop[0].textContent = siteContent['main-content']['features-content'];
pTop[1].textContent = siteContent['main-content']['about-content'];


//Middle Accent Img
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['images']['accent-img'];


//Bottom Middle Content
const bottomContent = document.querySelector('.bottom-content');
const h4Bottom = bottomContent.querySelectorAll('h4');
h4Bottom[0].textContent = siteContent['main-content']['services-h4'];
h4Bottom[1].textContent = siteContent['main-content']['product-h4'];
h4Bottom[2].textContent = siteContent['main-content']['vision-h4'];

const pBottom = bottomContent.querySelectorAll('p');
pBottom[0].textContent = siteContent['main-content']['services-content'];
pBottom[1].textContent = siteContent['main-content']['product-content'];
pBottom[2].textContent = siteContent['main-content']['vision-content'];


//Contact
const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent['contact']['contact-h4'];

const contact = document.querySelector('.contact');
const pContact = contact.querySelectorAll('p');
pContact[0].textContent = siteContent['contact']['address'];
pContact[1].textContent = siteContent['contact']['phone'];
pContact[2].textContent = siteContent['contact']['email'];


//footer

const footer = document.querySelector('footer a');
footer.textContent = siteContent['footer']['copyright'];
footer.classList.add('bold')