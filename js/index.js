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


// const nav = document.querySelector('header');
// const cta = document.querySelector('cta');
// const mainContent = document.querySelector('main-content');
// const contact = document.querySelector('contact');
// const footer = document.querySelector('footer');
let anchors = document.querySelectorAll("nav a");
anchors.forEach(
  (el, index) => (el.textContent = siteContent["nav"][`nav-item-${index + 1}`])
);

const ctaSection = document.querySelector('.cta');
ctaSection.style.margin = "5%";


//CTA Button text
const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = "Dom Is Awesome";

//CTA Button text
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = "Get Started";

//CTA Image
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', "img/header-img.png");

//Main Content headers
const headerText = document.querySelectorAll('h4');
headerText[0].textContent = siteContent['main-content']['features-h4']
headerText[1].textContent = siteContent['main-content']['about-h4']
headerText[2].textContent = siteContent['main-content']['services-h4']
headerText[3].textContent = siteContent['main-content']['product-h4']
headerText[4].textContent = siteContent['main-content']['vision-h4']

//Main Content paragraphs
const paraText = document.querySelectorAll('p');
paraText[0].textContent = siteContent['main-content']['features-content']
paraText[1].textContent = siteContent['main-content']['about-content']
paraText[2].textContent = siteContent['main-content']['services-content']
paraText[3].textContent = siteContent['main-content']['product-content']
paraText[4].textContent = siteContent['main-content']['vision-content']


const middleImg = document.querySelector('.middle-img');
middleImg.src = "img/mid-page-accent.jpg";
middleImg.alt = "Image of a code snippet."


const footerContent = document.querySelector('footer p');
footerContent.textContent = "Copyright Great Idea! 2018";
