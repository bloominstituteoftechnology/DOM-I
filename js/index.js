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

//navbar
const navbar = document.querySelectorAll('a')
navbar.forEach((value, i) => value.textContent = siteContent.nav[`nav-item-${i + 1}`])


//title

const header = document.querySelector('.cta-text h1')
header.innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br>');

const button = document.querySelector('.cta-text button')
button.textContent = siteContent.cta['button']

const headerimg = document.querySelector('#cta-img')
headerimg.setAttribute('src', siteContent['cta']['img-src'])


//main-content

const featuresHeader = document.querySelector('.top-content h4');
featuresHeader.textContent = siteContent['main-content'] ['features-h4'];

const featuresCont = document.querySelector('.top-content p');
console.log(featuresCont);

const aboutHeader = document.querySelectorAll('.top-content div:last-child h4');
console.log(aboutHeader);

const aboutCont = document.querySelectorAll('.top-content div:last-child p');
console.log(aboutCont);

const midImg = document.querySelector('#middle-img');
console.log(midImg);

const servHeader = document.querySelector('.bottom-content h4');
console.log(servHeader);

const servCont = document.querySelector('.bottom-content p');
console.log(servCont);

const proHeader = document.querySelectorAll('.bottom-content div:nth-child(2) h4');
console.log(proHeader);

const proCont = document.querySelectorAll('.bottom-content div:nth-child(2) p');
console.log(proCont);

const visHeader = document.querySelectorAll('.bottom-content div:last-child h4');
console.log(visHeader);

const visCont = document.querySelectorAll('.bottom-content div:last-child p');
console.log(visCont);

const contHeader = document.querySelector('.contact h4');
console.log(contHeader);

const contAdd = document.querySelector('.contact p');
console.log(contAdd);

const contPhone = document.querySelectorAll('.contact p:nth-child(2)');
console.log(contPhone);

const contEmail = document.querySelectorAll('.contact p:last-child');
console.log(contEmail);

const footer = document.querySelector('footer p');
console.log(footer);