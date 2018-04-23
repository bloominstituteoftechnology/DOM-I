const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'Contact',
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
let logo = document.getElementById('logo-img');
logo.alt = 'This is company logo';
logo.src = siteContent['nav']['img-src'];

let theNav = document.querySelector('nav');
let textNode = document.createTextNode('The CEO');
theNav.appendChild(textNode);
theNav.style.color = 'green';
theNav.prepend('Hello User');
let theHead = document.querySelectorAll('a');

theHead.forEach(Element => {
  return (Element.style.color = 'green');
});

theHead[0].innerHTML = siteContent['nav']['nav-item-1'];

theHead[1].innerHTML = siteContent['nav']['nav-item-2'];

theHead[2].innerHTML = siteContent['nav']['nav-item-3'];

theHead[3].innerHTML = siteContent['nav']['nav-item-4'];

theHead[4].innerHTML = 'About';

theHead[5].innerHTML = siteContent['nav']['nav-item-5'];

// let textNode = document.createTextNode(' The CEO');
// theHead[5].appendChild(textNode);
let ctaImage = document.getElementById('cta-img');
ctaImage.alt = 'An image of a code snippet.';
ctaImage.src = siteContent['cta']['img-src'];

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('alt', 'An image of code snippets across the screen');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let ctaText = document.getElementsByTagName('h1');
ctaText[0].innerHTML = siteContent['cta']['h1'];

let buttons = document.getElementsByTagName('button');
buttons[0].innerHTML = siteContent['cta']['button'];

let headers = document.querySelectorAll('h4');
headers[0].innerHTML = siteContent['main-content']['features-h4'];

headers[1].innerHTML = siteContent['main-content']['about-h4'];

headers[2].innerHTML = siteContent['main-content']['services-h4'];

headers[3].innerHTML = siteContent['main-content']['product-h4'];

headers[4].innerHTML = siteContent['main-content']['vision-h4'];

headers[5].innerHTML = siteContent['contact']['contact-h4'];

let paragraphs = document.querySelectorAll('p');
paragraphs[0].innerHTML = siteContent['main-content']['features-content'];
paragraphs[1].innerHTML = siteContent['main-content']['about-content'];
paragraphs[2].innerHTML = siteContent['main-content']['services-content'];
paragraphs[3].innerHTML = siteContent['main-content']['product-content'];
paragraphs[4].innerHTML = siteContent['main-content']['vision-content'];
paragraphs[5].innerHTML = siteContent['contact']['address'];
paragraphs[6].innerHTML = siteContent['contact']['phone'];
paragraphs[7].innerHTML = siteContent['contact']['email'];
paragraphs[8].innerHTML = siteContent.footer.copyright;
