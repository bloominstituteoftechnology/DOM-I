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

// navigation
let navBar = document.querySelectorAll('nav a');

// navigation items
for(let i = 0; i < navBar.length; i++){
  navBar[i].innerHTML = siteContent['nav'][`nav-item-${i + 1}`];
}

//cta
let ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.innerHTML = siteContent['cta']['h1'];

let button = document.querySelector('.cta-text button')
button.innerHTML = siteContent['cta']['button'];

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

//main Content
let topContentHeaders = document.querySelectorAll('.top-content .text-content h4');
topContentHeaders[0].innerHTML = siteContent['main-content']['features-h4'];
topContentHeaders[1].innerHTML = siteContent['main-content']['about-h4'];

let topText = document.querySelectorAll('.top-content .text-content p');
topText[0].innerHTML = siteContent['main-content']['features-content'];
topText[1].innerHTML = siteContent['main-content']['about-content'];

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomContentHeaders = document.querySelectorAll('.bottom-content h4');
bottomContentHeaders[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContentHeaders[1].innerHTML = siteContent['main-content']['product-h4'];
bottomContentHeaders[2].innerHTML = siteContent['main-content']['vision-h4'];

let bottomText = document.querySelectorAll('.bottom-content .text-content p');
bottomText[0].innerHTML = siteContent['main-content']['services-content'];
bottomText[1].innerHTML = siteContent['main-content']['product-content'];
bottomText[2].innerHTML = siteContent['main-content']['vision-content'];


// contact
let contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = siteContent['contact']['contact-h4'];

let address = document.querySelectorAll('.contact p');
address[0].innerHTML = siteContent['contact']['address'];
address[1].innerHTML = siteContent['contact']['phone'];
address[2].innerHTML = siteContent['contact']['email'];

//footer
let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];
