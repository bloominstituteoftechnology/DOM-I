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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
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


//Nav
let  navLinks = document.querySelectorAll('nav a');
navLinks[0].innerText = siteContent['nav']['nav-item-1'];
navLinks[1].innerText = siteContent['nav']['nav-item-2'];
navLinks[2].innerText = siteContent['nav']['nav-item-3'];
navLinks[3].innerText = siteContent['nav']['nav-item-4'];
navLinks[4].innerText = siteContent['nav']['nav-item-5'];
navLinks[5].innerText = siteContent['nav']['nav-item-6'];


//Color Change
navLinks.forEach(item => item.style.color = 'green');


//New Content
let mainNav = document.querySelector('nav');
  const newNavItem1 = document.createElement('a');
    newNavItem1.innerText = 'Awesome'
    newNavItem1.href = '#'
    newNavItem1.style.color = 'green'
    mainNav.appendChild(newNavItem1);
    
 const newNavItem2 = document.createElement('a');
    newNavItem2.innerText = 'Shop'
    newNavItem2.href = '#'
    newNavItem2.style.color = 'green'
    mainNav.prepend(newNavItem2);


//Images
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute ('src', siteContent['main-content']['middle-img-src'])


//CTA
let ctaButton = document.querySelector("button");
ctaButton.innerHTML = siteContent['cta']['button'];

let cta = document.querySelector("h1");
cta.innerHTML = siteContent["cta"]["h1"];


//Main Content
let topContentHeaders = document.querySelectorAll('.top-content .text-content h4');
topContentHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];


let topContentText = document.querySelectorAll('.top-content .text-content p' );
topContentText[0].innerHTML = siteContent['main-content']['features-content'];
topContentText[1].innerHTML = siteContent['main-content']['about-content'];


let bottomContentHeader = document.querySelectorAll('.bottom-content .text-content h4' );
bottomContentHeader[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContentHeader[1].innerHTML = siteContent['main-content']['product-h4'];
bottomContentHeader[2].innerHTML = siteContent['main-content']['vision-h4'];


let bottomContentText = document.querySelectorAll('.bottom-content .text-content p' );
bottomContentText[0].innerHTML = siteContent['main-content']['services-content'];
bottomContentText[1].innerHTML = siteContent['main-content']['product-content'];
bottomContentText[2].innerHTML = siteContent['main-content']['vision-content'];



//Contact
let contactInfoHeader = document.querySelector('.contact h4');
contactInfoHeader.innerHTML = siteContent['contact']['contact-h4'];

let contactInfoContent = document.querySelectorAll('.contact p');
contactInfoContent[0].innerHTML = siteContent['contact']['address'];
contactInfoContent = document.querySelectorAll('.contact p');
contactInfoContent[1].innerHTML = siteContent['contact']['phone'];
contactInfoContent = document.querySelectorAll('.contact p');
contactInfoContent[2].innerHTML = siteContent['contact']['email'];


//footer
let footerInfo = document.querySelector('footer p');
footerInfo.innerHTML = siteContent['footer']['copyright'];











