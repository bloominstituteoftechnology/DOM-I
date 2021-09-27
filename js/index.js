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
let logo = document.getElementById("logo-img")
let snippet = document.getElementById("cta-img")
let middleImage = document.getElementById("middle-img")
let nav = document.querySelector("nav")
let navLinks = document.querySelectorAll('nav a')
let ctaSection = document.getElementsByClassName("cta")[0]
let ctaH1 = ctaSection.querySelectorAll('div h1')[0]
let ctaButton = ctaSection.querySelectorAll('button')[0]
// Top Content
let mainTopContent = document.getElementsByClassName('top-content')[0]
let featureContent = mainTopContent.getElementsByClassName("text-content")[0]
let featureH4 = featureContent.querySelector("h4")
let featureP = featureContent.querySelector("p")
let aboutContent = mainTopContent.getElementsByClassName("text-content")[1]
let aboutH4 = aboutContent.querySelector("h4")
let aboutP = aboutContent.querySelector("p")
// Bottom Content
let mainBottomContent = document.getElementsByClassName('bottom-content')[0]
let servicesContent = mainBottomContent.getElementsByClassName("text-content")[0]
let servicesH4 = servicesContent.querySelector("h4")
let servicesP = servicesContent.querySelector("p")
let productContent = mainBottomContent.getElementsByClassName("text-content")[1]
let productH4 = productContent.querySelector("h4")
let productP = productContent.querySelector("p")
let visionContent = mainBottomContent.getElementsByClassName("text-content")[2]
let visionH4 = visionContent.querySelector("h4")
let visionP = visionContent.querySelector("p")
//contact
let contactContent = document.getElementsByClassName('contact')[0]
let contactH4 = contactContent.querySelector("h4")
let address = contactContent.querySelectorAll("p")[0]
let phone = contactContent.querySelectorAll("p")[1]
let email = contactContent.querySelectorAll("p")[2]
//footer
let footerContent = document.querySelector('footer')
let copyright = footerContent.querySelector("p")



const createLink = (text) => {
  let link = document.createElement('a')
  link.textContent = text
  return link
}

const createNavMenu = () => {
  const navObject = siteContent['nav']
  const copyNavObject = { ...navObject }
  delete copyNavObject["img-src"]
  const linksArray = Array.from(navLinks)
  let counter = 1
  const menu = linksArray.forEach(link => {
    if (counter < linksArray.length + 1) {
      link.textContent = siteContent['nav'][`nav-item-${counter}`]
    }
    counter++
  })
  return menu
}
createNavMenu()

ctaH1.textContent = siteContent["cta"]["h1"]
ctaButton.textContent = siteContent["cta"]["button"]
featureH4.textContent = siteContent["main-content"]["features-h4"]
featureP.textContent = siteContent["main-content"]["features-content"]
aboutH4.textContent = siteContent["main-content"]["about-h4"]
aboutP.textContent = siteContent["main-content"]["about-content"]

servicesH4.textContent = siteContent["main-content"]["services-h4"]
servicesP.textContent = siteContent["main-content"]["services-content"]
productH4.textContent = siteContent["main-content"]["product-h4"]
productP.textContent = siteContent["main-content"]["product-content"]
visionH4.textContent = siteContent["main-content"]["vision-h4"]
visionP.textContent = siteContent["main-content"]["vision-content"]

contactH4.textContent = siteContent["contact"]["contact-h4"]
address.textContent = siteContent["contact"]["address"]
phone.textContent = siteContent["contact"]["phone"]
email.textContent = siteContent["contact"]["email"]
copyright.textContent = siteContent["footer"]["copyright"]

logo.setAttribute('src', siteContent["nav"]["img-src"])
snippet.setAttribute('src', siteContent["cta"]["img-src"])
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

