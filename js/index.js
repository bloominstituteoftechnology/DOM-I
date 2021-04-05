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
const nav = document.querySelector("nav")
const navanchor=nav.firstElementChild
navanchor.textContent="Services"
const nava2 = navanchor.nextElementSibling
nava2.textContent="Product"
const nava3 = nava2.nextElementSibling
nava3.textContent="Vision"
const nava4 = nava3.nextElementSibling
nava4.textContent="Features"
const nava5 = nava4.nextElementSibling
nava5.textContent="About"
const nava6 = nava5.nextElementSibling
nava6.textContent="Contact"
const b1=document.querySelector(".cta-text")
const h1 = b1.firstElementChild
h1.innerText="DOM \n Is \n Awesome"
const btn = h1.nextElementSibling
btn.textContent="Get Started"
const cta =document.querySelectorAll(".cta img")
console.log(cta)
cta[0].src="./img/header-img.png"
const pardiv= document.querySelectorAll("h4")
pardiv[0].textContent="Features"
pardiv[1].textContent="About"
pardiv[2].textContent="Services"
pardiv[3].textContent="Product"
pardiv[4].textContent="Vision"
const par= document.querySelectorAll("p")
par[0].textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
par[1].textContent="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
par[2].textContent="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
par[3].textContent="Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
par[4].textContent="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const img2=document.querySelector(".middle-img")
img2.src="img/mid-page-accent.jpg"
pardiv[5].textContent="Contact"
par[5].innerText="123 Way 456 Street \n Somewhere, USA"
par[6].textContent="1 (888) 888-8888"
par[7].textContent="sales@greatidea.io"
const ftpar= document.querySelector("footer")
console.log(ftpar)
ftpar.firstElementChild.textContent="Copyright Great Idea! 2018"
