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



const navBar = document.getElementsByTagName("a")
// Array.from(navBar).forEach(element => {
//   element.textContent = "service"
// });
navBar[0].textContent = siteContent["nav"]["nav-item-1"]
navBar[1].textContent = siteContent["nav"]["nav-item-2"]
navBar[2].textContent = siteContent["nav"]["nav-item-3"]
navBar[3].textContent = siteContent["nav"]["nav-item-4"]
navBar[4].textContent = siteContent["nav"]["nav-item-5"]
navBar[5].textContent = siteContent["nav"]["nav-item-6"]
navBar[0].style.color = 'green'
navBar[1].style.color = 'green'
navBar[2].style.color = 'green'
navBar[3].style.color = 'green'
navBar[4].style.color = 'green'
navBar[5].style.color = 'green'



const headImg = document.getElementById("cta-img")
headImg.setAttribute('src', siteContent["cta"]["img-src"])



const h1Text = document.getElementsByTagName('h1')
Array.from(h1Text).forEach(element => {
  element.textContent = "DOM IS AWESOME"
})
// h1Text[0].textContent = siteContent["cta"]["h1"] AN EASIER WAY TO DO IT


const ctaText = document.getElementsByTagName("button")
Array.from(ctaText).forEach(element => {
    element.textContent = "Get Started"
  });
  // ctaText[0].textContent = siteContent["cta"]["button"] AN EASY WAY TO DO IT! 

const mainContentH = document.getElementsByTagName('h4')
mainContentH[0].textContent = siteContent["main-content"]["features-h4"]
mainContentH[1].textContent = siteContent["main-content"]["about-h4"]
mainContentH[2].textContent = siteContent["main-content"]["services-h4"]
mainContentH[3].textContent = siteContent["main-content"]["product-h4"]
mainContentH[4].textContent = siteContent["main-content"]["vision-h4"]



const mainContentP = document.getElementsByTagName('P')
mainContentP[0].textContent = siteContent["main-content"]["features-content"]
mainContentP[1].textContent = siteContent["main-content"]["about-content"]
mainContentP[2].textContent = siteContent["main-content"]["services-content"]
mainContentP[3].textContent = siteContent["main-content"]["product-content"]
mainContentP[4].textContent = siteContent["main-content"]["vision-content"]



let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])



const contactsH = document.getElementsByTagName('h4')
contactsH[5].textContent = siteContent["contact"]["contact-h4"]

const contactsP = document.getElementsByTagName('p')
contactsP[5].textContent = siteContent["contact"]["address"]
contactsP[6].textContent = siteContent["contact"]["phone"]
contactsP[7].textContent = siteContent["contact"]["email"]



const copy = document.getElementsByTagName('p')
copy[8].textContent = siteContent["footer"]["copyright"]



const newNav = document.createElement('a')
newNav.textContent = "Home"
newNav.style.color = 'green'

const parentElement = document.querySelector("nav")
parentElement.prepend(newNav)

const newNav2 = document.createElement('a')
newNav2.textContent = "Email"
newNav2.style.color = 'green'

const parentElement2 = document.querySelector("nav")
parentElement.appendChild(newNav2)