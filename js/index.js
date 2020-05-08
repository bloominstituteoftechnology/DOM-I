const siteContent = {
  "nav": {
    "nav-item-0": "Services",
    "nav-item-1": "Product",
    "nav-item-2": "Vision",
    "nav-item-3": "Features",
    "nav-item-4": "About",
    "nav-item-5": "Contact",
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

// Navigation Bar
let navBar = document.querySelector('nav');
let newAnchor = document.createElement('a');
let navA = document.querySelectorAll('nav a');
let homeBtn = navBar.prepend(newAnchor = 'Home');
let blogBtn = navBar.appendChild(document.createElement('a'));
blogBtn.textContent = 'Blog';
blogBtn.style.color = 'green';

for(let i = 0; i < navA.length; i++){
  navA[i].textContent = siteContent["nav"]["nav-item-" + i];
  navA[i].style.color = 'green';
}

// CTA
let ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1'];

let btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];

// H4's
let H4 = document.querySelectorAll('h4');
H4[0].textContent = siteContent['main-content']['features-h4'];
H4[1].textContent = siteContent['main-content']['about-h4'];
H4[2].textContent = siteContent['main-content']['services-h4'];
H4[3].textContent = siteContent['main-content']['product-h4'];
H4[4].textContent = siteContent['main-content']['vision-h4'];
H4[5].textContent = siteContent['contact']['contact-h4'];

// Content
let content = document.querySelectorAll('p');
content[0].textContent = siteContent['main-content']['features-content'];
content[1].textContent = siteContent['main-content']['about-content'];
content[2].textContent = siteContent['main-content']['services-content'];
content[3].textContent = siteContent['main-content']['product-content'];
content[4].textContent = siteContent['main-content']['vision-content'];
content[5].textContent = siteContent['contact']['address'];
content[6].textContent = siteContent['contact']['phone'];
content[7].textContent = siteContent['contact']['email'];
content[8].textContent = siteContent['footer']['copyright'];

// Images

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent['cta']['img-src']);

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);