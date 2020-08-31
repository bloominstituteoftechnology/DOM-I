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




// NAV LINKS // 

const navLinks = document.querySelectorAll('header nav a');

navLinks[0].textContent = 'Services';
navLinks[1].textContent = 'Product';
navLinks[2].textContent = 'Vision';
navLinks[3].textContent = 'Features';
navLinks[4].textContent = 'About';
navLinks[5].textContent = 'Contact';

//Nav Link Color change//

navLinks[0].style.color="green"
navLinks[1].style.color="green"
navLinks[2].style.color="green"
navLinks[3].style.color="green"
navLinks[4].style.color="green"
navLinks[5].style.color="green"

//add new links to nav 

// newNavLink = document.querySelector('a')
// newNavLink.textContent="More"
// navLinks.appendChild(newNavLink)

const newNavLink = document.createElement('a');
newNavLink.textContent = 'More';
newNavLink.href = '#';
const nav = document.querySelector('nav');
nav.appendChild(newNavLink);

const firstNavLink = document.createElement('a');
firstNavLink.textContent = 'Sign-In';
firstNavLink.href = '#';
nav.prepend(firstNavLink);

newNavLink.style.color="green"
firstNavLink.style.color="green"


// CTA SECTION //

const cta = document.querySelector('h1');
cta.textContent = 'DOM IS AWESOME';

const button = document.querySelector('button');
button.textContent = 'Get Started'

const img = document.getElementById('cta-img');
img.setAttribute('src', siteContent['cta']['img-src'])


// MAIN CONTENT // 

const mainTextTop = document.querySelectorAll('h4');
const mainParTop = document.querySelectorAll('p');


mainTextTop[0].textContent = 'Features';
mainParTop[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

mainTextTop[1].textContent = 'About';
mainParTop[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

mainTextTop[2].textContent = 'Services';
mainParTop[2].textContent ='Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

mainTextTop[3].textContent = 'Product';
mainParTop[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

mainTextTop[4].textContent = 'Vision';
mainParTop[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// CONTACT // 

const title = document.querySelector('.contact h4')
title.textContent = "Contact"

const contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = "123 Way 456 Street Somewhere, USA"
contactInfo[1].textContent = "1 (888) 888-8888"
contactInfo[2].textContent = "sales@greatidea.io"


// FOOTER //

const footer = document.querySelector('footer p');
footer.textContent = "Copyright Great Idea! 2018"
