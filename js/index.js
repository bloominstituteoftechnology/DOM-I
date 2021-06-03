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

const navAnchors = document.querySelectorAll("nav a")
console.log(navAnchors)

navAnchors.forEach((anchor, index) =>{
  anchor.textContent = siteContent['nav']['nav-item-' + (index + 1)]
})

const ctaTitle = document.querySelectorAll('div h1')
ctaTitle[0].textContent = siteContent['cta']['h1']

const ctaButton = document.querySelectorAll('div button')
ctaButton[0].textContent = siteContent['cta']['button']

let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const featuresTitle = document.querySelectorAll('div h4')
featuresTitle[0].textContent = siteContent['main-content']['features-h4']

const featuresContent = document.querySelectorAll('div p')
featuresContent[0].textContent = siteContent['main-content']['features-content']

const aboutTitle = document.querySelectorAll('div h4')
aboutTitle[1].textContent = siteContent['main-content']['about-h4']

const aboutContent = document.querySelectorAll('div p')
aboutContent[1].textContent = siteContent['main-content']['about-content']

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const servicesTitle = document.querySelectorAll('div h4')
servicesTitle[2].textContent = siteContent['main-content']['services-h4']

const servicesContent = document.querySelectorAll('div p')
servicesContent[2].textContent = siteContent['main-content']['services-content']

const productTitle = document.querySelectorAll('div h4')
productTitle[3].textContent = siteContent['main-content']['product-h4']

const productContent = document.querySelectorAll('div p')
productContent[3].textContent = siteContent['main-content']['product-content']

const visionTitle = document.querySelectorAll('div h4')
visionTitle[4].textContent = siteContent['main-content']['vision-h4']

const visionContent = document.querySelectorAll('div p')
visionContent[4].textContent = siteContent['main-content']['vision-content']

const contactTitle = document.querySelectorAll('div h4')
contactTitle[5].textContent = siteContent['contact']['contact-h4']

const addressSection = document.querySelectorAll('div p')
addressSection[5].textContent = siteContent['contact']['address']

const phoneSection = document.querySelectorAll('div p')
phoneSection[6].textContent = siteContent['contact']['phone']

const emailSection = document.querySelectorAll('div p')
emailSection[7].textContent = siteContent['contact']['email']

const footerSection = document.querySelectorAll('footer p')
footerSection[0].textContent = siteContent['footer']['copyright']