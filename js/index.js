const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: `DOM Is Awesome`,
    button: 'Get Started',
    'img-src': 'img/header-img.png'
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
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

//Images-------------------------------------------------------
const logo = document.querySelector('#logo-img');
const cta = document.querySelector('#cta-img');
const middleImg = document.querySelector('.middle-img');

logo.src = siteContent['nav']['img-src'];
cta.src = siteContent['cta']['img-src'];
middleImg.src = siteContent['main-content']['middle-img-src'];

//Content-------------------------------------------------------

const h1 = document.querySelector('h1');
const h4 = document.querySelectorAll('h4');
const p = document.querySelectorAll('p');
const navigation = document.getElementsByTagName('a');



navigation[0].textContent = siteContent['nav']['nav-item-1'];
navigation[1].textContent = siteContent['nav']['nav-item-2'];
navigation[2].textContent = siteContent['nav']['nav-item-3'];
navigation[3].textContent = siteContent['nav']['nav-item-4'];
navigation[4].textContent = siteContent['nav']['nav-item-5'];
navigation[5].textContent = siteContent['nav']['nav-item-6'];

navigation[0].style.color = 'green';
navigation[1].style.color = 'green';
navigation[2].style.color = 'green';
navigation[3].style.color = 'green';
navigation[4].style.color = 'green';
navigation[5].style.color = 'green';






h1.textContent = siteContent['cta']['h1'];



h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];
h4[5].textContent = siteContent['contact']['contact-h4'];

p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];
p[2].textContent = siteContent['main-content']['services-content'];
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];
p[5].textContent = siteContent['contact']['address'];
p[6].textContent = siteContent['contact']['phone'];
p[7].textContent = siteContent['contact']['email'];
p[8].textContent = siteContent['footer']['copyright'];

//Misc----------------------------------------------------------
const button = document.querySelector('button');

button.textContent = siteContent['cta']['button'];

const newElement1 = document.createElement('a');
const newElement2 = document.createElement('a');

newElement1.href = '#';
newElement2.href = '#';

newElement1.textContent = "Home"
newElement2.textContent = "Facebook"

navMain = document.querySelectorAll('nav');
navMain[0].prepend(newElement1);
navMain[0].append(newElement2);

navigation[0].style.color = 'green';
navigation[7].style.color = 'green';

const body

// siteContent.cta.h1.split(' ').join('<br>');