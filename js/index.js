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


const navItem = document.querySelectorAll('a')
navItem[0].textContent = 'Services';
navItem[1].textContent = 'Product';
navItem[2].textContent = 'Vision';
navItem[3].textContent = 'Features';
navItem[4].textContent = 'About';
navItem[5].textContent = 'Contact';

navItem[0].style.color = 'green';
navItem[1].style.color = 'green';
navItem[2].style.color = 'green';
navItem[3].style.color = 'green';
navItem[4].style.color = 'green';
navItem[5].style.color = 'green';

const itemsLink = document.createElement('a');
itemsLink.textContent = 'Home';
itemsLink.href = "#";
itemsLink.style.color = 'green';
document.querySelector('nav').appendChild(itemsLink);

const colorHome = document.querySelector('a');

const itemsLink1 = document.createElement('a');
itemsLink1.textContent = 'Blog';
itemsLink.href = "#";
itemsLink1.style.color = 'green';
document.querySelector('nav').appendChild(itemsLink1);

const headText = document.querySelector('h1');
headText.textContent = 'Dom Is Awasome';
headText.style.display = 'space-between';
const buttonText = document.querySelector('button');
buttonText.textContent = 'Get Started';

const headerImg = document.getElementById('cta-img');
headerImg.src = 'img/header-img.png';

const middleTittle = document.querySelectorAll('h4');
middleTittle[0].textContent = 'FEATURES'
middleTittle[1].textContent = 'ABOUT';
middleTittle[2].textContent = 'SERVICES';
middleTittle[3].textContent = 'PRODUCT'
middleTittle[4].textContent = 'VISION';
middleTittle[5].textContent = 'Contact';



const navDescription = document.querySelectorAll('.text-content p');
navDescription[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
navDescription[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
navDescription[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
navDescription[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
navDescription[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const middleImg = document.getElementById('middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

const footerText = document.querySelectorAll('.contact p');
footerText[0].textContent = '123 Way 456 Street Somewhere, USA'
footerText[1].textContent = '1 (888) 888-8888'
footerText[2].textContent = 'sales@greatidea.io'

const footer = document.querySelector('footer p');
footer.textContent = 'Copyright Great Idea! 2018'