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
logo.setAttribute('src', siteContent['nav']['img-src'])

const navItem1 = document.querySelectorAll('a');     //NAV
const mainHeader = document.querySelector('h1');      //TOP CONTENT HEADER
const btn = document.querySelector('button');       //BUTTON
const topImg = document.getElementById('cta-img');        //TOP CONTENT HEADER IMAGE
const h4s = document.querySelectorAll('h4');        //MAIN CONTENT H4
const mainImg = document.getElementById('middle-img');        //MAIN CONTENT
const paras = document.querySelectorAll('p');       //MAIN CONTENT PARAGRAPHS


const newNavItem = document.createElement('a');
newNavItem.href = '#';
newNavItem.textContent = 'Blog';

const nav = document.querySelector('nav');
nav.prepend(newNavItem);

const newNavItem1 = document.createElement('a');
newNavItem1.href = '#';
newNavItem1.textContent = 'Sign Up';

const nav1 = document.querySelector('nav');
nav1.append(newNavItem1);

//====NAV BAR====
navItem1[0].innerHTML = siteContent['nav']['nav-item-1'];
navItem1[1].innerHTML = siteContent['nav']['nav-item-2'];
navItem1[2].innerHTML = siteContent['nav']['nav-item-3'];
navItem1[3].innerHTML = siteContent['nav']['nav-item-4'];
navItem1[4].innerHTML = siteContent['nav']['nav-item-5'];
navItem1[5].innerHTML = siteContent['nav']['nav-item-6'];   

//====NAV BAR STYLE====
navItem1[0].style.color = 'green';
navItem1[1].style.color = 'green';
navItem1[2].style.color = 'green';
navItem1[3].style.color = 'green';
navItem1[4].style.color = 'green';
navItem1[5].style.color = 'green';

//====TOP CONTENT====
mainHeader.textContent = 'DOM Is Awesome';
btn.textContent = siteContent['cta']['button'];

topImg.setAttribute('src', siteContent['cta']['img-src']);

//====MAIN CONTENT====
h4s[0].textContent = siteContent['main-content']['features-h4'];
h4s[1].textContent = siteContent['main-content']['about-h4'];
h4s[2].textContent = siteContent['main-content']['services-h4'];
h4s[3].textContent = siteContent['main-content']['product-h4'];
h4s[4].textContent = siteContent['main-content']['vision-h4'];


mainImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

paras[0].textContent = siteContent['main-content']['features-content'];
paras[1].textContent = siteContent['main-content']['about-content'];
paras[2].textContent = siteContent['main-content']['services-content'];
paras[3].textContent = siteContent['main-content']['product-content'];
paras[4].textContent = siteContent['main-content']['vision-content'];

//==========CONTACT=============
h4s[5].textContent = siteContent['contact']['contact-h4'];
paras[5].textContent = siteContent['contact']['contact-h4'];
paras[6].textContent = siteContent['contact']['address'];
paras[7].textContent = siteContent['contact']['phone'];
paras[8].textContent = siteContent['contact']['email'];

