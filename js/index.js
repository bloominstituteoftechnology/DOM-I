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

// Task 2
const logo = document.getElementById('logo-img');
const navBar = document.querySelector('nav');
const navItems = document.querySelectorAll('nav a');
const ctaHead = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.getElementById('cta-img');
const mainContentHead = document.querySelectorAll('.main-content h4');
const mainContentBody = document.querySelectorAll('.main-content p');
const middleImg = document.getElementById('middle-img');
const contactHead = document.querySelector('.contact h4');
const contactBody = document.querySelectorAll('.contact p');
const footer = document.querySelector('footer');

// Task 4 - Added Nav Items
const portfolio = document.createElement('a');
const portfolioText = document.createTextNode('Portfolio');
const home = document.createElement('a');
const homeText = document.createTextNode('Home');

// Header

// Great Idea! Logo
logo.src = siteContent['nav']['img-src'];

// NavBar
for (let i = 0; i < navItems.length; i++) {
  navItems[i].innerHTML = siteContent['nav']['nav-item-' + (i + 1)];
  navItems[i].style.color = 'green';
}

home.appendChild(homeText);
home.style.cssText = 'color: green; cursor: pointer;';
navBar.prepend(home);

portfolio.appendChild(portfolioText);
portfolio.style.cssText = 'color: green; cursor: pointer;';
navBar.appendChild(portfolio);

// CTA

ctaHead.innerHTML = siteContent['cta']['h1'];
ctaButton.innerHTML = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];

// Main Content

mainContentHead[0].innerHTML = siteContent['main-content']['features-h4'];
mainContentBody[0].innerHTML = siteContent['main-content']['features-content'];
mainContentHead[1].innerHTML = siteContent['main-content']['about-h4'];
mainContentBody[1].innerHTML = siteContent['main-content']['about-content'];

middleImg.src = siteContent['main-content']['middle-img-src'];

mainContentHead[2].innerHTML = siteContent['main-content']['services-h4'];
mainContentBody[2].innerHTML = siteContent['main-content']['services-content'];
mainContentHead[3].innerHTML = siteContent['main-content']['product-h4'];
mainContentBody[3].innerHTML = siteContent['main-content']['product-content'];
mainContentHead[4].innerHTML = siteContent['main-content']['vision-h4'];
mainContentBody[4].innerHTML = siteContent['main-content']['vision-content'];

// Contact

contactHead.innerHTML = siteContent['contact']['contact-h4'];
contactBody[0].innerHTML = siteContent['contact']['address'];
contactBody[1].innerHTML = siteContent['contact']['phone'];
contactBody[2].innerHTML = siteContent['contact']['email'];

// Footer

footer.innerHTML = siteContent['footer']['copyright'];
