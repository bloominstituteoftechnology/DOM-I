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
//    IMG
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src']);

let headerIMG = document.getElementById('cta-img');
headerIMG.setAttribute('src', siteContent['cta']['img-src']);

let middleIMG = document.getElementById('middle-img');
middleIMG.setAttribute('src', siteContent['main-content']['middle-img-src']);

//
let containerClass = document.getElementsByClassName('container');

let navTag = document.getElementsByTagName('nav');

let aTag = document.getElementsByTagName('a');
for(let i = 1; i < aTag.length + 1; i++) {
  aTag[i-1].innerHTML = siteContent['nav']['nav-item-'+i];
}


let mainContentClass = document.getElementsByClassName('main-content');

let contactClass = document.getElementsByClassName('contact');

let h1_Tags = document.getElementsByTagName('h1');

let buttonTag = document.getElementsByTagName('button');
buttonTag[0].innerHTML = siteContent['cta']['button'];


let topContent = document.querySelectorAll('.top-content .text-content');

let topContent_h4 = topContent[0].querySelector('h4');
topContent_h4.innerHTML = siteContent['main-content']['features-h4'];

let topContent_p = topContent[0].querySelector('p');
topContent_p.innerHTML = siteContent['main-content']['features-content'];

let about_h4 = topContent[1].querySelector('h4');
about_h4.innerHTML = siteContent['main-content']['about-h4'];

let about_p = topContent[1].querySelector('p');
about_p.innerHTML = siteContent['main-content']['about-content'];











// let navData = document.getElementsByTagName('nav');
