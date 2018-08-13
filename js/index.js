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

//Navigation links
let nav = document.getElementsByTagName("nav");
nav[0].children[0].innerHTML = siteContent["nav"]["nav-item-1"]
nav[0].children[1].innerHTML = siteContent["nav"]["nav-item-2"]
nav[0].children[2].innerHTML = siteContent["nav"]["nav-item-3"]
nav[0].children[3].innerHTML = siteContent["nav"]["nav-item-4"]

// Images & DIA text
document.getElementById("cta-img").src = siteContent['cta']['img-src'];
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];
document.querySelector('.cta-text').firstElementChild.innerHTML = siteContent.cta.h1;

//Button
document.querySelector('.cta-text').getElementsByTagName('button')[0].innerHTML = siteContent.cta.button;

//Features&About Content
document.querySelector('.top-content').getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["features-h4"];
document.querySelector('.top-content').getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["features-content"];
document.querySelector('.top-content').getElementsByTagName('h4')[1].innerHTML = siteContent["main-content"]["about-h4"];
document.querySelector('.top-content').getElementsByTagName('p')[1].innerHTML = siteContent["main-content"]["about-content"];

//Services,Product,&Vision Content
document.querySelector('.bottom-content').getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["services-h4"];
document.querySelector('.bottom-content').getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["services-content"];
document.querySelector('.bottom-content').getElementsByTagName('h4')[1].innerHTML = siteContent["main-content"]["product-h4"];
document.querySelector('.bottom-content').getElementsByTagName('p')[1].innerHTML = siteContent["main-content"]["product-content"];
document.querySelector('.bottom-content').getElementsByTagName('h4')[2].innerHTML = siteContent["main-content"]["vision-h4"];
document.querySelector('.bottom-content').getElementsByTagName('p')[2].innerHTML = siteContent["main-content"]["vision-content"];

//Contact Content
document.querySelector('.contact').getElementsByTagName('h4')[0].innerHTML = siteContent.contact["contact-h4"];
document.querySelector('.contact').getElementsByTagName('p')[0].innerHTML = siteContent.contact["address"];
document.querySelector('.contact').getElementsByTagName('p')[1].innerHTML = siteContent.contact["phone"];
document.querySelector('.contact').getElementsByTagName('p')[2].innerHTML = siteContent.contact["email"];

//Footer Content
document.querySelector('footer').getElementsByTagName('p')[0].innerHTML = siteContent.footer.copyright;

