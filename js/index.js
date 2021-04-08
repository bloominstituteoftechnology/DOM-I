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

const anchorTags = document.querySelectorAll('nav a')
anchorTags[0].text = siteContent["nav"]["nav-item-1"]
anchorTags[1].text = siteContent["nav"]["nav-item-2"]
anchorTags[2].text = siteContent["nav"]["nav-item-3"]
anchorTags[3].text = siteContent["nav"]["nav-item-4"]
anchorTags[4].text = siteContent["nav"]["nav-item-5"]
anchorTags[5].text = siteContent["nav"]["nav-item-6"]

let cta = siteContent["cta"]["h1"].split(' ')
const title = document.getElementsByTagName('h1')[0]
title.innerHTML = cta.join('<br>')

const img = document.getElementById('cta-img')
img.src = siteContent["cta"]["img-src"]

const button = document.getElementsByTagName('button')[0]
button.innerText = siteContent["cta"]["button"]

const contentHeaders = document.getElementsByTagName('h4')
contentHeaders[0].innerText = siteContent["main-content"]["features-h4"]
contentHeaders[1].innerText = siteContent["main-content"]["about-h4"]
contentHeaders[2].innerText = siteContent["main-content"]["services-h4"]
contentHeaders[3].innerText = siteContent["main-content"]["product-h4"]
contentHeaders[4].innerText = siteContent["main-content"]["vision-h4"]

const contentText = document.getElementsByTagName('p')
contentText[0].innerText = siteContent["main-content"]["features-content"]
contentText[1].innerText = siteContent["main-content"]["about-content"]
contentText[2].innerText = siteContent["main-content"]["services-content"]
contentText[3].innerText = siteContent["main-content"]["product-content"]
contentText[4].innerText = siteContent["main-content"]["vision-content"]

const banner = document.getElementById('middle-img')
banner.src = siteContent["main-content"]["middle-img-src"]

const contact = document.querySelectorAll('.contact h4')[0]
contact.innerText = siteContent["contact"]["contact-h4"]

const contactText = document.querySelectorAll('.contact p')
contactText[0].innerText = siteContent["contact"]["address"]
contactText[1].innerText = siteContent["contact"]["phone"]
contactText[2].innerText = siteContent["contact"]["email"]

const footer = document.querySelectorAll('footer p')[0]
footer.innerText = siteContent["footer"]["copyright"]
