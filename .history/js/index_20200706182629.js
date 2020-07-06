const siteContent = {

  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// NavBar
const navigationBar = document.querySelector('nav')
const navigationItems = navigationBar.querySelectorAll('a')
navigationItems[0].textContent = 'Services'
navigationItems[1].textContent = 'Product'
navigationItems[2].textContent = 'Vision'
navigationItems[3].textContent = 'Features'
navigationItems[4].textContent = 'About'
navigationItems[5].textContent = 'Contact'

// NavBar Logo
const logo = document.getElementById("logo-img");
logo.src = '/img/logo.png'

//title image, heading, and button
const ctaImage = document.querySelector('#cta-img')
ctaImage.src = 'img/header-img.png'
const button = document.querySelector('button')
button.textContent = 'Get Started'
const heading = document.querySelector('h1')
heading.textContent = 'DOM IS AWESOME'
const middleImage = document.querySelector('middle-img')

const
const topContentHeading = document.querySelector('h4')