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
const nav = document.getElementsByTagName("a");
const img = document.querySelectorAll('img')
const h1 = document.querySelectorAll('h1');
const h4 = document.querySelectorAll('h4');
const button = document.querySelectorAll('button');
const p = document.querySelectorAll('p');
nav[0].innerHTML = siteContent['nav']['nav-item-1'];
nav[1].innerHTML = siteContent['nav']['nav-item-2'];
nav[2].innerHTML = siteContent['nav']['nav-item-3'];
nav[3].innerHTML = siteContent['nav']['nav-item-4'];
nav[4].innerHTML = siteContent['nav']['nav-item-5'];
nav[5].innerHTML = siteContent['nav']['nav-item-6'];

console.log(img);
img[0].setAttribute('src', siteContent['nav']['img-src']);
h1[0].innerHTML = siteContent['cta']['h1']
button[0].innerHTML = siteContent['cta']['button']
img[1].setAttribute('src', siteContent['cta']['img-src']);
h4[0].innerHTML = siteContent['main-content']['features-h4']
p[0].innerHTML = siteContent['main-content']['features-content']
h4[1].innerHTML = siteContent['main-content']['about-h4']
p[1].innerHTML = siteContent['main-content']['about-content']
h4[2].innerHTML = siteContent['main-content']['services-h4']
p[2].innerHTML = siteContent['main-content']['services-content']
h4[3].innerHTML = siteContent['main-content']['product-h4']
p[3].innerHTML = siteContent['main-content']['product-content']
h4[4].innerHTML = siteContent['main-content']['vision-h4']
p[4].innerHTML = siteContent['main-content']['vision-content']
img[2].setAttribute('src', siteContent['main-content']['middle-img-src']);
h4[5].innerHTML = siteContent['contact']['contact-h4']
p[5].innerHTML = siteContent['contact']['address']
p[6].innerHTML = siteContent['contact']['phone']
p[7].innerHTML = siteContent['contact']['email']
p[8].innerHTML = siteContent['footer']['copyright']


