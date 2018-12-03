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

//Nav

let nav = document.querySelectorAll('a');
nav[0].textContent = 'Services';
nav[0].style.color = 'green'
nav[1].textContent = 'Product';
nav[1].style.color = 'green'
nav[2].textContent = 'Vision';
nav[2].style.color = 'green'
nav[3].textContent = 'Features';
nav[3].style.color = 'green'
nav[4].textContent = 'About';
nav[4].style.color = 'green'
nav[5].textContent = 'Contact';
nav[5].style.color = 'green'

const navBar= document.querySelector("nav");
const goodBye = document.createElement("a");
const hellO = document.createElement("a");

goodBye.href = '#';
goodBye.textContent = 'Good Bye';
goodBye.style.color = 'green';

hellO.href = '#';
hellO.textContent = 'Hello';
hellO.style.color = 'green';

navBar.append(goodBye);
navBar.prepend(hellO);


//CTA

let ctaH1 = document.querySelector('.cta-text h1');
  ctaH1.innerHTML = 'DOM<br> Is<br> Awesome<br>';

let ctaIMG = document.getElementById('cta-img');
  ctaIMG.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaButton = document.querySelector('.cta-text button');
  ctaButton.innerHTML = 'Get Started'; 

  // Main content

let topContentHead = document.querySelectorAll(".top-content .text-content h4");
  topContentHead[0].textContent = "Features";
  topContentHead[1].textContent = "About";

let topContent = document.querySelectorAll(".top-content .text-content p");
  topContent[0].textContent = siteContent["main-content"]["features-content"];
  topContent[1].textContent = siteContent["main-content"]["about-content"];

let midImg = document.getElementById("middle-img");	  
  midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
  
let bottomContentHead = document.querySelectorAll(".bottom-content .text-content h4");
  bottomContentHead[0].textContent = siteContent["main-content"]["services-h4"];
  bottomContentHead[1].textContent = siteContent["main-content"]["product-h4"];
  bottomContentHead[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContent = document.querySelectorAll(".bottom-content .text-content p");
  bottomContent[0].textContent = siteContent["main-content"]["services-content"];
  bottomContent[1].textContent = siteContent["main-content"]["product-content"];
  bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

//Contact

let contactH4 = document.querySelector(".contact h4");
  contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactContent = document.querySelectorAll(".contact p");
  contactContent[0].textContent = siteContent["contact"]["address"];
  contactContent[1].textContent = siteContent["contact"]["phone"];
  contactContent[2].textContent = siteContent["contact"]["email"];

  //Footer

let footer = document.querySelector("footer p");
  footer.textContent = siteContent["footer"]["copyright"];