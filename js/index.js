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
    "h1": "DOM \nIs \nAwesome",
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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelector("nav")
navLinks.children[0].textContent = "Services";
navLinks.children[1].textContent = "Product";
navLinks.children[2].textContent = "Vision";
navLinks.children[3].textContent = "Features";
navLinks.children[4].textContent = "About";
navLinks.children[5].textContent = "Contact";



let headImg = document.getElementById("cta-img")
headImg.setAttribute('src', siteContent["cta"]["img-src"])
let dom = document.querySelector("h1")
dom.innerText = siteContent["cta"]["h1"]
let btn = document.querySelector("button")
btn.innerText = siteContent["cta"]["button"]
const topCont1 = document.querySelector(".top-content div:nth-of-type(1)")
const topCont2 = document.querySelector(".top-content div:nth-of-type(2)")
topCont1.children[0].textContent = siteContent["main-content"]["features-h4"]
topCont1.children[1].textContent = siteContent["main-content"]["features-content"]
topCont2.children[0].textContent = siteContent["main-content"]["about-h4"]
topCont2.children[1].textContent = siteContent["main-content"]["about-content"]
const bottCont1 = document.querySelector(".bottom-content div:nth-of-type(1)")
const bottCont2 = document.querySelector(".bottom-content div:nth-of-type(2)")
const bottCont3 = document.querySelector(".bottom-content div:nth-of-type(3)")
bottCont1.children[0].textContent = siteContent["main-content"]["services-h4"]
bottCont1.children[1].textContent = siteContent["main-content"]["services-content"]
bottCont2.children[0].textContent = siteContent["main-content"]["product-h4"]
bottCont2.children[1].textContent = siteContent["main-content"]["product-content"]
bottCont3.children[0].textContent = siteContent["main-content"]["vision-h4"]
bottCont3.children[1].textContent = siteContent["main-content"]["vision-content"]

const middle = document.getElementById("middle-img")
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const Contict = document.querySelector(".contact")
Contict.children[0].textContent = siteContent["contact"]["contact-h4"]
Contict.children[1].textContent = siteContent["contact"]["address"]
Contict.children[2].textContent = siteContent["contact"]["phone"]
Contict.children[3].textContent = siteContent["contact"]["email"]

const done = document.querySelector("footer p")
done.textContent = siteContent["footer"]["copyright"]

