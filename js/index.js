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
    h1: 'DOM<br> Is<br> Awesome',
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
    address: '123 Way 456 Street<br> Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector('#logo-img');
logo.src = siteContent.nav['img-src'];

let nav = document.querySelectorAll('a');
nav[0].innerText = siteContent.nav['nav-item-1'];
nav[1].innerText = siteContent.nav['nav-item-2'];
nav[2].innerText = siteContent.nav['nav-item-3'];
nav[3].innerText = siteContent.nav['nav-item-4'];
nav[4].innerText = siteContent.nav['nav-item-5'];
nav[5].innerText = siteContent.nav['nav-item-6'];

// let headCTA = document.querySelector('#cta-text');

let title = document.querySelector('h1');
title.innerHTML = siteContent.cta.h1;

let btn = document.querySelector('button');
btn.innerText = siteContent.cta.button;

let headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent.cta['img-src'];

let mainContent = document.querySelector('#main-content');

let topContent = document.querySelector('.top-content');

let topContentItems = topContent.querySelectorAll('.text-content');
let featuresH4 = topContentItems[0].querySelector('h4');
let featuresP = topContentItems[0].querySelector('p');
featuresH4.innerText = siteContent['main-content']['features-h4'];
featuresP.innerText = siteContent['main-content']['features-content'];

let aboutH4 = topContentItems[1].querySelector('h4');
let aboutP = topContentItems[1].querySelector('p');
aboutH4.innerText = siteContent['main-content']['about-h4'];
aboutP.innerText = siteContent['main-content']['about-content'];

let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

let bottomContent = document.querySelector('.bottom-content');
let bottomContentItems = bottomContent.querySelectorAll('.text-content');
let servicesH4 = bottomContentItems[0].querySelector('h4');
console.log(servicesH4);
let servicesP = bottomContentItems[0].querySelector('p');
servicesH4.innerText = siteContent['main-content']['services-h4'];
servicesP.innerText = siteContent['main-content']['services-content'];

let productH4 = bottomContentItems[1].querySelector('h4');
let productP = bottomContentItems[1].querySelector('p');
productH4.innerText = siteContent['main-content']['product-h4'];
productP.innerText = siteContent['main-content']['product-content'];

let visionH4 = bottomContentItems[2].querySelector('h4');
let visionP = bottomContentItems[2].querySelector('p');
visionH4.innerText = siteContent['main-content']['vision-h4'];
visionP.innerText = siteContent['main-content']['vision-content'];

let contactInfo = document.querySelector('.contact');
let contactH4 = contactInfo.querySelector('h4');
contactH4.innerText = siteContent.contact['contact-h4'];

let contactInfoItems = contactInfo.querySelectorAll('p');
contactInfoItems[0].innerHTML = siteContent.contact.address;
contactInfoItems[1].innerText = siteContent.contact.phone;
contactInfoItems[2].innerText = siteContent.contact.email;

let foot = document.querySelector('footer');
let footP = foot.querySelector('p');
footP.innerText = siteContent.footer.copyright;
