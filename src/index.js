const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//navbar
const nav = document.querySelectorAll('nav a');
const linkTexts = Object.values(siteContent.nav)

nav.forEach((link,idx) => 
{
  link.textContent = linkTexts[idx]
})


// const firstChild = nav.firstChild;
// firstChild.textContent = siteContent['nav']['nav-item-1'];

// const secondChild = firstChild.nextElementSibling;
// secondChild.textContent = siteContent['nav']['nav-item-2'];
// const thirdChild = secondChild.nextElementSibling;
// thirdChild.textContent = siteContent['nav']['nav-item-3'];
// const fourthChild = thirdChild.nextElementSibling;
// fourthChild.textContent = siteContent['nav']['nav-item-4'];
// const fifthChild = fourthChild.nextElementSibling;
// fifthChild.textContent = siteContent['nav']['nav-item-5'];
// const sixthChild = fifthChild.nextElementSibling;
// sixthChild.textContent = siteContent['nav']['nav-item-6'];

const logoTitle = document.querySelector('.logo');
logoTitle.src = "http://localhost:9000/img/logo.png";


//main section
const domIsAwesome = document.querySelector('.cta-text h1');
domIsAwesome.textContent = siteContent.cta.h1;

const startedButton = document.querySelector('.cta-text button');
startedButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = "http://localhost:9000/img/cta.png" ;


//top text section
const featuresContent = document.querySelector('.text-content h4');
featuresContent.textContent = siteContent['main-content']['features-h4']; 

const featuresContentText = document.querySelector('.text-content p');
featuresContentText.textContent = siteContent['main-content']['features-content']; 

const aboutContent = document.querySelector('.text-content:nth-of-type(2) h4');
aboutContent.textContent = siteContent['main-content']['about-h4']; 

const aboutContentText = document.querySelector('.text-content:nth-of-type(2) p');
aboutContentText.textContent = siteContent['main-content']['about-content']; 

//bottom text section
const servicesContent = document.querySelector('.bottom-content .text-content h4');
servicesContent.textContent = siteContent['main-content']['services-h4']; 

const servicesContentText = document.querySelector('.bottom-content .text-content p');
servicesContentText.textContent = siteContent['main-content']['services-content']; 

const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productContent.textContent = siteContent['main-content']['product-h4']; 

const productContentText = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productContentText.textContent = siteContent['main-content']['product-content']; 

const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionContent.textContent = siteContent['main-content']['vision-h4']; 

const visionContentText = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionContentText.textContent = siteContent['main-content']['vision-content']; 

const middleImg = document.querySelector('#middle-img');
middleImg.src = "http://localhost:9000/img/accent.png"


//contact section
const contact = document.querySelector('.contact h4');
contact.textContent = siteContent.contact['contact-h4'];

const address = document.querySelector(".contact p");
address.textContent = siteContent.contact.address;

const phone = document.querySelector(".contact p:nth-of-type(2)");
phone.textContent = siteContent.contact.phone;

const email = document.querySelector(".contact p:nth-of-type(3)");
email.textContent = siteContent.contact.email;


//copyright
const copyRight = document.querySelector('footer a');
copyRight.textContent = siteContent.footer.copyright; 
