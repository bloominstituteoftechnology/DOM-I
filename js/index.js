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
}

// nav
const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(
  (navLink, i) => (navLink.innerText = siteContent.nav[`nav-item-${i + 1}`])
)

const logo = document.getElementById('logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])

// cta
const ctaHeader = document.querySelector('.cta h1')
ctaHeader.innerText = siteContent.cta.h1

const ctaButton = document.querySelector('.cta button')
ctaButton.innerText = siteContent.cta.button

const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent.cta['img-src'])

// main-content
const topContent = document.querySelectorAll(
  '.main-content .top-content .text-content'
)
topContent[0].children[0].innerText = siteContent['main-content']['features-h4']
topContent[0].children[1].innerText =
  siteContent['main-content']['features-content']
topContent[1].children[0].innerText = siteContent['main-content']['about-h4']
topContent[1].children[1].innerText =
  siteContent['main-content']['about-content']

const middleImg = document.querySelector('.middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const bottomContent = document.querySelectorAll(
  '.main-content .bottom-content .text-content'
)
bottomContent[0].children[0].innerText =
  siteContent['main-content']['services-h4']
bottomContent[0].children[1].innerText =
  siteContent['main-content']['services-content']
bottomContent[1].children[0].innerText =
  siteContent['main-content']['product-h4']
bottomContent[1].children[1].innerText =
  siteContent['main-content']['product-content']
bottomContent[2].children[0].innerText =
  siteContent['main-content']['vision-h4']
bottomContent[2].children[1].innerText =
  siteContent['main-content']['vision-content']

// contact
const contactHeader = document.querySelector('.contact h4')
contactHeader.innerText = siteContent.contact['contact-h4']

const contactContent = document.querySelectorAll('.contact p')
const contactContentKeys = Object.keys(siteContent.contact).slice(1)
contactContent.forEach(
  (item, i) => (item.innerText = siteContent.contact[contactContentKeys[i]])
)

// footer 
const footerContent = document.querySelector('footer p')
footerContent.innerText = siteContent.footer.copyright
