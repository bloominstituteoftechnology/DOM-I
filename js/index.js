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

let navItems = document.querySelectorAll('header nav a');

navItems[0].innerText = siteContent['nav']['nav-item-1'];
navItems[1].innerText = siteContent['nav']['nav-item-2'];
navItems[2].innerText = siteContent['nav']['nav-item-3'];
navItems[3].innerText = siteContent['nav']['nav-item-4'];
navItems[4].innerText = siteContent['nav']['nav-item-5'];
navItems[5].innerText = siteContent['nav']['nav-item-6'];

let hElement = document.querySelector('h1');
hElement.innerHTML = siteContent['cta']['h1'];

let jumbotronButton = document.querySelector('button');
jumbotronButton.innerHTML = siteContent ['cta']['button'];

let snippitImg = document.querySelector('#cta-img');
snippitImg.src = '/img/header-img.png';

let hFourElements = document.querySelectorAll('.top-content .text-content h4');
hFourElements[0].innerText = siteContent['main-content']['features-h4'];
hFourElements[1].innerText = siteContent['main-content']['about-h4'];


let pElements = document.querySelectorAll('.top-content .text-content p');
pElements[0].innerText = siteContent['main-content'] ['features-content']
pElements[1].innerText = siteContent['main-content'] ['about-content']

let middleIMG = document.querySelector('#middle-img');
middleIMG.src = 'img/mid-page-accent.jpg';

let hFourElementsBottom = document.querySelectorAll('.bottom-content .text-content h4');
hFourElementsBottom[0].innerText = siteContent['main-content']['services-h4'];
hFourElementsBottom[1].innerText = siteContent['main-content']['product-h4'];
hFourElementsBottom[2].innerText = siteContent['main-content']['vision-h4']

let pElementsBottom = document.querySelectorAll('.bottom-content .text-content p');
pElementsBottom[0].innerText = siteContent['main-content']['services-content'];
pElementsBottom[1].innerText = siteContent['main-content']['product-content'];
pElementsBottom[2].innerText = siteContent['main-content']['vision-content'];

let contacth4 = document.querySelectorAll('.contact h4');
contact[0].innerText = siteContent ['contact-h4'];