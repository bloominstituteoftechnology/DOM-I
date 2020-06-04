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

const navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent['nav']["nav-item-1"];
navBar[1].textContent = siteContent['nav']["nav-item-2"];
navBar[2].textContent = siteContent['nav']["nav-item-3"];
navBar[3].textContent = siteContent['nav']["nav-item-4"];
navBar[4].textContent = siteContent['nav']["nav-item-5"];
navBar[5].textContent = siteContent['nav']["nav-item-6"];
const nav = document.querySelector('nav');
nav.style.color = 'green'
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', 'img/header-img.png');
const ctaTextH1 = document.querySelector('.cta-text h1');
ctaTextH1.innerHTML = 'DOM <br> IS <br> AWESOME';
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];
const topContent = document.querySelectorAll('.text-content h4');
topContent[0].textContent = siteContent['main-content']['features-h4'];
topContent[1].textContent = siteContent['main-content']["about-h4"];
topContent[2].textContent = siteContent['main-content']["services-h4"];
topContent[3].textContent = siteContent['main-content']["product-h4"];
topContent[4].textContent = siteContent['main-content']["vision-h4"];
const topContentP = document.querySelectorAll('.text-content p');
topContentP[0].textContent = siteContent['main-content']["features-content"];
topContentP[1].textContent = siteContent['main-content']["about-content"];
topContentP[2].textContent = siteContent['main-content']["services-content"];
topContentP[3].textContent = siteContent['main-content']["product-content"];
topContentP[4].textContent = siteContent['main-content']["vision-content"];
const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];
const contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];
const copyright = document.querySelector('footer p');
copyright.textContent = siteContent["footer"]["copyright"];;
