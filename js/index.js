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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//update the code snippets
const headerImage = document.getElementById("cta-img");
headerImage.setAttribute("src", siteContent["cta"]["img-src"])

//updating code snippets
const codeImage = document.getElementById("middle-img")
codeImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//updating header
const header = document.querySelector("h1")
header.textContent = siteContent["cta"]["h1"]

//updating button
const button = document.querySelector("button")
button.textContent = siteContent["cta"]["button"]

//updating contact
const contactHeader = document.querySelector(".contact h4")
contactHeader.textContent = siteContent["contact"]["contact-h4"]

//updating contact information
const contactPara = document.querySelectorAll(".contact p")
contactPara[0].textContent = siteContent["contact"]["address"]
contactPara[1].textContent = siteContent["contact"]["phone"]
contactPara[2].textContent = siteContent["contact"]["email"]

//updating footer
const footer = document.querySelector("footer")
footer.textContent = siteContent["footer"]["copyright"]

//headers and paragraphs
const headers = document.querySelectorAll(".text-content h4")
const para = document.querySelectorAll(".text-content p")

//updating features
headers[0].textContent = siteContent["main-content"]["features-h4"]
para[0].textContent = siteContent["main-content"]["features-content"]

//updating about
headers[1].textContent = siteContent["main-content"]["about-h4"]
para[1].textContent = siteContent["main-content"]["about-content"]

//updating services
headers[2].textContent = siteContent["main-content"]["services-h4"]
para[2].textContent = siteContent["main-content"]["services-content"]

//updating products
headers[3].textContent = siteContent["main-content"]["product-h4"]
para[3].textContent = siteContent["main-content"]["product-content"]

//updating vision
headers[4].textContent = siteContent["main-content"]["vision-h4"]
para[4].textContent = siteContent["main-content"]["vision-content"]