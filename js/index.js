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


// ====== Variable Declaration
// -- Header & Nav Vars
const logo = document.getElementById('logo-img');
const nav = document.querySelectorAll('nav a');
// -- CTA Vars
const cta = document.querySelector('.cta');
const ctaH1 = document.querySelector('.cta-text h1');
const ctaImg = document.querySelector('#cta-img');
const button = document.querySelector('button');
// -- Main Content Vars
const mainContent = document.querySelector('main-content');
const midImg = document.querySelector('.middle-img');
const mainH4 = document.querySelectorAll('.main-content h4');
const mainP = document.querySelectorAll('.main-content p');
// -- Contact Vars
const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');
// -- Footer Vars
const footerP = document.querySelector('footer p');




// ====== Header Nav
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];
logo.setAttribute('src', siteContent['nav']['img-src']);


// ====== CTA 
ctaH1.textContent = siteContent['cta']['h1'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']) 
button.textContent = siteContent['cta']['button'];


// ====== Main Content
// --- Main-Top content
mainH4[0].textContent = siteContent['main-content']['features-h4'];
mainP[0].textContent = siteContent['main-content']['features-content'];

mainH4[1].textContent = siteContent['main-content']['about-h4'];
mainP[1].textContent = siteContent['main-content']['about-content'];

midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// -- Main-Bottom Content
mainH4[2].textContent = siteContent['main-content']['services-h4'];
mainP[2].textContent = siteContent['main-content']['services-content'];

mainH4[3].textContent = siteContent['main-content']['product-h4'];
mainP[3].textContent = siteContent['main-content']['product-content'];

mainH4[4].textContent = siteContent['main-content']['vision-h4'];
mainP[4].textContent = siteContent['main-content']['vision-content'];


// ====== Contact Section
contactH4.textContent = siteContent['contact']['contact-h4'] ;
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];


// ====== Footer
footerP.textContent = siteContent['footer']['copyright'];
