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



// let n = document.querySelectorAll('nav a');
// navMenu = Array.from(n);
// navMenu.forEach((item, index) => {
//   for(let i = 0; i < siteContent['nav'].keys.length; i++){
//   item.innerHTML = siteContent['nav'][];
//   }

// })


// nav menu

let navMenu = document.querySelectorAll('nav a');
navMenu[0].textContent = siteContent['nav']['nav-item-1'];
navMenu[1].textContent = siteContent['nav']['nav-item-2'];
navMenu[2].textContent = siteContent['nav']['nav-item-3'];
navMenu[3].textContent = siteContent['nav']['nav-item-4'];
navMenu[4].textContent = siteContent['nav']['nav-item-5'];
navMenu[5].textContent = siteContent['nav']['nav-item-6'];

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//cta section
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];
let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerText = siteContent['cta']['button'];
let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);


//main content////////////
//top content
let mainTop = document.querySelectorAll('.main-content .top-content .text-content')
mainTop[0].childNodes[1].innerText = siteContent['main-content']['features-h4'];
mainTop[0].childNodes[3].innerText = siteContent['main-content']['features-content'];
mainTop[1].childNodes[1].innerText = siteContent['main-content']['about-h4'];
mainTop[1].childNodes[3].innerText = siteContent['main-content']['about-content'];

//middle content
let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom content
let mainBottom = document.querySelectorAll('.main-content .bottom-content .text-content');
mainBottom[0].childNodes[1].innerText = siteContent['main-content']['services-h4'];
mainBottom[0].childNodes[3].innerText = siteContent['main-content']['services-content'];
mainBottom[1].childNodes[1].innerText = siteContent['main-content']['product-h4'];
mainBottom[1].childNodes[3].innerText = siteContent['main-content']['product-content'];
mainBottom[2].childNodes[1].innerText = siteContent['main-content']['vision-h4'];
mainBottom[2].childNodes[3].innerText = siteContent['main-content']['vision-content'];