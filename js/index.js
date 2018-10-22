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

//images
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById('cta-img');
ctaImg.src = 'img/header-img.png';

const middleImg = document.getElementById("middle-img");
middleImg.src = 'img/mid-page-accent.jpg';

// nav elements
const navElements = document.querySelectorAll('a');
console.log(navElements);

for(i = 1; i < navElements.length; i++){
  navElements[i].textContent = siteContent.nav[`nav-item-${i}`];
}

// Top Text and Button
const ctaH1 = document.querySelector('h1')
const ctaButton = document.querySelector('button')

ctaH1.textContent = siteContent.cta.h1;
ctaButton.textContent =siteContent.cta.button;

// Header text for text content
const ctaH4 = document.querySelectorAll('h4')
console.log(ctaH4)

//main content headers 
ctaH4[0].textContent = siteContent["main-content"]["features-h4"]
ctaH4[1].textContent = siteContent['main-content']['about-h4'];
ctaH4[2].textContent = siteContent['main-content']['services-h4'];
ctaH4[3].textContent = siteContent['main-content']['product-h4'];
ctaH4[4].textContent = siteContent['main-content']['vision-h4'];

// main content text
const ctaP = document.querySelectorAll('p');
ctaP[0].textContent = siteContent['main-content']['features-content'];
ctaP[1].textContent = siteContent['main-content']['about-content'];
ctaP[2].textContent = siteContent['main-content']['services-content'];
ctaP[3].textContent = siteContent['main-content']['product-content'];
ctaP[4].textContent = siteContent['main-content']['vision-content'];

//contact text-content
ctaH4[5].textContent = siteContent['contact']['contact-h4'];
ctaP[5].textContent = siteContent['contact']['address']
ctaP[6].textContent = siteContent['contact']['phone'];
ctaP[7].textContent = siteContent['contact']['email'];

//footer
ctaP[8].textContent = siteContent['footer']['copyright'];
