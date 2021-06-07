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

const navLinks = document.querySelectorAll("nav a")
 
navLinks.forEach((links, index) => {
  links.textContent = siteContent["nav"]["nav-item-" + (index + 1)]
})

const ctaHeader = document.querySelector(".cta-text h1")
ctaHeader.textContent = siteContent["cta"]["h1"]

const ctaButton = document.querySelector("div button")
ctaButton.textContent = siteContent["cta"]["button"]

const ctaImg = document.querySelector("#cta-img")
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])

//main content before codes graphic
const featureH4 = document.querySelectorAll(".text-content h4")
featureH4[0].textContent = siteContent["main-content"]["features-h4"]

const featurePar = document.querySelectorAll(".text-content p")
featurePar[0].textContent = siteContent["main-content"]["features-content"]

const aboutH4 = document.querySelectorAll(".text-content h4")
aboutH4[1].textContent = siteContent["main-content"]["about-h4"]

const aboutPar = document.querySelectorAll(".text-content p")
aboutPar[1].textContent = siteContent["main-content"]["about-content"]

//code graphic
const middleImg = document.querySelector(".middle-img")
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//bottom content
const servicesH4 = document.querySelectorAll(".text-content h4")
servicesH4[2].textContent = siteContent["main-content"]["services-h4"]

const servicesPar = document.querySelectorAll(".text-content p")
servicesPar[2].textContent = siteContent["main-content"]["services-content"]

const productH4 = document.querySelectorAll(".text-content h4")
productH4[3].textContent = siteContent["main-content"]["product-h4"]

const productPar = document.querySelectorAll(".text-content p")
productPar[3].textContent = siteContent["main-content"]["product-content"]

const visionH4 = document.querySelectorAll(".text-content h4")
visionH4[4].textContent = siteContent["main-content"]["vision-h4"]

const visionPar = document.querySelectorAll(".text-content p")
visionPar[4].textContent = siteContent["main-content"]["vision-content"]

const contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent ["contact"]["contact-h4"]

const contactAddress = document.querySelectorAll(".contact p")
contactAddress[0].textContent = siteContent["contact"]["address"]

const contactPhone = document.querySelectorAll(".contact p")
contactPhone[1].textContent = siteContent["contact"]["phone"]

const contactEmail = document.querySelectorAll(".contact p")
contactEmail[2].textContent = siteContent["contact"]["email"]

const footer = document.querySelector("footer")
footer.textContent = siteContent ["footer"] ["copyright"]




