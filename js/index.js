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

// let newVariable = querySelector`/All`('selector')
// newVariable.textContent = siteContent.property[childProperty]


// Start

let navLinks = document.getElementsByTagName('a');

//using [index] to establish an order of items on the same tag. since otherwise identical there is no need to create a new variable fo reach one.

navLinks[0].textContent = siteContent.nav['nav-item-1'];
navLinks[1].textContent = siteContent.nav['nav-item-2'];
navLinks[2].textContent = siteContent.nav['nav-item-3'];
navLinks[3].textContent = siteContent.nav['nav-item-4'];
navLinks[4].textContent = siteContent.nav['nav-item-5'];
navLinks[5].textContent = siteContent.nav['nav-item-6'];

/* create a new variable to grab the entire nav tag so that you can prepend and append to it! */
let nav = document.querySelector('nav');

//TASK 3
for (let link of navLinks) {
  link.style.color = 'green';
};
let firstNewNav = document.createElement('a');
firstNewNav.textContent = 'Schedule';
firstNewNav.style.color = 'green';

let lastNewNav = document.createElement('a');
lastNewNav.textContent = 'Kitty!';
lastNewNav.style.color = 'green';

nav.prepend(firstNewNav);
nav.appendChild(lastNewNav);

//CTA-TEXT header and button

let ctaHead = document.querySelector('.cta-text h1');
ctaHead.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];
ctaButton.style.backgroundColor = 'grey';

//CTA IMAGE

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//Main Content
let mainContent = document.querySelector('.main-content');

  //first h4 and p tag
  mainContent.getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];
  mainContent.getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];

  //Second h4 and p tag
  mainContent.getElementsByTagName('h4')[1].textContent = siteContent['main-content']['about-h4'];
  mainContent.getElementsByTagName('p')[1].textContent = siteContent['main-content']['about-content'];

  //img Break
  let mainImg = document.getElementById('middle-img');
  mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

  //Third h4 and p tag
  mainContent.getElementsByTagName('h4')[2].textContent = siteContent['main-content']['services-h4'];
  mainContent.getElementsByTagName('p')[2].textContent = siteContent['main-content']['services-content'];

  //Fourth h4 and p tag
  mainContent.getElementsByTagName('h4')[3].textContent = siteContent['main-content']['product-h4'];
  mainContent.getElementsByTagName('p')[3].textContent = siteContent['main-content']['product-content'];

  //Fifth h4 and p tag
  mainContent.getElementsByTagName('h4')[4].textContent = siteContent['main-content']['vision-h4'];
  mainContent.getElementsByTagName('p')[4].textContent = siteContent['main-content']['vision-content'];

//CONTACT

let contact = document.querySelector('.contact');

contact.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];

contact.getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];

contact.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];

contact.getElementsByTagName('p')[2].textContent = siteContent['contact']['email'];

//Footer
let foot = document.querySelector('footer p');
foot.textContent = siteContent.footer['copyright'];

//STRETCH GOAL STYLING

// nav.style.backgroundColor = 'black';

// mainContent.style.backgroundColor = 'black';
// mainContent.style.color = '#7CEFFF';

// foot.style.backgroundColor = 'black';
// foot.style.color = '#E97CFF';
