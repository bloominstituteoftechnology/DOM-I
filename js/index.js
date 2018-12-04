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
const logo = document.getElementById("logo-img");
//console.log(logo);
logo.setAttribute('src', siteContent["nav"]["img-src"]);
//
// Navigation //

const navCont = document.querySelector('nav');
let navLinks = document.querySelectorAll('a');

const home = document.createElement('a');
home.href = '#';
home.textContent = 'Home';
navCont.prepend(home);

const signIn = document.createElement('a');
signIn.href = '#';
signIn.textContent = 'Sign In';
navCont.append(signIn);

navLinks.forEach((a, i) => {
  a.textContent = siteContent.nav[`nav-item-${i+1}`];
  a.style.color = 'green'; //Task 4
});

navLinks = document.querySelectorAll('nav a');

navLinks.forEach(a => {
  a.style.color = 'green';
});

// CTA //

const ctaCont = document.querySelector('.cta-text');
//console.log(ctaCont);

const ctaH1 = ctaCont.children[0];
ctaH1.textContent = `${siteContent.cta.h1}`;

const ctaButton = ctaCont.children[1];
ctaButton.textContent = `${siteContent.cta.button}`

const myButton = ctaCont.children[1];
myButton.addEventListener('mouseenter', event => {
  console.log('I see you.');
});
myButton.addEventListener('mouseleave', event => {
  console.log('Smart choice.');
});
myButton.addEventListener('mousedown', event => {
  console.log('Don\'t let go of that button!');
});
myButton.addEventListener('click', event => {
  console.log('And now I\'m dead.');
});


const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

// Main-Content //

const topCont = document.querySelector('.top-content');
//console.log(topCont)
const textTCont1 = topCont.children[0];
const textTCont2 = topCont.children[1];
//console.log(textCont1)

const featuresTitle = textTCont1.children[0];
featuresTitle.textContent = `${siteContent["main-content"]["features-h4"]}`;

const featuresCont = textTCont1.children[1];
featuresCont.textContent = `${siteContent["main-content"]["features-content"]}`;

const aboutTitle = textTCont2.children[0];
aboutTitle.textContent = `${siteContent["main-content"]["about-h4"]}`;

const aboutCont = textTCont2.children[1];
aboutCont.textContent = `${siteContent["main-content"]["about-content"]}`;

const bottomCont = document.querySelector('.bottom-content');
//console.log(bottomCont);
const textBCont1 = bottomCont.children[0];
const textBCont2 = bottomCont.children[1];
const textBCont3 = bottomCont.children[2];
//console.log(textBCont3);

const servicesTitle = textBCont1.children[0];
servicesTitle.textContent = `${siteContent["main-content"]["services-h4"]}`;
const servicesCont = textBCont1.children[1];
servicesCont.textContent = `${siteContent["main-content"]["services-content"]}`;
const productTitle = textBCont2.children[0];
productTitle.textContent = `${siteContent["main-content"]["product-h4"]}`;
const productCont = textBCont2.children[1];
productCont.textContent = `${siteContent["main-content"]["product-content"]}`;
const visionTitle = textBCont3.children[0];
visionTitle.textContent = `${siteContent["main-content"]["vision-h4"]}`;
const visionCont = textBCont3.children[1];
visionCont.textContent = `${siteContent["main-content"]["vision-content"]}`;

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Contact //

const contactCont = document.querySelector('.contact');
//console.log(contactCont);
const contact1 = contactCont.children[0];
contact1.textContent = `${siteContent.contact["contact-h4"]}`;
const contact2 = contactCont.children[1];
contact2.textContent = `${siteContent.contact.address}`;
const contact3 = contactCont.children[2];
contact3.textContent = `${siteContent.contact.phone}`;
const contact4 = contactCont.children[3];
contact4.textContent = `${siteContent.contact.email}`;

// Footer //


const footer = document.querySelector('footer');
//console.log(footer);
const footCont = footer.children[0];
footCont.textContent = `${siteContent.footer.copyright}`;