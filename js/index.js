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

let navBar = document.querySelectorAll("nav a");
navBar.forEach((nav, index) =>{
  nav.textContent = siteContent.nav[`nav-item-${index + 1}`]
})

console.log(navBar)

const newA = document.createElement("a")
newA.textContent = "Help"
document.querySelector("nav").appendChild(newA)


const newA2 = document.createElement("a")
newA2.textContent = "FAQ"
document.querySelector("nav").appendChild(newA2)

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let h1 = document.querySelector(".cta-text h1")
h1.textContent = siteContent["cta"]["h1"]

let button = document.querySelector(".cta-text button")
button.textContent = siteContent["cta"]["button"]



let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const mainHeader = document.querySelectorAll(".text-content h4")
const mainP = document.querySelectorAll(".text-content p")

mainHeader[0].textContent = siteContent["main-content"]["features-h4"]
mainP[0].textContent = siteContent["main-content"]["features-content"]

mainHeader[1].textContent = siteContent["main-content"]["about-h4"]
mainP[1].textContent = siteContent["main-content"]["about-content"]



mainHeader[2].textContent = siteContent["main-content"]["services-h4"]
mainP[2].textContent = siteContent["main-content"]["services-content"]

mainHeader[3].textContent = siteContent["main-content"]["product-h4"]
mainP[3].textContent = siteContent["main-content"]["product-content"]

mainHeader[4].textContent = siteContent["main-content"]["vision-h4"]
mainP[4].textContent = siteContent["main-content"]["vision-content"]



const contactHeader = document.querySelector(".contact h4")
contactHeader.textContent = siteContent["contact"]["contact-h4"]

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"]
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]



const footContent = document.querySelector("footer p");
footContent.textContent = siteContent["footer"]["copyright"]




navBar.forEach((item) => {
  item.style.color = "green"
}) 