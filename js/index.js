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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
document.title = 'Great Idea!'
const nav = document.querySelector('.container nav')
//Is there a DRY way to do this?
const navLinks = document.querySelectorAll('nav a')
console.log(navLinks);
navLinks[0].textContent = 'Services'
navLinks[1].textContent = 'Product'
navLinks[2].textContent = 'Vison'
navLinks[3].textContent = 'Features'
navLinks[4].textContent = 'About'
navLinks[5].textContent = 'Contact'

const ctaTexth1 = document.querySelector('.cta-text h1')
ctaTexth1.innerHTML = 'DOM </br> Is </br> Awesome'

const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = 'Get Started' 

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = 'img/header-img.png'

const topContentTitle = document.querySelectorAll('.top-content h4')
const topContentText = document.querySelectorAll('.top-content p')
topContentTitle[0].textContent = 'Features'
topContentText[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topContentTitle[1].textContent = 'About'
topContentText[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'

const middleImg = document.querySelector('#middle-img')
middleImg.src = "img/mid-page-accent.jpg"

const bottomContentTitle = document.querySelectorAll('.bottom-content h4')
const bottomContentText = document.querySelectorAll('.bottom-content p')
bottomContentTitle[0].textContent = 'Services'
bottomContentText[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContentTitle[1].textContent = 'Product'
bottomContentText[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContentTitle[2].textContent = 'Vision'
bottomContentText[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const contactTitle = document.querySelector('.contact h4')
const contactText = document.querySelectorAll('.contact p')
contactTitle.textContent = 'Contact'
contactText[0].innerHTML = '123 Way 456 Street </br> Somewhere, USA'
contactText[1].textContent = '1 (888) 888-8888'
contactText[2].textContent = 'sales@greatidea.io'

const footerText = document.querySelector('footer p')
footerText.textContent = 'Copyright Great Idea! 2018'

navLinks.forEach((item) => {
item.style.color = 'green'
});

const newFooLink = document.createElement('a') 
newFooLink.textContent = 'Foo'
newFooLink.href = '#'
nav.prependChild(newFooLink)
consele.log(newFooLink)

const newBarLink = document.createElement('a')
newBarLink.textContent = 'Bar'
newBarLink.href = '#'
nav.appendChild(newBarLink)
console.log(newBarLink)
