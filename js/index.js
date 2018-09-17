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
    "h1": "DOM<br>Is<br>Awesome",
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

//header
const navbar = document.querySelectorAll('nav a');

let itemCount = 1;
navbar.forEach((a, i, nav) => {
  a.innerHTML = siteContent['nav'][`nav-item-${itemCount}`];
  itemCount++;
})


//section - cta
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main content
const contentHeaders = document.querySelectorAll('.text-content h4');
const contentParagraphs = document.querySelectorAll('.text-content p');

contentHeaders[0].innerHTML = siteContent['main-content']['features-h4'];
contentHeaders[1].innerHTML = siteContent['main-content']['about-h4'];
contentHeaders[2].innerHTML = siteContent['main-content']['services-h4'];
contentHeaders[3].innerHTML = siteContent['main-content']['product-h4'];
contentHeaders[4].innerHTML = siteContent['main-content']['vision-h4'];

contentParagraphs[0].innerHTML = siteContent['main-content']['features-content'];
contentParagraphs[1].innerHTML = siteContent['main-content']['about-content'];
contentParagraphs[2].innerHTML = siteContent['main-content']['services-content'];
contentParagraphs[3].innerHTML = siteContent['main-content']['product-content'];
contentParagraphs[4].innerHTML = siteContent['main-content']['vision-content'];

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

