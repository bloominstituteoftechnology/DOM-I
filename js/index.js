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
let logo = document.getElementById('logo-img');
logo.src = siteContent['nav']['img-src'];

let ctaimage = document.querySelector('#cta-img');
ctaimage.src = siteContent['cta']['img-src'];

let mainimage = document.querySelector('#middle-img');
mainimage.src = siteContent['main-content']['middle-img-src'];

//navigation
let navigation = document.querySelectorAll('nav a');
navigation[0].innerHTML = siteContent.nav['nav-item-1'];
navigation[1].innerHTML = siteContent.nav['nav-item-2'];
navigation[2].innerHTML = siteContent.nav['nav-item-3'];
navigation[3].innerHTML = siteContent.nav['nav-item-4'];
navigation[4].innerHTML = siteContent.nav['nav-item-5'];
navigation[5].innerHTML = siteContent.nav['nav-item-6'];
navigation.forEach(link => link.style.color = "green")

// //cta
// let ctaHead = document.querySelector('.cta-text h1');
// ctaHead.innerHTML = siteContent.cta["h1"];
// let ctaButton = document.querySelector('.cta-text button');
// ctaButton.innerHTML = siteContent.cta["button"]

//main content
// let mainheader = document.querySelectorAll('.main-content h4');
// let maintext = document.querySelectorAll('.main-content p');
// mainheader.innerHTML = siteContent.main-content["features-h4"];
// mainheader.innerHTML = siteContent.main-content["about-h4"];
// mainheader.innerHTML = siteContent.main-content["services-h4"];
// mainheader.innerHTML = siteContent.main-content["product-h4"];
// mainheader.innerHTML = siteContent.main-content["vision-h4"];

// maintext.innerHTML = siteContent[".main-content"]["features-content"]
// maintext.innerHTML = siteContent[".main-content"]["about-content"]
// maintext.innerHTML = siteContent[".main-content"]["services-content"]
// maintext.innerHTML = siteContent[".main-content"]["product-content"]
// maintext.innerHTML = siteContent[".main-content"]["vision-content"]

//contact
// let contactheader = document.querySelector('h4');
// contactheader.innerhtml - siteContent.contact["contact-h4"];
// contactparagraph.innerhtml = document.querySelectorAll('p');
// contact.innerhtml = siteContent.contact["address"];
// contact.innerhtml = siteContent.contact["phone"];
// contact.innerhtml = siteContent.contact["email"];

//footer
// let foot = document.querySelector('p');
// foot.innerhtml = siteContent.contact["copyright"];



