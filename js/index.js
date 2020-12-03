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


// retrieve nav elements 
let anchorTags = document.querySelectorAll('nav > a');
anchorTags.forEach((anchorTag, index )  => {
  console.log(index + 1);
  const property = 'nav-item-' + (index + 1)
  console.log(property);
  anchorTag.textContent = siteContent.nav[property];
});

// retrieve img 
let img = document.querySelector('#cta-img');

img.src = siteContent.cta["img-src"];

// title of page h1 
let mainTitle = document.querySelectorAll('.cta-text h1');
mainTitle[0].textContent = siteContent['cta']['h1'];

// adding button 
let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

// adding top h4 content 
let topContentH4 = document.querySelectorAll('.top-content h4');
topContentH4[0].textContent = siteContent['main-content']['features-h4'];

topContentH4[1].textContent = siteContent['main-content']['about-h4'];

// adding top p content
let topContentP = document.querySelectorAll('.top-content p');
topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent = siteContent['main-content']['about-content'];

// adding middle img 
let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// adding bottom h4 content 

let bottomContentH4 = document.querySelectorAll('.bottom-content h4');
bottomContentH4[0].textContent = siteContent['main-content']['services-h4'];
bottomContentH4[1].textContent = siteContent['main-content']['product-h4'];
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4'];


// console.log(img);