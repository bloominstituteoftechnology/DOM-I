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
    "h1": "<h1>DOM<br> Is<br> Awesome</h1>",
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
    "address" : "<p>123 Way 456 Street <br> Somewhere, USA</p>",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


 //console.log(siteContent.nav["nav-item-1"]);

// ============================ NAV SECTION =====================
// Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Update Dom's data Nav
const newA = document.createElement('a');
newA.textContent = 'Hello';

const newA2 = document.createElement('a');
newA2.textContent = 'World';


const navBarTop = document.querySelector('nav');
navBarTop.append(newA);
navBarTop.append(newA2);
console.log(navBarTop)

const navKeys = Object.keys(siteContent.nav);
const navLinks = document.querySelectorAll('nav a');

navLinks[0].textContent = siteContent.nav[navKeys[0]];
navLinks[1].textContent = siteContent.nav[navKeys[1]];
navLinks[2].textContent = siteContent.nav[navKeys[2]];
navLinks[3].textContent = siteContent.nav[navKeys[3]];
navLinks[4].textContent = siteContent.nav[navKeys[4]];
navLinks[5].textContent = siteContent.nav[navKeys[5]];
navLinks.forEach(function(el){
  el.style.color = 'green';
})


// ============================ CTA SECTION =====================
//  CTA Image
const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta["img-src"];

// CTA Text
const divCtaText = document.querySelector('.cta-text');


// grab all h1 in the div
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent.cta.h1;


// CTA Button
const ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent.cta.button;

// ============================ MAIN TOP and Bottom SECTION =====================

const mainContent = document.querySelectorAll(".main-content .text-content h4, .main-content .text-content p");

const mainContentKeys = Object.keys(siteContent["main-content"]);
//Grab image from the list
const middleImage = mainContentKeys.splice(4,1);
const mainImg = document.getElementById('middle-img');
mainImg.src = siteContent["main-content"][middleImage];

mainContent.forEach(function(element,index){
  element.textContent = siteContent["main-content"][mainContentKeys[index]];
});

// ============================ CONTACT SECTION AND FOOTER =====================

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];

let contactAllP = document.querySelectorAll('.contact p');
const contactKeys = Object.keys(siteContent.contact);
contactAllP[0].textContent = siteContent.contact[contactKeys[0]];
contactAllP[1].innerHTML = siteContent.contact[contactKeys[1]];
contactAllP[2].textContent = siteContent.contact[contactKeys[2]];

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer.copyright;