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


//nav

const navBar = document.querySelectorAll('a');
navBar.forEach((item, i) => item.innerHTML = siteContent['nav'][`nav-item-${i+1}`]);
navBar.forEach((item) => item.style.color = "blue");

const parentNav = document.querySelector('nav');

const myPrepend = document.createElement('a');
parentNav.prepend(myPrepend);
myPrepend.innerText = "Company";

const myAppend = document.createElement('a');
parentNav.appendChild(myAppend);
myAppend.innerText = "Privacy";


//cta
const cButton = document.querySelector('button');
cButton.innerHTML = siteContent['cta']['button'];

const cImg = document.getElementById('cta-img');
cImg.setAttribute('src', siteContent["cta"]["img-src"]);

const head = document.querySelector('h1');
head.innerHTML = siteContent["cta"]["h1"];

//main


const mainImg = document.getElementById('middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const mainConHead = document.querySelectorAll('.main-content h4');
mainConHead[0].innerHTML = siteContent['main-content']['features-h4'];
mainConHead[1].innerHTML = siteContent['main-content']['about-h4'];
mainConHead[2].innerHTML = siteContent['main-content']['services-h4'];
mainConHead[3].innerHTML = siteContent['main-content']['product-h4'];
mainConHead[4].innerHTML = siteContent['main-content']['vision-h4'];

const mainConText = document.querySelectorAll('p');
mainConText[0].innerHTML = siteContent['main-content']['features-content'];
mainConText[1].innerHTML = siteContent['main-content']['about-content'];
mainConText[2].innerHTML = siteContent['main-content']['services-content'];
mainConText[3].innerHTML = siteContent['main-content']['product-content'];
mainConText[4].innerHTML = siteContent['main-content']['vision-content'];
