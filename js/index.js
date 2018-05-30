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

// Navigation

let nav1 = document.querySelectorAll('nav a')[0];
nav1.innerHTML = siteContent['nav']['nav-item-1'];

let nav2 = document.querySelectorAll('nav a')[1];
nav2.innerHTML = siteContent['nav']['nav-item-2'];

let nav3 = document.querySelectorAll('nav a')[2];
nav3.innerHTML = siteContent['nav']['nav-item-3'];

let nav4 = document.querySelectorAll('nav a')[3];
nav4.innerHTML = siteContent['nav']['nav-item-4'];

let nav5 = document.querySelectorAll('nav a')[4];
nav5.innerHTML = siteContent['nav']['nav-item-5'];

let nav6 = document.querySelectorAll('nav a')[5];
nav6.innerHTML = siteContent['nav']['nav-item-6'];

let faqAnchor = document.createElement('a');
let faqText = document.createTextNode('FAQ');
faqAnchor.appendChild(faqText);
document.querySelector('nav').appendChild(faqAnchor);

let homeAnchor = document.createElement('a');
let homeText = document.createTextNode('Home');
homeAnchor.appendChild(homeText);
document.querySelector('nav').prepend(homeAnchor);

let navigation = document.querySelectorAll('nav a');

navigation.forEach(element => element.style.color = 'green');


// Call to Action

let callToAction = document.querySelector('.cta-text h1');
callToAction.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// Main Content

let featuresHeader = document.querySelectorAll('.text-content h4')[0];
featuresHeader.innerHTML = siteContent['main-content']['features-h4'];

let featuresContent = document.querySelectorAll('.text-content p')[0];
featuresContent.innerHTML = siteContent['main-content']['features-content'];

let aboutHeader = document.querySelectorAll('.text-content h4')[1];
aboutHeader.innerHTML = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll('.text-content p')[1];
aboutContent.innerHTML = siteContent['main-content']['about-content'];

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesHeader = document.querySelectorAll('.text-content h4')[2];
servicesHeader.innerHTML = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelectorAll('.text-content p')[2];
servicesContent.innerHTML = siteContent['main-content']['services-content'];

let productHeader = document.querySelectorAll('.text-content h4')[3];
productHeader.innerHTML = siteContent['main-content']['product-h4'];

let productContent = document.querySelectorAll('.text-content p')[3];
productContent.innerHTML = siteContent['main-content']['product-content'];

let visionHeader = document.querySelectorAll('.text-content h4')[4];
visionHeader.innerHTML = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelectorAll('.text-content p')[4];
visionContent.innerHTML = siteContent['main-content']['vision-content'];

// Contact

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = siteContent['contact']['contact-h4'];

let contactAddress = document.querySelectorAll('.contact p')[0];
contactAddress.innerHTML = siteContent['contact']['address'];

let contactPhone = document.querySelectorAll('.contact p')[1];
contactPhone.innerHTML = siteContent['contact']['phone'];

let contactEmail = document.querySelectorAll('.contact p')[2];
contactEmail.innerHTML = siteContent['contact']['email'];

// Footer

let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];
