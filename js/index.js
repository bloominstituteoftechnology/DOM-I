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

// Logo
{
  let logo = document.getElementById('logo-img');
  logo.setAttribute('src', siteContent.nav['img-src']);
}
// Nav bar
{
  let nav = document.querySelectorAll('nav a');
  let navItem = 'nav-item-0';
  for (let i = 1; i < 7; i++) {
    navItem = navItem.slice(0, -1) + i;
    nav[i - 1].innerHTML = siteContent['nav'][navItem];
    nav[i - 1].style.cssText = 'color: green';
  }

  let navBar = document.querySelector('nav');
  var firstA = document.createElement('a');
  firstA.setAttribute('href', '#');
  firstA.innerHTML = 'FIRST';
  firstA.style.cssText = 'color: red';
  navBar.prepend(firstA);

  var lastA = document.createElement('a');
  lastA.setAttribute('href', '#');
  lastA.innerHTML = 'LAST';
  lastA.style.cssText = 'color: red';
  navBar.appendChild(lastA);
}
// CTA section
{
  let ctaText = document.querySelector('.cta .cta-text h1');
  ctaStr = '<br>';
  ctaStrArr = siteContent.cta.h1.split(' ');
  for (let i = 0; i < 3; i++) {
    ctaStr += ctaStrArr[i] + '<br>';
  }
  ctaText.innerHTML = ctaStr;

  let ctaButton = document.querySelector('.cta button');
  ctaButton.innerHTML = 'Get Started';

  let ctaImg = document.querySelector('#cta-img');
  ctaImg.setAttribute('src', siteContent.cta['img-src']);
}

// Main content
{
  let mainContentH4s = document.querySelectorAll(
    '.main-content .text-content h4',
  );
  mainContentH4s[0].innerHTML = siteContent['main-content']['features-h4'];
  mainContentH4s[1].innerHTML = siteContent['main-content']['about-h4'];
  mainContentH4s[2].innerHTML = siteContent['main-content']['services-h4'];
  mainContentH4s[3].innerHTML = siteContent['main-content']['product-h4'];
  mainContentH4s[4].innerHTML = siteContent['main-content']['vision-h4'];

  let mainContentPs = document.querySelectorAll(
    '.main-content .text-content p',
  );
  mainContentPs[0].innerHTML = siteContent['main-content']['features-content'];
  mainContentPs[1].innerHTML = siteContent['main-content']['about-content'];
  mainContentPs[2].innerHTML = siteContent['main-content']['services-content'];
  mainContentPs[3].innerHTML = siteContent['main-content']['product-content'];
  mainContentPs[4].innerHTML = siteContent['main-content']['vision-content'];

  let middleImg = document.querySelector('#middle-img');
  middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
}

// Contact
{
  let contactH4 = document.querySelector('.contact h4');
  contactH4.innerHTML = siteContent.contact['contact-h4'];

  let contactPs = document.querySelectorAll('.contact p');
  contactPs[0].innerHTML = siteContent.contact.address;
  contactPs[1].innerHTML = siteContent.contact.phone;
  contactPs[2].innerHTML = siteContent.contact.email;
}

// Footer
{
  let footer = document.querySelector('footer p');
  footer.innerHTML = siteContent.footer.copyright;
}
