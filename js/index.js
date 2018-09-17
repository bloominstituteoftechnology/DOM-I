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


// Navigation
let navService = document.querySelector('a');
navService.innerHTML = 'Service';

let navProduct = document.querySelectorAll('a')[1];
navProduct.innerHTML = 'Product';

let navVision = document.querySelectorAll('a')[2];
navVision.innerHTML = 'Vision';

let navFeatures = document.querySelectorAll('a')[3];
navFeatures.innerHTML = 'Features';

let navAbout = document.querySelectorAll('a')[4];
navAbout.innerHTML = 'About';

let navContact = document.querySelectorAll('a')[5];
navContact.innerHTML = 'Contact';

// CTA
let ctaTitle = document.querySelector('.cta .cta-text h1');
ctaTitle.innerHTML = 'DOM <br> Is <br> Awesome';

let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerHTML = 'Get Started';

let ctaImg = document.querySelector('.cta img');
ctaImg.src = 'img/header-img.png';

// Top Content
let featuresContentTitle = document.querySelector('.top-content .text-content h4');
featuresContentTitle.innerHTML = 'Features';

let featuresContentP = document.querySelector('.top-content .text-content p');
featuresContentP.innerHTML = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let aboutContentTitle = document.querySelectorAll('.top-content .text-content h4')[1];
aboutContentTitle.innerHTML = 'About';

let aboutContentP = document.querySelectorAll('.top-content .text-content p')[1];
aboutContentP.innerHTML = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Middle Img
let middleImg = document.querySelector('.main-content .middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

// Bottom Content
let serviceContentTitle = document.querySelector('.bottom-content .text-content h4');
serviceContentTitle.innerHTML = 'Services';

let serviceContentP = document.querySelector('.bottom-content .text-content p');
serviceContentP.innerHTML = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let productContentTitle = document.querySelectorAll('.bottom-content .text-content h4')[1];
productContentTitle.innerHTML = 'Product';

let productContentP = document.querySelectorAll('.bottom-content .text-content p')[1];
productContentP.innerHTML = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let visionContentTitle = document.querySelectorAll('.bottom-content .text-content h4')[2];
visionContentTitle.innerHTML = 'Vision';

let visionContentP = document.querySelectorAll('.bottom-content .text-content p')[2];
visionContentP.innerHTML =  'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Contact Section
let contactTitle = document.querySelector('.contact h4');
contactTitle.innerHTML = 'Contact';

let contactP = document.querySelector('.contact p');
contactP.innerHTML = '123 Way 456 Street<br>Somewhere, USA';

let contactP1 = document.querySelectorAll('.contact p')[1];
contactP1.innerHTML = '1 (888) 888-8888';

let contactP2 = document.querySelectorAll('.contact p')[2];
contactP2.innerHTML = 'sales@greatidea.io';

// Footer
let footer = document.querySelector('footer p');
footer.innerHTML = 'Copyright Great Idea! 2018';
