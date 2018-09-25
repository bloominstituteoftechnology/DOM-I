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

//Navigation Bar

let navItems = document.querySelectorAll('header nav a');
navItems[0].innerHTML = siteContent['nav']['nav-item-1'];
navItems[1].innerText = siteContent['nav']['nav-item-2'];
navItems[2].innerText = siteContent['nav']['nav-item-3'];
navItems[3].innerText = siteContent['nav']['nav-item-4'];
navItems[4].innerText = siteContent['nav']['nav-item-5'];
navItems[5].innerText = siteContent['nav']['nav-item-6'];

//change nav text to green

navItems[0].style.color = 'green';
navItems[1].style.color = 'green';
navItems[2].style.color = 'green';
navItems[3].style.color = 'green';
navItems[4].style.color = 'green';
navItems[5].style.color = 'green';

//append to Navigation

navItems.append

//cta Section

let cta = document.querySelector('h1');
cta.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent['cta']['button'];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

//main-content Section

let topContentHeaders = document.querySelectorAll('.main-content h4');
topContentHeaders[0].innerText = siteContent['main-content']['features-h4'];
topContentHeaders[1].innerText = siteContent['main-content']['about-h4'];

let topContent = document.querySelectorAll('.top-content p');
topContent[0].innerText = siteContent['main-content']['features-content'];
topContent[1].innerText = siteContent['main-content']['about-content'];

//middle image

let mainContentImage = document.getElementById("middle-img");
mainContentImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom-content

let bottomContentHeaders = document.querySelectorAll('.bottom-content h4');
bottomContentHeaders[0].innerText = siteContent['main-content']['services-h4'];
bottomContentHeaders[1].innerText = siteContent['main-content']['product-h4'];
bottomContentHeaders[2].innerText = siteContent['main-content']['vision-h4'];

let bottomContent = document.querySelectorAll('.bottom-content p');
bottomContent[0].innerText = siteContent['main-content']['features-content'];
bottomContent[1].innerText = siteContent['main-content']['about-content'];
bottomContent[2].innerText = siteContent['main-content']['about-content'];

//contact info

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = siteContent['contact']['contact-h4'];

let contactAddress = document.querySelectorAll('.contact p');
contactAddress[0].innerText = siteContent['contact']['address'];
contactAddress[1].innerText = siteContent['contact']['phone'];
contactAddress[2].innerText = siteContent['contact']['email'];

//footer

let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];

//navigation text green

