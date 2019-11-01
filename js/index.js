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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

navItems[0].style.color = 'green';
navItems[1].style.color = 'green';
navItems[2].style.color = 'green';
navItems[3].style.color = 'green';
navItems[4].style.color = 'green';
navItems[5].style.color = 'green';

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaText = document.querySelector('h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaH1 = document.querySelector('.cta-text h1');
const h1text = siteContent.cta.h1.split(' ');
ctaH1.textContent = `${h1text[0]} ${h1text[1]} ${h1text[2]}`;

ctaText = document.querySelector('button');
ctaText.textContent = siteContent['cta']['button'];

let mainContent = document.querySelectorAll('.top-content .text-content h4');
mainContent[0].textContent = siteContent['main-content']['features-h4'];
mainContent[1].textContent = siteContent['main-content']['about-h4'];

mainContent = document.querySelectorAll('.top-content .text-content p')
mainContent[0].textContent = siteContent['main-content']['features-content'];
mainContent[1].textContent = siteContent['main-content']['about-content'];

mainContent = document.getElementById("middle-img");
mainContent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

mainContent = document.querySelectorAll('.bottom-content .text-content h4');
mainContent[0].textContent = siteContent['main-content']['services-h4'];
mainContent[1].textContent = siteContent['main-content']['product-h4'];
mainContent[2].textContent = siteContent['main-content']['vision-h4'];

mainContent = document.querySelectorAll('.bottom-content .text-content p');
mainContent[0].textContent = siteContent['main-content']['services-content'];
mainContent[1].textContent = siteContent['main-content']['product-content'];
mainContent[2].textContent = siteContent['main-content']['vision-content'];

let contact = document.querySelector('.contact h4')
contact.textContent = siteContent['contact']['contact-h4'];

contact = document.querySelectorAll('.contact p')
contact[0].textContent = siteContent['contact']['address'];
contact[1].textContent = siteContent['contact']['phone'];
contact[2].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

const nav1 = document.createElement('a');
const nav2 = document.createElement('a');
nav1.textContent = 'Growth';
nav2.textContent = 'Blog';
nav1.style.color = 'green';
nav2.style.color = 'green';

const navBar = document.querySelector('nav');
navBar.append(nav1);
navBar.prepend(nav2);