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





let navItems=document.querySelectorAll("header nav a")
    navItems[0].innerText=siteContent["nav"]["nav-item-1"];
    navItems[1].innerText=siteContent["nav"]["nav-item-2"];
    navItems[2].innerText=siteContent["nav"]["nav-item-3"];
    navItems[3].innerText=siteContent["nav"]["nav-item-4"]; 
    navItems[4].innerText=siteContent["nav"]["nav-item-5"];
    navItems[5].innerText=siteContent["nav"]["nav-item-6"];

    //cta

    let ctaB= document.querySelector('h1');
    ctaB.innerHTML=siteContent['cta']['h1'];

    let cta_Button = document.querySelector('button');
    cta_Button.innerHTML=siteContent['cta']['button'];

    let ctaImage =document.getElementId('cta-img');
    ctaImage.setAttributes('src'.siteContent['cta']['img-src']);

    //main
    let topContentHeaders= document.querySelectorAll('.top-content-h4');
    topContentHeaders[0].innerText=siteContent['main-content']['features-h4'];
    topContentHeaders[1].innerText=siteContent['main-content']['about-h4'];

let topContent=document.querySelectorAll('.top-content p');
topContent[0].innerText=siteContent['main-content']['features-content'];
topContent[1].innerText=siteContent['main-content']['about-content'];

let mainContentImage=document.getElementId('middle-img');
mainContentImage.setAttribute('src'.siteContent['main-content']['middle-img-src']);

let bottomContentHeaders=document.querySelectorAll('.bottom-content h4');
bottomContent[0].innerText=siteContent['main-content']['services-h4'];
bottomContent[1].innerText=siteContent['text-content']['product-h4'];
bottomContent[2].innerText=siteContent['main-content']['vision-h4'];

let bottomContent=document.querySelectorAll(bottom-content);
bottomContent[0].innerText=sitecontent['text-content']['features-content'];
bottomContent[1].innerText=sitecontent['text-content']['about-content'];
bottomContent[2].innerText=siteContent['text-content']['services-content'];
bottomContent[3].innerText=siteContent['text-content']['product-content'];
bottomContent[4].innerText=siteContent['text-content']['vision-content'];

let contactContent=document.querySelectorAll('.contact');
contactContent[0].innerText=siteContent['main-content']['contact'];
contactContent[1].innerText=siteContent['main-content']['contact-h4'];
contactContent[2].innerText=siteContent['main-content']['contact-p'];
contactContent[3].innerText=siteContent['main-content']['contact-p'];

let footerContent=document.querySelectorAll('footer');
footerContent[0].innerText=siteContent['main-content']['footer'];
