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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
const services = document.getElementsByTagName('a')[0];
services.innerText = siteContent['nav']['nav-item-1'];

//===================== Both ways below worked==================================

//let product = document.getElementsByTagName('a')[1];
//product.innerHTML = 'Product';

//let product = document.getElementsByTagName('a')[1];
//product.innerText = siteContent['nav']['nav-item-2'];

//===============================================================================

const product = document.getElementsByTagName('a')[1];
product.innerText = siteContent['nav']['nav-item-2'];

const vision = document.getElementsByTagName('a')[2];
vision.innerText = siteContent['nav']['nav-item-3'];

const features = document.getElementsByTagName('a')[3];
features.innerText = siteContent['nav']['nav-item-4'];

const about = document.getElementsByTagName('a')[4];
about.innerText = siteContent['nav']['nav-item-5'];

const contact = document.getElementsByTagName('a')[5];
contact.innerText = siteContent['nav']['nav-item-6'];

// cta

const h1_ = document.getElementsByTagName('h1')[0];
h1_.innerHTML = "DOM<br> is<br> Awesome";

const button = document.getElementsByTagName("button")[0];
button.innerText = siteContent['cta']['button'];

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "img/mid-page-accent.jpg")

// main-content

const featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerText = siteContent['main-content']['features-h4'];

const featuresContent = document.getElementsByTagName('p')[0];
featuresContent.innerText = siteContent['main-content']['features-content'];

const about_H4 = document.getElementsByTagName('h4')[1];
about_H4.innerText = siteContent['main-content']['about-h4'];

const aboutContent_1 = document.getElementsByTagName('p')[1];
aboutContent_1.innerText = siteContent['main-content']['about-content'];

const services_H4 = document.getElementsByTagName('h4')[2];
services_H4.innerText = siteContent['main-content']['services-h4'];

const servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerText = siteContent['main-content']['services-content'];

const product_H4 = document.getElementsByTagName('h4')[3];
product_H4.innerText = siteContent['main-content']['product-h4'];

const productContent = document.getElementsByTagName('p')[3];
productContent.innerText = siteContent['main-content']['product-content'];

const vision_H4 = document.getElementsByTagName('h4')[4];
vision_H4.innerText = siteContent['main-content']['vision-h4'];

const visionContent = document.getElementsByTagName('p')[4];
visionContent.innerText = siteContent['main-content']['vision-content'];

// Contact

const contact_H4 = document.getElementsByTagName('h4')[5];
contact_H4.innerText = siteContent['contact']['contact-h4'];

const address = document.getElementsByTagName('p')[5];
address.innerHTML = "123 Way 456 Street<br> Somewhere, USA";

const phone = document.getElementsByTagName('p')[6];
phone.innerText = siteContent['contact']['phone'];

const email = document.getElementsByTagName('p')[7];
email.innerText = siteContent['contact']['email'];

//footer
const footer = document.getElementsByTagName('p')[8];
footer.innerText = siteContent['footer']['copyright'];

const lit = document.createElement('a');
lit.textContent = 'Add Me';
lit.href = '#';
document.querySelector('nav').appendChild(lit);

const lit2 = document.createElement('a');
lit2.textContent = 'Wow';
lit2.href = '#';
document.querySelector('nav').prepend(lit2);

const a = document.querySelectorAll('a');
a.forEach(i => i.style.color = 'blue');

a.forEach(i => i.style.fontSize = '1.25em');