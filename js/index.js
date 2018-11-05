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
    "h1": "DOM <br>Is<br> Awesome",
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
let ctaClass = document.getElementsByClassName("cta-text")[0]
ctaClass.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaClass.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

let imgId = document.getElementById("cta-img")
imgId.setAttribute('src', siteContent.cta["img-src"]);

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// main content
let textContentClass = document.getElementsByClassName("text-content")[0]
textContentClass.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"]
textContentClass.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"]

let textContentClassSecond = document.getElementsByClassName("text-content")[1]
textContentClassSecond.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"]
textContentClassSecond.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"]

// bottom contnent
let textContentClassThird = document.getElementsByClassName("text-content")[2]
textContentClassThird.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"]
textContentClassThird.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"]

let textContentClassForth = document.getElementsByClassName("text-content")[3]
textContentClassForth.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"]
textContentClassForth.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"]

let textContentClassFifth = document.getElementsByClassName("text-content")[4]
textContentClassFifth.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"]
textContentClassFifth.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"]

// contact 
let contactClass = document.getElementsByClassName("contact")[0]
contactClass.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contactClass.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contactClass.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contactClass.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

// footer 
let footerClass = document.getElementsByTagName("footer")[0]
footerClass.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"]



// adding anchors 
let newA = document.createElement("a")
newA.href = "any"
newA.textContent = "sign in"

let navSign = document.querySelector("nav a")
navSign.prepend(newA)