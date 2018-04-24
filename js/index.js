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

//var
let menu = document.querySelectorAll('a');
let nav = document.querySelector('nav')
let newNav = document.createElement('a');
let newNewNav = document.createElement('a');
let navLinks = document.querySelectorAll('nav a')
let ctaText = document.querySelector('.cta-text h1');
let ctaBut = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('.cta img');
let topContenth4 = document.querySelector('.text-content h4');
let topContentP = document.querySelector('.text-content p');
let topContenth4Second = document.querySelectorAll('.text-content h4')[1];
let topContentPSecond = document.querySelectorAll('.text-content p')[1];;
let topContentImg = document.querySelector('.middle-img');

// nav

menu[0].innerHTML = siteContent['nav']["nav-item-1"];
menu[1].innerHTML = siteContent['nav']["nav-item-2"];
menu[2].innerHTML = siteContent['nav']["nav-item-3"];
menu[3].innerHTML = siteContent['nav']["nav-item-4"];
menu[4].innerHTML = siteContent['nav']["nav-item-5"];
menu[5].innerHTML = siteContent['nav']["nav-item-6"];

// create new Nav items
nav.appendChild(newNav)
newNav.setAttribute('href', '#');
newNav.innerHTML = 'Map '

nav.appendChild(newNewNav)
newNewNav.setAttribute('href', '#');
newNewNav.innerHTML = 'Price'


// style nav

navLinks.forEach(function(item) {
 item.style.color = 'green';
});

// cta


ctaText.innerHTML = siteContent['cta']["h1"]; 
ctaBut.innerHTML = siteContent['cta']["button"]; 
ctaImg.setAttribute('src', siteContent['cta']["img-src"]);

// main-content  top-content


topContenth4.innerHTML = siteContent['main-content']["features-h4"]; 
topContentP.innerHTML = siteContent['main-content']["features-content"]; 
topContenth4Second.innerHTML = siteContent['main-content']["about-h4"]; 
topContentPSecond.innerHTML = siteContent['main-content']['features-content'];

topContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
