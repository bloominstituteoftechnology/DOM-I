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
    "h1": "DOM \n Is \n Awesome",
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
    "address" : "123 Way 456 Street \n Somewhere, USA",
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

//selects nav tag and assigns it to navBar
let navBar = document.querySelector('nav')
console.log(navBar)

//selects all anchor tags and assigns the HTMLCollection to Nav
let nav = document.getElementsByTagName('a');

//creates an anchor element and assigns it to customNavItem
let customNavItem = document.createElement('a');

//sets text content and href of customNavItem
customNavItem.textContent = 'CustomItem'
customNavItem.href = '#'

//prepends customNavItem into NavBar
navBar.prepend(customNavItem)

nav[0].textContent = siteContent["nav"]["nav-item-1"]
nav[1].textContent = siteContent["nav"]["nav-item-2"]
nav[2].textContent = siteContent["nav"]["nav-item-3"]
nav[3].textContent = siteContent["nav"]["nav-item-4"]
nav[4].textContent = siteContent["nav"]["nav-item-5"]
nav[5].textContent = siteContent["nav"]["nav-item-6"]

for(let i = 0; i < nav.length; i++){
  nav[i].style.color = 'green'
}

let ctaHeader = document.querySelector('h1')
ctaHeader.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent.cta.button;

let ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.cta["img-src"]

let headerContent4 = document.getElementsByTagName('h4')
headerContent4[0].textContent = siteContent["main-content"]["features-h4"]
headerContent4[1].textContent = siteContent["main-content"]["about-h4"]
headerContent4[2].textContent = siteContent["main-content"]["services-h4"]
headerContent4[3].textContent = siteContent["main-content"]["product-h4"]
headerContent4[4].textContent = siteContent["main-content"]["vision-h4"]
headerContent4[5].textContent = siteContent["contact"]["contact-h4"]

let paragraphContent = document.querySelectorAll('p')
paragraphContent[0].textContent = siteContent["main-content"]["features-content"]
paragraphContent[1].textContent = siteContent["main-content"]["about-content"]
paragraphContent[2].textContent = siteContent["main-content"]["services-content"]
paragraphContent[3].textContent = siteContent["main-content"]["product-content"]
paragraphContent[4].textContent = siteContent["main-content"]["vision-content"]
paragraphContent[5].innerHTML = siteContent["contact"]["address"].replace(/\n/g, '<br>')
paragraphContent[6].textContent = siteContent["contact"]["phone"]
paragraphContent[7].textContent = siteContent["contact"]["email"]
paragraphContent[8].textContent = siteContent["footer"]["copyright"]

let middleImg = document.querySelector("#middle-img")
middleImg.src = siteContent["main-content"]["middle-img-src"]

ctaHeader.innerHTML = siteContent.cta.h1.replace(/\n/g, '<br>')



