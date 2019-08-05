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

let navBar = document.getElementsByTagName('a');
let navArray = Array.from(navBar);

navBar[0].innerText = siteContent['nav']['nav-item-1']
navBar[1].innerText = siteContent['nav']['nav-item-2']
navBar[2].innerText = siteContent['nav']['nav-item-3']
navBar[3].innerText = siteContent['nav']['nav-item-4']
navBar[4].innerText = siteContent['nav']['nav-item-5']
navBar[5].innerText = siteContent['nav']['nav-item-6']


// cta section

let ctaHeader = document.querySelector('.cta h1');
ctaHeader.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta button');
ctaButton.innerHTML = siteContent['cta']['button'];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// main section

let mainHeader = document.getElementsByTagName('h4');
let mainContent = document.getElementsByTagName('p');

// top content

mainHeader[0].innerText = siteContent['main-content']['features-h4'];
mainContent[0].innerText = siteContent['main-content']['features-content'];
mainHeader[1].innerText = siteContent['main-content']['about-h4'];
mainContent[1].innerText = siteContent['main-content']['about-content'];

// middle image

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// bottom content

mainHeader[2].innerText = siteContent['main-content']['services-h4'];
mainContent[2].innerText = siteContent['main-content']['services-content'];
mainHeader[3].innerText = siteContent['main-content']['product-h4'];
mainContent[3].innerText = siteContent['main-content']['product-content'];
mainHeader[4].innerText = siteContent['main-content']['vision-h4'];
mainContent[4].innerText = siteContent['main-content']['vision-content'];

// contact

mainHeader[5].innerText = siteContent['contact']['contact-h4'];
mainContent[5].innerText = siteContent['contact']['address'];
mainContent[6].innerText = siteContent['contact']['phone'];
mainContent[7].innerText = siteContent['contact']['email'];

// footer

mainContent[8].innerText = siteContent['footer']['copyright'];