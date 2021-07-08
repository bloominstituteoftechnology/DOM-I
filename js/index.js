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
//adjusting nav section
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
document.querySelectorAll('nav a')[0].setAttribute('href', siteContent['nav']['nav-item-1']);
document.querySelectorAll('nav a')[1].setAttribute('href', siteContent['nav']['nav-item-2']);
document.querySelectorAll('nav a')[2].setAttribute('href', siteContent['nav']['nav-item-3']);
document.querySelectorAll('nav a')[3].setAttribute('href', siteContent['nav']['nav-item-4']);
document.querySelectorAll('nav a')[4].setAttribute('href', siteContent['nav']['nav-item-5']);
document.querySelectorAll('nav a')[5].setAttribute('href', siteContent['nav']['nav-item-6']);

document.querySelectorAll('header nav a')[0].style.color = 'green';
document.querySelectorAll('header nav a')[1].style.color = 'green';
document.querySelectorAll('header nav a')[2].style.color = 'green';
document.querySelectorAll('header nav a')[3].style.color = 'green';
document.querySelectorAll('header nav a')[4].style.color = 'green';
document.querySelectorAll('header nav a')[5].style.color = 'green';

let newNav = document.createElement('a');
newNav.setAttribute('href', '#');
newNav.setAttribute('class', 'newNav');
newNav.innerText = 'Merch';
newNav.style.color = 'green';
document.querySelector('nav').appendChild(newNav);
let alsoNewNav = document.createElement('a');
alsoNewNav.setAttribute('href', '#');
alsoNewNav.setAttribute('class', 'newNav');
alsoNewNav.innerText = 'Find us';
alsoNewNav.style.color = 'green';
document.querySelector('nav').appendChild(alsoNewNav);
//cta section
let codeImage = document.querySelector('#cta-img');
codeImage.setAttribute('src', siteContent['cta']['img-src']);
document.querySelector('.cta-text h1').innerText = siteContent['cta']['h1'];
document.querySelector('.cta-text button').innerText = siteContent['cta']['button'];
//main top content
let topContent = document.querySelectorAll('.top-content .text-content');
topContent[0].querySelector('h4').innerText = siteContent['main-content']['features-h4'];
topContent[0].querySelector('p').innerText = siteContent['main-content']['features-content'];
topContent[1].querySelector('h4').innerText = siteContent['main-content']['about-h4'];
topContent[1].querySelector('p').innerText = siteContent['main-content']['about-content'];
document.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);
//bottom content
let bottomContent = document.querySelectorAll('.bottom-content .text-content');
bottomContent[0].querySelector('h4').innerText = siteContent['main-content']['services-h4'];
bottomContent[0].querySelector('p').innerText = siteContent['main-content']['services-content'];
bottomContent[1].querySelector('h4').innerText = siteContent['main-content']['product-h4'];
bottomContent[1].querySelector('p').innerText = siteContent['main-content']['product-content'];
bottomContent[2].querySelector('h4').innerText = siteContent['main-content']['vision-h4'];
bottomContent[2].querySelector('p').innerText = siteContent['main-content']['vision-content'];
//contact section
let contactContent = document.querySelector('.contact');
contactContent.querySelector('h4').innerText = siteContent['contact']['contact-h4'];
let contactPs = contactContent.querySelectorAll('p');
contactPs[0].innerText = siteContent['contact']['address'];
contactPs[1].innerText = siteContent['contact']['phone'];
contactPs[2].innerText = siteContent['contact']['email'];
//footer section
document.querySelector('footer p').innerText = siteContent['footer']['copyright'];