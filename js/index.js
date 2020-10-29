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

// Navigation
const navOne = document.querySelector('a');
navOne.textContent = 'Services'
const navTwo = document.querySelector('a:nth-of-type(2)')
navTwo.textContent = 'Product'
const navThree = document.querySelector('a:nth-of-type(3)')
navThree.textContent = 'Vision'
const navFour = document.querySelector('a:nth-of-type(4)')
navFour.textContent = 'Features'
const navFive = document.querySelector('a:nth-of-type(5)')
navFive.textContent = 'About'
const navSix = document.querySelector('a:nth-of-type(6)')
navSix.textContent = 'Contact'

// CTA
const h1 = document.querySelector('h1');
h1.textContent = 'DOM Is Awesome'
const button = document.querySelector('button');
button.textContent = 'Get Started'
const imgOne = document.getElementById('cta-img');
imgOne.src = 'img/header-img.png'

// Top Content
const Fh4 = document.querySelector('.text-content h4');
Fh4.textContent = 'Features'
const Ah4 = document.querySelector('.text-content:nth-of-type(2) h4');
Ah4.textContent = 'About'
const Fp = document.querySelector('.text-content p');
Fp.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
const Ap = document.querySelector('.text-content:nth-of-type(2) p');
Ap.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// Middle Image
const midImg = document.getElementById('middle-img');
midImg.src = 'img/mid-page-accent.jpg'

// Bottom Content

const Sh4 = document.querySelector('.bottom-content .text-content h4');
Sh4.textContent = 'Services'
const Ph4 = document.querySelector('.bottom-content .text-content:nth-of-type(2)').children[0]
Ph4.textContent = 'Product'
const Vh4 = document.querySelector('.bottom-content .text-content:nth-of-type(3)').children[0]
Vh4.textContent = 'Vision'
const Sp = document.querySelector('.bottom-content .text-content p');
Sp.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
const Pp = document.querySelector('.bottom-content .text-content:nth-of-type(2)').children[1]
Pp.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
const Vp = document.querySelector('.bottom-content .text-content:nth-of-type(3)').children[1]
Vp.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
//console.log(Ph4);

// Contact

const Contact = document.querySelector('.contact h4');
Contact.textContent = 'Contact'
const pOne = document.querySelector('.contact p');
pOne.textContent = '123 Way 456 Street Somewhere, USA'
const pTwo = document.querySelector('.contact').children[2];
pTwo.textContent = '1 (888) 888-8888'
const pThree = document.querySelector('.contact').children[3];
pThree.textContent = 'sales@greatidea.io'

// Footer

const Footer = document.querySelector('footer p');
Footer.textContent = 'Copyright Great Idea! 2018'

//Append/Prepend

const Nav = document.querySelector('nav');
const Invest = document.createElement('a');
Invest.textContent = 'Invest'
const FreeTrial = document.createElement('a');
FreeTrial.textContent = 'Free Trial'
Nav.appendChild(Invest);
Nav.prepend(FreeTrial);

// Stretch

const html = document.querySelector('html')
html.style.backgroundColor = 'lightblue'