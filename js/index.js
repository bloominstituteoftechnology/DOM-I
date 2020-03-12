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
const logo = document.getElementById("logo-img");
logo.src = "img/logo.png"

const ctaImg = document.getElementById("cta-img");
ctaImg.src = "img/header-img.png"

const middleImg = document.getElementById("middle-img");
middleImg.src = 'img/mid-page-accent.jpg'

const headline = document.querySelector("h1");
headline.textContent = "DOM IS AWESOME"

const ctaSection = document.querySelector('.cta');
ctaSection.style.justifyContent = 'space-around'

const ctaText = document.querySelector(".cta-text button");
ctaText.textContent = 'GET STARTED'
ctaText.style.fontWeight = 'bold'

const features = document.querySelectorAll('.top-content .text-content h4')[0];
features.textContent = 'FEATURES';

const featuresInfo = document.querySelectorAll('.top-content .text-content p')[0];
featuresInfo.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const about = document.querySelectorAll('.top-content .text-content h4')[1];
about.textContent = 'ABOUT'

const aboutInfo = document.querySelectorAll('.top-content .text-content p')[1];
aboutInfo.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const bottomContent1 = document.querySelectorAll('.bottom-content .text-content h4')[0];
bottomContent1.textContent = 'SERVICES'

const bottomContent1P = document.querySelectorAll('.bottom-content .text-content p')[0];
bottomContent1P.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const bottomContent2 = document.querySelectorAll('.bottom-content .text-content h4')[1];
bottomContent2.textContent = 'PRODUCTS'

const bottomContent2P = document.querySelectorAll('.bottom-content .text-content p')[1];
bottomContent2P.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const bottomContent3 = document.querySelectorAll('.bottom-content .text-content h4')[2];
bottomContent3.textContent = 'VISION'

const bottomContent3P = document.querySelectorAll('.bottom-content .text-content p')[2];
bottomContent3P.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const header = document.querySelector('header');
header.style.background = 'green'

const navItem = document.createElement('a');
navItem.textContent = 'CONTACT'
navItem.href = 'index.html'
navItem.style.textDecoration = 'none'
navItem.style.color = 'black'
navItem.style.marginLeft = '5px'
header.prepend(navItem);

const navItemTwo = document.createElement('a');
navItemTwo.textContent = 'ABOUT';
navItemTwo.style.marginLeft = '5px'
header.prepend(navItemTwo)

const navItemThree = document.createElement('a');
navItemThree.textContent = 'FEATURES';
navItemThree.style.marginLeft = '5px'
header.prepend(navItemThree)

const navItemFour = document.createElement('a');
navItemFour.textContent = 'VISION';
navItemFour.style.marginLeft = '5px'
header.prepend(navItemFour)

const navItemFive = document.createElement('a');
navItemFive.textContent = 'PRODUCT';
navItemFive.style.marginLeft = '5px'
header.prepend(navItemFive)

const navItemSix = document.createElement('a');
navItemSix.textContent = 'SERVICES';
navItemSix.style.marginLeft = '5px'
header.appendChild(navItemSix)

header.className = 'header'
header.style.flexWrap = 'no-wrap'
header.style.justifyContent = 'space-between';
header.style.allignItems = 'center'

document.style.backgroundColor = 'light-gray'