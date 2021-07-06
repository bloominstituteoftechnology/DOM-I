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

//other image files
let ctaImg = document.getElementById('cta-img')
ctaImg.src = siteContent['cta']['img-src']

let midImg = document.getElementById('middle-img')
midImg.src = siteContent['main-content']['middle-img-src']

//nav bar
let nav = document.querySelectorAll("header nav a")

nav.forEach((item,index) => {
  item.textContent = siteContent.nav[`nav-item-${index +1}`]
})


let newOne = document.createElement('a')
newOne.textContent = 'Beginning'
let newTwo = document.createElement('a')
newTwo.textContent = 'End'

document.querySelector('nav').prepend(newOne)
document.querySelector('nav').appendChild(newTwo)

nav.forEach((item) => {
  item.style.color = 'green'
})

//CTA
let ctaTitle = document.querySelector('.cta .cta-text h1')
ctaTitle.textContent = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta .cta-text button')
ctaButton.textContent = siteContent.cta.button

//main content
let topTitles = document.querySelectorAll('.top-content h4')
topTitles[0].textContent = siteContent['main-content']['features-h4']
topTitles[1].textContent = siteContent['main-content']['about-h4']

let topContent = document.querySelectorAll('.top-content p')
topContent[0].textContent = siteContent['main-content']['features-content']
topContent[1].textContent = siteContent['main-content']['about-content']

let bottomTitles = document.querySelectorAll('.bottom-content h4')
bottomTitles[0].textContent = siteContent['main-content']['services-h4']
bottomTitles[1].textContent = siteContent['main-content']['product-h4']
bottomTitles[2].textContent = siteContent['main-content']['vision-h4']

let bottomContent = document.querySelectorAll('.bottom-content p')
bottomContent[0].textContent = siteContent['main-content']['services-content']
bottomContent[1].textContent = siteContent['main-content']['product-content']
bottomContent[2].textContent = siteContent['main-content']['vision-content']

//contact section
let contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent.contact['contact-h4']

let contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = siteContent.contact.address
contactInfo[1].textContent = siteContent.contact.phone
contactInfo[2].textContent = siteContent.contact.email

//footer
let footer = document.querySelector('footer p')
footer.textContent = siteContent.footer.copyright