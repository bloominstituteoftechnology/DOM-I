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
logo.src = 'img/logo.png';
//navigation
let navigation = document.querySelectorAll('nav a');
navigation.innerhtml[0] = siteContent.nav['nav-item-1']
navigation.innerhtml = siteContent.nav['nav-item-2']
navigation.innerhtml = siteContent.nav['nav-item-3']
navigation.innerhtml = siteContent.nav['nav-item-4']
navigation.innerhtml = siteContent.nav['nav-item-5']
navigation.innerhtml = siteContent.nav['nav-item-6']

//cta
let ctahead = document.querySelector('.cta-text h1');
ctahead.innerhtml = siteContent.cta["h1"];
let ctabutton = document.querySelector('cta.text button');
ctabutton.innerhtml = siteContent.cta["button"]
let ctaimage = document.getElementById("cta-img");
ctaimage.src = 'img/header-img.png';

//main content
let mainimage = document.getElementsByClassName(".middle-img");
mainimage.src = 'img/mid-page-accent.jpg';
let mainheader = document.querySelectorAll('.main-content h4');
let maintext = document.querySelectorAll('.main-content p');
mainheader.innerhtml = siteContent.main-content["features-h4"];
mainheader.innerhtml = siteContent.main-content["about-h4"];
mainheader.innerhtml = siteContent.main-content["services-h4"];
mainheader.innerhtml = siteContent.main-content["product-h4"];
mainheader.innerhtml = siteContent.main-content["vision-h4"];

maintext.innerhtml = siteContent[".main-content"]["features-content"]
maintext.innerhtml = siteContent[".main-content"]["about-content"]
maintext.innerhtml = siteContent[".main-content"]["services-content"]
maintext.innerhtml = siteContent[".main-content"]["product-content"]
maintext.innerhtml = siteContent[".main-content"]["vision-content"]

//contact
let contactheader = document.querySelector('h4');
contactheader.innerhtml - siteContent.contact["contact-h4"];
contactparagraph.innerhtml = document.querySelectorAll('p');
contact.innerhtml = siteContent.contact["address"];
contact.innerhtml = siteContent.contact["phone"];
contact.innerhtml = siteContent.contact["email"];

//footer
let foot = document.querySelector('p');
foot.innerhtml = siteContent.contact["copyright"];



