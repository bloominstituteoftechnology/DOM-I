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

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])


//---NAV---
let navigation = document.querySelector('nav')

let navBaby = document.createElement('a')
navBaby.href = '#'
navBaby.classList.toggle('nav-item-1')
navBaby.textContent = 'Yoooo'
navigation.appendChild(navBaby)

let navLinks = document.querySelectorAll('nav a')

navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

navLinks.forEach(item => (item.style.color = 'green'))


//---CTA---
let cta = document.querySelector('.cta')

let ctaText = document.querySelector('.cta-text')
let ctaArr = Array.from(ctaText.children)
ctaArr[0].textContent = siteContent['cta']['h1']
ctaArr[1].textContent = siteContent['cta']['button']

let ctaImage = document.querySelector('#cta-img')
ctaImage.src = siteContent['cta']['img-src']


//---MAIN CONTENT---
//top content
let topTextContent = document.querySelectorAll('.top-content .text-content')

//top content first child
let ttcFirstChild = topTextContent[0].children
ttcFirstChild[0].textContent = siteContent['main-content']['features-h4']
ttcFirstChild[1].textContent = siteContent['main-content']['features-content']

//top content second child
let ttcSecondChild = topTextContent[1].children
ttcSecondChild[0].textContent = siteContent['main-content']['about-h4']
ttcSecondChild[1].textContent = siteContent['main-content']['about-content']


//middle image
let mainImage = document.querySelector('#middle-img')
mainImage.src = siteContent['main-content']['middle-img-src']


//bottom content
let bottomTextContent = document.querySelectorAll('.bottom-content .text-content')

//bottom content first child
let btcFirstChild = bottomTextContent[0].children
btcFirstChild[0].textContent = siteContent['main-content']['product-h4']
btcFirstChild[1].textContent = siteContent['main-content']['product-content']

//bottom middle child
let btcMiddleChild = bottomTextContent[1].children
btcMiddleChild[0].textContent = siteContent['main-content']['services-h4']
btcMiddleChild[1].textContent = siteContent['main-content']['services-content']

//bottom last child
let btcLast = bottomTextContent[2].children
btcLast[0].textContent = siteContent['main-content']['vision-h4']
btcLast[1].textContent = siteContent['main-content']['vision-content']


//---CONTACT---
let contactChildren = document.querySelector('.contact').children
contactChildren[0].textContent = siteContent['contact']['contact-h4']
contactChildren[1].textContent = siteContent['contact']['email']
contactChildren[2].textContent = siteContent['contact']['phone']
contactChildren[3].textContent = siteContent['contact']['address']


//---FOOTER---
let footerChild = document.querySelector('footer p')
footerChild.textContent = siteContent['footer']['copyright']