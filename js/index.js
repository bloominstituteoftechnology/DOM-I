const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let myNav = document.querySelector('nav')
let navLinks = myNav.getElementsByTagName('a')
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = Object.values(siteContent.nav)[i]
  navLinks[i].style.color = 'green'
}
const firstNav = document.createElement('a')
firstNav.textContent = 'firstNav'
firstNav.href = '#'
const lastNav = document.createElement('a')
lastNav.textContent = 'lastNav'
lastNav.href = '#'
document.querySelector('nav').appendChild(lastNav)
document.querySelector('nav').prepend(firstNav)

let ctaText = document.querySelector('.cta-text')
let h1 = ctaText.querySelector('H1')
h1.textContent = siteContent.cta.h1
let button = document.querySelector('button')
button.textContent = siteContent.cta.button
let ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent.cta['img-src'])

let topContent = document.querySelector('.top-content')
let firstTopContent = topContent.querySelector('div:nth-of-type(1)')
let firstTopContentH4 = firstTopContent.querySelector('H4')
let firstTopContentP = firstTopContent.querySelector('p')
firstTopContentH4.textContent = siteContent['main-content']['features-h4']
firstTopContentP.textContent = siteContent['main-content']['features-content']
let secondTopContent = topContent.querySelector('div:nth-of-type(2)')
let secondTopContentH4 = secondTopContent.querySelector('H4')
let secondTopContentP = secondTopContent.querySelector('p')
secondTopContentH4.textContent = siteContent['main-content']['about-h4']
secondTopContentP.textContent = siteContent['main-content']['about-content']

let midImg = document.getElementById('middle-img')
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomContent = document.querySelector('.bottom-content')
let firstBottomContent = bottomContent.querySelector('div:nth-of-type(1)')
let firstBottomContentH4 = firstBottomContent.querySelector('H4')
let firstBottomContentP = firstBottomContent.querySelector('p')
firstBottomContentH4.textContent = siteContent['main-content']['services-h4']
firstBottomContentP.textContent = siteContent['main-content']['services-content']
let secondBottomContent = bottomContent.querySelector('div:nth-of-type(2)')
let secondBottomContentH4 = secondBottomContent.querySelector('H4')
let secondBottomContentP = secondBottomContent.querySelector('p')
secondBottomContentH4.textContent = siteContent['main-content']['product-h4']
secondBottomContentP.textContent = siteContent['main-content']['product-content']
let thirdBottomContent = bottomContent.querySelector('div:nth-of-type(3)')
let thirdBottomContentH4 = thirdBottomContent.querySelector('H4')
let thirdBottomContentP = thirdBottomContent.querySelector('p')
thirdBottomContentH4.textContent = siteContent['main-content']['vision-h4']
thirdBottomContentP.textContent = siteContent['main-content']['vision-content']

let myContact = document.querySelector('.contact')
let myContactH4 = myContact.querySelector('H4')
myContactH4.textContent = siteContent.contact['contact-h4']
let myContactP1 = myContact.querySelector('p:nth-of-type(1)')
let myContactP2 = myContact.querySelector('p:nth-of-type(2)')
let myContactP3 = myContact.querySelector('p:nth-of-type(3)')
myContactP1.textContent = siteContent.contact.address
myContactP2.textContent = siteContent.contact.phone
myContactP3.textContent = siteContent.contact.email

let foot = document.querySelector('footer')
let copy = foot.querySelector('p')
copy.textContent = siteContent.footer.copyright

