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



let featureP = document.querySelector('.text-content:nth-of-type(1)')
featureP.textContent = siteContent['main-content']['features-content']

let aboutP = document.querySelector('.text-content:nth-of-type(2)')
aboutP.textContent = siteContent['main-content']['about-content']

let serviceP = document.querySelector('.text-content:nth-of-type(3)')
serviceP.textContent = siteContent['main-content']['services-content']

let productP = document.querySelector('.bottom-content .text-content:nth-of-type(1)')
productP.textContent = siteContent['main-content']['product-content']

let visionP = document.querySelector('.bottom-content .text-content:nth-of-type(2)')
visionP.textContent = siteContent['main-content']['vision-content']



let foot = document.querySelector('footer');
foot.textContent = siteContent['footer']['copyright']

let contacts = document.querySelector('.contact')
contacts.textContent = siteContent['contact']['address']
contacts.textContent = siteContent['contact']['phone']
contacts.textContent = siteContent['contact']['contact-h4']
contacts.textContent = siteContent['contact']['email']






let hOne = document.querySelector('h1');
hOne.textContent = siteContent['cta']['h1']

let buttons = document.querySelector('button');
buttons.textContent = siteContent['cta']['button']


let links = document.getElementsByTagName('a')
// console.log('link at 4', links)
links[0].textContent = siteContent['nav']['nav-item-1']
links[1].textContent = siteContent['nav']['nav-item-2']
links[2].textContent = siteContent['nav']['nav-item-3']
links[3].textContent = siteContent['nav']['nav-item-4']
links[4].textContent = siteContent['nav']['nav-item-5']
links[5].textContent = siteContent['nav']['nav-item-6']




