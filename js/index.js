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

// *** the missing nav bar ***
// first set navAnchors to be an array of all the anchor tags
// within the nav so they can be indexed and modified
let navAnchors = document.querySelectorAll('nav a')

// each navAnchors index gets its text content from siteContent
// indexed to nav with the corresponding index for the text!
navAnchors[0].textContent = siteContent['nav']['nav-item-1']
navAnchors[1].textContent = siteContent['nav']['nav-item-2']
navAnchors[2].textContent = siteContent['nav']['nav-item-3']
navAnchors[3].textContent = siteContent['nav']['nav-item-4']
navAnchors[4].textContent = siteContent['nav']['nav-item-5']
navAnchors[5].textContent = siteContent['nav']['nav-item-6']

// *** the missing cta section ***
// selecting and updating the h1
let h1Text = document.querySelector('h1')
let h1Split = siteContent['cta']['h1'].split(' ')
h1Text.innerHTML = `${h1Split[0]}<br>${h1Split[1]}<br>${h1Split[2]}`

// select and update the button
let ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent['cta']['button']

// cta img update
let ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent['cta']['img-src']

// *** the missing content ***
// indexing the content will come from these selectors
let h4Content = document.querySelectorAll('div h4')
let pContent = document.querySelectorAll('div p')
let midImg = document.querySelector('#middle-img')

// updating the content and the img in the middle
// main content
h4Content[0].textContent = siteContent['main-content']['features-h4']
pContent[0].textContent = siteContent['main-content']['features-content']
h4Content[1].textContent = siteContent['main-content']['about-h4']
pContent[1].textContent = siteContent['main-content']['about-content']

// middle img
midImg.src = siteContent['main-content']['middle-img-src']

// main content after img
h4Content[2].textContent = siteContent['main-content']['services-h4']
pContent[2].textContent = siteContent['main-content']['services-content']
h4Content[3].textContent = siteContent['main-content']['product-h4']
pContent[3].textContent = siteContent['main-content']['product-content']
h4Content[4].textContent = siteContent['main-content']['vision-h4']
pContent[4].textContent = siteContent['main-content']['vision-content']

// *** the missing contacts section and footer***
// selecting the elements in the contact
let contactSection = document.querySelector('.contact')
let h4Contact = contactSection.querySelector('h4')
let indexPs = contactSection.querySelectorAll('p')
let pFooter = document.querySelector('footer p')

// updating missing text
h4Contact.textContent = siteContent['contact']['contact-h4']
// the adress needs a br tag to put the city/state below the street adress
// retrieve site content and split then add each 'word' and spaces then a br before the city at index 4
let index0pSplit = siteContent['contact']['address'].split(' ')
indexPs[0].innerHTML = `${index0pSplit[0]} ${index0pSplit[1]} ${index0pSplit[2]} ${index0pSplit[3]}<br>${index0pSplit[4]} ${index0pSplit[5]}`
indexPs[1].textContent = siteContent['contact']['phone']
indexPs[2].textContent = siteContent['contact']['email']
pFooter.textContent = siteContent['footer']['copyright']
