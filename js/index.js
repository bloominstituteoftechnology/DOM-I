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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav links
let links = document.querySelectorAll("nav a");
console.log(links);
for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

//cta content
let catchPhrase = document.querySelector(".cta-text h1");
catchPhrase.textContent = siteContent.cta.h1;
let bigButton = document.querySelector(".cta-text button");
bigButton.textContent = siteContent.cta.button;
let codeCircle = document.querySelector(".cta img");
codeCircle.setAttribute('src', siteContent["cta"]["img-src"]);

//main content
let mainHeaders = document.querySelectorAll(".main-content h4");
let mainText = document.querySelectorAll(".main-content p");
let sections = ['features', 'about', 'services', 'product', 'vision'];
for(let i=0; i<mainHeaders.length; i++){
  mainHeaders[i].textContent = sections[i];
  mainText[i].textContent = siteContent["main-content"][`${sections[i]}-content`];
}
let middleImg = document.querySelector(".main-content img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//contact
let contactElements = document.querySelectorAll(".contact *");
let contactSections = ['contact-h4', 'address', 'phone', 'email'];
for(let i=0; i<contactElements.length; i++){
  contactElements[i].textContent = siteContent['contact'][`${contactSections[i]}`];
}

//footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;

