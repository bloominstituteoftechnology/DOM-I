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

const navItem = document.querySelectorAll('nav a')
navItem[0].innerHTML = siteContent['nav']['nav-item-1'];
navItem[1].innerHTML = siteContent['nav']['nav-item-2'];
navItem[2].innerHTML = siteContent['nav']['nav-item-3'];
navItem[3].innerHTML = siteContent['nav']['nav-item-4'];
navItem[4].innerHTML = siteContent['nav']['nav-item-5'];
navItem[5].innerHTML = siteContent['nav']['nav-item-6'];

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const topHeading = document.querySelectorAll('.top-content h4');
const topParagraph = document.querySelectorAll('.top-content p');
topHeading[0].innerHTML = siteContent['main-content']['features-h4'];
topParagraph[0].innerHTML = siteContent['main-content']['features-content'];
topHeading[1].innerHTML = siteContent['main-content']['about-h4'];
topParagraph[1].innerHTML = siteContent['main-content']['about-content'];

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src',siteContent['main-content']['middle-img-src']);

const bottomHeading = document.querySelectorAll('.bottom-content h4');
const bottomParagraph = document.querySelectorAll('.bottom-content p');
bottomHeading[0].innerHTML = siteContent['main-content']['services-h4'];
bottomParagraph[0].innerHTML = siteContent['main-content']['services-content'];
bottomHeading[1].innerHTML = siteContent['main-content']['product-h4'];
bottomParagraph[1].innerHTML = siteContent['main-content']['product-content'];
bottomHeading[2].innerHTML = siteContent['main-content']['vision-h4'];
bottomParagraph[2].innerHTML = siteContent['main-content']['vision-content'];

const contactHeading = document.querySelector('.contact h4');
const contactContent = document.querySelectorAll('.contact p');
contactHeading.innerHTML = siteContent['contact']['contact-h4'];
contactContent[0].innerHTML = siteContent['contact']['address'];
contactContent[1].innerHTML = siteContent['contact']['phone'];
contactContent[2].innerHTML = siteContent['contact']['email'];

const footerText = document.querySelector('footer p');
footerText.innerHTML = siteContent['footer']['copyright'];