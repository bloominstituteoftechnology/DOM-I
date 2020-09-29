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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let myNav = document.querySelectorAll('nav a');
console.log(myNav);
myNav[0].textContent=siteContent.nav["nav-item-1"]
myNav[1].textContent=siteContent.nav["nav-item-2"]
myNav[2].textContent=siteContent.nav["nav-item-3"]
myNav[3].textContent=siteContent.nav["nav-item-4"]
myNav[4].textContent=siteContent.nav["nav-item-5"]
myNav[5].textContent=siteContent.nav["nav-item-6"]

// Sets .cta h1 
let myCtaH1 = document.querySelector('.cta h1')
myCtaH1.textContent=siteContent.cta.h1
let myCtaButton = document.querySelector('.cta button')
myCtaButton.textContent=siteContent.cta.button
let myCtaImage = document.querySelector('.cta img')
myCtaImage.src=siteContent.cta["img-src"]

// Sets features-h4 to 'Features'
let myFeaturesH4 = document.querySelector('.main-content .top-content .text-content:nth-child(1) h4')
myFeaturesH4.textContent=siteContent["main-content"]["features-h4"]

let myFeaturesParagraph = document.querySelector('.main-content .top-content .text-content:nth-child(1) p')
myFeaturesParagraph.textContent=siteContent["main-content"]["features-content"]


// Sets features-content paragraph to ''
let myAboutH4 = document.querySelector('.main-content .top-content .text-content:nth-child(2) h4')
myAboutH4.textContent=siteContent["main-content"]["about-h4"]

let myAboutParagraph = document.querySelector('.main-content .top-content .text-content:nth-child(2) p')
myAboutParagraph.textContent=siteContent["main-content"]["about-content"]

let middleImg = document.querySelector('.middle-img')
middleImg.src=siteContent["main-content"]["middle-img-src"]

let services = document.querySelector('.main-content .bottom-content .text-content:nth-child(1) h4')
services.textContent=siteContent["main-content"]["services-h4"]

let servicesContent = document.querySelector('.main-content .bottom-content .text-content:nth-child(1) p')
servicesContent.textContent=siteContent["main-content"]["services-content"]

let contactH4 = document.querySelector('.contact h4')
contactH4.textContent=siteContent.contact["contact-h4"]

let contactAddress = document.querySelector('.contact p')
contactAddress.textContent=siteContent.contact.address

let footerCopyright = document.querySelector('footer p')
footerCopyright.textContent=siteContent.footer.copyright