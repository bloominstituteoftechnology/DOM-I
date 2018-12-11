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
    "h1": "DOM <br> Is <br> Awesome",
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
logo.setAttribute('src', siteContent["nav"]["img-src"]);
 
// nav

const nav = document.querySelectorAll('a');
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

//------------------------------------------------------

//cta

const ctaText = document.querySelector('h1');
ctaText.textContent = "DOM Is Awesome";

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);
//--------------------------------------------------------

//main-content

const mainContentH4 = document.querySelectorAll(".main-content .top-content h4");
 mainContent[0].textContent = siteContent['main-content']['features-h4'];
 mainContent[1].textContent = siteContent['main-content']['features-content'];
 mainContent[2].textContent = siteContent['main-content']['about-h4'];
 mainContent[3].textContent = siteContent['main-content']['about-content']; 
 
 const mainContentPara = document.querySelectorAll(".main-content .top-content p");

 mainContent[5].textContent = siteContent['main-content']['services-h4'];
 mainContent[6].textContent = siteContent['main-content']['services-content'];
 mainContent[7].textContent = siteContent['main-content']['product-h4'];
 mainContent[8].textContent = siteContent['main-content']['product-content'];
 mainContent[9].textContent = siteContent['main-content']['vision-h4'];
 mainContent[10].textContent = siteContent['main-content']['vision-content'];
 
//--------------------------------------------------------------------

 //services

servicesH4.textContent = "Services";

const servicesContent = document.querySelector('main-content');
servicesContent.textContent = siteContent['main-content']['services-content'];

const productH4 = document.querySelector('main-content');
productH4.textContent = "Products";

const productContent = document.querySelector('main-content');
productContent.textContent = siteContent['main-content']['product-content'];

const visionH4 = document.querySelector('main-content');
visionH4.textContent = "Vision";

const visionContent = document.querySelector('main-content');
visionContent = siteContent['main-content']['vision-content'];
//------------------------------------------------------


const contactH4 = document.querySelector('contact');
contactH4.textContent = "Contact";

const address = document.querySelector('contact');
address.textContent = siteContent['contact']['address'];

const phone = document.querySelector('contact');
phone.textContent = siteContent['contact']['phone'];

const email = document.querySelector('contact');
email.textContent = siteContent['contact']['email'];
//---------------------------------------------------

//footer


const footer = document.querySelector('copyright');
copyright.textContent = siteContent['footer']["copyright"];
