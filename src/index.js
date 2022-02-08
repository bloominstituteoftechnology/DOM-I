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


// DOM ELEMENT VARIABLES
// General 
const bodyContainer = document.querySelector('.container');

// Header
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const logo = document.querySelector('#logo-img');

// Top
const top = document.querySelector('.cta');
const topText = top.querySelector('h1');
const topButton = top.querySelector('button');
const topImg = top.querySelector('img');

// Mid
const main = document.querySelector('.main-content');
const mid = main.querySelector('.top-content');
const midTextOne = document.querySelector('.text-content:nth-of-type(1)');
const midTextOneTitle = midTextOne.querySelector('h4');
const midTextTwo = document.querySelector('.text-content:nth-of-type(2)');
const midTextTwoTitle = midTextTwo.querySelector('h4');
const midImg = main.querySelector('.middle-img');

// Bottom
const botTextOne = document.querySelector('.text-content:nth-of-type(3)');
const botTextOneTitle = botTextOne.querySelector('h4');
const botTextTwo = document.querySelector('.text-content:nth-of-type(4)');
//const botTextTwoTitle = botTextTwo.querySelector('h4');
const botTextThree = document.querySelector('.text-content:nth-of-type(5)');
//const botTextThreeTitle = botTextThree.querySelector('h4');

// Contact
const contact = document.querySelector('.contact');
const contactTitle = contact.querySelector('h4');
const contactInfo = contact.querySelectorAll('p');

// Footer
const footer = document.querySelector('footer');
const footerLink = footer.querySelector('a');




// TEXT INPUT
navLinks[0].textContent = siteContent.nav['nav-item-1'];
navLinks[1].textContent = siteContent.nav['nav-item-2'];
navLinks[2].textContent = siteContent.nav['nav-item-3'];
navLinks[3].textContent = siteContent.nav['nav-item-4'];
navLinks[4].textContent = siteContent.nav['nav-item-5'];
navLinks[5].textContent = siteContent.nav['nav-item-6'];

topText.textContent = siteContent.cta['h1'];
topButton.textContent = siteContent.cta['button'];




contactTitle.textContent = siteContent.contact['contact-h4'];
contact.children[1].textContent = siteContent.contact['address'];
contact.children[2].textContent = siteContent.contact['phone'];
contact.children[3].textContent = siteContent.contact['email'];


footerLink.textContent = siteContent.footer['copyright'];
footerLink.classList.add('bold');





// IMAGES
logo.src = siteContent.images['logo-img'];
topImg.src = siteContent.images['cta-img'];
midImg.src = siteContent.images['accent-img'];
