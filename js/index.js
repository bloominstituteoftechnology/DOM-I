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

// function for specificBreak in a string
const specificBreak = (node, string, position) => {
  const splitString = string.split(' ');
  let newString = [];
  const lBreak = document.createElement('br');
  for (let i = 0; i < splitString.length; i++) {
    const textNode = document.createTextNode(splitString[i] + ' ');
    if (i === position) {
      newString.push(node.appendChild(textNode) + node.appendChild(lBreak));
    } else {
      newString.push(node.appendChild(textNode));
    }
  }
};

// function to loop through the content arrays

const loop = (arr, index, content) => {
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      return (arr[i].textContent = content);
    }
  }
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

const htmlNav = document.querySelector('nav');
const news = document.createElement('a');
news.textContent = 'News';
const signUp = document.createElement('a');
signUp.textContent = 'Sign Up Now';

htmlNav.appendChild(signUp);
htmlNav.prepend(news);
// main heading

let mainHeading = document.querySelector('h1');
let heading = siteContent.cta.h1;
lineBreak(mainHeading, heading);

// button

let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

let worldImg = document.querySelector('#cta-img');
worldImg.src = siteContent['cta']['img-src'];

const headingsH4 = document.querySelectorAll('h4');
const mainContentParagraphs = document.querySelectorAll('p');

// accessing and setting the headings

loop(headingsH4, 0, siteContent['main-content']['features-h4']);
loop(headingsH4, 1, siteContent['main-content']['about-h4']);
loop(headingsH4, 2, siteContent['main-content']['services-h4']);
loop(headingsH4, 3, siteContent['main-content']['product-h4']);
loop(headingsH4, 4, siteContent['main-content']['vision-h4']);
loop(headingsH4, 5, siteContent['contact']['contact-h4']);

// accessing and setting the paragraph content

loop(mainContentParagraphs, 0, siteContent['main-content']['features-content']);
loop(mainContentParagraphs, 1, siteContent['main-content']['about-content']);
loop(mainContentParagraphs, 2, siteContent['main-content']['services-content']);
loop(mainContentParagraphs, 3, siteContent['main-content']['product-content']);
loop(mainContentParagraphs, 4, siteContent['main-content']['vision-content']);

const midImg = document.getElementById('middle-img');
midImg.src = 'img/mid-page-accent.jpg';

const contactInfo = document.querySelectorAll('.contact p');
const mainAddress = siteContent['contact']['address'];
specificBreak(contactInfo[0], mainAddress, 3);
loop(contactInfo, 1, siteContent['contact']['phone']);
loop(contactInfo, 2, siteContent['contact']['email']);

const copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer']['copyright'];
