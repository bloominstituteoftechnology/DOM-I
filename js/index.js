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

const mainNav = document.querySelectorAll('nav a');
mainNav[0].textContent = siteContent.nav['nav-item-1'];
mainNav[1].textContent = siteContent.nav['nav-item-2'];
mainNav[2].textContent = siteContent.nav['nav-item-3'];
mainNav[3].textContent = siteContent.nav['nav-item-4'];
mainNav[4].textContent = siteContent.nav['nav-item-5'];
mainNav[5].textContent = siteContent.nav['nav-item-6'];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const mainH1 = document.querySelector('h1');
mainH1.textContent = siteContent.cta['h1'];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

const mainSectionH4 = document.querySelectorAll('.main-content h4');
mainSectionH4[0].textContent = siteContent["main-content"]['features-h4'];
mainSectionH4[1].textContent = siteContent["main-content"]['about-h4'];
mainSectionH4[2].textContent = siteContent["main-content"]['services-h4'];
mainSectionH4[3].textContent = siteContent["main-content"]['product-h4'];
mainSectionH4[4].textContent = siteContent["main-content"]['vision-h4'];


const mainSectionP = document.querySelectorAll('.main-content p');
mainSectionP[0].textContent = siteContent["main-content"]['features-content'];
mainSectionP[1].textContent = siteContent["main-content"]['about-content'];
mainSectionP[2].textContent = siteContent["main-content"]['services-content'];
mainSectionP[3].textContent = siteContent["main-content"]['product-content'];
mainSectionP[4].textContent = siteContent["main-content"]['vision-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]['middle-img-src'];

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent.contact['address'];
contactInfo[1].textContent = siteContent.contact['phone'];
contactInfo[2].textContent = siteContent.contact['email'];

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer['copyright'];

// Change color of nav items
for (let i = 0; i < mainNav.length; i++) {
  mainNav[i].style.color = 'green';
}

const newNavElement = document.createElement('a');
newNavElement.textContent = 'Welcome';

const newNavElementTwo = document.createElement('a');
newNavElementTwo.textContent = 'Home';


const nav = document.querySelector('nav');

nav.prepend(newNavElement);
nav.prepend(newNavElementTwo);