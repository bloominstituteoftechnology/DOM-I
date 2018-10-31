const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
//
//function to ad line breaks at the end of each word
const lineBreak = (node, string) => {
  const splitString = string.split(' ');
  const newString = splitString.map(n => {
    const lBreak = document.createElement('br');
    const textNode = document.createTextNode(n);
    const appended = node.appendChild(textNode) + node.appendChild(lBreak);
  });
};

let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// selects all the a tags

let nav = document.querySelectorAll('a');
let siteContentNav = Object.values(siteContent.nav);

// loops through the a tags and assigns the correct text

for (let i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContentNav[i];
}

// main heading

let mainHeading = document.querySelector('h1');
let heading = siteContent.cta.h1;
lineBreak(mainHeading, heading);

// button

let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

let worldImg = document.querySelector('#cta-img');
worldImg.src = siteContent['cta']['img-src'];
