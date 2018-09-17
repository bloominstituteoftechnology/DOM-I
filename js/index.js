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


//NAV SECTION
let navMenu = document.querySelectorAll('header nav a ');
navMenu[0].innerText = siteContent['nav']['nav-item-1'];
navMenu[1].innerText = siteContent['nav']['nav-item-2'];
navMenu[2].innerText = siteContent['nav']['nav-item-3'];
navMenu[3].innerText = siteContent['nav']['nav-item-4'];
navMenu[4].innerText = siteContent['nav']['nav-item-5'];
navMenu[5].innerText = siteContent['nav']['nav-item-6'];



//CTA SECTION

let ctaHead = document.querySelector('.cta-text h1');
ctaHead.innerText = siteContent['cta']['h1'];

let cta = document.getElementById("cta-img");
cta.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = siteContent['cta']['button'];

//TOP CONTENT

//headings 

let topHeading = document.querySelectorAll('.main-content .top-content .text-content h4');
topHeading[0].innerText = siteContent['main-content']['features-h4'];
topHeading[1].innerText = siteContent['main-content']['about-h4'];

//p tags

let topPar = document.querySelectorAll('.main-content .top-content .text-content p');
topPar[0].innerText = siteContent['main-content']['features-content'];
topPar[1].innerText = siteContent['main-content']['about-content'];

//Middle image

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//BOTTOM CONTENT

//headings

let botHeading = document.querySelectorAll('.main-content .bottom-content .text-content h4');
botHeading[0].innerText = siteContent['main-content']['services-h4'];
botHeading[1].innerText = siteContent['main-content']['product-h4'];
botHeading[2].innerText = siteContent['main-content']['vision-h4'];

//p tags

let botPar = document.querySelectorAll('.main-content .bottom-content .text-content p');
botPar[0].innerText = siteContent['main-content']['services-content'];
botPar[1].innerText = siteContent['main-content']['product-content'];
botPar[2].innerText = siteContent['main-content']['vision-content'];



//CONTACT

let contactHead = document.querySelector('.contact h4');
contactHead.innerText = siteContent['contact']['contact-h4'];

let contactPar = document.querySelectorAll('.contact p');
contactPar[0].innerText = siteContent['contact']['address'];
contactPar[1].innerText = siteContent['contact']['phone'];
contactPar[2].innerText = siteContent['contact']['email'];

//FOOTER

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];

