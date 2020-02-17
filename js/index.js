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

// Example:Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let navItems = document.querySelectorAll('a');

let links = Array.from(navItems);

links.forEach((element, i) => {
 element.textContent = siteContent[`nav`][`nav-item-${i + 1}`]
});


let ctaHeader = document.querySelector('h1');
ctaHeader.textContent = siteContent["cta"]["h1"]

let welcomeImage = document.getElementById('cta-img');
welcomeImage.setAttribute('src', siteContent["cta"]["img-src"])

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];


let mainHeadings = document.querySelectorAll('h4');
console.log(mainHeadings);

mainHeadings[0].textContent = siteContent['main-content']['features-h4'];
mainHeadings[1].textContent = siteContent['main-content']['about-h4'];
mainHeadings[2].textContent = siteContent['main-content']['services-h4'];
mainHeadings[3].textContent = siteContent['main-content']['product-h4'];
mainHeadings[4].textContent = siteContent['main-content']['vision-h4'];

let featuresParagraphs = document.querySelectorAll('p');

featuresParagraphs[0].textContent = siteContent['main-content']['features-content'];
featuresParagraphs[1].textContent = siteContent['main-content']['about-content'];
featuresParagraphs[2].textContent = siteContent['main-content']['services-content'];
featuresParagraphs[3].textContent = siteContent['main-content']['product-content'];
featuresParagraphs[4].textContent = siteContent['main-content']['vision-content'];


let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);


let contactHeading = document.querySelectorAll('.contact h4');
console.log(contactHeading);
contactHeading[0].textContent = siteContent['contact']['contact-h4'];

let contactInfo = document.querySelectorAll('.contact p');

contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

let footerInfo = document.querySelectorAll('footer p');
footerInfo[0].textContent = siteContent['footer']['copyright'];