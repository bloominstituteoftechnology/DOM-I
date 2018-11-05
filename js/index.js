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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAVBAR SECTION =>
const navMenu = document.querySelectorAll('header nav a');
navMenu[0].innerHTML = 'Services';
navMenu[1].innerHTML = 'Product';
navMenu[2].innerHTML = 'Vision';
navMenu[3].innerHTML = 'Features';
navMenu[4].innerHTML = 'About';
navMenu[5].innerHTML = 'Contact';



// CREATE TWO NEW ELEMENTS =>
const newNavE = document.querySelector('nav')

const newE1 = document.createElement('a')
newE1.textContent = 'NewE1';
newE1.href = '#';
newE1.style.color = 'green';

const newE2 = document.createElement('a')
newE2.textContent = 'NewE2';
newE2.href = '#';
newE2.style.color = 'green';

newNavE.prepend(newE1);
newNavE.appendChild(newE2);


// CTA SECTION =>
const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.innerHTML = siteContent.cta['h1'];

const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent.cta['img-src']);

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = 'Get Started';

// MAIN-CONTENT SECTION =>
const midImage = document.querySelector('#middle-img');
midImage.src = siteContent['main-content']['middle-img-src'];

const midHs = document.querySelectorAll('h4');
midHs[0].innerHTML = siteContent['main-content']['features-h4'];
midHs[1].innerHTML = siteContent['main-content']['about-h4'];
midHs[2].innerHTML = siteContent['main-content']['services-h4'];
midHs[3].innerHTML = siteContent['main-content']['product-h4'];
midHs[4].innerHTML = siteContent['main-content']['vision-h4'];

const midPs = document.querySelectorAll('p');
midPs[0].innerHTML = siteContent['main-content']['features-content'];
midPs[1].innerHTML = siteContent['main-content']['about-content'];
midPs[2].innerHTML = siteContent['main-content']['services-content'];
midPs[3].innerHTML = siteContent['main-content']['product-content'];
midPs[4].innerHTML = siteContent['main-content']['vision-content'];

// CONTACT SECTION =>
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerHTML = siteContent['contact']['address'];
contactInfo[1].innerHTML = siteContent['contact']['phone'];
contactInfo[2].innerHTML = siteContent['contact']['email'];

// FOOTER SECTION =>
const foot = document.querySelector('footer p');
foot.innerHTML = siteContent['footer']['copyright'];
