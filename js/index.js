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
//sec 1
// const services = document.querySelector('a');
// const servicesSec = document.querySelectorAll('a' );

// navbar content
const aHref = document.querySelectorAll('header nav a');
const navMenuValues = Object.values(siteContent.nav);

for (let i = 0; i < aHref.length; i++) {
  aHref[i].innerHTML = navMenuValues[i];  
}
  

// Great Idea image
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// h1 content
const ctaH1 = document.querySelector('h1');
    ctaH1.textContent = "DOM Is Awesome";

// Get Started button
const btn = document.querySelector('button');
    btn.textContent = "Get Started";

// Complex image, first image
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);

//middle content features h4
const featuresC = document.querySelector('.text-content h4');
  featuresC.textContent = "Features";

const featuresContent = document.querySelector('.text-content p');
  featuresContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//middle content about h4
const about = document.querySelector('.text-content:last-child h4');
  about.textContent = "About";

const aboutP = document.querySelector('.text-content:last-child p');
  aboutP.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// middle content's image
  let middleImg = document.getElementById("middle-img");
  middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom content services
const services = document.querySelector('.bottom-content h4');
  services.textContent = "Services";

const servicesH4 = document.querySelector('.bottom-content p');
  servicesH4.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

  