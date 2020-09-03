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
ctaText.style.color="red";
atags[0].style.color="blue";
atags[1].style.color="red";
atags[2].style.color="blue";
atags[3].style.color="red";
atags[4].style.color="blue";
atags[5].style.color="red";

// atags.forEach(element => {
//   element.stlye.color="red"
// })

const bnt = cta1.querySelector('button')
bnt.textContent=siteContent.cta["button"];

 let ctalogo = cta1.querySelector("#cta-img")
 ctalogo.setAttribute('src', siteContent['cta']["img-src"]);


const main =  document.querySelectorAll(".top-content")
const mainh4 = document.querySelectorAll('.top-content h4')
mainh4[0].textContent=siteContent["main-content"]["features-h4"]
mainh4[1].textContent=siteContent["main-content"]["about-h4"]

const mainpar = document.querySelectorAll(".top-content p")
mainpar[0].textContent=siteContent["main-content"]["features-content"]
mainpar[0].style.color="blue";
mainpar[1].textContent=siteContent["main-content"]["about-content"]
mainpar[1].style.color="red";
let middleimdg = document.querySelector(".middle-img")
middleimdg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomcontent = document.querySelectorAll(".bottom-content h4")
bottomcontent[0].textContent=siteContent['main-content']['services-h4']
bottomcontent[0].style.color="red";
bottomcontent[1].textContent=siteContent['main-content']['product-h4']
bottomcontent[1].style.color="blue";
bottomcontent[2].textContent=siteContent['main-content']['vision-h4']

let bottomcontentpar = document.querySelectorAll(".bottom-content  p")
bottomcontentpar[0].textContent=siteContent['main-content']['services-content']

bottomcontentpar[1].textContent=siteContent['main-content']['product-content']

bottomcontentpar[2].textContent=siteContent['main-content'][
  'vision-content']

  let contactsec = document.querySelector('.contact h4')
  contactsec.textContent=siteContent['contact']['contact-h4']

  let contactsecpara = document.querySelectorAll('.contact p')
  contactsecpara[0].textContent=siteContent['contact']['address']

  contactsecpara[1].textContent=siteContent['contact']['phone']

  contactsecpara[2].textContent=siteContent['contact']['email']

let footer1 = document.querySelector('footer')
footer1.textContent=siteContent['footer']['copyright']