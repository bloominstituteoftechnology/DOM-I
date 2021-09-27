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
//selectors
//nav
const navElement = document.querySelector('a');
const navElement2 = navElement.nextElementSibling;
const navElement3 = navElement2.nextElementSibling;
const navElement4 = navElement3.nextElementSibling;
const navElement5 = navElement4.nextElementSibling;
const navElement6 = navElement5.nextElementSibling;


//logo img
const logoPicture = document.querySelector('#logo-img');
//header picture
const headerPicture = document.querySelector("#cta-img");
//middle img
const middlePicture = document.querySelector("#middle-img");

//main title Dom is Awesome!
const mainTitle = document.querySelector('.cta-text h1');

// Button
const mainButton = document.querySelector('.cta-text button');
//top content half
//features
const featuresHeader = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
const featuresParagraph = document.querySelector('.top-content .text-content:nth-of-type(1) p');
//About
const aboutHeader = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const aboutParagraph = document.querySelector('.top-content .text-content:nth-of-type(2) p');

const footerText = document.querySelector('footer p')
//// bottom content half
//Services
const servicesHeader = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servicesParagraph = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')

//Product
const productHeader = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const productParagraph = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');


//Vision
const visionHeader = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const visionParagraph = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');

//contact class
const contactHeader = document.querySelector('.contact h4')
const contactAddress = document.querySelector('.contact p:nth-of-type(1)');
const contactPhone = document.querySelector('.contact p:nth-of-type(2)');
const contactEmail = document.querySelector('.contact p:nth-of-type(3)');


// navElement.textContent = 'Services'
navElement.textContent = siteContent['nav']['nav-item-1'];
navElement2.textContent = siteContent['nav']['nav-item-2'];
navElement3.textContent = siteContent['nav']['nav-item-3'];
navElement4.textContent = siteContent['nav']['nav-item-4'];
navElement5.textContent = siteContent['nav']['nav-item-5'];
navElement6.textContent = siteContent['nav']['nav-item-6'];

mainTitle.textContent = siteContent['cta']['h1'];

mainButton.textContent = siteContent['cta']['button'];


logoPicture.setAttribute("src", siteContent['nav']['img-src']);

headerPicture.setAttribute("src", siteContent['cta']["img-src"]);

middlePicture.setAttribute("src", siteContent['main-content']["middle-img-src"]);

featuresHeader.textContent = siteContent['main-content']['features-h4'];
featuresParagraph.textContent = siteContent['main-content']['features-content'];

aboutHeader.textContent = siteContent['main-content'][
  'about-h4'];
aboutParagraph.textContent = siteContent['main-content'][
  'about-content'];

servicesHeader.textContent = siteContent['main-content']['services-h4'];
servicesParagraph.textContent = siteContent['main-content']
['services-content'];
  
productHeader.textContent = siteContent['main-content']['product-h4'];
productParagraph.textContent = siteContent['main-content']
['product-content'];

visionHeader.textContent = siteContent['main-content']['vision-h4'];
visionParagraph.textContent = siteContent['main-content']
['vision-content'];

contactHeader.textContent = siteContent['contact']['contact-h4'];

contactAddress.textContent = siteContent['contact']
['address'];
contactPhone.textContent = siteContent['contact']
['phone'];
contactEmail.textContent = siteContent['contact']
['email'];

footerText.textContent = siteContent['footer']['copyright'];