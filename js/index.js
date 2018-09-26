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

// Filling the images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let toAct = document.getElementById('cta-img');
toAct.setAttribute('src', siteContent['cta']['img-src']);

let banner = document.getElementById('middle-img');
banner.setAttribute('src', siteContent['main-content']['middle-img-src']);


// Getting the nav to appear
let navvy = document.querySelectorAll('nav a');
navvy.forEach((link, i) => {link.innerHTML = siteContent['nav'][`nav-item-${i+1}`]}); //borrowed, but attempted shorter ways and this was the shortest

// getting cta to appear
let popCta = document.getElementsByClassName('cta')[0];
popCta.getElementsByTagName('h1')[0].innerHTML = siteContent.cta.h1;
popCta.getElementsByTagName('button')[0].innerHTML = siteContent.cta.button;

// get left side of main content
let mContent = document.getElementsByClassName('text-content')[0];
mContent.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['features-h4'];
mContent.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['features-content'];

// get right side of main content
let mContent2 = document.getElementsByClassName('text-content')[1];
mContent2.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['about-h4'];
mContent2.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['about-content'];

// get bottom content

// services
let mBContent = document.getElementsByClassName('text-content')[2];
mBContent.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['services-h4'];
mBContent.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['services-content'];

// product
let mBContent2 = document.getElementsByClassName('text-content')[3];
mBContent2.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['product-h4'];
mBContent2.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['product-content'];

// vision
let mBContent3 = document.getElementsByClassName('text-content')[4];
mBContent3.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['vision-h4'];
mBContent3.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['vision-content'];

// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },
// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// },

// contact
let conInfo = document.getElementsByClassName('contact')[0];
conInfo.getElementsByTagName('h4')[0].innerHTML = siteContent['contact']['contact-h4'];
conInfo.getElementsByTagName('p')[0].innerHTML = siteContent['contact']['address'];
conInfo.getElementsByTagName('p')[1].innerHTML = siteContent['contact']['phone'];
conInfo.getElementsByTagName('p')[2].innerHTML = siteContent['contact']['email'];

let foot = document.getElementsByTagName('footer')[0];
foot.getElementsByTagName('p')[0].innerHTML = siteContent['footer']['copyright'];



// Filling in Images

// let headImg = document.getElementById('logo-img');
// headImg.src = 'img/logo.png';

// let logoImg = document.getElementById('cta-img');
// logoImg.src = 'img/header-img.png';

// let bannerImg = document.getElementById('middle-img');
// bannerImg.src = 'img/mid-page-accent.jpg';