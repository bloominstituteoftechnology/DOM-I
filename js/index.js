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

const navs = document.querySelectorAll('a')
console.log(navs)

navs[0].textContent = "Services"
navs[1].textContent = "Product"
navs[2].textContent = "Vision"
navs[3].textContent = "Features"
navs[4].textContent = "About"
navs[5].textContent = "Contact"

navs[0].style.color = "green"
navs[1].style.color = "green"
navs[2].style.color = "green"
navs[3].style.color = "green"
navs[4].style.color = "green"
navs[5].style.color = "green"


const navlink  = document.querySelector("a")
navlink.textContent = "Home"
navlink.href = "google.com"
const nav = document.querySelector("nav")
nav.appendChild(navlink);

const news = document.createElement("a")
news.textContent = "lol"
nav.prepend(news)

// logo.src ="img/logo.png"

// document.querySelectorAll('a').style.fontcolor = 'green'






const title = document.querySelector('.cta-text h1')
title.textContent = "DOM Is Awesome"

const titlebutton = document.querySelector(".cta-text button")
titlebutton.textContent ="Get Started"

const headerimg = document.getElementById('cta-img')
headerimg.src ="img/header-img.png" 


const maintexttitles = document.querySelectorAll('h4')
console.log(maintexttitles)

maintexttitles[0].textContent = "Features"
maintexttitles[1].textContent = "About"
maintexttitles[2].textContent = "Services"
maintexttitles[3].textContent = "Product"
maintexttitles[4].textContent = "Vision"
maintexttitles[5].textContent = "Contact"


maintextPtags = document.querySelectorAll('p')
console.log(maintextPtags)
maintextPtags[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
maintextPtags[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
maintextPtags[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
maintextPtags[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
maintextPtags[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
maintextPtags[5].textContent = "123 Way 456 Street Somewhere, USA"
maintextPtags[6].textContent = "1 (888) 888-8888"
maintextPtags[7].textContent = "sales@greatidea.io"
maintextPtags[8].textContent = "Copyright Great Idea! 2018"



const middleimage  = document.getElementById('middle-img')
middleimage.src = "img/mid-page-accent.jpg"