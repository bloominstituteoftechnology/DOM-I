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

// Nav Bar
let navElements = siteContent['nav']
console.log(navElements);

const newNav = document.querySelectorAll('nav > a');
console.log(newNav);

for(let i=0; i<newNav.length; i++){
  newNav[i].textContent=navElements[`nav-item-${i}`]
}

// Cta Section
const cta = siteContent['cta']

const newCta = document.querySelector('.cta').children
const newCtaText = newCta[0].children
newCtaText[0].innerHTML=cta['h1']
newCtaText[1].textContent=cta['button']
newCta[1].src=cta['img-src']

const wholeSection = document.querySelector('.main-content').children
console.log(wholeSection)


//Main Content
const topContent = wholeSection[0].children
const botContent = wholeSection[2].children
const picContent = wholeSection[1]

topContent[0].children[0].innerText=siteContent['main-content']['featuers-h4']
topContent[0].children[1].innerText=siteContent['main-content']['features-content']
topContent[1].children[0].innerText=siteContent['main-content']['about-h4']
topContent[1].children[1].innerText=siteContent['main-content']['about-content']

picContent.src = siteContent['main-content']['middle-img-src']

botContent[0].children[0].innerText=siteContent['main-content']['featuers-h4']
botContent[0].children[1].innerText=siteContent['main-content']['features-content']
botContent[1].children[0].innerText=siteContent['main-content']['about-h4']
botContent[1].children[1].innerText=siteContent['main-content']['about-content']
botContent[2].children[0].innerText=siteContent['main-content']['featuers-h4']
botContent[2].children[0].innerText=siteContent['main-content']['featuers-h4']

//Contact Area
const contactArea = document.querySelector('.contact').children;
contactArea[0].innerText=siteContent['contact']['contact-h4']
contactArea[1].innerText=siteContent['contact']['address']
contactArea[2].innerText=siteContent['contact']['phone']
contactArea[3].innerText=siteContent['contact']['email']

//Footer 

document.querySelector('footer > p').innerText= siteContent.footer.copyright