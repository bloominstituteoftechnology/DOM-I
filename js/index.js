let cl = console.log;
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
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"], )

let anchors = document.querySelectorAll('a')
for (let i = 0; i < anchors.length; i++) {
  anchors[i].innerHTML = siteContent.nav['nav-item-' + (i + 1)];
  anchors[i].style= 'color: #26BF72'
}


let callToText = document.querySelector(`.cta-text h1`)
callToText.innerHTML = siteContent.cta.h1

let actionButton = document.querySelector(`.cta-text button`)
actionButton.innerHTML = siteContent.cta.button

let actionImg = document.querySelector('#cta-img')
actionImg.setAttribute('src', siteContent.cta['img-src'], )

let allH4 = document.querySelectorAll('h4')

allH4[0].innerHTML = siteContent['main-content']['features-h4']
allH4[1].innerHTML = siteContent['main-content']['about-h4']
allH4[2].innerHTML = siteContent['main-content']['services-h4']
allH4[3].innerHTML = siteContent['main-content']['product-h4']
allH4[4].innerHTML = siteContent['main-content']['vision-h4']
allH4[5].innerHTML = siteContent.contact['contact-h4']

let middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'], )

let allPs = document.querySelectorAll('p')
allPs[0].innerHTML = siteContent['main-content']['features-content']
allPs[1].innerHTML = siteContent['main-content']['about-content']
allPs[2].innerHTML = siteContent['main-content']['services-content']
allPs[3].innerHTML = siteContent['main-content']['product-content']
allPs[4].innerHTML = siteContent['main-content']['vision-content']
allPs[5].innerHTML = siteContent.contact.address
allPs[6].innerHTML = siteContent.contact.phone
allPs[7].innerHTML = siteContent.contact.email
allPs[8].innerHTML = siteContent.footer.copyright

