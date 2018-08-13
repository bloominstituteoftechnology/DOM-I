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
const d = document
let logo = d.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// NAVIGATION
let nav = d.querySelectorAll('a')

let first = document.createElement('a')
let last = document.createElement('a')
let what = document.createTextNode('What')
let ever = document.createTextNode("Ever")
first.href = "#"
last.href = "#"
first.appendChild(what)
last.appendChild(ever)
let nav_bar= d.querySelector('nav')
console.log(nav_bar);
nav_bar.appendChild(last)
nav_bar.prepend(first)

nav.forEach(element => element.style.color = 'green')

nav[0].innerText = siteContent["nav"]["nav-item-1"]
nav[1].innerText = siteContent["nav"]["nav-item-2"]
nav[2].innerText = siteContent["nav"]["nav-item-3"]
nav[3].innerText = siteContent["nav"]["nav-item-4"]
nav[4].innerText = siteContent["nav"]["nav-item-5"]
nav[5].innerText = siteContent["nav"]["nav-item-6"]


// CTA
cta_img = d.getElementById("cta-img")
cta_img.src = siteContent["cta"]["img-src"]

cta = d.getElementsByClassName("cta")
cta_text = cta.item(0).childNodes[1].childNodes
cta_h1 = cta_text[1]
cta_button = cta_text[3]
cta_h1.innerText = siteContent["cta"]["h1"]
cta_button.innerText = siteContent["cta"]["button"]


// CONTENT
main_content = d.getElementsByClassName('main-content')

top_content = main_content.item(0).childNodes[1]
middle_img = main_content.item(0).childNodes[3]
bottom_content = main_content.item(0).childNodes[5]

top_h4 = top_content.querySelectorAll("h4")
top_h4[0].innerText = siteContent['main-content']["features-h4"]
top_h4[1].innerText = siteContent['main-content']["about-h4"]
top_p = top_content.querySelectorAll("p")
top_p[0].innerText = siteContent['main-content']["features-content"]
top_p[1].innerText = siteContent['main-content']["about-content"]

middle_img.src = siteContent['main-content']["middle-img-src"]

bottom_h4 = bottom_content.querySelectorAll("h4")
bottom_p = bottom_content.querySelectorAll("p")
bottom_h4[0].innerText = siteContent['main-content']["services-h4"]
bottom_h4[1].innerText = siteContent['main-content']["product-h4"]
bottom_h4[2].innerText = siteContent['main-content']["vision-h4"]
bottom_p[0].innerText = siteContent['main-content']["services-content"]
bottom_p[1].innerText = siteContent['main-content']["product-content"]
bottom_p[2].innerText = siteContent['main-content']["vision-content"]


// CONTACT
contact = d.getElementsByClassName("contact").item(0)
contact_h4 = contact.querySelector('h4')
contact_h4.innerText = siteContent['contact']["contact-h4"]
contact_p = contact.querySelectorAll('p')
contact_p[0].innerText = siteContent["contact"]["address"]
contact_p[1].innerText = siteContent["contact"]["phone"]
contact_p[2].innerText = siteContent["contact"]["email"]


// FOOTER
footer = d.querySelector('footer')
footer_p = footer.querySelector('p')
footer_p.innerText = siteContent["footer"]["copyright"]

// console.log(top_h4);
// console.log(top_content);
// console.log(middle_img);
// console.log(bottom_content);
