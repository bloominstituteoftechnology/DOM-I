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

// div.container - link titles
const headerLinks = document.querySelectorAll('nav a')
headerLinks[0].textContent = siteContent['nav']['nav-item-1'];
headerLinks[1].textContent = siteContent['nav']['nav-item-2'];
headerLinks[2].textContent = siteContent['nav']['nav-item-3'];
headerLinks[3].textContent = siteContent['nav']['nav-item-4'];
headerLinks[4].textContent = siteContent['nav']['nav-item-5'];
headerLinks[5].textContent = siteContent['nav']['nav-item-6'];

// change Nav text color to green
headerLinks.forEach(link => {link.style.color = 'green';});

// .appendChild
const newLastLink = document.createElement('a');
newLastLink.textContent = ('Blog');
document.querySelector('nav').appendChild(newLastLink);
newLastLink.style.color = 'green';

// .prepend
newFirstLink = document.createElement('a');
newFirstLink.textContent = ('Locations');
document.querySelector('nav').prepend(newFirstLink);
newFirstLink.style.color = 'green';

// img#cta-img - needs an image src
const codeSnippetImg = document.getElementById('cta-img');
codeSnippetImg.setAttribute('src', siteContent['cta']['img-src']);

// title
const pageTitle = document.querySelectorAll('.cta-text h1');
pageTitle[0].textContent = siteContent['cta']['h1'];

// button
const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

// div.text-content - h4 text, p text for both top-content and bottom-content

// top-content
const topContentH4 = document.querySelectorAll('.top-content h4');
topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];

const topContentP = document.querySelectorAll('.top-content p');
topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent =siteContent['main-content']['about-content'];

// middle-img - needs an image src

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// div.text-content - h4 text, p text for both top-content and bottom-content

// bottom-content
const bottomContentH4 = document.querySelectorAll('.bottom-content h4');
bottomContentH4[0].textContent = siteContent['main-content']['services-h4'];
bottomContentH4[1].textContent = siteContent['main-content']['product-h4'];
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4'];

const bottomContentP = document.querySelectorAll('.bottom-content p');
bottomContentP[0].textContent = siteContent['main-content']['services-content'];
bottomContentP[1].textContent = siteContent['main-content']['product-content'];
bottomContentP[2].textContent = siteContent['main-content']['vision-content'];

// section.contact - needs text content
const contactSectionH4 = document.querySelectorAll('.contact h4');
contactSectionH4[0].textContent = siteContent['contact']['contact-h4'];

const contactSectionP = document.querySelectorAll('.contact p');
contactSectionP[0].textContent = siteContent['contact']['address'];
contactSectionP[1].textContent = siteContent['contact']['phone'];
contactSectionP[2].textContent = siteContent['contact']['email'];

// footer - needs copyright
const copyright = document.querySelectorAll('footer p');
copyright[0].textContent = siteContent['footer']['copyright'];

// Stretch goals
const paraFont = document.querySelectorAll('p');

paraFont.forEach((item) => {
  item.style.fontFamily = "Inconsolata, monospace";
});

const titleColors = document.querySelectorAll('h1');

titleColors.forEach((item) => {
  item.style.color = "#9be7ad";
});

const subtitleColors = document.querySelectorAll('h4');

subtitleColors.forEach((item) => {
  item.style.color = '#0bfdff';
});

const buttonHover = document.querySelector('button')

buttonHover.addEventListener("mouseenter", function(event) {
  event.target.style.background = "#FD88A1";
})
buttonHover.addEventListener("mouseout", function(event) {
  event.target.style.background = "white";
})

const backgroundColor = document.querySelector('*');

backgroundColor.style.background = "#4F646F";