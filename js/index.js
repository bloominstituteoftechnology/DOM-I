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

const headerNav = document.querySelectorAll("nav a");
for(let i = 0; i < headerNav.length; i++){
  let navIndex = "nav-item-" +i;
  headerNav[i].textContent = siteContent["nav"][navIndex];
}

const h1Header = document.querySelector("h1");
h1Header.textContent = siteContent["cta"]["h1"];


const buttonHeader = document.querySelector("button");
buttonHeader.textContent = siteContent["cta"]["button"];

let bigPic = document.querySelector("#cta-img");
bigPic.setAttribute('src', siteContent["cta"]["img-src"]);



let allH4s = document.querySelectorAll("h4")
allH4s[0].textContent = "Features"
allH4s[1].textContent = "About"
allH4s[2].textContent = "Services"
allH4s[3].textContent = "Product"
allH4s[4].textContent = "Vision"
allH4s[5].textContent = "Contact"

let allH4Paras = document.querySelectorAll("p")
allH4Paras[0].textContent = siteContent["main-content"]["features-content"]
allH4Paras[1].textContent = siteContent["main-content"]["about-content"]
allH4Paras[2].textContent = siteContent["main-content"]["services-content"]
allH4Paras[3].textContent = siteContent["main-content"]["product-content"]
allH4Paras[4].textContent = siteContent["main-content"]["vision-content"]



let longPic = document.querySelector(".main-content img");
longPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])


let middleImg = document.querySelector(".main-content img");
middleImg.src = siteContent["main-content"]["middle-img-src"];


const contactSect = document.querySelector(".contact h4")
contactSect.textContent = siteContent["contact"]["contact-h4"]

const contactSectInfo = document.querySelectorAll(".contact p")
contactSectInfo.textContent = siteContent["contact"]["contact-p"]


// const contactInfo = document.querySelector(".contact p");
// contactInfo.textContent = siteContent["contact p"]




















