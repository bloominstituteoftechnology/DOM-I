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
    address: '123 Way 456 Street<br> Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

/***********************************************
                  Navigation
***********************************************/

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Add the naviation to the header
let nav = document.querySelectorAll('header nav a');

nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

/***********************************************
                Call to Action
***********************************************/

// Add cta, cta-text, and cta-img section
let ctaHeader = document.querySelector('.cta .cta-text h1');
let ctaButton = document.querySelector('.cta .cta-text button');
let ctaImg = document.querySelector('#cta-img');

ctaHeader.innerHTML = siteContent['cta']['h1'].replace(/\s/g, '<br>');
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];

/***********************************************
                  Middle Content
***********************************************/

// Add section headers
let sectionHeader = document.querySelectorAll('.main-content h4');

sectionHeader[0].textContent = siteContent['main-content']['features-h4'];
sectionHeader[1].textContent = siteContent['main-content']['about-h4'];
sectionHeader[2].textContent = siteContent['main-content']['services-h4'];
sectionHeader[3].textContent = siteContent['main-content']['product-h4'];
sectionHeader[4].textContent = siteContent['main-content']['vision-h4'];

// Add middle banner image
let middleImage = document.querySelector('#middle-img');

middleImage.src = siteContent['main-content']['middle-img-src'];

// Add section content
let sectionContent = document.querySelectorAll('.main-content p');

sectionContent[0].textContent = siteContent['main-content']['features-content'];
sectionContent[1].textContent = siteContent['main-content']['about-content'];
sectionContent[2].textContent = siteContent['main-content']['services-content'];
sectionContent[3].textContent = siteContent['main-content']['product-content'];
sectionContent[4].textContent = siteContent['main-content']['vision-content'];

/***********************************************
                    Contact
***********************************************/

// Add contact header
let contactHeader = document.querySelector('.contact h4');

contactHeader.textContent = siteContent['contact']['contact-h4'];

// Add contact content
let contactContent = document.querySelectorAll('.contact p');

contactContent[0].innerHTML = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

/***********************************************
                      Footer
***********************************************/

// Add footer copyright
let footer = document.querySelector('footer p');

footer.textContent = siteContent['footer']['copyright'];
