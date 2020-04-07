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


// Nav -------------------------


const navLinks = document.querySelectorAll('a');



navLinks[0].textContent = siteContent['nav']['nav-item-1']
navLinks[1].textContent = siteContent['nav']['nav-item-2']
navLinks[2].textContent = siteContent['nav']['nav-item-3']
navLinks[3].textContent = siteContent['nav']['nav-item-4']
navLinks[4].textContent = siteContent['nav']['nav-item-5']
navLinks[5].textContent = siteContent['nav']['nav-item-6']

navLinks.forEach(item => item.style.color = "green")

const navBar = document.querySelector('nav')
const nav1 = document.createElement('a')
const nav2 = document.createElement('a')

nav1.textContent = 'Map'
nav1.style.color = 'green'

nav2.textContent = 'Cart'
nav2.style.color = 'green'

navBar.prepend(nav1)
navBar.append(nav2)



// CTA ------------------------------

const ctaContent = document.querySelector('h1')

ctaContent.textContent = "DOM Is Awesome"


const ctaButton = document.querySelector('button')
ctaButton.textContent = "Get Started"

document.getElementById("cta-img").src = siteContent['cta']['img-src']



// Main Content ----------------------------

// Features
const featureH4 = document.getElementsByTagName('h4')[0]
featureH4.textContent = siteContent['main-content']['features-h4']

const featuresP = document.getElementsByTagName('p')[0]
featuresP.textContent = siteContent['main-content']['features-content']
// Features Ends


// About
const aboutH4 = document.getElementsByTagName('h4')[1]
aboutH4.textContent = "About";

const aboutP = document.getElementsByTagName('p')[1]
aboutP.textContent = siteContent['main-content']['about-content']
// About Ends


// Mid Image
document.getElementById("middle-img").src = siteContent['main-content']['middle-img-src']
// Mid Image Ends


// Services
const servicesH4 = document.getElementsByTagName('h4')[2]
servicesH4.textContent = siteContent ['main-content']['services-h4']

const servicesP = document.getElementsByTagName('p')[2]
servicesP.textContent = siteContent['main-content']['services-content']
// Services Ends


// Product
const productH4 = document.getElementsByTagName('h4')[3]
productH4.textContent = siteContent['main-content']['product-h4']

const productP = document.getElementsByTagName('p')[3]
productP.textContent = siteContent['main-content']['product-content']
// Product Ends


// Vision
const visionH4 = document.getElementsByTagName('h4')[4]
visionH4.textContent = siteContent['main-content']['vision-h4']

const visionP = document.getElementsByTagName('p')[4]
visionP.textContent = siteContent['main-content']['vision-content']
// Vision Ends


// Bottom Content --------------------------

// Contact
const contact = document.getElementsByTagName('h4')[5]
contact.textContent = siteContent['contact']['contact-h4']

const street = document.getElementsByTagName('p')[5]
street.textContent = siteContent['contact']['address']

const phoneNumber = document.getElementsByTagName ('p')[6]
phoneNumber.textContent = siteContent['contact']['phone']

const email = document.getElementsByTagName ('p')[7]
email.textContent = siteContent['contact']['email']

// Contact Ends


// Footer ---------------------------

const footer = document.getElementsByTagName('p')[8]
footer.textContent = siteContent['footer']['copyright']



