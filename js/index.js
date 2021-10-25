

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
    ////
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
////
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    ///
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    ////
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


//Begin nav section
const nav1 = document.querySelector('a:nth-of-type(1)');
const nav2 = document.querySelector('a:nth-of-type(2)');
const nav3 = document.querySelector('a:nth-of-type(3)');
const nav4 = document.querySelector('a:nth-of-type(4)');
const nav5 = document.querySelector('a:nth-of-type(5)');
const nav6 = document.querySelector('a:nth-of-type(6)');
nav1.textContent = siteContent['nav']['nav-item-1']
nav2.textContent = siteContent['nav']['nav-item-2']
nav3.textContent = siteContent['nav']['nav-item-3']
nav4.textContent = siteContent['nav']['nav-item-4']
nav5.textContent = siteContent['nav']['nav-item-5']
nav6.textContent = siteContent['nav']['nav-item-6']
//end nav section

//need to work out logo
// const logo = document.querySelector('#logo-img');
// logo.src = siteContent['nav']['img-src'];
//end logo


//begin cta section
const ctah1 = document.querySelector('h1');
const ctaButton = document.querySelector('.cta button');
const ctaImgSrc = document.querySelector('.cta img')
ctah1.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button']
ctaImgSrc.src = siteContent['cta']['img-src']
//end cta section

//begin main-content section
const mainContenth4One = document.querySelector('.main-content h4:nth-of-type(1)')
mainContenth4One.textContent = siteContent['main-content']['features-h4']

const mainContentpOne = document.querySelector('.text-content p:nth-of-type(1)')
mainContentpOne.textContent = siteContent['main-content']['features-content']



const mainContenth4Two = document.querySelector('.text-content:nth-of-type(2) h4')
mainContenth4Two.textContent = siteContent['main-content']['about-h4'];

const mainContentpTwo = document.querySelector('.text-content:nth-of-type(2) p')
mainContentpTwo.textContent = siteContent['main-content']['about-content'];



const middleImgSrc =document.querySelector('#middle-img')
middleImgSrc.src = siteContent['main-content']['middle-img-src']



const mainContenth4Three = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
mainContenth4Three.textContent = siteContent['main-content']['services-h4'];

const mainContentpThree = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
mainContentpThree.textContent = siteContent['main-content']['services-content'];



const mainContenth4Four = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
mainContenth4Four.textContent = siteContent['main-content']['product-h4'];

const mainContentpFour = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
mainContentpFour.textContent = siteContent['main-content']['product-content'];



const mainContenth4Five = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
mainContenth4Five.textContent = siteContent['main-content']['vision-h4'];

const mainContentpFive = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
mainContentpFive.textContent = siteContent['main-content']['vision-content'];

//end main-content section


//begin contact section
const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

const contactPOne = document.querySelector('.contact p:nth-of-type(1)');
contactPOne.textContent = siteContent['contact']['address'];


const contactPTwo = document.querySelector('.contact p:nth-of-type(2)');
contactPTwo.textContent = siteContent['contact']['phone'];

const contactPThree = document.querySelector('.contact p:nth-of-type(3)');
contactPThree.textContent = siteContent['contact']['email'];
//end contact section


//begin footer section
const footerCopyRight = document.querySelector('footer p');
footerCopyRight.textContent = siteContent['footer']['copyright']
//end footer section