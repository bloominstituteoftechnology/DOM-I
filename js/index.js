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
// Nav logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Nav Bar
let navLinks = document.getElementsByTagName('a');
let navArray = Array.from(navLinks);

navLinks[0].innerText = siteContent['nav']['nav-item-1']
navLinks[1].innerText = siteContent['nav']['nav-item-2']
navLinks[2].innerText = siteContent['nav']['nav-item-3']
navLinks[3].innerText = siteContent['nav']['nav-item-4']
navLinks[4].innerText = siteContent['nav']['nav-item-5']
navLinks[5].innerText = siteContent['nav']['nav-item-6']

console.log(navLinks);

// Header section
let header = document.querySelector('.cta h1');
header.innerHTML = siteContent['cta']['h1'];

let button = document.querySelector('.cta button');
button.innerHTML = siteContent['cta']['button'];

let ctaIMG = document.getElementById("cta-img");
ctaIMG.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content
let h4 = document.getElementsByTagName('h4');
let p = document.getElementsByTagName('p');

// Top content
h4[0].innerText = siteContent['main-content']['features-h4'];
p[0].innerText = siteContent['main-content']['features-content'];
h4[1].innerText = siteContent['main-content']['about-h4'];
p[1].innerText = siteContent['main-content']['about-content'];

// Middle image
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Middle content
h4[2].innerText = siteContent['main-content']['services-h4'];
p[2].innerText = siteContent['main-content']['services-content'];
h4[3].innerText = siteContent['main-content']['product-h4'];
p[3].innerText = siteContent['main-content']['product-content'];
h4[4].innerText = siteContent['main-content']['vision-h4'];
p[4].innerText = siteContent['main-content']['vision-content'];

// Contact
h4[5].innerText = siteContent['contact']['contact-h4'];
p[5].innerText = siteContent['contact']['address'];
p[6].innerText = siteContent['contact']['phone'];
p[7].innerText = siteContent['contact']['email'];

// Legal
p[8].innerText = siteContent['footer']['copyright']
