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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


// * Task 1: Create selectors to point your data into elements

const logoAttrs = document.querySelector('#logo-img');
logoAttrs.setAttribute('src', siteContent['nav']['img-src']);

// * Task 2: Update the HTML with the JSON data
// * Remember, NO direct updating of the HTML source is allowed.
// * Using your selectors, update the content to match the example file.
// * Remember to update the src attributes on images

const navItems = document.querySelectorAll('header nav a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];


const ctaText = document.querySelector('.cta .cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

ctaText.innerText = siteContent.cta.h1.split(' ').join('\n');

const ctaBtn = document.querySelector('.cta .cta-text button');
ctaBtn.textContent = siteContent['cta']['button'];

const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

//!GOT STUCK
//was trying to use css combinators > + ~ to send in the JSON data in a particular order but I relized I could just create a nodelist for each element type and send the data in by specifying the nodelist item like I did in nav

const topContentH4 = document.querySelectorAll('.main-content .top-content .text-content h4');

topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];

const topContentP = document.querySelectorAll('.main-content .top-content .text-content p');

topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const bottomContentH4 = document.querySelectorAll('.main-content .bottom-content .text-content h4');

bottomContentH4[0].textContent = siteContent['main-content']['services-h4'];
bottomContentH4[1].textContent = siteContent['main-content']['product-h4'];
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4'];

const bottomContentP = document.querySelectorAll('.main-content .bottom-content .text-content p');

bottomContentP[0].textContent = siteContent['main-content']['services-content'];
bottomContentP[1].textContent = siteContent['main-content']['product-content'];
bottomContentP[2].textContent = siteContent['main-content']['vision-content'];

const addressH4 = document.querySelector('.contact h4');
addressH4.textContent = siteContent['contact']['contact-h4'];

const addressPlist = document.querySelectorAll('.contact p');

let addressLines = siteContent['contact']['address'].split(' ');
addressLines.splice(4,0,'\n');
addressPlist[0].innerText = addressLines.join(' ');

addressPlist[1].textContent = siteContent['contact']['phone'];

addressPlist[2].textContent = siteContent['contact']['email'];

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];