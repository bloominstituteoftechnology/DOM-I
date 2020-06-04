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

//nav-items
const navItems = document.querySelectorAll('a');

navItems[0].textContent = siteContent ['nav'] ['nav-item-1'];
navItems[1].textContent = siteContent ['nav'] ['nav-item-2'];
navItems[2].textContent = siteContent ['nav'] ['nav-item-3'];
navItems[3].textContent = siteContent ['nav'] ['nav-item-4'];
navItems[4].textContent = siteContent ['nav'] ['nav-item-5'];

navItems[0].style.color = 'green'
navItems[1].style.color = 'green'
navItems[2].style.color = 'green'
navItems[3].style.color = 'green'
navItems[4].style.color = 'green'

const navTop = document.querySelector('nav');
const firstNav = document.createElement ('a');
const lastNav = document.createElement ('a');

firstNav.href = '#';
firstNav.textContent = 'First';
firstNav.style.color = 'green';

lastNav.href = '#';
lastNav.textContent = 'Last';
lastNav.style.color = 'green';

navTop.prepend(firstNav);
navTop.append(lastNav);

const header1 = document.querySelector('h1');
header1.textContent = siteContent['cta']['h1'];
header1.innerHTML = 'Dom Is Awesome';

const button1 = document.querySelector('button');
button1.textContent = siteContent['cta']['button'];
button1.innerHTML = 'Get Started';

const pic1 = document.getElementById('cta-img');
pic1.setAttribute('src', siteContent ['cta']['img-src'])

const mainHead = document.querySelectorAll('.main-content .text-content h4');
const mainContent = document.querySelectorAll('.main-content .text-content p');
const middleImg = document.querySelector('#middle-img');

mainHead[0].textContent = siteContent['main-content']['features-h4'];
mainContent[0].textContent = siteContent['main-content']['features-content'];

mainHead[1].textContent = siteContent['main-content']['about-h4'];
mainContent[1].textContent = siteContent['main-content']['about-content'];

middleImg.src = siteContent['main-content']['middle-img-src'];

mainHead[2].textContent = siteContent['main-content']['services-h4'];
mainContent[2].textContent = siteContent['main-content']['services-content'];

mainHead[3].textContent = siteContent['main-content']['product-h4'];
mainContent[3].textContent = siteContent['main-content']['product-content'];

mainHead[4].textContent = siteContent['main-content']['vision-h4'];
mainContent[4].textContent = siteContent['main-content']['vision-content'];

const contactH4 = document.querySelector('.contact h4');
const contactContent = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent['contact']['contact-h4'];

contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

 
const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright'];
