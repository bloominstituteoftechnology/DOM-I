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

let nav = document.getElementsByTagName("nav");

console.log(nav)

let navItems = document.querySelectorAll("a");
navItems.forEach( (element, index) => {
  siteContent["nav"]

  let linkName = siteContent["nav"]["nav-item-" + (index+1)]

  element.innerHTML = linkName

  element.style.color = "green"
})

// let newNavItem1 = document.createElement("a")
// newNavItem1.textContent = "DOM"
// console.log(newNavItem1, "newNavItem1")
// document.navItems.prepend(newNavItem1)
// let newNavItem2 = document.createElement("a")
// newNavItem2.textContent = "MOD"
// document.navItems.appendChild(newNavItem2)

let Top = document.querySelector(".cta-text h1");
Top.textContent =  siteContent["cta"]["h1"]
console.log(Top)

let button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"]
console.log(button)

let image = document.getElementById("cta-img");
image.setAttribute('src' , siteContent["cta"]["img-src"])

let Titles = document.querySelectorAll(".text-content h4")

let Features = Titles[0]
Features.textContent = siteContent["main-content"]["features-h4"]

let About = Titles[1]
About.textContent = siteContent["main-content"]["about-h4"]

let Services = Titles[2]
Services.textContent = siteContent["main-content"]["services-h4"]

let Product = Titles[3]
Product.textContent = siteContent["main-content"]["product-h4"]

let Vision = Titles[4]
Vision.textContent = siteContent["main-content"]["vision-h4"]


let sectionContent = document.querySelectorAll(".text-content p")

console.log(sectionContent)
let features = sectionContent[0]
features.textContent = siteContent["main-content"]["features-content"]

let about = sectionContent[1]
about.textContent = siteContent["main-content"]["about-content"]

let services = sectionContent[2]
services.textContent = siteContent["main-content"]["services-content"]

let product = sectionContent[3]
product.textContent = siteContent["main-content"]["product-content"]

let vision = sectionContent[4]
vision.textContent = siteContent["main-content"]["vision-content"]


let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// console.log(middleImg)


let ContactTitle = document.querySelector(".contact h4")
ContactTitle.textContent = siteContent["contact"]["contact-h4"]

let Contact = document.querySelectorAll(".contact p")

let address = Contact[0]
address.textContent = siteContent["contact"]["address"]

let phone = Contact[1]
phone.textContent = siteContent["contact"]["phone"]

let email = Contact[2]
email.textContent = siteContent["contact"]["email"]

let footer = document.querySelector("footer")
footer.textContent = siteContent["footer"]["copyright"]

