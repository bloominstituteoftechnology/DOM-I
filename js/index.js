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

// Nav text
let navArrayList = Array.from(document.getElementsByTagName('a'))

// Converting useless json object into a nice little array
let siteContentNavArray = [];
for (key in siteContent.nav) {
  siteContentNavArray.push(siteContent.nav[key])
}
//navArrayList[0].textContent = siteContent.nav["nav-item-1"]; example

navArrayList.forEach((element, index) => {
  element.textContent = siteContentNavArray[index];
})
let ctaText = document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
let ctaButton = document.querySelector('.cta-text button').textContent = siteContent.cta.button;
let ctaImg = document.querySelector('#cta-img').src = siteContent.cta["img-src"];

let topContentH4 = document.querySelectorAll('.top-content .text-content h4');
topContentH4[0].textContent =  siteContent["main-content"]["features-h4"];
topContentH4[1].textContent =  siteContent["main-content"]["about-h4"];

let topContentP = document.querySelectorAll('.top-content .text-content p');
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];

let botContentH4 = document.querySelectorAll('.bottom-content .text-content h4');
botContentH4[0].textContent = siteContent["main-content"]["services-h4"];
botContentH4[1].textContent = siteContent["main-content"]["product-h4"];
botContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

let botContentP = document.querySelectorAll('.bottom-content .text-content p');
botContentP[0].textContent = siteContent["main-content"]["services-content"];
botContentP[1].textContent = siteContent["main-content"]["product-content"];
botContentP[2].textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelectorAll('.contact *');
contact[0].textContent = siteContent.contact["contact-h4"];
contact[1].textContent = siteContent.contact["address"];
contact[2].textContent = siteContent.contact["phone"];
contact[3].textContent = siteContent.contact["email"];

let footer = document.querySelector('footer').textContent = siteContent.footer.copyright;