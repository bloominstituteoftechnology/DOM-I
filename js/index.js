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

//Selectors
const mainNav = document.querySelector('nav');
const mainNavLinks = mainNav.querySelectorAll('a');
const ctaText = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImage = document.querySelector('#cta-img');
const topContent = document.querySelector('.top-content');
const features = topContent.querySelector('.text-content:nth-of-type(1)');
const about = topContent.querySelector('.text-content:nth-of-type(2)');
const middleImage = document.querySelector('#middle-img');
const bottomContent = document.querySelector('.bottom-content');
const services = bottomContent.querySelector('.text-content:nth-of-type(1)');
const product = bottomContent.querySelector('.text-content:nth-of-type(2)');
const vision = bottomContent.querySelector('.text-content:nth-of-type(3)');
const contact = document.querySelector('.contact');
const footer = document.querySelector('footer p');

//Add nav text and make it green
mainNavLinks.forEach(function(link, index){
  link.textContent =  siteContent['nav'][`nav-item-${index + 1}`];
  link.style.color = 'green';
});

const stuffLink = document.createElement('a');
stuffLink.textContent = 'Stuff';
stuffLink.style.color = 'green';
const thingsLink = document.createElement('a');
thingsLink.textContent = 'Things';
thingsLink.style.color = 'green';
mainNav.prepend(stuffLink);
mainNav.appendChild(thingsLink);
//Add cta content
ctaText.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImage.src = siteContent['cta']['img-src'];

//Add top content
features.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
features.querySelector('p').textContent = siteContent['main-content']['features-content'];
about.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
about.querySelector('p').textContent = siteContent['main-content']['about-content'];

//Add middle image
middleImage.src = siteContent['main-content']['middle-img-src'];

//Add bottom content
services.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
services.querySelector('p').textContent = siteContent['main-content']['services-content'];
product.querySelector('h4').textContent = siteContent['main-content']['product-h4'];
product.querySelector('p').textContent = siteContent['main-content']['product-content'];
vision.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
vision.querySelector('p').textContent = siteContent['main-content']['vision-content'];

//Add contacts
contact.querySelector('h4').textContent = siteContent['contact']['contact-h4'];
contact.querySelector('p:nth-of-type(1)').textContent = siteContent['contact']['address'];
contact.querySelector('p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
contact.querySelector('p:nth-of-type(3)').textContent = siteContent['contact']['email'];

//Add footer
footer.textContent = siteContent['footer']['copyright'];

