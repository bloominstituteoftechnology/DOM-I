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
    h1: 'DOM <br> Is <br> Awesome',
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
    address: '123 Way 456 Street <br> Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Set up navigation
const aNav = document.querySelectorAll('nav a');
aNav.forEach(function(item, index) {
  return (item.innerHTML = siteContent.nav['nav-item-' + (index + 1)]);
});

// Create new Nav items
const blogNav = document.createElement('a');
const randomNav = document.createElement('a');
const nav = document.getElementsByTagName('nav')[0];
nav.append(blogNav);
nav.prepend(randomNav);
blogNav.innerText = 'Blog';
randomNav.innerText = 'Random';

// Change nav font color
//// target all a and change color
const attr = document.querySelectorAll('a');
attr.forEach((item) => {
  item.style.color = 'green';
});

// Set up CTA
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta['img-src']);
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent['cta']['h1'];
const ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

// Set up top-content of main-content
//// Target text-content in top-content class
const topContentElements = document
  .getElementsByClassName('top-content')[0]
  .getElementsByClassName('text-content');

const topContentFirstTextContent = topContentElements[0];
topContentFirstTextContent.querySelector('h4').innerHTML =
  siteContent['main-content']['features-h4'];
topContentFirstTextContent.querySelector('p').innerHTML =
  siteContent['main-content']['features-content'];

const topContentSecondTextContent = topContentElements[1];
topContentSecondTextContent.querySelector('h4').innerHTML =
  siteContent['main-content']['about-h4'];
topContentSecondTextContent.querySelector('p').innerHTML =
  siteContent['main-content']['about-content'];

// Set up img of main-content
const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Set up bottom-content of main-content
//// Target text-content in bot-content  class
const botContentElements = document
  .getElementsByClassName('bottom-content')[0]
  .getElementsByClassName('text-content');

const botContentFirstTextContent = botContentElements[0];
botContentFirstTextContent.querySelector('h4').innerHTML =
  siteContent['main-content']['services-h4'];
botContentFirstTextContent.querySelector('p').innerHTML =
  siteContent['main-content']['services-content'];

const botContentSecondTextContent = botContentElements[1];
botContentSecondTextContent.querySelector('h4').innerHTML =
  siteContent['main-content']['product-h4'];
botContentSecondTextContent.querySelector('p').innerHTML =
  siteContent['main-content']['product-content'];

const botContentThirdTextContent = botContentElements[2];
botContentThirdTextContent.querySelector('h4').innerHTML =
  siteContent['main-content']['vision-h4'];
botContentThirdTextContent.querySelector('p').innerHTML =
  siteContent['main-content']['vision-content'];

// Set up contact section
const contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent['contact']['contact-h4'];
const contactAddress = document
  .querySelector('.contact')
  .getElementsByTagName('p')[0];
contactAddress.innerHTML = siteContent['contact']['address'];
const contactPhone = document
  .querySelector('.contact')
  .getElementsByTagName('p')[1];
contactPhone.innerHTML = siteContent['contact']['phone'];
const contactEmail = document
  .querySelector('.contact')
  .getElementsByTagName('p')[2];
contactEmail.innerHTML = siteContent['contact']['email'];

// Set up footer
const footerInfo = document.querySelector('footer p');
footerInfo.innerHTML = siteContent['footer']['copyright'];

// Update styles
document.querySelector('header').style.borderBottom = '1px solid black';
attr.forEach((item) => (item.style.background = 'lightgrey'));
document.querySelector('.cta-text').style.cssText =
  'color: red; background: yellow; border: 2px dashed black; border-radius: 50%';
