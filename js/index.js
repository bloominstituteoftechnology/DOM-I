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
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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

// nav bar
const navlinks = document.querySelectorAll('a');
navlinks.forEach((currentValue, i) => 
  (currentValue.textContent = Object.values(siteContent.nav)[i]));

// Cta header img
const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

// Cta header title
const headerTitle = document.querySelector('h1');
headerTitle.textContent = siteContent.cta.h1

// Cta button
const buttonText = document.querySelector('button');
buttonText.textContent = siteContent.cta.button

// Main content
const mainContent = document.querySelectorAll('.text-content')
mainContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
mainContent[0].querySelector('p').textContent = siteContent['main-content']['features-content']
mainContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
mainContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']
mainContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
mainContent[2].querySelector('p').textContent = siteContent['main-content']['services-content']
mainContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
mainContent[3].querySelector('p').textContent = siteContent['main-content']['product-content']
mainContent[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
mainContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content']

// Content img
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Contact info
const contactInfo = document.querySelector('.contact');
contactInfo.querySelector('h4').textContent = siteContent['contact']['contact-h4']
const contactDetails = contactInfo.querySelectorAll('p');
contactDetails[0].textContent = siteContent['contact']['address'];
contactDetails[1].textContent = siteContent['contact']['phone'];
contactDetails[2].textContent = siteContent['contact']['email'];

// Footer
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];