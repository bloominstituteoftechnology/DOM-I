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

//nav bar
const allTheLinks = document.querySelectorAll('.container a')
allTheLinks[0].textContent = 'Services'
allTheLinks[1].textContent = 'Product'
allTheLinks[2].textContent = 'Vision'
allTheLinks[3].textContent = 'Features'
allTheLinks[4].textContent = 'About'
allTheLinks[5].textContent = 'Contact'
//making it green
allTheLinks.forEach( (item) => {
  item.style.color = 'green';
});
//adding items to nav
const nav = document.querySelector('.container nav')

const appendNav = document.createElement('a')
appendNav.textContent = 'Cleaning'
appendNav.href = '#';
appendNav.style.color = 'green'
nav.appendChild(appendNav)

const prependNav = document.createElement('a')
prependNav.textContent = 'Security'
prependNav.href = '#';
prependNav.style.color = 'green'
nav.prepend(prependNav)

//cta
const domAwesome = document.querySelector('.cta-text')

const domAwesomeLast = document.querySelector('.cta-text h1')
domAwesomeLast.textContent = 'Awesome'

const secondH1 = document.createElement('h1')
secondH1.textContent = 'is'
domAwesome.prepend(secondH1)

const thirdH1 = document.createElement('h1')
thirdH1.textContent = 'Dom'
domAwesome.prepend(thirdH1)

const domButton = document.querySelector('.cta-text button')
domButton.textContent = 'Get Started'

const domImage = document.querySelector('.cta img')
domImage.src = 'img/header-img.png'

//main-content
const mainTop = document.querySelectorAll('.main-content .top-content .text-content')
//main content top1
const mainTop1 = mainTop[0]

const topTextH4 = mainTop1.querySelector('h4')
topTextH4.textContent = 'Features'
const topTextP = mainTop1.querySelector('p')
topTextP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,n interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//main content top2
const mainTop2 = mainTop[1]

const bottomTextH4 = mainTop2.querySelector('h4')
bottomTextH4.textContent = 'About'
const bottomTextP = mainTop2.querySelector('p')
bottomTextP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//middle img
const middleImage = document.querySelector('.middle-img')
middleImage.src = 'img/mid-page-accent.jpg' 

//bottom-content
const bottomContent = document.querySelectorAll('.main-content .bottom-content .text-content')
//bottom content1
const bottomContent1 = bottomContent[0]

const bottomContentTopH4 = bottomContent1.querySelector('h4')
bottomContentTopH4.textContent = 'Services'
const bottomContentTopP = bottomContent1.querySelector('p')
bottomContentTopP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//bottom content2
const bottomContent2 = bottomContent[1]

const bottomContentMidH4 = bottomContent2.querySelector('h4')
bottomContentMidH4.textContent = 'Product'
const bottomContentMidP = bottomContent2.querySelector('p')
bottomContentMidP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//bottom content3
const bottomContent3 = bottomContent[2]

const bottomContentBottomH4 = bottomContent3.querySelector('h4')
bottomContentBottomH4.textContent = 'Vision'
const bottomContentBottomP = bottomContent3.querySelector('p')
bottomContentBottomP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//contact
//contact h4
const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = 'Contact'

//contact p
const contactP = document.querySelectorAll('.contact p')

//contact p (first)
constFirstP = contactP[0]

const firstP = document.createElement('p')
firstP.textContent = '123 Way 456 Street'
constFirstP.appendChild(firstP)

const secondP = document.createElement('p')
secondP.textContent = 'Somewhere, USA'
secondP.lineHeight = '0 px'
constFirstP.appendChild(secondP)

//contact p (second)
constSecondP = contactP[1]

constSecondP.textContent = '1 (888) 888-8888'

//contact p (third)
constThirdP = contactP[2]

constThirdP.textContent = 'sales@greatidea.io'

//footer
const footerP = document.querySelector('footer p')
footerP.textContent = 'Copyright Great Idea! 2018'