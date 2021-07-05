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


let navs = document.querySelectorAll('nav a')
navs[0].textContent = 'Services'
navs[1].textContent = 'Product'
navs[2].textContent = 'Vision'
navs[3].textContent = 'Features'
navs[4].textContent = 'About'
navs[5].textContent = 'Contact'

let ctatext = document.getElementsByTagName("h1");
ctatext[0].textContent = 'DOM Is Awesome'

let ctabutton = document.querySelector('button');
ctabutton.textContent ='Get Started'

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', 'img/header-img.png')

let mdimg = document.getElementById("middle-img")
mdimg.setAttribute('src', "img/mid-page-accent.jpg")

let mainContText = document.querySelectorAll('.text-content h4')

mainContText[0].textContent = "Features"
mainContText[1].textContent = "About"
mainContText[2].textContent = "Services"
mainContText[3].textContent = "Product"
mainContText[4].textContent = "Vision"

let mainContBlurb = document.querySelectorAll('.text-content p')

mainContBlurb[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainContBlurb[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainContBlurb[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainContBlurb[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainContBlurb[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contactHead = document.querySelector('.contact h4')
contactHead.textContent = "Contact"

let contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = "123 Way 456 Street Somewhere, USA"
contactInfo[1].textContent = "1 (888) 888-8888"
contactInfo[2].textContent = "sales@greatidea.io"

let foot = document.querySelector("footer p")
foot.textContent = "Copyright Great Idea! 2018"

let greenButtons = document.querySelectorAll('nav a')
greenButtons[0].style.color ="green";
greenButtons[1].style.color ="green";
greenButtons[2].style.color ="green";
greenButtons[3].style.color ="green";
greenButtons[4].style.color ="green";
greenButtons[5].style.color ="green";
greenButtons[6].style.color ="green";
greenButtons[7].style.color ="green";

let newNavs = document.getElementsByTagName("nav")
newNavs.appendChild(Careers)
newNavs.prepend(Search)

