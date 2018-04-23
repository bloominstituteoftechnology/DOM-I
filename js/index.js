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


// ~~~~~ Header ~~~~~
// document.querySelector('nav').appendChild(a); //<--Not Working

let headerA = document.querySelectorAll('nav a');
headerA[0].innerHTML = siteContent['nav']['nav-item-1'];
headerA[1].innerHTML = siteContent['nav']['nav-item-2'];
headerA[2].innerHTML = siteContent['nav']['nav-item-3'];
headerA[3].innerHTML = siteContent['nav']['nav-item-4'];
headerA[4].innerHTML = siteContent['nav']['nav-item-5'];
headerA[5].innerHTML = siteContent['nav']['nav-item-6'];
// headerA[6].innerHTML = "IDK"; //<-- Not Working


headerA.forEach(a => a.style = 'color: green'); // Making the nav green

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// ~~~~~ CTA ~~~~~
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


// ~~~~~ Main Content ~~~~~
let mainContentTopH4 = document.querySelectorAll('.top-content .text-content h4');
mainContentTopH4[0].innerHTML = siteContent['main-content']['features-h4'];
mainContentTopH4[1].innerHTML = siteContent['main-content']['about-h4'];

let mainContentTopP = document.querySelectorAll('.top-content .text-content p');
mainContentTopP[0].innerHTML = siteContent['main-content']['features-content'];
mainContentTopP[1].innerHTML = siteContent['main-content']['about-content'];

let mainContentImg = document.querySelector('#middle-img');
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let mainContentBottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
mainContentBottomH4[0].innerHTML = siteContent['main-content']['services-h4'];
mainContentBottomH4[1].innerHTML = siteContent['main-content']['product-h4'];
mainContentBottomH4[2].innerHTML = siteContent['main-content']['vision-h4'];

let mainContentBottomP = document.querySelectorAll('.bottom-content .text-content p');
mainContentBottomP[0].innerHTML = siteContent['main-content']['services-content'];
mainContentBottomP[1].innerHTML = siteContent['main-content']['product-content'];
mainContentBottomP[2].innerHTML = siteContent['main-content']['vision-content'];


// ~~~~~ Contact ~~~~~
let contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent['contact']['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = siteContent['contact']['address'];
contactP[1].innerHTML = siteContent['contact']['phone'];
contactP[2].innerHTML = siteContent['contact']['email'];


// ~~~~~ Footer ~~~~~
let footerP = document.querySelector('footer p');
footerP.innerHTML = siteContent['footer']['copyright'];