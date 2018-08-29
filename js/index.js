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
    h1: 'DOM Is Awesome',
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

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// turn the JSON data into an array
let navTextArr = Object.values(siteContent.nav);

// since the JSON data has the image in it, we can pop it out of the array.
navTextArr.pop();
console.log(navTextArr);

// create a new 'a' tag with HTML and add the HTML string to the new array using 'unshift'
let secondNavItem = document.createElement('a');
secondNavItem.setAttribute('href', 'second');
secondNavItem.innerHTML = 'Second Item';
document.querySelector('nav').prepend(secondNavItem);
navTextArr.unshift(secondNavItem.innerHTML);
console.log(navTextArr);

// create a new 'a' tag with HTML and add the HTML string to the new array using 'unshift'
let firstNavItem = document.createElement('a');
firstNavItem.setAttribute('href', 'first');
firstNavItem.innerHTML = 'First Item';
document.querySelector('nav').prepend(firstNavItem);
navTextArr.unshift(firstNavItem.innerHTML);
console.log(navTextArr);

// create a new 'a' tag with HTML and push it into the new array
let lastNavItem = document.createElement('a');
lastNavItem.setAttribute('href', 'last');
lastNavItem.innerHTML = 'Last Item';
document.querySelector('nav').appendChild(lastNavItem);
navTextArr.push(lastNavItem.innerHTML);
console.log(navTextArr);

let nav = document.querySelectorAll('nav a');
nav.forEach(item => (item.style.color = 'limegreen'));

for (let i = 0; i < nav.length; i++) {
  nav[i].innerHTML = navTextArr[i];
}

// for (let i = 0; i < nav.length - 2; i++) {
//   nav[i + 1].innerHTML = siteContent.nav[`nav-item-${i + 1}`];
// }

// let nav1 = document.querySelectorAll('nav a')[1];
// nav1.innerHTML = siteContent.nav['nav-item-1'];

// let nav2 = document.querySelectorAll('nav a')[2];
// nav2.innerHTML = siteContent.nav['nav-item-2'];

// let nav3 = document.querySelectorAll('nav a')[3];
// nav3.innerHTML = siteContent.nav['nav-item-3'];

// let nav4 = document.querySelectorAll('nav a')[4];
// nav4.innerHTML = siteContent.nav['nav-item-4'];

// let nav5 = document.querySelectorAll('nav a')[5];
// nav5.innerHTML = siteContent.nav['nav-item-5'];

// let nav6 = document.querySelectorAll('nav a')[6];
// nav6.innerHTML = siteContent.nav['nav-item-6'];

let h1 = document.querySelector('.cta-text h1');
siteContent.cta.h1 = 'DOM<br>Is<br>Awesome';
h1.innerHTML = siteContent.cta.h1;

let btn = document.querySelector('button');
btn.innerHTML = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let featuresH4 = document.querySelectorAll('.text-content h4')[0];
featuresH4.innerHTML = siteContent['main-content']['features-h4'];

let featuresP = document.querySelectorAll('.text-content p')[0];
featuresP.innerHTML = siteContent['main-content']['features-content'];

let aboutH4 = document.querySelectorAll('.text-content h4')[1];
aboutH4.innerHTML = siteContent['main-content']['about-h4'];

let aboutP = document.querySelectorAll('.text-content p')[1];
aboutP.innerHTML = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesH4 = document.querySelectorAll('.text-content h4')[2];
servicesH4.innerHTML = siteContent['main-content']['services-h4'];

let servicesP = document.querySelectorAll('.text-content p')[2];
servicesP.innerHTML = siteContent['main-content']['services-content'];

let productH4 = document.querySelectorAll('.text-content h4')[3];
productH4.innerHTML = siteContent['main-content']['product-h4'];

let productP = document.querySelectorAll('.text-content p')[3];
productP.innerHTML = siteContent['main-content']['product-content'];

let visionH4 = document.querySelectorAll('.text-content h4')[4];
visionH4.innerHTML = siteContent['main-content']['vision-h4'];

let visionP = document.querySelectorAll('.text-content p')[4];
visionP.innerHTML = siteContent['main-content']['vision-content'];

let contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent.contact['contact-h4'];

let contactAddress = document.querySelectorAll('.contact p')[0];
contactAddress.innerHTML = siteContent.contact.address;

let contactPhone = document.querySelectorAll('.contact p')[1];
contactPhone.innerHTML = siteContent.contact.phone;

let contactEmail = document.querySelectorAll('.contact p')[2];
contactEmail.innerHTML = siteContent.contact.email;

let footerP = document.querySelector('footer p');
footerP.innerHTML = siteContent.footer.copyright;
