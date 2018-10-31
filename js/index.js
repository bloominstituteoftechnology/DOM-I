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

// Header 
const firstNavItem = document.getElementsByTagName('a')[0];
const secondNavItem = document.getElementsByTagName('a')[1];
const thirdNavItem = document.getElementsByTagName('a')[2];
const fourthNavItem = document.getElementsByTagName('a')[3];
const fifthNavItem = document.getElementsByTagName('a')[4];
const sixthNavItem = document.getElementsByTagName('a')[5];

const nav = document.getElementsByTagName('nav')[0];
const homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = 'Home';

const staffLink = document.createElement('a');
staffLink.href = '#';
staffLink.textContent = 'Staff';

nav.prepend(homeLink);
nav.appendChild(staffLink);

firstNavItem.textContent = siteContent.nav["nav-item-1"];
secondNavItem.textContent = siteContent.nav["nav-item-2"];
thirdNavItem.textContent = siteContent.nav["nav-item-3"];
fourthNavItem.textContent = siteContent.nav["nav-item-4"];
fifthNavItem.textContent = siteContent.nav["nav-item-5"];
sixthNavItem.textContent = siteContent.nav["nav-item-6"];

const navLinks = document.querySelectorAll('nav a');
for (let i = 0; i < navLinks.length; i++) {
  const navLink = navLinks[i];
  navLink.style.color = 'green';
}


// CTA Section
const ctaTitle = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.getElementById('cta-img');

ctaTitle.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.src = siteContent.cta["img-src"];

// Main Content 
const featuresTitle = document.querySelectorAll('.top-content .text-content h4')[0];
const featuresContent = document.querySelectorAll('.top-content .text-content p')[0];
const aboutTitle = document.querySelectorAll('.top-content .text-content h4')[1];
const aboutContent = document.querySelectorAll('.top-content .text-content p')[1];
const servicesTitle = document.querySelectorAll('.bottom-content .text-content h4')[0];
const servicesContent = document.querySelectorAll('.bottom-content .text-content p')[0];
const productTitle = document.querySelectorAll('.bottom-content .text-content h4')[1];
const productContent = document.querySelectorAll('.bottom-content .text-content p')[1];
const visionTitle = document.querySelectorAll('.bottom-content .text-content h4')[2];
const visionContent = document.querySelectorAll('.bottom-content .text-content p')[2];
const middleImg = document.getElementById('middle-img');

featuresTitle.textContent = siteContent["main-content"]["features-h4"];
featuresContent.textContent = siteContent["main-content"]["features-content"];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
aboutContent.textContent = siteContent["main-content"]["about-content"];
servicesTitle.textContent = siteContent["main-content"]["services-h4"]
servicesContent.textContent = siteContent["main-content"]["services-content"];
productTitle.textContent = siteContent["main-content"]["product-h4"]
productContent.textContent = siteContent["main-content"]["product-content"];
visionTitle.textContent = siteContent["main-content"]["vision-h4"]
visionContent.textContent = siteContent["main-content"]["vision-content"];
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Contact 
const contactTitle = document.querySelector('.contact h4');
const address = document.querySelectorAll('.contact p')[0];
const phone = document.querySelectorAll('.contact p')[1];
const email = document.querySelectorAll('.contact p')[2];

contactTitle.textContent = siteContent.contact["contact-h4"];
address.textContent = siteContent.contact["address"];
phone.textContent = siteContent.contact["phone"];
email.textContent = siteContent.contact["email"];

//Footer
const copyright = document.querySelector('footer p');

copyright.textContent = siteContent.footer.copyright;