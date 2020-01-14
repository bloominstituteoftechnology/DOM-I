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

const headerImg = document.querySelector('#cta-img');
headerImg.src = 'img/header-img.png';

const middleImg = document.querySelector('.middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

const navBar = document.querySelectorAll('a');
navBar[0].textContent = 'Services'
navBar[1].textContent = 'Product'
navBar[2].textContent = 'Vision'
navBar[3].textContent = 'Features'
navBar[4].textContent = 'About'
navBar[5].textContent = 'Contact'

const awesomeHead = document.querySelector('h1');
awesomeHead.textContent = 'DOM IS AWESOME';

const mainButton = document.querySelector('button');
mainButton.textContent = 'Get Started';

const headTags = document.querySelectorAll('h4');
headTags[0].textContent = 'Features'
headTags[1].textContent = 'Product'
headTags[2].textContent = 'Vision'
headTags[3].textContent = 'Features'
headTags[4].textContent = 'About'
headTags[5].textContent = 'Contact'

const featureText = document.querySelectorAll('p');
featureText[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
featureText[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
featureText[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
featureText[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
featureText[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
featureText[5].textContent = '123 Way 456 Street Somewhere, USA'
featureText[6].textContent = '1 (888) 888-8888'
featureText[7].textContent = 'sales@greatidea.io'
featureText[8].textContent = 'Copyright Great Idea! 2018'

const navBox = document.querySelector('nav');
const link = document.createElement('a');
link.textContent = 'Firstlink'
navBox.prepend(link);

const ap = document.createElement('a');
ap.textContent = 'LastLink';
navBox.appendChild(ap);

const navColor = document.querySelectorAll('a')
navColor.forEach(fcolor => fcolor.style.color = 'green');