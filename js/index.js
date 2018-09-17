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

// let domisawesome = siteContent['cta']['h1'].split(' ');
// console.log(domisawesome);

// Example: Update the img src for the logo
function addNavItems(itemName, text, url, insertWhere) {
  itemName.innerText = text;
  itemName.href = url;
  itemName.style.color = 'green';
  if (insertWhere.toLowerCase() === 'append') {
    mainNav.append(itemName);
  } else if (insertWhere.toLowerCase() === 'prepend') {
    mainNav.prepend(itemName);
  } else {
    console.log('invalid input.');
  }
}

let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let mainNav = document.querySelector('header nav');
let navItems = document.querySelectorAll('header nav a');
navItems.forEach((item, i) => item.innerText = siteContent['nav'][`nav-item-${i+1}`]);
navItems.forEach(item => item.style.color = 'green');

let home = document.createElement('a');
addNavItems(home, 'Home', '#', 'prepend');

let dom = document.createElement('a');
const domURL = 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model';
addNavItems(dom, 'DOM', domURL, 'append');
dom.target = '_blank';

let cta = document.querySelector('.cta');
let ctaText = document.querySelector('.cta-text h1');
let ctaBtn = document.querySelector('.cta-text button');
let ctaImg = document.getElementById('cta-img');
let ctaWords = siteContent['cta']['h1'].split(' ');
cta.style.alignItems = 'center';
ctaWords.forEach(word => ctaText.innerHTML += `${word}<br>`);
ctaBtn.innerText = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];

let firstCTAImg = siteContent['cta']['img-src'];
let secondCTAImg = 'https://upload.wikimedia.org/wikipedia/commons/f/fa/718smiley.png';
ctaImg.addEventListener('click', function(){
  if (ctaImg.src == secondCTAImg) {
    ctaImg.src = firstCTAImg;
  } else {
    ctaImg.src = secondCTAImg;
    ctaImg.style.width = '43%';
  }
});


let topContent = document.querySelector('.main-content .top-content');
let featuresH4 = topContent.children[0].children[0];
let featuresContent = topContent.children[0].children[1];
featuresH4.innerText = siteContent['main-content']['features-h4'];
featuresContent.innerText = siteContent['main-content']['features-content'];

let aboutH4 = topContent.children[1].children[0];
let aboutContent = topContent.children[1].children[1];
aboutH4.innerText = siteContent['main-content']['about-h4'];
aboutContent.innerText = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

let firstMidImg = siteContent['main-content']['middle-img-src'];
let secondMidImg = 'https://cdn-images-1.medium.com/max/1600/1*OF0xEMkWBv-69zvmNs6RDQ.gif';
middleImg.addEventListener('click', function() {
  if (middleImg.src == secondMidImg) {
    middleImg.src = firstMidImg;
  } else {
    middleImg.src = secondMidImg;
    middleImg.style.width = '100%';
  }
});

let bottomContent = document.querySelector('.main-content .bottom-content');
let servicesH4 = bottomContent.children[0].children[0];
let servicesContent = bottomContent.children[0].children[1];
servicesH4.innerText = siteContent['main-content']['services-h4'];
servicesContent.innerText = siteContent['main-content']['services-content'];

let productH4 = bottomContent.children[1].children[0];
let productContent = bottomContent.children[1].children[1];
productH4.innerText = siteContent['main-content']['product-h4'];
productContent.innerText = siteContent['main-content']['product-content'];

let visionH4 = bottomContent.children[2].children[0];
let visionContent = bottomContent.children[2].children[1];
visionH4.innerText = siteContent['main-content']['vision-h4'];
visionContent.innerText = siteContent['main-content']['vision-content'];

let contact = document.querySelector('.contact');
let contactH4 = contact.children[0];
let contactAddress = contact.children[1];
let contactNumber = contact.children[2];
let contactEmail = contact.children[3];
contactH4.innerText = siteContent['contact']['contact-h4'];
contactAddress.innerText = siteContent['contact']['address'];
contactNumber.innerText = siteContent['contact']['phone'];
contactEmail.innerText = siteContent['contact']['email'];

let footerText = document.querySelector('footer p');
footerText.innerText = siteContent['footer']['copyright'];
