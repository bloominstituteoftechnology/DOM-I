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
    "address" : "123 Way 456 Street",
    "addressL2" : "Somewhere, USA",
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

let nav1 = document.querySelectorAll('a')[0];
nav1.textContent = siteContent['nav']['nav-item-1'];

let nav2 = document.querySelectorAll('a')[1];
nav2.textContent = siteContent['nav']['nav-item-2'];

let nav3 = document.querySelectorAll('a')[2];
nav3.textContent = siteContent['nav']['nav-item-3'];

let nav4 = document.querySelectorAll('a')[3];
nav4.textContent = siteContent['nav']['nav-item-4'];

let nav5 = document.querySelectorAll('a')[4];
nav5.textContent = siteContent['nav']['nav-item-5'];

let nav6 = document.querySelectorAll('a')[5];
nav6.textContent = siteContent['nav']['nav-item-6'];


// let body = document.querySelector('body');
// body.style.backgroundColor = "green";

let header1 = document.querySelector('h1');
header1.innerHTML = "<h1>Dom</br>is</br>Awesome</h1>";
// "<h1>Dom</br>is</br>Awesome</h1>";

let roundCs = document.getElementById("cta-img");
roundCs.setAttribute('src', siteContent["cta"]["img-src"]);

let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

let features = document.querySelectorAll('h4')[0];
features.textContent = siteContent["main-content"]["features-h4"];

let feaCon = document.querySelectorAll('p')[0];
feaCon.textContent = siteContent['main-content']['features-content'];

let about = document.querySelectorAll('h4')[1];
about.textContent = siteContent["main-content"]["about-h4"];

let aboCon = document.querySelectorAll('p')[1];
aboCon.textContent = siteContent['main-content']['about-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let services = document.querySelectorAll('h4')[2];
services.textContent = siteContent['main-content']['services-h4'];

let serCon = document.querySelectorAll('p')[2];
serCon.textContent = siteContent['main-content']['services-content'];

let product = document.querySelectorAll('h4')[3];
product.textContent = siteContent['main-content']['product-h4'];

let proCon = document.querySelectorAll('p')[3];
proCon.textContent = siteContent['main-content']['product-content'];

let vision = document.querySelectorAll('h4')[4];
vision.textContent = siteContent['main-content']['vision-h4'];

let visCon = document.querySelectorAll('p')[4];
visCon.textContent = siteContent['main-content']['vision-content'];

let contact = document.querySelectorAll('h4')[5];
contact.textContent = siteContent['contact']['contact-h4'];

let address = document.querySelectorAll('p')[5];
address.textContent = siteContent['contact']['address'];

// let newPel = document.createElement('p');
// newPel.textContent = siteContent['contact']['addressL2'];
// let addAdd = document.querySelector('siteContent['contact');
// addAdd.prepend(newPel);


// let selectedNavLinks = document.querySelectorAll("nav a");
// selectedNavLinks.forEach((link, i) => {
//   link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
// })

let phone = document.querySelectorAll('p')[6];
phone.textContent = siteContent['contact']['phone'];

let email = document.querySelectorAll('p')[7];
email.textContent = siteContent['contact']['email'];

let footer = document.querySelectorAll('p')[8];
footer.textContent = siteContent['footer']['copyright'];
