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

let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', 'img/header-img.png')

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg')





let featFour = document.querySelector(' .top-content .text-content:nth-of-type(1) h4');
featFour.textContent = siteContent['main-content']['features-h4']

let featP = document.querySelector('.top-content .text-content:nth-of-type(1) p');
featP.textContent = siteContent['main-content']['features-content']


let aboutFour = document.querySelector('.text-content:nth-of-type(2) h4');
aboutFour.textContent = siteContent['main-content']['about-h4']

let aboutP = document.querySelector('.top-content .text-content:nth-of-type(2) p');
aboutP.textContent = siteContent['main-content']['about-content']


let serviceP = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
serviceP.textContent = siteContent['main-content']['services-content']

let serviceFour = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
serviceFour.textContent = siteContent['main-content']['services-h4']



let productP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
productP.textContent = siteContent['main-content']['product-content']

let productFour = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
productFour.textContent = siteContent['main-content']['product-h4']


let visionP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
visionP.textContent = siteContent['main-content']['vision-content']

let visionFour = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
visionFour.textContent = siteContent['main-content']['vision-h4']

let foot = document.querySelector('footer');
foot.textContent = siteContent['footer']['copyright']




let hOne = document.querySelector('h1');
hOne.textContent = siteContent['cta']['h1']

let buttons = document.querySelector('button');
buttons.textContent = siteContent['cta']['button']


let links = document.getElementsByTagName('a')

links[0].textContent = siteContent['nav']['nav-item-1']
links[1].textContent = siteContent['nav']['nav-item-2']
links[2].textContent = siteContent['nav']['nav-item-3']
links[3].textContent = siteContent['nav']['nav-item-4']
links[4].textContent = siteContent['nav']['nav-item-5']
links[5].textContent = siteContent['nav']['nav-item-6']



let contacts = document.querySelector('.contact')
contacts.textContent = siteContent['contact']['email']


let addresses = document.querySelector('.contact')
addresses.textContent = siteContent['contact']['address']

let changer = document.getElementsByTagName('a');
changer[0].style.color = 'green'
changer[1].style.color = 'green'
changer[2].style.color = 'green'
changer[3].style.color = 'green'
changer[4].style.color = 'green'
changer[5].style.color = 'green'


let parent = document.createElement('div')
let child = document.createElement('p')










