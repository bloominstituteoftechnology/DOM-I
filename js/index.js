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


const topNav = document.querySelectorAll('nav a');
topNav[0].textContent = siteContent['nav']['nav-item-1']
topNav[1].textContent = siteContent['nav']['nav-item-2']
topNav[2].textContent = siteContent['nav']['nav-item-3']
topNav[3].textContent = siteContent['nav']['nav-item-4']
topNav[4].textContent = siteContent['nav']['nav-item-5']
topNav[5].textContent = siteContent['nav']['nav-item-6']


topNav[0].style.color = 'green';
topNav[1].style.color = 'green';
topNav[2].style.color = 'green';
topNav[3].style.color = 'green';
topNav[4].style.color = 'green';
topNav[5].style.color = 'green';



const firstEl = document.createElement('p')
firstEl.textContent = 'Ex 1';
const secondEl = document.createElement('p')
secondEl.textContent = 'Ex 2';

const nav = document.querySelector('nav')
nav.appendChild(firstEl)
nav.prepend(secondEl)
nav.style.color = 'green';

document.querySelector('#cta-img').src = 'img/header-img.png'

document.querySelector('div.cta-text h1').innerHTML = 'DOM <br> IS <br> AWESOME'
document.querySelector('div.cta-text button').innerText = 'Get Started'

document.querySelector('#middle-img').src = 'img/mid-page-accent.jpg'


const hFour = document.querySelectorAll('.main-content h4');
hFour[0].textContent = siteContent['main-content']['features-h4'];
hFour[1].textContent = siteContent['main-content']['about-h4'];
hFour[2].textContent = siteContent['main-content']['services-h4'];
hFour[3].textContent = siteContent['main-content']['product-h4'];
hFour[4].textContent = siteContent['main-content']['vision-h4'];

const paragraphText = document.querySelectorAll('.main-content p');
paragraphText[0].textContent = siteContent['main-content']['features-content'];
paragraphText[1].textContent = siteContent['main-content']['about-content'];
paragraphText[2].textContent = siteContent['main-content']['services-content'];
paragraphText[3].textContent = siteContent['main-content']['product-content'];
paragraphText[4].textContent = siteContent['main-content']['vision-content'];


const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = '123 Way 456 Street <br> Somewhere, USA'
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

const copyrightF = document.querySelector('footer p');
copyrightF.textContent = siteContent['footer']['copyright'];

