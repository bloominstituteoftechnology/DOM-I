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

const atags = document.querySelectorAll('nav a')

atags[0].textContent=siteContent.nav["nav-item-1"]
atags[1].textContent=siteContent.nav["nav-item-2"]
atags[2].textContent=siteContent.nav['nav-item-3']
atags[3].textContent=siteContent.nav['nav-item-4']
atags[4].textContent=siteContent.nav["nav-item-5"]
atags[5].textContent=siteContent.nav["nav-item-6"]
 const cta1 =document.querySelector(".cta")
const ctaText =cta1.querySelector('h1')
ctaText.textContent=siteContent.cta.h1;

 const bnt = cta1.querySelector('button')
bnt.textContent=siteContent.cta["button"];

 let ctalogo = cta1.querySelector("#cta-img")
 ctalogo.setAttribute('src', siteContent['cta']["img-src"]);


const main =  document.querySelector(".main-content")
const mainh4 = main.querySelector(' .top-content h4')
mainh4.textContent=siteContent["main-content"]["features-h4"]

const mainpara = main.querySelector(".top-content p")
mainpara.textContent=siteContent["main-content"]["features-content"]

const mainabout = main.querySelector('.text-content h4')
mainabout.textContent=siteContent["main-content"]["about-h4"]
