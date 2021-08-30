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

const navItem1 = document.querySelector('.container header nav a:nth-of-type(1)');
navItem1.textContent = siteContent['nav']['nav-item-1'];
const navItem2 = document.querySelector('.container header nav a:nth-of-type(2)');
navItem2.textContent = siteContent['nav']['nav-item-2'];
const navItem3 = document.querySelector('.container header nav a:nth-of-type(3)');
navItem3.textContent = siteContent['nav']['nav-item-3'];
const navItem4 = document.querySelector('.container header nav a:nth-of-type(4)');
navItem4.textContent = siteContent['nav']['nav-item-4'];
const navItem5 = document.querySelector('.container header nav a:nth-of-type(5)');
navItem5.textContent = siteContent['nav']['nav-item-5'];
const navItem6 = document.querySelector('.container header nav a:nth-of-type(6)');
navItem6.textContent = siteContent['nav']['nav-item-6'];

const headerImage = document.querySelector('#cta-img');
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaText = document.querySelector('.cta .cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const featureHeader = document.querySelector('.main-content .top-content .text-content:nth-of-type(1) h4');
featureHeader.textContent = siteContent['main-content']['features-h4'];

const featureContent = document.querySelector('.main-content .top-content .text-content:nth-of-type(1) p');
featureContent.textContent = siteContent['main-content']['features-content'];

const aboutHeader = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) h4');
aboutHeader.textContent = siteContent['main-content']['about-h4'];

const aboutContent = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) p');
aboutContent.textContent = siteContent['main-content']['about-content'];

const midImg = document.querySelector('.main-content #middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];

const servicesHeader = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(1) h4');
servicesHeader.textContent = siteContent['main-content']['services-h4'];

const servicesContent = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(1) p');
servicesContent.textContent = siteContent['main-content']['services-content'];

const productHeader = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(2) h4');
productHeader.textContent = siteContent['main-content']['product-h4'];

const productContent = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(2) p');
productContent.textContent = siteContent['main-content']['product-content'];

const visionHeader = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(3) h4');
visionHeader.textContent = siteContent['main-content']['vision-h4'];

const visionContent = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(3) p');
visionContent.textContent = siteContent['main-content']['vision-content'];

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const address = document.querySelector('.contact p:nth-of-type(1)');
address.textContent = siteContent['contact']['address'];

const phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = siteContent['contact']['phone'];

const email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];



// adding links
const newLink1 = document.createElement('a');
newLink1.textContent = 'New Link 1';
newLink1.href = '#';

const newLink2 = document.createElement('a');
newLink2.textContent = 'New Link 2';
newLink2.href = '#';

document.querySelector('.container header nav').prepend(newLink1);
document.querySelector('.container header nav').appendChild(newLink2);

const navLinks = document.querySelectorAll('.container header nav a');
navLinks.forEach(link => link.style.color = 'green');