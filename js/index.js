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
logo.setAttribute('src', 'img/logo.png')
const headerImage = document.getElementById('cta-img')
headerImage.setAttribute('src', 'img/header-img.png')
const midPageAccent = document.getElementById('middle-img')
midPageAccent.src = 'img/mid-page-accent.jpg'
const topNavLinks = document.querySelectorAll('a')
// console.log(topNavLinks)
topNavLinks[0].textContent = 'Services'
topNavLinks[1].textContent = 'Product'
topNavLinks[2].textContent = 'Vision'
topNavLinks[3].textContent = 'Features'
topNavLinks[4].textContent = 'About'
topNavLinks[5].textContent = 'Contact'
const newNavItem1 = document.createElement('a')
newNavItem1.textContent = 'Blog'
newNavItem1.href = '#'
const nav = document.querySelector('nav');
nav.appendChild(newNavItem1);
const newNavItem2 = document.createElement('a')
newNavItem2.textContent = 'Home'
newNavItem2.href = '#'
nav.prepend(newNavItem2);
const navBarText = document.querySelectorAll('nav a')
// console.log(navBarText)
navBarText.forEach(element => {
  element.style.color = 'green'
})
const centerText = document.querySelector('h1')
// console.log(centerText)
centerText.textContent = "DOM IS AWESOME"
centerText.style.fontSize = '4rem'
const midPageSubtitles = document.querySelectorAll('h4')
// console.log(midPageSubtitles)
midPageSubtitles[0].textContent = 'Features'
midPageSubtitles[1].textContent = 'About'
midPageSubtitles[2].textContent = 'Services'
midPageSubtitles[3].textContent = 'Product'
midPageSubtitles[4].textContent = 'Vision'
midPageSubtitles[5].textContent = 'Contact'
const midPageContent = document.querySelectorAll('p')
// console.log(midPageContent)
midPageContent[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
midPageContent[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
midPageContent[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'
midPageContent[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'
midPageContent[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'
midPageContent[5].textContent = '123 Way 456 Street Somewhere, USA'
midPageContent[6].textContent = '1 (888) 888-8888'
midPageContent[7].textContent = 'sales@greatidea.io'
midPageContent[8].textContent = 'Copyright Great Idea! 2018'


