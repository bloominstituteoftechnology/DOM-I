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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelector('nav');

let navLinks = document.querySelectorAll('nav a');
navLinks[0].innerText = siteContent['nav']['nav-item-1'];
navLinks[1].innerText = siteContent['nav']['nav-item-2'];
navLinks[2].innerText = siteContent['nav']['nav-item-3'];
navLinks[3].innerText = siteContent['nav']['nav-item-4'];
navLinks[4].innerText = siteContent['nav']['nav-item-5'];
navLinks[5].innerText = siteContent['nav']['nav-item-6'];
// Section 3 //
for(let i = 0; i < navLinks.length; i++) {
  if(navLinks[i].href){
    navLinks[i].style.color = 'green'
  }
}

let additionalNavOne = document.createElement('a');
additionalNavOne.href = '#';
additionalNavOne.innerText = 'Idea 1';
additionalNavOne.style.color='green';
document.querySelector('nav').appendChild(additionalNavOne);

let additionalNavTwo = document.createElement('a');
additionalNavTwo.href = '#';
additionalNavTwo.innerText = 'Idea 2';
additionalNavTwo.style.color = 'green';
nav.prepend(additionalNavTwo);

let ctaHeadingOne = document.querySelector('h1');
ctaHeadingOne.innerText = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerText = siteContent['cta']['button'];

let ctaImage = document.querySelector('.cta img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// section header-content pairs
let sectionHeaders = document.querySelectorAll('.main-content h4');
let sectionParagraphs = document.querySelectorAll('.main-content p');

sectionHeaders[0].innerText = siteContent['main-content']['features-h4'];
sectionParagraphs[0].innerText = siteContent['main-content']['features-content'];
sectionHeaders[1].innerText = siteContent['main-content']['about-h4'];
sectionParagraphs[1].innerText = siteContent['main-content']['about-content'];
sectionHeaders[2].innerText = siteContent['main-content']['services-h4'];
sectionParagraphs[2].innerText = siteContent['main-content']['services-content'];
sectionHeaders[3].innerText = siteContent['main-content']['product-h4'];
sectionParagraphs[3].innerText = siteContent['main-content']['product-content'];
sectionHeaders[4].innerText = siteContent['main-content']['vision-h4'];
sectionParagraphs[4].innerText = siteContent['main-content']['vision-content'];

let middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contactHeading = document.querySelector('.contact h4');
let contactParagraphs = document.querySelectorAll('.contact p');

contactHeading.innerText = siteContent['contact']['contact-h4'];
contactParagraphs[0].innerText = siteContent['contact']['address'];
contactParagraphs[1].innerText = siteContent['contact']['phone'];
contactParagraphs[2].innerText = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];