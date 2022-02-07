const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//These are my const for the header
const headerNav = document.querySelector("header nav");
const headerNavA = document.querySelectorAll("header nav a");
const servicesHeader = headerNav.firstChild;
const productHeader = servicesHeader.nextSibling;
const visionHeader = productHeader.nextSibling;
const featuresHeader = visionHeader.nextSibling;
const aboutHeader = featuresHeader.nextSibling;
const contactHeader = aboutHeader.nextSibling;
const headerImg = document.querySelector("header .logo");


//These are to change the class and inner text of the header
headerNavA.className = "italic";
servicesHeader.textContent = "Services";
productHeader.textContent = "Product";
visionHeader.textContent = "Vision";
featuresHeader.textContent = "Features";
aboutHeader.textContent = "About";
contactHeader.textContent = "Contact";
headerImg.src = "http://localhost:9000/img/logo.png";

//These are const for the cta section 
const ctaTextSection = document.querySelector(".cta-text");
const cta_h1 = ctaTextSection.querySelector("h1");
const cta_button = ctaTextSection.querySelector("button");
const cta_img = document.querySelector("#cta-img");

//These are to change to inner text of the cta
cta_h1.textContent = "DOM Is Awesome";
cta_button.textContent = "Get Started";
cta_img.src = "http://localhost:9000/img/cta.png";