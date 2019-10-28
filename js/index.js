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

//Task 1

//Images

const codeSnippet = document.querySelector('#cta-img')

codeSnippet.setAttribute('src', siteContent['cta']['img-src'])

const roundImage = document.querySelector('#middle-img')

roundImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

// anchor tags nav

anchorNavs = Object.keys(siteContent.nav)
anchorNavs.pop() //Just using anchorNavs.length -1 in the for loop would work aswell.
navLinks = document.querySelectorAll('a')

for(let i = 0; i < anchorNavs.length; i++) {
  navLinks[i].textContent = siteContent["nav"][`nav-item-${i}`]
}

//h1

const mainh1 = document.querySelector('h1')
const newline = "\r\n";
const nbsp = "\u00a0";
mainh1.textContent = "DOM" + newline + "IS" + newline + "AWESOME";

//button

const mainButton = document.querySelector('button')
mainButton.textContent = `${siteContent.cta.button}`

//h4's

const featureh4 = document.querySelectorAll('h4')[0]
featureh4.textContent = siteContent['main-content']['features-h4']

const abouth4 = document.querySelectorAll('h4')[1]
abouth4.textContent = siteContent['main-content']['about-h4']

const servicesh4 = document.querySelectorAll('h4')[2]
servicesh4.textContent = siteContent['main-content']['services-h4']

const producth4 = document.querySelectorAll('h4')[3]
producth4.textContent = siteContent['main-content']['product-h4']

const visionh4 = document.querySelectorAll('h4')[4]
visionh4.textContent = siteContent['main-content']['vision-h4']

// h4 ps

const featurep = document.querySelectorAll('p')[0]
featurep.textContent = siteContent['main-content']['features-content']

const aboutp = document.querySelectorAll('p')[1]
aboutp.textContent = siteContent['main-content']['about-content']

const servicesp = document.querySelectorAll('p')[2]
servicesp.textContent = siteContent['main-content']['services-content']

const productp = document.querySelectorAll('p')[3]
productp.textContent = siteContent['main-content']['product-content']

const visionp = document.querySelectorAll('p')[4]
visionp.textContent = siteContent['main-content']['vision-content']

//contact

const contacth4 = document.querySelectorAll('h4')[5]
contacth4.textContent = siteContent['contact']['contact-h4']

//contact ps

const contactP1 = document.querySelectorAll('p')[5]
contactP1.textContent = siteContent['contact']['address']

const contactP2 = document.querySelectorAll('p')[6]
contactP2.textContent = siteContent['contact']['phone']

const contactP3 = document.querySelectorAll('p')[7]
contactP3.textContent = siteContent['contact']['email']

//copyright

const copyrightP = document.querySelectorAll('p')[8]
copyrightP.textContent = siteContent['footer']['copyright']


//nav color

const allAnchors = document.querySelectorAll('a')
allAnchors.forEach(function(item) {
  item.style.color = 'green'
})

// new elements 


const newA = document.createElement('a')
newA.textContent = 'New'
newA.style.color = 'green'
document.querySelector('nav').append(newA)

const newNewA = document.createElement('a')
newNewA.textContent = 'NewNew'
newNewA.style.color = 'green'
document.querySelector('nav').prepend(newNewA)


//Stretch

const allAnchorsArray = Array.from(document.querySelectorAll('a'))


allAnchorsArray.forEach(function(item) {
  item.style.textDecoration = 'underline'
})