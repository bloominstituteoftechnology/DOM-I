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

const navLinks = document.querySelectorAll("nav a");
navLinks[0].innerHTML = siteContent['nav']['nav-item-1'];
navLinks[1].innerHTML = siteContent['nav']['nav-item-2'];
navLinks[2].innerHTML = siteContent['nav']['nav-item-3'];
navLinks[3].innerHTML = siteContent['nav']['nav-item-4'];
navLinks[4].innerHTML = siteContent['nav']['nav-item-5'];
navLinks[5].innerHTML = siteContent['nav']['nav-item-6'];

let ctaH1 = document.querySelector('.cta .cta-text h1');
ctaH1.innerHTML = siteContent['cta']['h1'];
let ctaBtn = document.querySelector('.cta .cta-text button');
ctaBtn.innerHTML = siteContent['cta']['button'];
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const mainContentH4 = document.querySelectorAll('.text-content h4');
mainContentH4[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentH4[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContentH4[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContentH4[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContentH4[4].innerHTML = siteContent["main-content"]["vision-h4"];

const mainContentP = document.querySelectorAll('.text-content p');
mainContentP[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentP[1].innerHTML = siteContent["main-content"]["about-content"];
mainContentP[2].innerHTML = siteContent["main-content"]["services-content"];
mainContentP[3].innerHTML = siteContent["main-content"]["product-content"];
mainContentP[4].innerHTML = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent["contact"]["contact-h4"];
const contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

const footer = document.querySelector('footer');
footer.innerHTML = siteContent["footer"]["copyright"];

const nav = document.querySelector('nav');
nav.style = 'color: green';
const a1 = document.createElement('a');
a1.innerHTML = 'Testimonials';
nav.prepend(a1);
const a2 = document.createElement('a')
nav.appendChild(a2);
a2.innerHTML = 'Resources';
const newNav = document.querySelectorAll('nav a');
for (let link of newNav) {
  link.style = 'color: green';
}