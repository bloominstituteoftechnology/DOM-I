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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// fill in nav links using forEach to fill in each anchor tag
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((el, i) => {
  el.textContent = siteContent.nav[`nav-item-${i}`];
  el.style.color = 'green';
})
const newLink1 = document.createElement('a');
const nav = document.querySelector('nav');
newLink1.textContent = "Prepend"
newLink1.style.color = "green"
nav.prepend(newLink1);
const newLink2 = document.createElement('a');
newLink1.textContent = "AppendChild"
newLink1.style.color = "green"
nav.appendChild(newLink1);


const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

const ctaImage = document.querySelector('.cta img');
ctaImage.src = siteContent.cta["img-src"];

const mainH4Arr = ["features-h4", "about-h4", "services-h4", "product-h4", "vision-h4"];
const mainPArr = ["features-content", "about-content", "services-content", "product-content", "vision-content"];

const mainH4 = document.querySelectorAll('.text-content h4');
mainH4.forEach((el, i) => el.textContent = siteContent["main-content"][mainH4Arr[i]]);

const mainP = document.querySelectorAll('.text-content p');
mainP.forEach((el, i) => el.textContent = siteContent["main-content"][mainPArr[i]]);

const mainImage = document.getElementById('middle-img');
mainImage.src = siteContent["main-content"]["middle-img-src"];

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact['contact-h4'];

const contactP = document.querySelectorAll('.contact p');
contactArr = ["address", "phone", "email"];
contactP.forEach((el, i) => el.textContent = siteContent.contact[contactArr[i]]);

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

