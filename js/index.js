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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Nav Items
let navItem = document.querySelectorAll('nav a');

navItem[0].innerText = siteContent['nav']['nav-item-1'];
navItem[1].innerText = siteContent['nav']['nav-item-2'];
navItem[2].innerText = siteContent['nav']['nav-item-3'];
navItem[3].innerText = siteContent['nav']['nav-item-4'];
navItem[4].innerText = siteContent['nav']['nav-item-5'];
navItem[5].innerText = siteContent['nav']['nav-item-6'];


// h1
let h1 = document.querySelector('h1');

h1.innerText = siteContent['cta']['h1'];


// button
let button = document.querySelector('button');

button.innerText = siteContent['cta']['button'];


// cta-img
let ctaImg = document.querySelector('#cta-img');

ctaImg.src = siteContent['cta']['img-src'];


// h4
let h4 = document.querySelectorAll('h4');

h4[0].innerText = siteContent['main-content']['features-h4'];
h4[1].innerText = siteContent['main-content']['about-h4'];
h4[2].innerText = siteContent['main-content']['services-h4'];
h4[3].innerText = siteContent['main-content']['product-h4'];
h4[4].innerText = siteContent['main-content']['vision-h4'];
h4[5].innerText = siteContent['contact']['contact-h4'];

// p
let p = document.querySelectorAll('p');

p[0].innerText = siteContent['main-content']['features-content'];
p[1].innerText = siteContent['main-content']['about-content'];
p[2].innerText = siteContent['main-content']['services-content'];
p[3].innerText = siteContent['main-content']['product-content'];
p[4].innerText = siteContent['main-content']['vision-content'];
p[5].innerText = siteContent['contact']['address'];
p[6].innerText = siteContent['contact']['phone'];
p[7].innerText = siteContent['contact']['email'];
p[8].innerText = siteContent['footer']['copyright'];



// middle-img
let middleImg = document.querySelector('#middle-img');

middleImg.src = siteContent['main-content']['middle-img-src']


// Add two items to nav

// 1. Create the element
const newNavItem1 = document.createElement('a');
const newNavItem2 = document.createElement('a');

// 2. Create a reference where you want your element to go
const mainNav = document.querySelector('header nav');

// 3. Add value to the element
newNavItem1.innerText = 'Hello';
newNavItem1.href = '#';
newNavItem1.style.color = 'green';

newNavItem2.innerText = 'Hola';
newNavItem2.href = '#';
newNavItem2.style.color = 'green';

// 4. Append or prepend the new element to the parent reference
mainNav.appendChild(newNavItem1);
mainNav.prepend(newNavItem2);


// Change color of nav text
for (let i = 0; i < navItem.length; i++) {
  navItem[i].style.color = 'green';
}



