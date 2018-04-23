//Worked by Luis Martinez & Marco Guzman

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};




// Example: Update the img src for the logo

let logo = document.getElementById("logo-png");
logo.setAttribute('alt', 'This is company logo');
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Started working here
let theHead = document.querySelector('a');
theHead[0].innerHTML = 'Services';
theHead[1].innerHTML = 'Product';
theHead[2].innerHTML = 'Vision';
theHead[3].innerHTML = 'Features';
theHead[4].innerHTML = 'Contacts';

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('alt', 'Image of a code snippet.');
ctaIamge.setAttribute('src', siteContent['cta']['img-src']);

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('alt', 'An image of code snippets across the screen');
middleImage.setAttribute('src', siteContent ['main-content']['img/mid-page-accent.jpg'])

let ctaText = document.getElementsByTagName('h1');
cta[0].innerHTML = 'Dom is Awesome';

let buttons = document.getElementsByTagName('button');
buttons[0].innerHTML = 'Get Started';

let headers = document.querySelectorAll('h4');
headers[0].innerHTML = 'Features';
headers[1].innerHTML = 'About';
headers[2].innerHTML = 'Services';
headers[3].innerHTML = 'Product';
headers[4].innerHTML = 'Vision';
headers[5].innerHTML = 'Contact';

let paragraphs = document.querySelectorAll('p');
paragraphs[0].innerHTML = siteContent['main-content']['feature-content'];