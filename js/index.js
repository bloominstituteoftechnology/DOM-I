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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// Get the navLinks, which returns an HTML Collection
const navLinks = document.querySelector('.container header nav').children;

// Convert the Collection to a JS Array
const navLinkArray = Array.from(navLinks);

// For every item in the Array, set it's text to the corresponding data from our siteContent.nav dictionary using string interpolation 
for (i=0;i<navLinkArray.length;i++) { 
  navLinkArray[i].text = siteContent.nav[`nav-item-${i+1}`]; 
}

const logoImg = document.getElementById('logo-img')
// logoImg.setAttribute('src', siteContent.nav["img-src"])
logoImg.src = siteContent.nav["img-src"]

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const button = document.querySelector('section.cta .cta-text button');
button.textContent = siteContent['cta']['button']


const newTitle = document.querySelector('section.cta .cta-text h1');
newTitle.textContent = siteContent['cta']['h1'];

const features = document.querySelector('section.main-content .top-content .text-content h4');
features.textContent = siteContent['main-content']['features-h4'];

const featuresContent = document.querySelector('section.main-content .top-content .text-content p');
featuresContent.textContent = siteContent['main-content']['features-content'];

// const about = document.querySelector('section.main-content .top-content .text-content h4');
// about.textContent = siteContent['main-content']['about-h4'];



//Contacts
const newContact = document.querySelector('section.contact h4');
newContact.textContent = siteContent['contact']['contact-h4'];

const newAddress = document.querySelector('section.contact p');
newAddress.textContent = siteContent['contact']['address'];

// const newAddress = document.querySelector('section.contact p');
// newAddress.textContent = siteContent['contact']['phone'];


//footer
const newFooter = document.querySelector('.container footer p');
newFooter.textContent = siteContent['footer']['copyright'];



