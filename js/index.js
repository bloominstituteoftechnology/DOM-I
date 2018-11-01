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

logo.src = siteContent["nav"]["img-src"];

let navigation = document.querySelectorAll('header nav a');

for (let i = 0; i < navigation.length; i++) {
  navigation[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  navigation[i].style.color = 'green';
}


const newElement1 = document.createElement('a');
const newElement2 = document.createElement('a');

newElement1.href = '#';
newElement2.href = '#';

newElement1.textContent = 'Free Viruses';
newElement2.textContent = 'Click Here';

navigation.appendChild(newElement1);
navigation.prepend(newElement2);

let picture = document.getElementById("cta-img");

picture.src = siteContent["cta"]["img-src"];

let title = document.querySelector('h1');

title.textContent = siteContent.cta.h1;

let button = document.querySelector('button');

button.textContent = siteContent["cta"]["button"];

let secHeaders = document.querySelectorAll('h4');

secHeaders[0].textContent = siteContent["main-content"]["features-h4"];
secHeaders[1].textContent = siteContent["main-content"]["about-h4"];
secHeaders[2].textContent = siteContent["main-content"]["services-h4"];
secHeaders[3].textContent = siteContent["main-content"]["product-h4"];
secHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

let secContent = document.querySelectorAll('.main-content p');

secContent[0].textContent = siteContent["main-content"]["features-content"];
secContent[1].textContent = siteContent["main-content"]["about-content"];
secContent[2].textContent = siteContent["main-content"]["services-content"];
secContent[3].textContent = siteContent["main-content"]["product-content"];
secContent[4].textContent = siteContent["main-content"]["vision-content"];


let middlePic = document.getElementById('middle-img');

middlePic.src = siteContent["main-content"]["middle-img-src"];

let contactHeader = document.querySelector('.contact h4');

contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactPara = document.querySelectorAll('.contact p');

contactPara[0].textContent = siteContent["contact"]["address"];
contactPara[1].textContent = siteContent["contact"]["phone"];
contactPara[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector('footer p');

footer.textContent = siteContent["footer"]["copyright"];
