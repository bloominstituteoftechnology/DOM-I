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


const nav1Link = document.querySelector('nav a');
nav1Link.textContent = siteContent['nav']['nav-item-1']

const nav2Link = nav1Link.nextElementSibling;
nav2Link.textContent = siteContent['nav']['nav-item-2']

const nav3Link = nav2Link.nextElementSibling;
nav3Link.textContent = siteContent['nav']['nav-item-3']

const nav4Link = nav3Link.nextElementSibling;
nav4Link.textContent = siteContent['nav']['nav-item-4']

const nav5Link = nav4Link.nextElementSibling;
nav5Link.textContent = siteContent['nav']['nav-item-5']

const nav6Link = nav5Link.nextElementSibling;
nav6Link.textContent = siteContent['nav']['nav-item-6']

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button']

let contactInfo = document.querySelector('.contact h4');
contactInfo.textContent = siteContent['contact']['contact-h4']

let address = document.querySelector('.contact p');
contactInfo.textContent = siteContent['contact']['address']

