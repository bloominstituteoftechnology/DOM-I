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

//Task 1: Create selectors to point your data into elements
const navItem = document.querySelectorAll('a');
const ctaH1 = document.querySelector('.cta .cta-text h1');
const ctaButton = document.querySelector('.cta .cta-text button');
const ctaImg = document.querySelector('.cta #cta-img');
const mainContenth4 = document.querySelectorAll('.main-content .top-content .text-content h4');
const mainContentP = document.querySelectorAll('.main-content .top-content .text-content p');
const middleImg = document.querySelector('.main-content .middle-img');
const bottomContentH4 = document.querySelectorAll('.main-content .bottom-content h4');
const bottomContentP = document.querySelectorAll('.main-content .bottom-content p');
const contactSecH4 = document.querySelector('.contact h4');
const contactSecP = document.querySelectorAll('.contact p');
const footerP = document.querySelector('footer p');



//Task 2: Update the HTML with the JSON data
//NavBar 
  //ClassNames
  navItem[0].className = "nav-item-1";
  navItem[1].className = "nav-item-2";
  navItem[2].className = "nav-item-3";
  navItem[3].className = "nav-item-4";
  navItem[4].className = "nav-item-5";
  navItem[5].className = "nav-item-6";

  //Text Content
  navItem[0].textContent = "Services";
  navItem[1].textContent = "Product";
  navItem[2].textContent = "Vision";
  navItem[3].textContent = "Features";
  navItem[4].textContent = "About";
  navItem[5].textContent = "Contact";

//Call To Action
  //Text Content
  ctaH1.textContent = "DOM Is Awesome";
  ctaButton.textContent = "Get Started";
  ctaImg.src = "img/header-img.png";

//Main Content
  //Text Content
  mainContenth4[0].textContent = 'Features';
  mainContentP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  mainContenth4[1].textContent = 'About';
  mainContentP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  middleImg.src = 'img/mid-page-accent.jpg';

//Bottom Content
  //Text Content
  bottomContentH4[0].textContent = 'Services';
  bottomContentP[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  bottomContentH4[1].textContent = 'Product';
  bottomContentP[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  bottomContentH4[2].textContent = 'Vision';
  bottomContentP[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Contact
  //Text Content
  contactSecH4.textContent = "Contact";
  contactSecP[0].textContent = "123 Way 456 Street Somewhere, USA";
  contactSecP[1].textContent = "1 (888) 888-8888";
  contactSecP[2].textContent = "sales@greatidea.io";

//Footer
  footerP.textContent = "Copyright Great Idea! 2218";

  





  


