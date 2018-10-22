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

let navA = document.querySelectorAll('a');
navA[0].textContent = 'Services';
navA[1].textContent = 'Product';
navA[2].textContent = 'Vision';
navA[3].textContent = 'Features';
navA[4].textContent = 'About';
navA[5].textContent = 'Contact';

const h1 = document.querySelector('h1');
h1.innerText = "DOM \r\n";
h1.innerText += " Is \r\n";
h1.innerText += " Awesome";
const btn = document.querySelector('button');
btn.textContent = 'Get Started';
const ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent['cta']['img-src'];

const textCon = document.getElementsByClassName('text-content');
textCon[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
textCon[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
textCon[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
textCon[1].querySelector('p').textContent = siteContent['main-content']['features-content'];
textCon[2].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
textCon[2].querySelector('p').textContent = siteContent['main-content']['services-content'];
textCon[3].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
textCon[3].querySelector('p').textContent = siteContent['main-content']['product-content'];
textCon[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
textCon[4].querySelector('p').textContent = siteContent['main-content']['vision-content'];

const mid = document.getElementById('middle-img');
mid.src = siteContent['main-content']['middle-img-src'];

const contact = document.getElementsByClassName('contact');
contact[0].querySelector('h4').textContent = siteContent['contact']['contact-h4'];
contact[0].querySelectorAll('p')[0].innerText = '123 Way 456 Street \r\n';
contact[0].querySelectorAll('p')[0].innerText += 'Somewhere, USA';
contact[0].querySelectorAll('p')[1].textContent = siteContent['contact']['phone'];
contact[0].querySelectorAll('p')[2].textContent = siteContent['contact']['email'];

const footy = document.querySelector('footer').querySelector('p');
footy.textContent = siteContent['footer']['copyright'];



const womp = document.createElement('a');
womp.textContent = 'prepended';
womp.style.color = 'orange';
womp.style.cursor = 'pointer';
const brap = document.createElement('a');
brap.textContent = 'appended';
brap.style.color = 'orange';
brap.style.cursor = 'pointer';
document.querySelector('nav').prepend(womp);
document.querySelector('nav').appendChild(brap);



//green nav text

for (let j = 0; j < navA.length; j++) {
  navA[j].style.color = 'green';
}

