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
// header
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav

const pageNav = document.querySelectorAll('nav a')
console.log(pageNav)
pageNav[0].textContent = siteContent.nav["nav-item-1"]
pageNav[1].textContent = siteContent.nav["nav-item-2"]
pageNav[2].textContent = siteContent.nav["nav-item-3"]
pageNav[3].textContent = siteContent.nav["nav-item-4"]
pageNav[4].textContent = siteContent.nav["nav-item-5"]
pageNav[5].textContent = siteContent.nav["nav-item-6"]

const navColor = document.querySelectorAll('nav a')
for (let i = 0; i < navColor.length; i++) {
  const nave = navColor[i]
  nave.style.color = 'green'
}
// cta 
const butt = document.getElementsByTagName('button')
butt.textContent =  siteContent["cta"]["button"]
const imgId = document.getElementById("cta-img")

const Top = document.getElementsByClassName('text-content')
console.log(Top);
// Top[0].
// Top[1].
// Top[2].
// Top[3].
// Top[4].

imgId.setAttribute('src', siteContent.cta["img-src"])

const middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// 
const bottom = document.getElementByClassName('contact').querySelectorAll('p')
bottom[0].textContent = siteContent["address"]



