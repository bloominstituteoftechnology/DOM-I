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

// Sets code image
let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"])

// Sets middle image code
let codeBottomSnippet = document.getElementById("middle-img");
codeBottomSnippet.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// populates text for navigation links
let links = document.querySelectorAll('a')
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];


links[0].style.color = "green"
links[1].style.color = "green"
links[2].style.color = "green"
links[3].style.color = "green"
links[4].style.color = "green"
links[5].style.color = "green"





// populates headers 
let paragraphHeaders = document.querySelectorAll('h4')
paragraphHeaders[0].textContent = siteContent["main-content"]["features-h4"]
paragraphHeaders[1].textContent = siteContent["main-content"]["about-h4"]
paragraphHeaders[2].textContent = siteContent["main-content"]["services-h4"]
paragraphHeaders[3].textContent = siteContent["main-content"]["product-h4"]
paragraphHeaders[4].textContent = siteContent["main-content"]["vision-h4"]



let paragraphs = document.querySelectorAll('p')
paragraphs[0].textContent = siteContent["main-content"]["features-content"]
paragraphs[1].textContent = siteContent["main-content"]["about-content"]
paragraphs[2].textContent = siteContent["main-content"]["services-content"]
paragraphs[3].textContent = siteContent["main-content"]["product-content"]
paragraphs[4].textContent = siteContent["main-content"]["vision-content"]

//poplulates content for Contact
let contact = document.querySelectorAll(".contact")
contact[0].children[0].textContent = siteContent["contact"]["contact-h4"]
contact[0].children[1].textContent = siteContent["contact"]["address"]
contact[0].children[2].textContent = siteContent["contact"]["phone"]
contact[0].children[3].textContent = siteContent["contact"]["email"]

let footer = document.querySelectorAll("footer")
footer[0].textContent = siteContent["footer"]["copyright"]

let awesome = document.querySelectorAll("h1")
awesome[0].textContent = siteContent["cta"]["h1"]

let button = document.querySelectorAll("button")
button[0].textContent = siteContent["cta"]["button"] 


const newItem1 = document.querySelector("a")
newItem1.textContent = "Log In"
newItem1.style.color = "green"
document.querySelector("nav").prepend(newItem1);

// const newItemAppend = document.querySelector("nav")
const newItem = document.createElement("a")
newItem.textContent = "Sign Up"
newItem.style.color = "green"
document.querySelector("nav").append(newItem)

// const newItem1 = document.createElement("a")
// newItem.textContent = ""
// document.querySelector("nav").append(newItem1)


