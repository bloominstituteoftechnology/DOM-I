const siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  'cta': {
    'h1': 'DOM Is Awesome',
    'button': 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4':'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4':'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4':'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4':'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4':'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4' : 'Contact',
    'address' : '123 Way 456 Street Somewhere, USA',
    'phone' : '1 (888) 888-8888',
    'email' : 'sales@greatidea.io',
  },
  'footer': {
    'copyright' : 'Copyright Great Idea! 2018'
  },
};

// Example: Update the img src for the logo
const logoElement = document.getElementById('logo-img');
logoElement.setAttribute('src', siteContent['nav']['img-src']);

// Task 1: Create selectors to point your data into elements
const navLinkElements = document.querySelectorAll('nav a');

const ctaTextElements = document.querySelector('.cta-text');
const ctaH1Element = ctaTextElements.getElementsByTagName('h1')[0];
const ctaButtonElement = ctaTextElements.getElementsByTagName('button')[0];
const ctaImgElement = document.getElementById('cta-img');

const mainContent = Object.entries(siteContent['main-content']);
const sectionHeaderElements = document.querySelectorAll('.text-content h4');
const sectionTextElements = document.querySelectorAll('.text-content p');
const mainImg = document.getElementById('middle-img');

const contactElements = document.getElementsByClassName('contact')[0].children;

const footer = document.querySelector('footer p');


// Task 2: Update the HTML with the JSON data
for (let i = 0; i < navLinkElements.length; i++) {
  navLinkElements[i].innerHTML = siteContent['nav'][`nav-item-${i+1}`];
}

ctaH1Element.innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br>');
ctaButtonElement.innerHTML = siteContent['cta']['button'];
ctaImgElement.setAttribute('src', siteContent['cta']['img-src']);

const headers = mainContent.filter(prop => prop[0].indexOf('-h4') > -1);
const contents = mainContent.filter(prop => prop[0].indexOf('-content') > -1);

for (let i = 0; i < headers.length; i++) {
  sectionHeaderElements[i].innerHTML = headers[i][1];
  sectionTextElements[i].innerHTML = contents[i][1];
}

mainImg.setAttribute('src', 'img/mid-page-accent.jpg');

for (let i = 0; i < contactElements.length; i++) {
  contactElements[i].innerHTML = Object.entries(siteContent['contact'])[i][1];
}

footer.innerHTML = siteContent['footer']['copyright'];

// Task 3: Add new content
for (let i = 0; i < navLinkElements.length; i++) {
  navLinkElements[i].style.color = 'green';
}

const navElements = document.getElementsByTagName('nav')[0];
const firstNavLinkElement = document.createElement('a');
const lastNavLinkElement = document.createElement('a');
firstNavLinkElement.innerHTML = 'First';
firstNavLinkElement.style.color = 'green';
firstNavLinkElement.href = '#';
lastNavLinkElement.innerHTML = 'Last';
lastNavLinkElement.style.color = 'green';
lastNavLinkElement.href = '#';

navElements.prepend(firstNavLinkElement)
navElements.appendChild(lastNavLinkElement)







