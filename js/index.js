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
    "h1": "DOM <br>Is <br>Awesome",
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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//my stuff
//navs
let navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(nav => nav.style.color = 'green');
navLinks.forEach((nav, pos) => nav.innerText = siteContent.nav[`nav-item-${pos+1}`]);

//cta
let ctaBox = document.querySelector('.cta .cta-text');
ctaBox.querySelector('h1').innerHTML = siteContent.cta.h1;
ctaBox.querySelector('button').innerText = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main-content
//top content
let topContentBoxes = document.querySelectorAll('.main-content .top-content .text-content');
topContentBoxes[0].querySelector('h4').innerText = siteContent['main-content']['features-h4'];
topContentBoxes[0].querySelector('p').innerText = siteContent['main-content']['features-content'];
topContentBoxes[1].querySelector('h4').innerText = siteContent['main-content']['about-h4'];
topContentBoxes[1].querySelector('p').innerText = siteContent['main-content']['about-content'];

//create a new div, give it the class .text-content, create a header and paragraph, set their text,
//give new paragraph some padding, append header and paragrah to new div, prepend div to .top-content
let newTextBox = document.createElement('div');
newTextBox.className = 'text-content';
let newTextBoxHeader = document.createElement('h4');
let newTextBoxPara = document.createElement('p');
newTextBoxHeader.innerText = 'Sample';
newTextBoxPara.innerText = 'Sample content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
newTextBoxPara.style.paddingRight = '20px';
newTextBox.appendChild(newTextBoxHeader);
newTextBox.appendChild(newTextBoxPara);
document.querySelector('.main-content .top-content').prepend(newTextBox);

//give the other text-content p's some padding as well.
topContentBoxes.forEach(box => box.querySelector('p').style.paddingRight = '20px');


let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom content
let bottomContentBoxes = document.querySelectorAll('.main-content .bottom-content .text-content');
bottomContentBoxes[0].querySelector('h4').innerText = siteContent['main-content']['services-h4'];
bottomContentBoxes[0].querySelector('p').innerText = siteContent['main-content']['services-content'];
bottomContentBoxes[1].querySelector('h4').innerText = siteContent['main-content']['product-h4'];
bottomContentBoxes[1].querySelector('p').innerText = siteContent['main-content']['product-content'];
bottomContentBoxes[2].querySelector('h4').innerText = siteContent['main-content']['vision-h4'];
bottomContentBoxes[2].querySelector('p').innerText = siteContent['main-content']['vision-content'];

//Contact
let contactEl = document.querySelector('.contact');
contactEl.querySelector('h4').innerText = siteContent['contact']['contact-h4'];
let contactParas = contactEl.querySelectorAll('p');
contactParas[0].innerHTML = siteContent['contact']['address'];
contactParas[1].innerText = siteContent['contact']['phone'];
contactParas[2].innerText = siteContent['contact']['email'];

//footer
let footerP = document.querySelector('footer p');
footerP.innerText = siteContent.footer.copyright;

let newFooterP = document.createElement('p');
newFooterP.innerText = 'DOM is Great, Inc.';
document.querySelector('footer').append(newFooterP);
