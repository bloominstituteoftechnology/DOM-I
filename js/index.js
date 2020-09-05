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

let newNav = document.querySelectorAll('a')
console.log("newNAv node", newNav)
newNav[0].textContent = siteContent["nav"]["nav-item-1"]
newNav[1].textContent = siteContent["nav"]["nav-item-2"]
newNav[2].textContent = siteContent["nav"]["nav-item-3"]
newNav[3].textContent = siteContent["nav"]["nav-item-4"]
newNav[4].textContent = siteContent["nav"]["nav-item-5"]
newNav[5].textContent = siteContent["nav"]["nav-item-6"]

newNav.forEach(element => {
  element.style.color = "green"
})

let newH1 = document.querySelector('h1')
newH1.textContent = siteContent["cta"]["h1"]

let newButton = document.querySelector('button')
newButton.textContent = siteContent["cta"]["button"]

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let newH4 = document.querySelectorAll('h4')
newH4[0].textContent = siteContent["main-content"]["features-h4"]
newH4[1].textContent = siteContent["main-content"]["about-h4"]
newH4[2].textContent = siteContent["main-content"]["services-h4"]
newH4[3].textContent = siteContent["main-content"]["product-h4"]
newH4[4].textContent = siteContent["main-content"]["vision-h4"]

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let newMainPara = document.querySelectorAll('p')
newMainPara[0].textContent = siteContent["main-content"]["features-content"]
newMainPara[1].textContent = siteContent["main-content"]["about-content"]
newMainPara[2].textContent = siteContent["main-content"]["services-content"]
newMainPara[3].textContent = siteContent["main-content"]["product-content"]
newMainPara[4].textContent = siteContent["main-content"]["vision-content"]

let newContactH4 = document.querySelector('.contact h4')
newContactH4.textContent = siteContent["contact"]["contact-h4"]

let newContactPara = document.querySelectorAll('.contact p')
newContactPara[0].textContent = siteContent["contact"]["address"]
newContactPara[1].textContent = siteContent["contact"]["phone"]
newContactPara[2].textContent = siteContent["contact"]["email"]

let footer = document.querySelector('footer p')
footer.textContent = siteContent["footer"]["copyright"]

let body = document.querySelector("nav")
let newItem1 = document.createElement('div')
body.prepend("MVP", newItem1)
let newItem2 = document.createElement('div')
newItem1.textContent = "MVP"
body.appendChild(newItem2)


