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
    "h1": "DOM<br>Is<br>Awesome",
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
    "address" : "123 Way 456 Street<br>Somewhere, USA",
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

const createID = (className, id) => {
  document.querySelector(className).setAttribute('id', id);
}

createID('nav', 'main-nav');
createID('.cta-text', 'ctaText');
createID('.contact', 'contact');
createID('footer', 'footer');

const renderElements = (obj, id) => {
  let ListValues = Object.values(obj);
  let ListKeys = Object.keys(obj);
  let curID = document.getElementById(id);
  for (i = 0; i < curID.children.length; i++) {
    curID.children[i].innerHTML = ListValues[i];
  }
}

renderElements(siteContent.nav, 'main-nav');
renderElements(siteContent.cta, 'ctaText');
renderElements(siteContent.contact, 'contact');
renderElements(siteContent.footer, 'footer');


const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const textContent = document.querySelectorAll('.text-content');

let mainContent = siteContent['main-content'];
delete mainContent['middle-img-src'];

let mainContentValues = Object.values(mainContent);
let mainContentValuesTitles = [];
let mainContentValuesParagraphs = [];

for (i = 0; i < mainContentValues.length; i++) {
  if(i%2 === 0) {
    mainContentValuesTitles.push(mainContentValues[i]);
  }
  else {
    mainContentValuesParagraphs.push(mainContentValues[i]);
  }
}

for (i = 0; i < mainContentValuesTitles.length; i++) {
  let h4 = document.querySelectorAll('h4');
  let p = document.querySelectorAll('p');
  h4[i].innerHTML = mainContentValuesTitles[i];
  p[i].innerHTML = mainContentValuesParagraphs[i];
}

let mainNav = document.getElementById('main-nav');

let appender = document.createElement('a');
appender.innerHTML = 'Help';
mainNav.appendChild(appender);

let prepender = document.createElement('a');
prepender.innerHTML = 'FAQ';
mainNav.prepend(prepender);

let a = mainNav.querySelectorAll('a');
for (i = 0; i < a.length; i++) {
  a[i].style.color = 'green';
}
