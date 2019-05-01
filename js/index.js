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

// initial commit

const nav = document.querySelector('nav');
const navList = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact', logo.png];
navList.forEach(navigation => {
  let navItems = document.createElement('a');
  navItems.textContent = navigation;
  nav.append(navItems);
});

// cta h1
const cta = document.querySelector('.cta')
const ctaText = document.querySelector('.cta .cta-text')
const h1Arr = siteContent['cta']['h1'].split(' ');
const domH1 = document.createElement('h1');
const isH1 = document.createElement('h1');
const awesomeH1 = document.createElement('h1');

cta.prepend(awesomeH1);
cta.prepend(isH1);
cta.prepend(domH1);
ctaText.prepend(awesomeH1);
ctaText.prepend(isH1);
ctaText.prepend(domH1);

domH1.textContent = h1Arr[0];
isH1.textContent = h1Arr[1];
awesomeH1.textContent = h1Arr[2];

// cta button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta['button'];

//cta get-started image
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];

// main-content middle-img
const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];