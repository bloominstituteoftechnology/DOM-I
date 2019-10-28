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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// ***create selectors***

//node lists

//anchor node list
const navItems = document.querySelectorAll('a');
//h4 headers node list
const headers = document.querySelectorAll('h4');
//p content node list
const content = document.querySelectorAll('p');


//nav bar
const nav = document.getElementsByTagName('nav')[0];

//cta content
const ctaH1 = document.getElementsByTagName('h1')[0];
const ctaButton = document.getElementsByTagName('button')[0];
const ctaImg = document.getElementById('cta-img');

//main section
const featuresHeader = headers[0];
const featuresContent = content[0];
const aboutHeader = headers[1];
const aboutContent = content[1];
const middleImg = document.getElementById('middle-img');
const servicesHeader = headers[2];
const servicesContent = content[2];
const productHeader = headers[3];
const productContent = content[3];
const visionHeader = headers[4];
const visionContent = content[4];

//contact section
const contactHeader = headers[5];
const address = content[5];
const phone = content[6];
const email = content[7];

//footer section
const copyright = content[8];

// ***Update site content***

// add correct img sources
ctaImg.src = siteContent.cta["img-src"];
middleImg.src = siteContent["main-content"]['middle-img-src'];

//add rest of JSON content

//nav links
navItems.forEach((navLink, i) => navLink.textContent = siteContent.nav[`nav-item-${++i}`]);

//cta content
ctaH1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

//main content
//main JSON shortcut
const main = siteContent["main-content"];
featuresHeader.textContent = main["features-h4"];
featuresContent.textContent = main["features-content"];
aboutHeader.textContent = main["about-h4"];
aboutContent.textContent = main["about-content"];
servicesHeader.textContent = main["services-h4"];
servicesContent.textContent = main["services-content"];
productHeader.textContent = main["product-h4"];
productContent.textContent = main["product-content"];
visionHeader.textContent = main["vision-h4"];
visionContent.textContent = main["vision-content"];

//contact content
contactHeader.textContent = siteContent.contact["contact-h4"];
address.textContent = siteContent.contact.address;
phone.textContent = siteContent.contact.phone;
email.textContent = siteContent.contact.email;

//footer content
copyright.textContent = siteContent.footer.copyright;

// ***change styles***

//change nav links to green
navItems.forEach(navLink => navLink.style.color = 'green');

// ***add elements to nav***
// *note: would prefer to normally create before manipulating existing links, neater code. 


//create elements
const first = document.createElement('a');
const last = document.createElement('a');
//add text content to first new element
first.textContent = "First";
//add text content to last new element
last.textContent = "Last";
//add href to each
first.href = '#';
last.href = '#'
//match style
first.style.color = 'green';
last.style.color = 'green';
//add element to beginning of nav
nav.prepend(first);
//add element to end of nav
nav.appendChild(last);