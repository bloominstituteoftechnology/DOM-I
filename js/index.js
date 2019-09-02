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

// Helper function
Array.prototype.chunk = function(size) {
  var results = new Array();
  while (this.length) {
    results.push(this.splice(0, size));
  }

  return results;
};

const render = () => {
  // Main Logic
  let nav = document.querySelector('nav');
  Array.from(nav.children).forEach((a, index) => {
    a.textContent = Object.values(siteContent.nav)[index];
    a.style.color = 'green';
  });

  for (let i = 0; i < 2; i++) {
    let a = document.createElement('a');
    a.textContent = `item ${i}`;
    a.style.color = 'red';
    nav.appendChild(a);
  }

  let logo = document.querySelector('#logo-img');
  logo.src = siteContent.nav['img-src'];

  let cta = document.querySelector('.cta');
  cta.querySelector('h1').textContent = siteContent.cta['h1'];
  cta.querySelector('button').textContent = siteContent.cta['button'];
  cta.querySelector('img').src = siteContent.cta['img-src'];

  let contentsTexts = Object.values(siteContent['main-content'])
    .filter(text => !text.includes('img'))
    .chunk(2);

  let main = document.querySelector('.main-content');
  let contents = Array.from(main.querySelectorAll('.text-content'));
  contents.forEach((div, index) => {
    div.querySelector('h4').textContent = contentsTexts[index][0];
    div.querySelector('p').textContent = contentsTexts[index][1];
  });

  let middleImg = document.querySelector('.middle-img');
  middleImg.src = siteContent['main-content']['middle-img-src'];

  let contact = document.querySelector('.contact');
  Array.from(contact.children).forEach((element, index) => {
    element.textContent = Object.values(siteContent.contact)[index];
  });

  let footer = document.querySelector('footer p');
  footer.textContent = siteContent.footer.copyright;

  let render = document.querySelector('#render');
  render.className = 'hide';

  let container = document.querySelector('.container');
  container.className = 'container';
};
