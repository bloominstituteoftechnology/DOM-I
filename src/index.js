const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// console.log('project wired!')

const nav = document.querySelectorAll('nav a');
// console.log(nav)
const keys = Object.keys(siteContent.nav)
// console.log(keys)
nav.forEach((link, index) => {
 link.classList.add('italic') 
link.textContent = siteContent.nav[keys[index]]
})

// console.log(siteContent)
// console.log(siteContent.nav)
// console.log(siteContent.nav[keys])
// console.log(siteContent.nav[keys[1]])

const ctah1 = document.querySelector('.cta-text h1')
ctah1.textContent = siteContent.cta.h1

const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent.cta.button

const textCon = document.querySelectorAll('.text-content')

textCon[0].firstElementChild.textContent = siteContent["main-content"]["features-h4"]
textCon[0].firstElementChild.nextSibling.textContent = siteContent["main-content"]["features-content"]
textCon[1].firstElementChild.textContent = siteContent["main-content"]["about-h4"]
textCon[1].firstElementChild.nextSibling.textContent = siteContent["main-content"]["about-content"]
textCon[2].firstElementChild.textContent = siteContent['main-content']['services-h4']
textCon[2].firstElementChild.nextSibling.textContent = siteContent['main-content']['services-content']
textCon[3].firstElementChild.textContent = siteContent['main-content']['product-h4']
textCon[3].firstElementChild.nextSibling.textContent = siteContent['main-content']['product-content']
textCon[4].firstElementChild.textContent = siteContent['main-content']['vision-h4']
textCon[4].firstElementChild.nextSibling.textContent = siteContent['main-content']['vision-content']

const contactInfo =  document.querySelector('.contact')

contactInfo.firstElementChild.textContent = siteContent['contact']['contact-h4']
contactInfo.firstElementChild.nextSibling.textContent = siteContent['contact']['address']
contactInfo.firstElementChild.nextElementSibling.textContent = siteContent['contact']['phone']
contactInfo.lastChild.textContent = siteContent['contact']['email']

const foot = document.querySelector('footer a')
foot.textContent = siteContent['footer']['copyright']
foot.classList.add('bold')

const ctaImg = document.querySelector('#cta-img') 
ctaImg.src = 'http://localhost:9000/img/cta.png'

const middleImg = document.querySelector('#middle-img')
middleImg.src = 'http://localhost:9000/img/accent.png'

const logoImg = document.querySelector('#logo-img')
logoImg.src = 'http://localhost:9000/img/logo.png'










