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

// navigation links
const navItems = document.querySelectorAll('a');

navItems.forEach((item, index) => {
  return (
    (item.textContent = siteContent.nav[`nav-item-${index + 1}`]),
    (item.style.color = 'green')
  );
});

// add new nav items to nav

// select nav
const nav = document.querySelector('nav');
// create new a tags
const firstA = document.createElement('a');
const lastA = document.createElement('a');
// add text to new a's
firstA.textContent = 'Forward';
lastA.textContent = 'Back';
// add new a's to DOM
nav.prepend(firstA);
nav.appendChild(lastA);

// navigation logo
const logo = document.getElementById('logo-img');
logo.src = siteContent['nav']['img-src'];

// cta text
const h1Arr = siteContent.cta.h1.split(' ');
const ctaText = document.querySelector('.cta-text');
ctaText.innerHTML = `
  <h1>${h1Arr[0]}<br> ${h1Arr[1]}<br>
  ${h1Arr[2]}</h1>
  <button class="btn">Get Started</button>
`;

// cta img
const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];

// main content

// top content
const topContent = document.querySelectorAll('.top-content .text-content');

topContent[0].innerHTML = `
  <h4>${siteContent['main-content']['features-h4']}</h4>
  <p>${siteContent['main-content']['features-content']}</p>
`;

topContent[1].innerHTML = `
  <h4>${siteContent['main-content']['about-h4']}</h4>
  <p>${siteContent['main-content']['about-content']}</p>
`;

// middle img
const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// bottom content
const bottomContent = document.querySelectorAll(
  '.bottom-content .text-content'
);

bottomContent[0].innerHTML = `
  <h4>${siteContent['main-content']['services-h4']}</h4>
  <p>${siteContent['main-content']['services-content']}</p>
`;

bottomContent[1].innerHTML = `
  <h4>${siteContent['main-content']['product-h4']}</h4>
  <p>${siteContent['main-content']['product-content']}</p>
`;

bottomContent[2].innerHTML = `
  <h4>${siteContent['main-content']['vision-h4']}</h4>
  <p>${siteContent['main-content']['vision-content']}</p>
`;

// contact section
const contactSection = document.querySelectorAll('.contact > *');
const contactValues = Object.values(siteContent.contact);

contactSection.forEach(
  (paragraph, index) => (paragraph.textContent = `${contactValues[index]}`)
);

// footer
const footerParagraph = document.querySelector('footer p');
footerParagraph.textContent = `${siteContent.footer.copyright}`;

// STRETCH change styles

const headings = document.querySelectorAll('h4');
headings.forEach(heading => (heading.style.fontFamily = 'sans-serif'));
headings.forEach(heading => (heading.style.textTransform = 'uppercase'));
ctaImg.style.borderRadius = '50%';
ctaImg.style.border = '10px solid cadetblue';

// STRETCH add event listener on cta button
const btn = document.querySelector('.btn');
const pageBody = document.querySelector('body');
btn.addEventListener('click', () => {
  ctaText.innerHTML = `
  <h1>Kam<br> Is<br>
  Awesome</h1>
  <button class="btn">Heck yeah!</button>`;
  pageBody.style.backgroundColor = 'black';
  pageBody.style.color = 'white';
  ctaImg.style.border = '10px solid white';
  navItems.forEach(item => (item.style.color = 'white'));
});
