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


//DOM Manipulation //

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]['img-src']);

let navHeader = document.querySelectorAll('a');
navHeader[0].textContent = siteContent.nav["nav-item-1"];
navHeader[1].textContent = siteContent.nav["nav-item-2"];
navHeader[2].textContent = siteContent.nav["nav-item-3"];
navHeader[3].textContent = siteContent.nav["nav-item-4"];
navHeader[4].textContent = siteContent.nav["nav-item-5"];
navHeader[5].textContent = siteContent.nav["nav-item-6"];


let logo2 = document.getElementById("cta-img");
logo2.src = ("img/header-img.png");

const ctaText = document.querySelector('h1');
ctaText.textContent = 'Dom Is Awesome';

const ctaBtn = document.querySelector('button');
ctaBtn.textContent = 'Get Started';

//top section//
 
let titles = document.querySelectorAll('.top-content h4');
titles[0].textContent = siteContent['main-content']['features-h4'];
let text = document.querySelectorAll('.text-content p');
text[0].textContent = siteContent['main-content']['features-content'];

titles[1].textContent = siteContent['main-content']['about-h4'];
text[1].textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById("middle-img");
middleImg .src = ("img/mid-page-accent.jpg");

//bottom section//
 
let titlesBot = document.querySelectorAll('.bottom-content h4');
titlesBot[0].textContent = siteContent['main-content']['services-h4'];
text[2].textContent = siteContent['main-content']['services-content'];

titlesBot[1].textContent = siteContent['main-content']['product-h4'];
text[3].textContent = siteContent['main-content']['product-content'];

titlesBot[2].textContent = siteContent['main-content']['vision-h4'];
text[4].textContent = siteContent['main-content']['vision-content'];




//contact//
let contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];
let info= document.querySelectorAll('.contact p');
info[0].textContent = siteContent['contact']['address'];
info[1].textContent = siteContent['contact']['phone'];
info[2].textContent = siteContent['contact']['email'];

console.log(contact)

//footer//

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];
      

