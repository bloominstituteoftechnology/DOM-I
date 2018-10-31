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
firstNavItem.textContent = siteContent.nav["nav-item-1"];

const secondNavItem = document.getElementsByTagName('a')[1];
secondNavItem.textContent = siteContent.nav["nav-item-2"];

const thirdNavItem = document.getElementsByTagName('a')[2];
thirdNavItem.textContent = siteContent.nav["nav-item-3"];

const fourthNavItem = document.getElementsByTagName('a')[3];
fourthNavItem.textContent = siteContent.nav["nav-item-4"];

const fifthNavItem = document.getElementsByTagName('a')[4];
fifthNavItem.textContent = siteContent.nav["nav-item-5"];

const sixthNavItem = document.getElementsByTagName('a')[5];
sixthNavItem.textContent = siteContent.nav["nav-item-6"];

const nav = document.getElementsByTagName('nav')[0];
const homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = 'Home';
nav.prepend(homeLink);

const staffLink = document.createElement('a');
staffLink.href = '#';
staffLink.textContent = 'Staff';
nav.appendChild(staffLink);

const navLinks = document.querySelectorAll('nav a');
for (let i = 0; i < navLinks.length; i++) {
  const navLink = navLinks[i];
  navLink.style.color = 'green';
}

// CTA Section
const ctaTitle = document.querySelector('.cta-text h1');
ctaTitle.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta["img-src"];

// Main Content 
const featuresTitle = document.querySelectorAll('.top-content .text-content h4')[0];
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelectorAll('.top-content .text-content p')[0];
featuresContent.textContent = siteContent["main-content"]["features-content"];

const aboutTitle = document.querySelectorAll('.top-content .text-content h4')[1];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelectorAll('.top-content .text-content p')[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

const servicesTitle = document.querySelectorAll('.bottom-content .text-content h4')[0];
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

const servicesContent = document.querySelectorAll('.bottom-content .text-content p')[0];
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productTitle = document.querySelectorAll('.bottom-content .text-content h4')[1];
productTitle.textContent = siteContent["main-content"]["product-h4"]

const productContent = document.querySelectorAll('.bottom-content .text-content p')[1];
productContent.textContent = siteContent["main-content"]["product-content"];

const visionTitle = document.querySelectorAll('.bottom-content .text-content h4')[2];
visionTitle.textContent = siteContent["main-content"]["vision-h4"]

const visionContent = document.querySelectorAll('.bottom-content .text-content p')[2];
visionContent.textContent = siteContent["main-content"]["vision-content"];

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Contact 
const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent.contact["contact-h4"];

const address = document.querySelectorAll('.contact p')[0];
address.textContent = siteContent.contact["address"];

const phone = document.querySelectorAll('.contact p')[1];
phone.textContent = siteContent.contact["phone"];

const email = document.querySelectorAll('.contact p')[2];
email.textContent = siteContent.contact["email"];

//Footer
const copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer.copyright;