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

/* This is the navigation bar code */
let navBar = document.querySelectorAll('nav a'); //selects all of the nav bar a tags.
navBar.forEach((element, i) => {
element.textContent = siteContent.nav[`nav-item-${i+1}`];
element.style.color = 'green'; //color change
});

// appendChild() or .prepend()
let navigationBar = document.querySelector('nav'); //Parent Element
let newNavItem1 = document.createElement('a');  //New Nav Item
newNavItem1.textContent = 'New Item 1'; //Text on New Nav Item
navigationBar.appendChild(newNavItem1); //Added to end of Nav Bar

let newNavItem2 = document.createElement('a') //New Nav Item
newNavItem2.textContent = 'New Item 2'; //Text on New Nav Item
navigationBar.prepend(newNavItem2); //Added to beginning of Nav Bar

/* .cta section code */
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];
//This is to try to match the style
ctaH1.style.width = '50%';
ctaH1.style.fontSize = '80px';
ctaH1.style.textAlign = 'center';

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];
ctaButton.style.marginLeft = '15%';

let ctaIMG = document.querySelector('#cta-img');
ctaIMG.setAttribute('src', siteContent['cta']['img-src']);

