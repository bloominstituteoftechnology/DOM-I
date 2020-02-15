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

// navigation items**********
const navbar = document.querySelectorAll('a');

navbar[0].textContent = siteContent['nav']['nav-item-1'];
navbar[1].textContent = siteContent['nav']['nav-item-2'];
navbar[2].textContent = siteContent['nav']['nav-item-3'];
navbar[3].textContent = siteContent['nav']['nav-item-4'];
navbar[4].textContent = siteContent['nav']['nav-item-5'];
navbar[5].textContent = siteContent['nav']['nav-item-6'];

navbar.forEach( text => {
  text.style.color='green';
})

const navBar = document.querySelector('nav');
const newNav1 = document.createElement('a');
const newNav2 = document.createElement('a');

newNav1.textContent = 'BLOG';
newNav2.textContent = 'PICS';
navBar.append(newNav1);
navBar.prepend(newNav2);
// End Nav Items ************

 //cta objects
const header = document.querySelector('h1');
header.textContent= siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const images = document.querySelectorAll('img');
images[1].setAttribute('src', siteContent['cta']['img-src']);

//middle
const titles = document.querySelectorAll('h4');
const paragraphs = document.querySelectorAll('p');

titles[0].textContent = siteContent['main-content']['features-h4'];
titles[1].textContent = siteContent['main-content']['about-h4'];

paragraphs[0].textContent = siteContent['main-content']['features-content'];
paragraphs[1].textContent = siteContent['main-content']['about-content'];


images[2].setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom content
titles[2].textContent = siteContent['main-content']['services-h4'];
titles[3].textContent = siteContent['main-content']['product-h4'];
titles[4].textContent = siteContent['main-content']['vision-h4'];

paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];

//contact objects
titles[5].textContent = siteContent['contact']['contact-h4'];
paragraphs[5].textContent = siteContent['contact']['address'];
paragraphs[6].textContent = siteContent['contact']['phone'];
paragraphs[7].textContent = siteContent['contact']['email'];

//footer 
paragraphs[8].textContent = siteContent['footer']['copyright'];