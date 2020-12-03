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

//updating all anchor text
const anchorText = document.querySelectorAll('nav a')

anchorText[0].textContent = "Services"
anchorText[1].textContent = "Product"
anchorText[2].textContent = "Vision"
anchorText[3].textContent = "Features"
anchorText[4].textContent = "About"
anchorText[5].textContent = "Contact"



//updating h1 text
const h1Text = document.querySelector('h1')

h1Text.textContent = (siteContent['cta']['h1']);



//updating button text
const buttonText = document.querySelector('button')

buttonText.textContent = (siteContent['cta']['button']);


//update cta image
const ctaImg = document.getElementById('cta-img')

ctaImg.setAttribute('src', siteContent['cta']['img-src']);


//update top content
const topContent = document.querySelectorAll('h4')

topContent[0].textContent = siteContent["main-content"]["features-h4"];
topContent[0].nextSibling.textContent = siteContent["main-content"]["features-content"];
topContent[1].textContent = siteContent["main-content"]["about-h4"];
topContent[1].nextSibling.textContent = siteContent["main-content"]["about-content"];


//update middle image
const middleImg = document.getElementById('middle-img')

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//update middle content under middle image
const bottomContent = document.querySelectorAll('h4')


bottomContent[2].textContent = siteContent["main-content"]["services-h4"];
bottomContent[2].nextSibling.textContent = siteContent["main-content"]["services-content"];
bottomContent[3].textContent = siteContent["main-content"]["product-h4"];
bottomContent[3].nextSibling.textContent = siteContent["main-content"]["product-content"]
bottomContent[4].textContent = siteContent["main-content"]["vision-h4"];
bottomContent[4].nextSibling.textContent = siteContent["main-content"]["vision-content"];
bottomContent[5].textContent = siteContent["contact"]["contact-h4"]


//update contact section
const contactContent = document.querySelectorAll('.contact p')

contactContent[0].textContent = siteContent["contact"]["address"]
contactContent[1].textContent = siteContent["contact"]["phone"]
contactContent[2].textContent = siteContent["contact"]["email"]


//update footer section
const footerContent = document.querySelectorAll('footer p')
footerContent[0].textContent = siteContent["footer"]["copyright"]