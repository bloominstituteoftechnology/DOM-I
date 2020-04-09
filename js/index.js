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
const navs = document.querySelectorAll('a');
const nav = document.querySelector('nav')
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const img1 = document.querySelector('#cta-img');
const h4s = document.querySelectorAll('h4');
const thePIsFree = document.querySelectorAll('p');
const img2 = document.querySelector('#middle-img');
logo.setAttribute('src', siteContent["nav"]["img-src"])
const navArr = [...navs];
const h4Arr = [...h4s];
const cusDaCrackCostMoney = [...thePIsFree];
navArr[0].innerHTML = siteContent.nav["nav-item-1"];
navArr[1].innerHTML = siteContent.nav["nav-item-2"];
navArr[2].innerHTML = siteContent.nav["nav-item-3"];
navArr[3].innerHTML = siteContent.nav["nav-item-4"];
navArr[4].innerHTML = siteContent.nav["nav-item-5"];
navArr[5].innerHTML = siteContent.nav["nav-item-6"];
h1.innerHTML = siteContent.cta.h1;
btn.innerHTML = siteContent.cta.button;
img1.src = siteContent.cta["img-src"];
h4Arr[0].innerHTML = siteContent["main-content"]["features-h4"];
h4Arr[1].innerHTML = siteContent["main-content"]["about-h4"];
h4Arr[2].innerHTML = siteContent["main-content"]["services-h4"];
h4Arr[3].innerHTML = siteContent["main-content"]["product-h4"];
h4Arr[4].innerHTML = siteContent["main-content"]["vision-h4"];
h4Arr[5].innerHTML = siteContent.contact["contact-h4"];
cusDaCrackCostMoney[0].innerHTML = siteContent["main-content"]["features-content"];
cusDaCrackCostMoney[1].innerHTML = siteContent["main-content"]["about-content"];
cusDaCrackCostMoney[2].innerHTML = siteContent["main-content"]["services-content"];
cusDaCrackCostMoney[3].innerHTML = siteContent["main-content"]["product-content"];
cusDaCrackCostMoney[4].innerHTML = siteContent["main-content"]["vision-content"];
cusDaCrackCostMoney[5].innerHTML = siteContent.contact.address;
cusDaCrackCostMoney[6].innerHTML = siteContent.contact.phone;
cusDaCrackCostMoney[7].innerHTML = siteContent.contact.email;
cusDaCrackCostMoney[8].innerHTML = siteContent.footer.copyright;
img2.src = siteContent["main-content"]["middle-img-src"];
