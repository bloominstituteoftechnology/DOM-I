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


//Nav Links
const links = document.querySelectorAll('nav a');
console.log(links);

const navigationLinks = Array.from(links); // creating an array from links

navigationLinks[0].textContent = siteContent['nav']['nav-item-1'];
navigationLinks[1].textContent = siteContent['nav']['nav-item-2'];
navigationLinks[2].textContent = siteContent['nav']['nav-item-3'];
navigationLinks[3].textContent = siteContent['nav']['nav-item-4'];
navigationLinks[4].textContent = siteContent['nav']['nav-item-5'];
navigationLinks[5].textContent = siteContent['nav']['nav-item-6'];

navigationLinks.forEach(i => i.className = 'italic'); // Creating a class name for each aNav

//Nav Img 
const header = document.querySelector('header') // creating the DOM Place
const logoNav = header.querySelector('img'); // Going deeper into the sections of the nav
logoNav.src =  'http://localhost:9000/img/logo.png'; // Changing the HTML to Fit our needs

//Main title
const title = document.querySelector('h1')
title.textContent = siteContent['cta']['h1'];

//Main Button 
const mainButton = document.querySelector('.cta button')
mainButton.textContent = siteContent['cta']['button'];

//Code Image 
const codeImage = document.querySelector('.cta img')
codeImage.src = siteContent['images']['cta-img'];

//Middle Image
const middleImage = document.querySelector('.main-content img')
middleImage.src = siteContent['images']['accent-img'];

//Whole H4 Content
const topH4 = document.querySelectorAll('.text-content h4');
const topTitles = Array.from(topH4);

topTitles[0].textContent = siteContent['main-content']['features-h4'];
topTitles[1].textContent = siteContent['main-content']['about-h4'];
topTitles[2].textContent = siteContent['main-content']['services-h4'];
topTitles[3].textContent = siteContent['main-content']['product-h4'];
topTitles[4].textContent = siteContent['main-content']['vision-h4'];

// Text Content
const topContent = document.querySelectorAll('.text-content p');
const topText = Array.from(topContent);

topText[0].textContent = siteContent['main-content']['features-content'];
topText[1].textContent = siteContent['main-content']['about-content'];
topText[2].textContent = siteContent['main-content']['services-content'];
topText[3].textContent = siteContent['main-content']['product-content'];
topText[4].textContent = siteContent['main-content']['vision-content'];

//Contact
const bottomH4 = document.querySelectorAll('.contact h4');
const bottomTitles = Array.from(bottomH4);

bottomTitles[0].textContent = siteContent['contact']['contact-h4'];

// Contact Text
const bottomContent = document.querySelectorAll('.contact p');
const bottomText = Array.from(bottomContent);

bottomText[0].textContent = siteContent['contact']['address'];
bottomText[1].textContent = siteContent['contact']['phone'];
bottomText[2].textContent = siteContent['contact']['email'];

// Footer
const nLink = document.querySelectorAll('footer a');
console.log(nLink);

const footerLinks = Array.from(nLink);

footerLinks[0].textContent = siteContent['footer']['copyright'];

console.log('project wired!');
console.log('Umm Hello is this working!?')