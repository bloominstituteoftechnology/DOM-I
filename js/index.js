

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


//begin cta section
const ctah1 = document.querySelector('h1');
const ctaButton = document.querySelector('.cta button');
const ctaImgSrc = document.querySelector('.cta img')
ctah1.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button']
ctaImgSrc.src = siteContent['cta']['img-src']
//end cta section

//begin main-content section
const mainContenth4One = document.querySelector('.text-content h4:nth-of-type(1)')
const mainContentpOne = document.querySelector('.text-content p:nth-of-type(1)')
const mainContentpOne = document.querySelector('.text-content p:nth-of-type(1)')
mainContenth4One.textContent = siteContent['main-content']['features-h4']
mainContentpOne.textContent = siteContent['main-content']['features-content']
//end main-content section