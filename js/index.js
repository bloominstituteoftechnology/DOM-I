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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navArr = document.body.querySelectorAll('a');

navArr[0].textContent = 'Services';
navArr[1].textContent = 'Product';
navArr[2].textContent = 'Vision';
navArr[3].textContent = 'Features';
navArr[4].textContent = 'About';
navArr[5].textContent = 'Contact';

for (var i = 0; i < navArr.length; i++) {
  navArr[i].style.color = 'green';
}

const mHeader = document.body.querySelector('h1');
mHeader.textContent = 'DOM IS AWESOME';

const mImg = document.body.querySelector('#cta-img');
mImg.src = 'img/header-img.png';

const btn = document.body.querySelector('button');
btn.textContent = 'Get Started';

const subHeaders = document.body.querySelectorAll('h4');
subHeaders[0].textContent = 'FEATURES';
subHeaders[1].textContent = 'ABOUT';
subHeaders[2].textContent = 'SERVICES';
subHeaders[3].textContent = 'PRODUCT';
subHeaders[4].textContent = 'VISION';

const subParas = document.body.querySelectorAll('p');
subParas[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
subParas[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
subParas[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
subParas[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
subParas[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const midImg = document.body.querySelector('.middle-img');
midImg.src = 'img/mid-page-accent.jpg';

const navBar = document.body.querySelector('nav');
const newAnchor = document.createElement('a');

let insertAnchor = function (naviArray, href, text) {
  let anchor = navBar.appendChild(newAnchor);
  anchor.href = href;
  anchor.textContent = text;
  anchor.style.color = 'green';
};


insertAnchor(navArr, '#', 'Recipes');
insertAnchor(navArr, '#', 'Apply');


console.log(navArr);

//
// navArr[6].textContent = 'Recipes';
