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
    "h1": "DOM<br>Is<br>Awesome",
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
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// header
const nav = document.querySelector('nav');
const navAnchors = nav.querySelectorAll('a');

navAnchors[0].setAttribute('style', 'color: green');
navAnchors[1].setAttribute('style', 'color: green');
navAnchors[2].setAttribute('style', 'color: green');
navAnchors[3].setAttribute('style', 'color: green');
navAnchors[4].setAttribute('style', 'color: green');
navAnchors[5].setAttribute('style', 'color: green');

navAnchors[0].innerHTML = siteContent['nav']['nav-item-1'];
navAnchors[1].innerHTML = siteContent['nav']['nav-item-2'];
navAnchors[2].innerHTML = siteContent['nav']['nav-item-3'];
navAnchors[3].innerHTML = siteContent['nav']['nav-item-4'];
navAnchors[4].innerHTML = siteContent['nav']['nav-item-5'];
navAnchors[5].innerHTML = siteContent['nav']['nav-item-6'];

const homeAnchor = document.createElement('a');
homeAnchor.innerText = 'Home';
homeAnchor.setAttribute('href', '#');
homeAnchor.setAttribute('style', 'color: green');
nav.prepend(homeAnchor);

const blogAnchor = document.createElement('a');
blogAnchor.innerText = 'Blog';
blogAnchor.setAttribute('href', '#');
blogAnchor.setAttribute('style', 'color: green');
nav.appendChild(blogAnchor);

const navLogo = document.getElementById('logo-img');
navLogo.setAttribute('src', siteContent['nav']['img-src']);

// cta
const ctaText = document.querySelector('.cta-text');
const ctaH1 = ctaText.querySelector('h1');
const ctaButton = ctaText.querySelector('button');

ctaH1.innerHTML = siteContent['cta']['h1'];
ctaButton.innerHTML = siteContent['cta']['button'];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// top-content
const topContent = document.querySelector('.top-content');
const topTextContent = topContent.querySelectorAll('.text-content');
const featuresH4 = topTextContent[0].querySelector('h4');
const featuresP = topTextContent[0].querySelector('p');
const aboutH4 = topTextContent[1].querySelector('h4');
const aboutP = topTextContent[1].querySelector('p');

featuresH4.innerHTML = siteContent['main-content']['features-h4'];
featuresP.innerHTML = siteContent['main-content']['features-content'];
aboutH4.innerHTML = siteContent['main-content']['about-h4'];
aboutP.innerHTML = siteContent['main-content']['about-content'];

// middle-img
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// bottom-content
const bottomContent = document.querySelector('.bottom-content');
const bottomTextContent = bottomContent.querySelectorAll('.text-content');
const servicesH4 = bottomTextContent[0].querySelector('h4');
const servicesP = bottomTextContent[0].querySelector('p');
const productH4 = bottomTextContent[1].querySelector('h4');
const productP = bottomTextContent[1].querySelector('p');
const visionH4 = bottomTextContent[2].querySelector('h4');
const visionP = bottomTextContent[2].querySelector('p');

servicesH4.innerHTML = siteContent['main-content']['services-h4'];
servicesP.innerHTML = siteContent['main-content']['services-content'];
productH4.innerHTML = siteContent['main-content']['product-h4'];
productP.innerHTML = siteContent['main-content']['product-content'];
visionH4.innerHTML = siteContent['main-content']['vision-h4'];
visionP.innerHTML = siteContent['main-content']['vision-content'];

// contact
const contact = document.querySelector('.contact');
const contactH4 = contact.querySelector('h4');
const contactPs = contact.querySelectorAll('p');

contactH4.innerHTML = siteContent['contact']['contact-h4'];
contactPs[0].innerHTML = siteContent['contact']['address'];
contactPs[1].innerHTML = siteContent['contact']['phone'];
contactPs[2].innerHTML = siteContent['contact']['email'];

// footer
const footer = document.querySelector('footer');
const footerP = footer.querySelector('p');
footerP.innerHTML = siteContent['footer']['copyright'];
