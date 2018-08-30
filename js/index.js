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
// const logo = document.getElementById('logo-img');
// logo.src = siteContent.nav['img-src'];

// header
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((element, index) => element.innerText = siteContent.nav[`nav-item-${index + 1}`]);
navLinks.forEach(element => element.style = 'color: green');

const preChild = document.createElement('a');
preChild.innerText = 'Prepended';
preChild.style.color = 'green';
preChild.href = '#';
document.querySelector('nav').prepend(preChild);

const appChild = document.createElement('a');
appChild.innerText = 'Appended';
appChild.style.color = 'green';
appChild.href = '#';
document.querySelector('nav').appendChild(appChild);

document.querySelector('.logo').src = siteContent.nav['img-src'];

// cta
document.querySelector('.cta-text h1').innerHTML = siteContent.cta.h1.split(' ').join('<br>');
document.querySelector('.cta-text button').innerText = siteContent.cta.button;
document.querySelector('#cta-img').src = siteContent.cta['img-src'];

// main content
const textContent = document.querySelectorAll('.text-content h4');
const pElement = document.querySelectorAll('.text-content p');

textContent[0].innerText = siteContent['main-content']['features-h4'];
pElement[0].innerText = siteContent['main-content']['features-content'];

textContent[1].innerText = siteContent['main-content']['about-h4'];
pElement[1].innerText = siteContent['main-content']['about-content'];

document.querySelector('.middle-img').src = siteContent['main-content']['middle-img-src'];

textContent[2].innerText = siteContent['main-content']['services-h4'];
pElement[2].innerText = siteContent['main-content']['services-content'];

textContent[3].innerText = siteContent['main-content']['product-h4'];
pElement[3].innerText = siteContent['main-content']['product-content'];

textContent[4].innerText = siteContent['main-content']['vision-h4'];
pElement[4].innerText = siteContent['main-content']['vision-content'];

// contact
document.querySelector('.contact h4').innerText = siteContent.contact['contact-h4'];
const pContactElement = document.querySelectorAll('.contact p');
pContactElement[0].innerHTML = siteContent.contact.address.replace('Street', 'Street<br>');
pContactElement[1].innerText = siteContent.contact.phone;
pContactElement[2].innerText = siteContent.contact.email;

// footer
document.querySelector('footer p').innerText = siteContent.footer.copyright;