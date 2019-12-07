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

//Elements by Class

const containerCl = document.getElementsByClassName('container');

const logoCl = document.getElementsByClassName('logo');

const ctaCl = document.getElementsByClassName('cta');

const ctatextCl = document.getElementsByClassName('cta-text');

const maincontentCl = document.getElementsByClassName('main-content');

const topcontentCl = document.getElementsByClassName('top-content');

const textcontentCl = document.getElementsByClassName('text-content');

const middleimgCl = document.getElementsByClassName('middle-img');

const bottomcontentCl = document.getElementsByClassName('bottom-content');

const contactCl = document.getElementsByClassName('contact');

//Elements by ID

const logoimgId = document.getElementById('logo-img');

const ctaimgId = document.getElementById('cta-img');

const middleimgId = document.getElementById('middle-img');

//Query Selectors - Elements

const header = document.querySelector('header');

const nav = document.querySelector('nav');

const a = document.querySelector('a');

const section = document.querySelector('section');

const div = document.querySelector('div');

//Query Selectors - cta

const ctaH1 = document.querySelector('.cta-text h1');

const ctaButton = document.querySelector('.cta-text button');

const ctaImg = document.querySelector('.cta img');

//Query Selectors - main-content

const mainContent = document.querySelectorAll('.main-content');

const mainContentH4s = document.querySelectorAll('.main-content h4');

const mainContentPs = document.querySelectorAll('.main-content p');

const mainMiddleImg = document.getElementById("middle-img");

//Query Selectors - contact

const contact = document.querySelector('.contact');

//Query Selectors - footer

const footerP = document.querySelector('footer p');

//////////////////////ADDING SITE CONTENT///////////////////////////

//Nav Bar
nav.children[0].textContent = siteContent['nav']['nav-item-1'];
nav.children[1].textContent = siteContent['nav']['nav-item-2'];
nav.children[2].textContent = siteContent['nav']['nav-item-3'];
nav.children[3].textContent = siteContent['nav']['nav-item-4'];
nav.children[4].textContent = siteContent['nav']['nav-item-5'];
nav.children[5].textContent = siteContent['nav']['nav-item-6'];

// for (let i = 0; i < 7; i++) {
//   nav.children[i].textContent = siteContent['nav']['nav-item-'.concat(i)];
// };


//cta

ctaH1.textContent = siteContent['cta']['h1'];
ctaH1.style.width = '42%';

ctaButton.textContent = siteContent['cta']['button'];
ctaButton.style.alignItem = 'center';

ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//main-content

mainContentH4s[0].textContent = siteContent['main-content']["features-h4"];
mainContentH4s[1].textContent = siteContent['main-content']["about-h4"];
mainContentH4s[2].textContent = siteContent['main-content']["services-h4"];
mainContentH4s[3].textContent = siteContent['main-content']["product-h4"];
mainContentH4s[4].textContent = siteContent['main-content']["vision-h4"];

mainContentPs[0].textContent = siteContent['main-content']["features-content"];
mainContentPs[1].textContent = siteContent['main-content']["about-content"];
mainContentPs[2].textContent = siteContent['main-content']["services-content"];
mainContentPs[3].textContent = siteContent['main-content']["product-content"];
mainContentPs[4].textContent = siteContent['main-content']["vision-content"];

mainMiddleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//contact

contact.children[0].textContent = siteContent['contact']['contact-h4'];
contact.children[1].textContent = siteContent['contact']['address'];
contact.children[2].textContent = siteContent['contact']['phone'];
contact.children[3].textContent = siteContent['contact']['email'];

//footer

footerP.textContent = siteContent['footer']['copyright'];
