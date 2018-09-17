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
// ===================   NAV BAR ==================
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src']);

let logoClass = document.querySelector('img');
logoClass.setAttribute('href', 'index.html');

let headerBox = document.querySelector('header');
headerBox.style.position = 'fixed';
headerBox.style.top = '0';
headerBox.style.backgroundColor = 'white';
headerBox.style.borderBottom = '1px solid grey';
headerBox.style.width = '66%';


let navItems = document.querySelectorAll('a');

navItems[0].innerText = siteContent['nav']['nav-item-1'];
navItems[1].innerText = siteContent['nav']['nav-item-2'];
navItems[2].innerText = siteContent['nav']['nav-item-3'];
navItems[3].innerText = siteContent['nav']['nav-item-4'];
navItems[4].innerText = siteContent['nav']['nav-item-5'];
navItems[5].innerText = siteContent['nav']['nav-item-6'];

navItems.forEach(item => item.style.color = 'green');

let mainNav = document.querySelector('nav')
const newNavItem1 = document.createElement('a');
newNavItem1.innerText = 'Blog'
newNavItem1.href = '#'
newNavItem1.style.color = 'green'
mainNav.appendChild(newNavItem1);

const newNavItem2 = document.createElement('a');
newNavItem2.innerText = 'Welcome'
newNavItem2.href = 'index.html'
newNavItem2.style.color = 'green'

mainNav.prepend(newNavItem2);


// ===================  CTA  ==================
let ctaHeader = document.querySelector('.cta h1');
ctaHeader.innerHTML = siteContent['cta']['h1'];


let ctaButton = document.querySelector('.cta button');
ctaButton.innerText = siteContent['cta']['button'];

ctaButton.style.cursor = 'pointer';
ctaButton.addEventListener('click', function() {
  ctaHeader.innerHTML = 'You clicked the Button!'
})



let ctaBanner = document.getElementById("cta-img");
ctaBanner.setAttribute('src', siteContent['cta']['img-src']);


// ===================  TOP CONTENT  ==================
let featuresHeader = document.querySelectorAll('.text-content h4');
featuresHeader[0].innerText = siteContent['main-content']['features-h4'];

let featuresContent = document.querySelectorAll('.text-content p')
featuresContent[0].innerText = siteContent['main-content']['features-content'];

let aboutHeader = document.querySelectorAll('.text-content h4');
aboutHeader[1].innerText = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll('.text-content p')
aboutContent[1].innerText = siteContent['main-content']['about-content'];


// ===================  MIDDLE BANNER  ==================
let middleBanner = document.getElementById("middle-img");
middleBanner.setAttribute('src', siteContent['main-content']['middle-img-src'])


// ===================  BOTTOM CONTENT ==================
let servicesHeader = document.querySelectorAll('.text-content h4');
servicesHeader[2].innerText = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelectorAll('.text-content p');
servicesContent[2].innerText = siteContent['main-content']['services-content'];

let productHeader = document.querySelectorAll('.text-content h4');
productHeader[3].innerText = siteContent['main-content']['product-h4'];

let productContent = document.querySelectorAll('.text-content p');
productContent[3].innerText = siteContent['main-content']['product-content'];

let visionHeader = document.querySelectorAll('.text-content h4');
visionHeader[4].innerText = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelectorAll('.text-content p');
visionContent[4].innerText = siteContent['main-content']['vision-content'];

// ===================  CONTACT  ==================

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerText = siteContent['contact']['contact-h4'];

let contactAddress = document.querySelectorAll('.contact p');
contactAddress[0].innerText = siteContent['contact']['address'];

let contactPhone = document.querySelectorAll('.contact p');
contactPhone[1].innerText = siteContent['contact']['phone'];

let contactEmail = document.querySelectorAll('.contact p');
contactEmail[2].innerText = siteContent['contact']['email'];

// ===================  FOOTER  ==================

let footerContent = document.querySelector('footer p');
footerContent.innerText = siteContent['footer']['copyright'];