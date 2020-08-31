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

// Example: Update ALL IMAGES ON THE WEBPAGE
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent["cta"]["img-src"])

// general website section selectors
const header = document.querySelector('header')

const contact = document.querySelector('#contact')
const footer = document.querySelector('footer')

//Navigation menu item selectors
const nav = document.querySelector('nav');
const nav1 = nav.querySelector('a:nth-of-type(1)');
const nav2 = nav.querySelector('a:nth-of-type(2)');
const nav3 = nav.querySelector('a:nth-of-type(3)');
const nav4 = nav.querySelector('a:nth-of-type(4)');
const nav5 = nav.querySelector('a:nth-of-type(5)');
const nav6 = nav.querySelector('a:nth-of-type(6)');

// Insert corrrect text into the nav
nav1.textContent = siteContent['nav']['nav-item-1'];
nav2.textContent = siteContent['nav']['nav-item-2'];
nav3.textContent = siteContent['nav']['nav-item-3'];
nav4.textContent = siteContent['nav']['nav-item-4'];
nav5.textContent = siteContent['nav']['nav-item-5'];
nav6.textContent = siteContent['nav']['nav-item-6'];


//Change the text color to green
nav1.style.color = 'lightgreen';
nav2.style.color = 'lightgreen';
nav3.style.color = 'lightgreen';
nav4.style.color = 'lightgreen';
nav5.style.color = 'lightgreen';
nav6.style.color = 'lightgreen';

// Adding additional new items into the nav

const nav7 = nav.appendChild(document.createElement('a'));
nav7.href = '#';
nav7.textContent = 'News';
nav7.style.color = 'lightgreen';

const nav8 = nav.prepend(document.createElement('a'));
nav8.href = '#';
nav8.textContent = 'Hello World';
nav8.style.color = 'lightgreen';

// Insert content for CTA Section
const cta = document.querySelector('#cta');
const ctatext = cta.querySelector('.cta-text');
const h1 = ctatext.querySelector('h1:nth-of-type(1)');
const button = ctatext.querySelector('button:nth-of-type(1)');

h1.textContent = siteContent['cta']['h1'];
button.textContent = siteContent['cta']['button'];



// Main Content Section

const maincontent = document.querySelector('#main-content')













