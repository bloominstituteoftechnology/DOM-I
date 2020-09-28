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

const nav = document.querySelectorAll('nav a');

nav.forEach((item, index) => {
  item.textContent = siteContent.nav[`nav-item-${index + 1}`];
})

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent.cta["img-src"];

const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

const firstBlockH1 = document.querySelector('.main-content .top-content .text-content:nth-child(1) h4');
firstBlockH1.textContent = siteContent["main-content"]["features-h4"];

const firstBlockp = document.querySelector('.main-content .top-content .text-content:nth-child(1) p');
firstBlockp.textContent = siteContent["main-content"]["features-content"];

const secondBlockH1 = document.querySelector('.main-content .top-content .text-content:nth-child(2) h4');
secondBlockH1.textContent = siteContent["main-content"]["about-h4"];

const secondBlockp = document.querySelector('.main-content .top-content .text-content:nth-child(2) p');
secondBlockp.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

const bottomFirstBlockH1 = document.querySelector('.main-content .bottom-content .text-content:nth-child(1) h4');
bottomFirstBlockH1.textContent = siteContent["main-content"]["services-h4"];

const bottomFirstBlockp = document.querySelector('.main-content .bottom-content .text-content:nth-child(1) p');
bottomFirstBlockp.textContent = siteContent["main-content"]["services-content"];

const bottomSecondBlockH1 = document.querySelector('.main-content .bottom-content .text-content:nth-child(2) h4');
bottomSecondBlockH1.textContent = siteContent["main-content"]["product-h4"];

const bottomSecondBlockp = document.querySelector('.main-content .bottom-content .text-content:nth-child(2) p');
bottomSecondBlockp.textContent = siteContent["main-content"]["product-content"];

const bottomThirdBlockH1 = document.querySelector('.main-content .bottom-content .text-content:nth-child(3) h4');
bottomThirdBlockH1.textContent = siteContent["main-content"]["vision-h4"];

const bottomThirdBlockp = document.querySelector('.main-content .bottom-content .text-content:nth-child(3) p');
bottomThirdBlockp.textContent = siteContent["main-content"]["vision-content"];

const contactH1 = document.querySelector('.contact h4');
contactH1.textContent = siteContent.contact["contact-h4"]

const contactPOne = document.querySelector('.contact p:nth-child(2)');
contactPOne.textContent = siteContent.contact.address;

const contactPTwo = document.querySelector('.contact p:nth-child(3)');
contactPTwo.textContent = siteContent.contact.phone;

const contactPThree = document.querySelector('.contact p:nth-child(4)');
contactPThree.textContent = siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

// Add two nav items
let newNavOne = document.createElement('a');
newNavOne.href = "#";
newNavOne.textContent = "Blog";

let newNavTwo = document.createElement('a');
newNavTwo.href = "#";
newNavTwo.textContent = "Shop";

const theNav = document.querySelector('nav');
theNav.appendChild(newNavOne);
theNav.prepend(newNavTwo);

let theNewNav = document.querySelectorAll('nav a');

theNewNav.forEach((item, index) => {
  item.style.color = 'green';
})