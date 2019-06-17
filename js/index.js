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

// NAVBAR
const navbar = document.querySelector('nav')

const headerNames = Object.values(siteContent.nav)

const navbarEls = document.querySelectorAll('a')
navbarEls.forEach((link, i) => {
  link.textContent = headerNames[i]
})

// trying to edit color of nav links
// const navbarLinks = document.querySelectorAll('a')
// navbar.style.backgroundColor = "green"
// console.log(navbar)

// add two more nav items
const navBlogTitle = document.createElement('a')
navBlogTitle.textContent = "Blog"
navBlogTitle.href = "#"

const navMoreTitle = document.createElement('a')
navMoreTitle.textContent = "More"
navMoreTitle.href = "#"

navbar.prepend(navBlogTitle)
navbar.appendChild(navMoreTitle)

// change color of nav text
const navElems = document.getElementsByClassName("navbar")

let logo = document.getElementById('logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])



// SECTION - CTA

const ctaText = document.getElementsByClassName('cta')
// ctaText.style.marginLeft = "20px"

// cta Title
const ctaTitle = document.querySelector('.cta-text h1')
ctaTitle.textContent = siteContent['cta']['h1']

// cta button
const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent['cta']['button']

// cta image
const ctaImage = document.getElementById('cta-img')
ctaImage.setAttribute('src', siteContent['cta']['img-src'])


// SECTION - MAIN CONTENT
// const mainContents = document.querySelectorAll('.main-content div')
// console.log(mainContents)
// mainContents.forEach((el, i) => {
//   console.log(el, i)
//   console.log(siteContent['main-content'][i])
//   console.log(el.querySelector('h4'))
//   el.querySelector('h4').textContent = siteContent["main-content"][i]
// })

const topContent = document.querySelector(".top-content")

// features title
const featuresTitle = topContent.firstElementChild
featuresTitle.firstElementChild.textContent =
  siteContent['main-content']['features-h4']

// features content
const featuresContent = topContent.firstElementChild
featuresContent.lastElementChild.textContent =
  siteContent['main-content']["features-content"]

const aboutTitle = topContent.lastElementChild
  aboutTitle.firstElementChild.textContent =
    siteContent['main-content']['about-h4']

const aboutContent = topContent.lastElementChild
aboutContent.lastElementChild.textContent =
  siteContent['main-content']['about-content']


// SECTION - MIDDLE IMAGE
const middleImage = document.getElementById('middle-img')
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])


// SECTION - BOTTOM CONTENT
const bottomContent = document.querySelector(".bottom-content")


// services
const servicesTitle = bottomContent.firstElementChild
servicesTitle.firstElementChild.textContent =
  siteContent['main-content']['services-h4']

const servicesContent = bottomContent.firstElementChild
servicesContent.lastElementChild.textContent =
  siteContent['main-content']['services-content']

// vision
const visionTitle = bottomContent.lastElementChild
visionTitle.firstElementChild.textContent =
  siteContent['main-content']['vision-h4']

const visionContent = bottomContent.lastElementChild
visionContent.lastElementChild.textContent =
  siteContent['main-content']['vision-content']



  // CONTACT

const contact = document.querySelector(".contact")
const contactTitle = document.querySelector(".contact h1")
contact.textContent = siteContent["contact"]["contact-h4"]



  // contact: {
  //   'contact-h4': 'Contact',
  //   address: '123 Way 456 Street Somewhere, USA',
  //   phone: '1 (888) 888-8888',
  //   email: 'sales@greatidea.io'
  // },
  // footer: {
  //   copyright: 'Copyright Great Idea! 2018'
  // }
