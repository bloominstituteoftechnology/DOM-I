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


// Commit 

// Nav

const navLink = document.querySelectorAll('nav a');
navLink[0].innerHTML = (siteContent['nav']['nav-item-1']);
navLink[1].innerHTML = (siteContent['nav']['nav-item-2']);
navLink[2].innerHTML = (siteContent['nav']['nav-item-3']);
navLink[3].innerHTML = (siteContent['nav']['nav-item-4']);
navLink[4].innerHTML = (siteContent['nav']['nav-item-5']);
navLink[5].innerHTML = (siteContent['nav']['nav-item-6']);

// Cta

const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.innerHTML = (siteContent['cta']['h1']);

const ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = (siteContent['cta']['button']);

const ctaImage = document.getElementById('cta-img');
ctaImage.src = (siteContent['cta']['img-src']);

// Main

  // Top

const mainContentHeader = document.querySelectorAll('.main-content h4');
mainContentHeader[0].innerHTML = (siteContent['main-content']['features-h4']);
mainContentHeader[1].innerHTML = (siteContent['main-content']['about-h4']);

const mainContentParagraph = document.querySelectorAll('.main-content p');
mainContentParagraph[0].innerHTML = (siteContent['main-content']['features-content']);
mainContentParagraph[1].innerHTML = (siteContent['main-content']['about-content']);

const middleImage = document.getElementById('middle-img');
middleImage.src = (siteContent['main-content']['middle-img-src']);

  // Bottom

const bottomContentHeader = document.querySelectorAll('.bottom-content h4');
bottomContentHeader[0].innerHTML = (siteContent['main-content']['services-h4']);
bottomContentHeader[1].innerHTML = (siteContent['main-content']['product-h4']);
bottomContentHeader[2].innerHTML = (siteContent['main-content']['vision-h4']);

const bottomContentParagraph = document.querySelectorAll('.bottom-content p');
bottomContentParagraph[0].innerHTML = (siteContent['main-content']['services-content']);
bottomContentParagraph[1].innerHTML = (siteContent['main-content']['product-content']);
bottomContentParagraph[2].innerHTML = (siteContent['main-content']['vision-content']);

const contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = (siteContent['contact']['contact-h4']);

const contactParagraph = document.querySelectorAll('.contact p');
contactParagraph[0].innerHTML = (siteContent['contact']['address']);
contactParagraph[1].innerHTML = (siteContent['contact']['phone']);
contactParagraph[2].innerHTML = (siteContent['contact']['email']);


const footer = document.querySelector('footer p');
footer.innerHTML = (siteContent['footer']['copyright']);