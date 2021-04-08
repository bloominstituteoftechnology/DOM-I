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

//Nav

let anchorTags = document.querySelectorAll("nav a")
anchorTags[0].textContent = siteContent["nav"]["nav-item-1"] 
anchorTags[1].textContent = siteContent["nav"]["nav-item-2"]
anchorTags[2].textContent = siteContent["nav"]["nav-item-3"]
anchorTags[3].textContent = siteContent["nav"]["nav-item-4"]
anchorTags[4].textContent = siteContent["nav"]["nav-item-5"]
anchorTags[5].textContent = siteContent["nav"]["nav-item-6"]

anchorTags.forEach((item) => {
  item.style.color = "green"
})

//CTA Section

let cta = siteContent["cta"]["h1"].split(' ') 
const ctaText = document.getElementsByTagName('h1')[0]
ctaText.innerHTML = cta.join('<br>')


let ctaButton = document.getElementsByTagName("button")[0]
ctaButton.innerText = siteContent["cta"]["button"]

const ctaImg = document.getElementById("cta-img")
ctaImg.src = siteContent["cta"]["img-src"]

//Main Section

const main = document.querySelector(".main-content")
const h4Text = main.querySelectorAll("h4")
h4Text[0].textContent = siteContent["main-content"]["features-h4"]
h4Text[1].textContent = siteContent["main-content"]["about-h4"]
h4Text[2].textContent = siteContent["main-content"]["services-h4"]
h4Text[3].textContent = siteContent["main-content"]["product-h4"]
h4Text[4].textContent = siteContent["main-content"]["vision-h4"]

const mainText = main.querySelectorAll("p")
mainText[0].textContent = siteContent["main-content"]["features-content"]
mainText[1].textContent = siteContent["main-content"]["about-content"]
mainText[2].textContent = siteContent["main-content"]["services-content"]
mainText[3].textContent = siteContent["main-content"]["product-content"]
mainText[4].textContent = siteContent["main-content"]["vision-content"]

const midImg = document.getElementById("middle-img")
midImg.src = siteContent["main-content"]["middle-img-src"]

//Contact

const contactSection = document.querySelector(".contact")
const contactHeader = contactSection.querySelector("h4")
const contactText = contactSection.querySelectorAll("p")
contactHeader.textContent = siteContent["contact"]["contact-h4"]
contactText[0].textContent = siteContent["contact"]["address"]
contactText[1].textContent = siteContent["contact"]["phone"]
contactText[2].textContent = siteContent["contact"]["email"]

//Footer
const footerSection = document.querySelector("footer")
const copyright = footerSection.querySelector("p")
copyright.textContent = siteContent["footer"]["copyright"]



