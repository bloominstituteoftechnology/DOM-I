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

let circleLogo = document.getElementById("cta-img")
circleLogo.setAttribute('src', siteContent["cta"]["img-src"])

let barLogo = document.getElementById("middle-img")
barLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let getStarted = "Get Started"; 
document.querySelector("button").textContent = getStarted

let domAwesome = "DOM IS AWESOME"
document.querySelector("h1").textContent = domAwesome

document.querySelector('nav').children[0].textContent = (siteContent["nav"]["nav-item-1"])
document.querySelector('nav').children[1].textContent = (siteContent["nav"]["nav-item-2"])
document.querySelector('nav').children[2].textContent = (siteContent["nav"]["nav-item-3"])
document.querySelector('nav').children[3].textContent = (siteContent["nav"]["nav-item-4"])
document.querySelector('nav').children[4].textContent = (siteContent["nav"]["nav-item-5"])
document.querySelector('nav').children[5].textContent = (siteContent["nav"]["nav-item-6"])

//let features = document.querySelector("h4");

document.querySelector(".top-content").children[0].children[0].textContent = (siteContent["main-content"]["features-h4"])
document.querySelector(".top-content").children[1].children[0].textContent = (siteContent["main-content"]["about-h4"])
document.querySelector(".bottom-content").children[0].children[0].textContent = (siteContent["main-content"]["services-h4"])
document.querySelector(".bottom-content").children[1].children[0].textContent = (siteContent["main-content"]["product-h4"])
document.querySelector(".bottom-content").children[2].children[0].textContent = (siteContent["main-content"]["vision-h4"])

document.querySelector(".top-content").children[0].children[1].textContent = (siteContent["main-content"]["features-content"])
document.querySelector(".top-content").children[1].children[1].textContent = (siteContent["main-content"]["about-content"])
document.querySelector(".bottom-content").children[0].children[1].textContent = (siteContent["main-content"]["services-content"])
document.querySelector(".bottom-content").children[1].children[1].textContent = (siteContent["main-content"]["product-content"])
document.querySelector(".bottom-content").children[2].children[1].textContent = (siteContent["main-content"]["vision-content"])

document.querySelector(".contact").children[0].textContent = (siteContent["contact"]["contact-h4"])
document.querySelector(".contact").children[1].textContent = (siteContent["contact"]["address"])
document.querySelector(".contact").children[2].textContent = (siteContent["contact"]["phone"])
document.querySelector(".contact").children[3].textContent = (siteContent["contact"]["email"])

document.querySelector("footer").children[0].textContent = (siteContent["footer"]["copyright"])
//let features = document.getElementsByClassName("top-content").children[0].children[0];
//document.getElementsByName("top-content"[0][0]).textContent = features