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

/*header*/
const nav = document.querySelectorAll('nav a');
const anchors = Array.from(nav);
anchors[0].textContent = 'Services';
anchors[1].textContent = 'Product';
anchors[2].textContent = 'Vision';
anchors[3].textContent = 'Features';
anchors[4].textContent = 'About';
anchors[5].textContent = 'Contact';


/*button,top image*/

let tempTxt = document.querySelector('h1');
const lbr = '\n'
tempTxt.style.whiteSpace = 'pre';
tempTxt.textContent = 'DOM' + lbr + 'IS' + lbr + 'Awesome';


let buttonTxt = document.querySelector('button');
buttonTxt.textContent = siteContent['cta']['button'];

let circularImg = document.getElementById('cta-img');
circularImg.setAttribute('src', siteContent['cta']['img-src']);


/*Main Content*/
let featuresName = document.querySelector('features-h4');
let featuresContent = document.querySelector('.top-content');
featuresContent.textContent = siteContent["main-content"]["features-h4"];

let aboutName = document.querySelector('about-h4');
let aboutContent = document.querySelector('.top-content');
aboutContent.textContent = siteContent["main-content"]["about-h4"];

console.log(siteContent["main-content"]["features-h4"]);

let mainImg = document.getElementById('middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);