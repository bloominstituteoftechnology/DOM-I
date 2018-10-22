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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// *** === Add Content === ***

// ** == Navigation == **

// Navigation Links
let navLinks = document.querySelectorAll('a');

navLinks = Array.from(navLinks);

navLinks.forEach((item, index) => {
    item.textContent = siteContent['nav'][`nav-item-${index + 1}`];
});

// Logo
let logo = document.getElementById("logo-img");

logo.setAttribute('src', siteContent['nav']['img-src']);

// ** == Call to Action == **

// H1
let ctaHeader = document.querySelector('h1');

ctaHeader.textContent = siteContent['cta']['h1'];

// Button 
let ctaButton = document.querySelector('button');

ctaButton.textContent = siteContent['cta']['button'];

// Image 
let ctaImage = document.getElementById('cta-img');

ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// ** == Main Content == ** 

// * = Top Content = *
let topContent = document.getElementsByClassName('top-content');

// Features
let featuresHeader = topContent[0].children[0].children[0];
let featuresContent = topContent[0].children[0].children[1];

featuresHeader.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent = siteContent['main-content']['features-content'];

// About 
let aboutHeader = topContent[0].children[1].children[0];
let aboutContent = topContent[0].children[1].children[1];

aboutHeader.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];