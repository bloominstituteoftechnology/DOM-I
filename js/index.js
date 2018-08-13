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
// ================ IMAGES ===============================
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src'])

const codeSnippet= document.getElementById('cta-img');
codeSnippet.setAttribute('src', siteContent['cta']['img-src'])

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])



// ================ NAVIGATION =======================
const navItem1 = document.getElementsByTagName('a')[0];
navItem1.textContent = siteContent.nav['nav-item-1'];
const navItem2 = document.getElementsByTagName('a')[1];
navItem2.textContent = siteContent.nav['nav-item-2'];
const navItem3 = document.getElementsByTagName('a')[2];
navItem3.textContent = siteContent.nav['nav-item-3'];
const navItem4 = document.getElementsByTagName('a')[3];
navItem4.textContent = siteContent.nav['nav-item-4'];
const navItem5 = document.getElementsByTagName('a')[4];
navItem5.textContent = siteContent.nav['nav-item-5'];
const navItem6 = document.getElementsByTagName('a')[5];
navItem6.textContent = siteContent.nav['nav-item-6'];



// ================ CTA SECTION ======================
const newH1 = document.querySelector('h1');
newH1.textContent = siteContent['cta']['h1'];

const newButton = document.querySelector('button');
newButton.textContent = siteContent['cta']['button'];

// ================ MAIN SECTION =====================
const featuresH4 = document.querySelectorAll('h4')[0];
featuresH4.innerText = siteContent['main-content']['features-h4'];

const aboutH4 = document.querySelectorAll('h4')[1];
aboutH4.innerText = siteContent['main-content']['about-h4'];

const servicesH4 = document.querySelectorAll('h4')[2];
servicesH4.innerText = siteContent['main-content']['services-h4'];

const productH4 = document.querySelectorAll('h4')[3];
productH4.innerText = siteContent['main-content']['product-h4'];

const visionH4 = document.querySelectorAll('h4')[4];
visionH4.innerText = siteContent['main-content']['vision-h4'];