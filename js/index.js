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

const navigation = document.querySelectorAll('a');
navigation[0].textContent = 'Services'
navigation[1].textContent = 'Product'
navigation[2].textContent = 'Vision'
navigation[3].textContent = 'Features'
navigation[4].textContent = 'About'
navigation[5].textContent = 'Contact'

const mainPic = document.querySelector('#cta-img');
mainPic.setAttribute('src', 'img/header-img.png')

const h1 = document.querySelector('h1');
h1.textContent = 'DOM Is Awesome'

const button = document.querySelector('button');
button.textContent = 'Get Started'

const h4 = document.querySelectorAll('h4');
h4[0].textContent = 'Features'
h4[1].textContent = 'About'
h4[2].textContent = 'Services'
h4[3].textContent = 'Product'
h4[4].textContent = 'Vision'
h4[5].textContent = 'Contact'

const p = document.querySelectorAll('p');
p[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
p[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
p[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
p[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
p[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
p[5].textContent = '123 Way 456 Street Somewhere, USA'
p[6].textContent = '1 (888) 888-8888'
p[7].textContent = 'sales@greatidea.io'
p[8].textContent = 'Copyright Great Idea! 2018'

const contentPic = document.querySelector('#middle-img')
contentPic.setAttribute('src', 'img/mid-page-accent.jpg')

const parent = document.querySelector("nav");

const Link1 = document.createElement("a")
const Link2 = document.createElement("a")

Link1.textContent = 'Extra Nav 1';
Link2.textContent = 'Extra Nav 2';

parent.appendChild(Link1);
parent.prepend(Link2);

const navItems = document.querySelectorAll('a')
navItems.forEach(element => {
  element.style.color = "green";
})