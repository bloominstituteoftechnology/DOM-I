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

const container = document.querySelector(".container")
console.log(container)

const header = document.querySelector("header")
console.log(header)

const navTop = document.querySelector("header nav");
console.log(navTop)

const navItems = document.querySelectorAll ("header nav a")
console.log(navItems)

const Mainlogo = document.querySelector("header .logo");
console.log(Mainlogo)

const cta = document.querySelector(".cta");
console.log (cta)

const ctaText = document.querySelector (".cta .cta-text");
console.log (ctaText)

const ctaButton = document.querySelector (".cta .cta-text button")
console.log(ctaButton)

const CtaImg = document.getElementById("cta-img");
console.log(CtaImg)

const mainContent= document.querySelector(".main-content")
console.log(mainContent)

const topMainContent = document.querySelector(".main-content .top-content")
console.log(topMainContent)

const mainContentImg = document.querySelector(".main-content .middle-img")
console.log (mainContentImg)

const mainContentBottom = document.querySelector(".main-content .bottom-content")
console.log(mainContentBottom)

const mainContentBottomP = document.querySelector(".main-content .bottom-content p")
console.log(mainContentBottomP)

const contactP = document.querySelector(".contact p")
console.log(contactP)

const footer = document.querySelector("footer")
console.log(footer)