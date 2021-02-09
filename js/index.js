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

const titleName = document.querySelector('title');
titleName.textContent = 'Great Idea!';

const aTags = document.querySelectorAll('a');
aTags[0].textContent = siteContent['nav']['nav-item-1'];
aTags[1].textContent = siteContent['nav']['nav-item-2'];
aTags[2].textContent = siteContent['nav']['nav-item-3'];
aTags[3].textContent = siteContent['nav']['nav-item-4'];
aTags[4].textContent = siteContent['nav']['nav-item-5'];
aTags[5].textContent = siteContent['nav']['nav-item-6'];

document.querySelector('#cta-img').src = "img/header-img.png" ;


const strH1 = document.querySelector('.cta-text h1');
strH1.innerHTML = siteContent['cta']['h1'].split(' ').join('<br> ');

document.querySelector('button').textContent ='Get Started';

const h4all = document.querySelectorAll('.text-content h4');
h4all[0].textContent = siteContent['main-content']['features-h4'];
h4all[1].textContent = 'About';
h4all[2].textContent = 'Services';
h4all[3].textContent = 'Product';
h4all[4].textContent = 'Vision';

document.querySelector('.middle-img').src = 'img/mid-page-accent.jpg'

let pAll = document.querySelectorAll('.text-content p');
pAll[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pAll[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pAll[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pAll[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pAll[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const contactSection = document.querySelector('.contact');

contactSection.querySelector('h4').textContent = "Contact";

const info = contactSection.querySelectorAll('p');
info[0].innerHTML = '123 Way 456 Street<br>Somewhere, USA';
info[1].textContent = '1 (888) 888-8888';
info[2].textContent = 'sales@greatidea.io';

document.querySelector('footer p').textContent = 'Copyright Great Idea! 2018';

aTags.forEach(item=>{
  item.style.color = 'green';
})


const firstEl = document.createElement('a');
const lastEl = document.createElement('a');
firstEl.textContent = 'firstEl';
lastEl.textContent = "lastEl";
firstEl.href = '#';
lastEl.href = '#';

document.querySelector('nav').appendChild(lastEl);
document.querySelector('nav').prepend(firstEl);

