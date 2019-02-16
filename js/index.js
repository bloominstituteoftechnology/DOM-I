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

//Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// let headerImg = document.getElementById("cta-img");
// headerImg.setAttribute("src", "img/header-img.png");





//nav
let services = document.getElementsByTagName('a')[0];
services.innerHTML = siteContent['nav']['nav-item-1'];

//===================== Both ways below worked==================================

//let product = document.getElementsByTagName('a')[1];
//product.innerHTML = 'Product';

//let product = document.getElementsByTagName('a')[1];
//product.innerText = siteContent['nav']['nav-item-2'];

//===============================================================================

let product = document.getElementsByTagName('a')[1];
product.innerText = siteContent['nav']['nav-item-2'];

let vision = document.getElementsByTagName('a')[2];
vision.innerText = siteContent['nav']['nav-item-3'];

let features = document.getElementsByTagName('a')[3];
features.innerText = siteContent['nav']['nav-item-4'];

let about = document.getElementsByTagName('a')[4];
about.innerText = siteContent['nav']['nav-item-5'];

let contact = document.getElementsByTagName('a')[5];
contact.innerText = siteContent['nav']['nav-item-6'];

// cta

let h1_ = document.getElementsByTagName('h1')[0];
h1_.innerText = "DOM Is Awesome";

let button = document.getElementsByTagName("button")[0];
button.innerText = "Get Started";

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "img/mid-page-accent.jpg")

// main-content

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerText = 'Features';

let featuresContent = document.getElementsByTagName('p')[0];
featuresContent.innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let about_H4 = document.getElementsByTagName('h4')[1];
about_H4.innerText = 'About';

let aboutContent_1 = document.getElementsByTagName('p')[1];
aboutContent_1.innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let services_H4 = document.getElementsByTagName('h4')[2];
services_H4.innerText = 'Services';

let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let product_H4 = document.getElementsByTagName('h4')[3];
product_H4.innerText = "Product"

let productContent = document.getElementsByTagName('p')[3];
productContent.innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let vision_H4 = document.getElementsByTagName('h4')[4];
vision_H4.innerText = "Vision";

let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Contact

let contact_H4 = document.getElementsByTagName('h4')[5];
contact_H4.innerText = "Contact";
let address = document.getElementsByTagName('p')[5];
address.innerText = "123 Way 456 Street Somewhere, USA";
let phone = document.getElementsByTagName('p')[6];
phone.innerText = "1 (888) 888-8888";
let email = document.getElementsByTagName('p')[7];
email.innerText = "sales@greatidea.io";

//footer
let footer = document.getElementsByTagName('p')[8];
footer.innerText = "Copyright Great Idea! 2018"

 //let aTags = document.querySelectorAll("a");
// let i;
// for (i = 0; i < aTags.length; i++) {
//   aTags[i].style.color = "red";
// }

// aTags.forEach(element => {
//   element.style.color = 'blue';
// });