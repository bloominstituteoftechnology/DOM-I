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

// img id's
let codeSnippet = document.getElementById("cta-img");

codeSnippet.setAttribute('src', siteContent["cta"]['img-src'])

let middle = document.getElementById("middle-img");

middle.setAttribute("src", siteContent["main-content"]["middle-img-src"])

// nav 

let navBar = document.querySelectorAll("nav a");

navBar[0].textContent = siteContent['nav']["nav-item-1"]
navBar[1].textContent = siteContent['nav']["nav-item-2"]
navBar[2].textContent = siteContent['nav']["nav-item-3"]
navBar[3].textContent = siteContent['nav']["nav-item-4"]
navBar[4].textContent = siteContent['nav']["nav-item-5"]
navBar[5].textContent = siteContent['nav']["nav-item-6"]

navBar.forEach(Element => {
  Element.style.color = "green";
});

// CTA
let cta = document.querySelector(".cta-text h1");

cta.textContent = siteContent['cta']["h1"]

let bt = document.querySelector('.cta-text button')
bt.textContent = siteContent['cta']['button']


// TOP

let topConH= document.querySelectorAll(".top-content  h4");

topConH[0].textContent = siteContent["main-content"]["features-h4"]
topConH[1].textContent = siteContent["main-content"]["about-h4"]

let topConP = document.querySelectorAll('.top-content p')
topConP[0].textContent = siteContent["main-content"]["features-content"]
topConP[1].textContent = siteContent["main-content"]["about-content"]


//Bottom


let bottomH = document.querySelectorAll('.bottom-content h4');
bottomH[0].textContent = siteContent['main-content']["services-h4"]
bottomH[1].textContent = siteContent['main-content']["product-h4"]


let bottomP = document.querySelectorAll('.bottom-content p')
bottomP[0].textContent = siteContent['main-content']["services-content"]
bottomP[1].textContent = siteContent['main-content']["vision-content"]


// contact

let conH = document.querySelectorAll( ".contact h4")

conH[0].textContent = siteContent['contact']["contact-h4"]

let conP = document.querySelectorAll(".contact p")

conP[0].textContent = siteContent['contact']["address"]
conP[1].textContent = siteContent['contact']["phone"]
conP[2].textContent = siteContent['contact']["email" ]

let foot = document.querySelectorAll('footer p ')
foot[0].textContent = siteContent["footer"][ "copyright"]


// NEW
const headerEl = document.querySelector('header');

const subHeadline = document.createElement('h1')
subHeadline.textContent = 'Dev'
subHeadline.style.fontSize = '2.4rem'
subHeadline.style.color = 'Blue'
subHeadline.style.marginLeft ="50px"

const headLines = document.createElement('h1')
headLines.textContent = 'Tech'
headLines.style.fontSize = '1.4rem'
headLines.style.color = 'Blue'
headLines.style.margin ='1px'



headerEl.appendChild(subHeadline)
headerEl.appendChild(headLines)

