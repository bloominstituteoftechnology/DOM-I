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

let codelogo = document.getElementById('cta-img');
codelogo.src = 'img/header-img.png';

let midImg = document.getElementById("middle-img");
midImg.src = 'img/mid-page-accent.jpg';

let heading = document.querySelector('h1')
heading.textContent = "DOM Is Awsome";

let newATag = document.createElement('a');
newATag.textContent = 'SIGN UP';
newATag.style.color = 'green';

let newEndTag = document.createElement('a');
newEndTag.textContent = "SIGN IN";
newEndTag.style.color = 'green';

let nav = document.querySelector('nav');
nav.prepend(newATag);
nav.append(newEndTag);

let services = document.querySelectorAll('a')[1];
services.textContent = "Services";
services.style.color = "green"

let product = document.querySelectorAll('a')[2];
product.textContent = "Product";
product.style.color = "green"

let vision = document.querySelectorAll('a')[3];
vision.textContent = "Vision";
vision.style.color = "green"

let features = document.querySelectorAll('a')[4];
features.textContent = "Features";
features.style.color = "green"

let about = document.querySelectorAll('a')[5];
about.textContent = "About";
about.style.color = "green"

let contact = document.querySelectorAll('a')[6];
contact.textContent = "Contact";
contact.style.color = "green"



let button = document.querySelector('button');
button.textContent = "Get Started";

let topfeature = document.querySelectorAll('h4')[0];
topfeature.textContent = 'Features';

let topabout = document.querySelectorAll('h4')[1];
topabout.textContent = 'About';

let topServices = document.querySelectorAll('h4')[2];
topServices.textContent = 'Services';

let topProduct = document.querySelectorAll('h4')[3];
topProduct.textContent = 'Product';

let topVision = document.querySelectorAll('h4')[4];
topVision.textContent = 'Vision';

let bottomContact = document.querySelectorAll('h4')[5];
bottomContact.textContent = 'Contact';

let topFeatureText = document.querySelectorAll('p')[0];
topFeatureText.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let topAboutText = document.querySelectorAll('p')[1];
topAboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let servicesText = document.querySelectorAll('p')[2];
servicesText.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let productText = document.querySelectorAll('p')[3];
productText.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let visionText = document.querySelectorAll('p')[4];
visionText.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let street = document.querySelectorAll('p')[5];
street.textContent = "123 Way 456 Street <br> SomeWhere, USA";

let phone = document.querySelectorAll('p')[6];
phone.textContent = "1 (888) 888-8888";

let email = document.querySelectorAll('p')[7];
email.textContent = "sales@greatidea.io";

let footer = document.querySelectorAll('p')[8];
footer.textContent = "Copyright Great Idea! 2008";