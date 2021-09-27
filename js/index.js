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

//navbar
const navi = document.querySelector("a");
const navOne = navi.nextElementSibling;
const navTwo = navOne.nextElementSibling;
const navThree = navTwo.nextElementSibling;
const navFour = navThree.nextElementSibling;
const navFive = navFour.nextElementSibling;

navi.textContent = siteContent['nav']['nav-item-1'];
navOne.textContent = siteContent['nav']['nav-item-2'];
navTwo.textContent = siteContent['nav']['nav-item-3'];
navThree.textContent = siteContent['nav']['nav-item-4'];
navFour.textContent = siteContent['nav']['nav-item-5'];
navFive.textContent = siteContent['nav']['nav-item-6'];


//cta
const ctaSelector = document.querySelector(".cta");
const ctaH1 = ctaSelector.querySelector('h1');
const ctaButton = ctaSelector.querySelector("button");
const ctaImg = ctaSelector.querySelector('img');

ctaH1.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];

//main 
const mainSelector = document.querySelector('.main-content');
const textSelector = mainSelector.querySelectorAll('.text-content');

const text1 = textSelector[0];
const text1H = text1.querySelector('h4');
const text1P = text1.querySelector('p');
text1H.textContent = siteContent['main-content']['features-h4'];
text1P.textContent = siteContent['main-content']['features-content'];

const text2 = textSelector[1];
const text2H = text2.querySelector('h4');
const text2P = text2.querySelector('p');
text2H.textContent = siteContent['main-content']['about-h4'];
text2P.textContent = siteContent['main-content']['about-content'];

const contImg = mainSelector.querySelector('img');
contImg.src = siteContent['main-content']['middle-img-src'];

const text3 = textSelector[2];
const text3H = text3.querySelector('h4');
const text3P = text3.querySelector('p');
text3H.textContent = siteContent['main-content']['services-h4'];
text3P.textContent = siteContent['main-content']['services-content'];

const text4 = textSelector[3];
const text4H = text4.querySelector('h4');
const text4P = text4.querySelector('p');
text4H.textContent = siteContent['main-content']['vision-h4'];
text4P.textContent = siteContent['main-content']['vision-content'];

//contact
const tact = document.querySelector('.contact');
const tactH4 = tact.querySelector('h4');
tactH4.textContent = siteContent['contact']['contact-h4'];
const tactAddy = tactH4.nextElementSibling;
tactAddy.textContent = siteContent['contact']['address'];
const tactPhone = tactAddy.nextElementSibling;
tactPhone.textContent = siteContent['contact']['phone'];
const tactEmail = tactPhone.nextElementSibling;
tactEmail.textContent = siteContent['contact']['email'];

//footer
const foot = document.querySelector('footer p');
foot.textContent = siteContent['footer']['copyright'];