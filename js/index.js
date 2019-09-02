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


//Navigation


// Call to Action
let ctaHeadding = document.querySelector('.cta-text h1');
let ctaButton = document.querySelector('.cta-text button');
let ctaImage = document.querySelector('#cta-img');

ctaHeadding.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImage.src = siteContent.cta["img-src"];


// Top content
let topContentFirstH4 = document.querySelector('.top-content:first-child h4');
let topContentLastH4 = document.querySelector('.top-content:nth-child(2) h4');

let topContentFirstP = document.querySelector('.top-content:first-child p');
let topContentLastP = document.querySelector('.top-content:nth-child(2) p');

topContentFirstH4.textContent = siteContent["main-content"]["features-h4"];
topContentLastH4.textContent = siteContent["main-content"]["about-h4"];

topContentFirstP.textContent = siteContent["main-content"]["features-content"];
topContentLastP.textContent = siteContent["main-content"]["about-content"];

// Middle image
let middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];


// Contact
let contactSectionH4 = document.querySelector('.contact h4');

contactSectionH4.textContent = siteContent.contact["contact-h4"];

// Footer
let footerParagraph = document.querySelector('footer p');
footerParagraph.textContent = siteContent.footer.copyright;