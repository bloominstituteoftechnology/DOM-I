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

const nav = document.querySelector('nav');
nav.childNodes[1].textContent = siteContent["nav"]["nav-item-1"];
nav.childNodes[2].textContent = siteContent["nav"]["nav-item-2"];
nav.childNodes[3].textContent = siteContent["nav"]["nav-item-3"];
nav.childNodes[4].textContent = siteContent["nav"]["nav-item-4"];
nav.childNodes[5].textContent = siteContent["nav"]["nav-item-5"];
nav.childNodes[6].textContent = siteContent["nav"]["nav-item-6"];

const cta = document.querySelector('.cta')
cta.querySelector('h1').textContent = siteContent["cta"]["h1"]
cta.querySelector('button').textContent = siteContent["cta"]["button"]
cta.querySelector('img').setAttribute("src", siteContent["cta"]["img-src"])

const mainContent = document.querySelector('.main-content')
const topContent = mainContent.querySelector(".top-content")
const topTextContent1 = topContent.children[0]
const textContent2 = topContent.children[1]
topTextContent1.querySelector('h4').textContent = siteContent["main-content"]["features-h4"]
topTextContent1.querySelector('p').textContent = siteContent["main-content"]["features-content"]
textContent2.querySelector('h4').textContent = siteContent["main-content"]["about-h4"]
textContent2.querySelector('p').textContent = siteContent["main-content"]["about-content"]
const middleImage = mainContent.querySelector('.middle-img')
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])
const bottomContent = mainContent.querySelector('.bottom-content')
const bottomTextContent1 = bottomContent.children[0]
const bottomTextContent2 = bottomContent.children[1]
const bottomTextContent3 = bottomContent.children[2]
const bottomTextContent4 = bottomContent.children[3]
bottomTextContent1.querySelector('h4').textContent = siteContent["main-content"]["services-h4"]
bottomTextContent1.querySelector('p').textContent = siteContent["main-content"]["services-content"]
bottomTextContent2.querySelector('h4').textContent = siteContent["main-content"]["product-h4"]
bottomTextContent2.querySelector('p').textContent = siteContent["main-content"]["product-content"]
bottomTextContent3.querySelector('h4').textContent = siteContent["main-content"]["vision-h4"]
bottomTextContent3.querySelector('p').textContent = siteContent["main-content"]["vision-content"]

const contact = document.querySelector('.contact')
contact.querySelector('h4').textContent = siteContent["contact"]["contact-h4"]
const contactP1 = contact.children[1]
const contactP2 = contact.children[2]
const contactP3 = contact.children[3]
contactP1.textContent = siteContent["contact"]["address"]
contactP2.textContent = siteContent["contact"]["phone"]
contactP3.textContent = siteContent["contact"]["email"]

const footer = document.querySelector('footer')
footer.querySelector('p').textContent = siteContent["footer"]["copyright"]

// New content
const navLastItem = document.createElement('a')
navLastItem.textContent = "Cats"
navLastItem.setAttribute("href", "https://cat-bounce.com/")
navLastItem.setAttribute("target", "_blank")
nav.appendChild(navLastItem)
const navFirstItem = document.createElement('a')
navFirstItem.textContent = "Koalas"
navFirstItem.setAttribute("href", "http://www.koalastothemax.com/")
navFirstItem.setAttribute("target", "_blank")
nav.prepend(navFirstItem)