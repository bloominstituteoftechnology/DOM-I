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

// header
//  header  nav
let aTags = document.querySelectorAll('a');
aTags[0].textContent = siteContent["nav"]["nav-item-1"];
aTags[1].textContent = siteContent["nav"]["nav-item-2"];
aTags[2].textContent = siteContent["nav"]["nav-item-3"];  
aTags[3].textContent = siteContent["nav"]["nav-item-4"];
aTags[4].textContent = siteContent["nav"]["nav-item-5"];
aTags[5].textContent = siteContent["nav"]["nav-item-6"];

// header img
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// section .cta  .cta-text h1
const ctaH1 = document.querySelector('.cta-text h1');
siteContent.cta["h1"] = 'DOM <br> Is <br> Awesome'
ctaH1.innerHTML = siteContent.cta["h1"];

//  section .cta .cta-text button
const button = document.querySelector('.cta-text button')
button.textContent = siteContent["cta"]["button"];

//  section .cta img .cta-img
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];

//  section .main-content .top-content  .text-content h4
const h4TopContent = document.querySelectorAll(".top-content  .text-content h4");
h4TopContent[0].textContent = siteContent["main-content"]["features-h4"];
h4TopContent[1].textContent = siteContent["main-content"]["about-h4"];

//  section .main-content .top-content  .text-content p
const pTopContent = document.querySelectorAll(".top-content  .text-content p");
pTopContent[0].textContent = siteContent["main-content"]["features-content"];
pTopContent[1].textContent = siteContent["main-content"]["about-content"];

//  section .main-content img .middle-img
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

//  section .main-content .bottom-content  .text-content h4
const h4BottomContent = document.querySelectorAll(".bottom-content .text-content h4");
h4BottomContent[0].textContent = siteContent["main-content"]["services-h4"];
h4BottomContent[1].textContent = siteContent["main-content"]["product-h4"];
h4BottomContent[2].textContent = siteContent["main-content"]["vision-h4"];

//  section .main-content .bottom-content  .text-content p
const pBottomContent = document.querySelectorAll(".bottom-content  .text-content p");
pBottomContent[0].textContent = siteContent["main-content"]["services-content"];
pBottomContent[1].textContent = siteContent["main-content"]["product-content"];
pBottomContent[2].textContent = siteContent["main-content"]["vision-content"];

//  section .contact  h4
const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent["contact"]["contact-h4"];

//  section .contact p
const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

