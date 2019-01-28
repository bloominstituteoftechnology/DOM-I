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
let logo = document.getElementById("logo-img").setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll("a")

nav[0].textContent = siteContent.nav["nav-item-1"]
nav[1].textContent = siteContent.nav["nav-item-2"]
nav[2].textContent = siteContent.nav["nav-item-3"]
nav[3].textContent = siteContent.nav["nav-item-4"]
nav[4].textContent = siteContent.nav["nav-item-5"]
nav[5].textContent = siteContent.nav["nav-item-6"]

let mainNav = document.querySelector("nav");

let firstAnchor = document.createElement("a");
firstAnchor.href = "#";	firstAnchor.href = "#";
firstAnchor.textContent = "Get Started";
firstAnchor.style.color = "green";

let lastAnchor = document.createElement("a");
lastAnchor.href = "#";	lastAnchor.href = "#";
lastAnchor.textContent = "Blog";
lastAnchor.style.color = "green";

mainNav.prepend(firstAnchor);
mainNav.appendChild(lastAnchor);	


nav.forEach(nav => nav.style.color = 'green')

let contentHeader = document.querySelectorAll("h4")

contentHeader[0].textContent = siteContent["main-content"]["features-h4"]
contentHeader[1].textContent = siteContent["main-content"]["about-h4"]
contentHeader[2].textContent = siteContent["main-content"]["services-h4"]
contentHeader[3].textContent = siteContent["main-content"]["product-h4"]
contentHeader[4].textContent = siteContent["main-content"]["vision-h4"]
contentHeader[5].textContent = siteContent["contact"]["contact-h4"]

console.log(contentHeader)

let mainText = document.querySelectorAll("p")

mainText[0].textContent = siteContent["main-content"]["features-content"]
mainText[1].textContent = siteContent["main-content"]["about-content"]
mainText[2].textContent = siteContent["main-content"]["services-content"]
mainText[3].textContent = siteContent["main-content"]["product-content"]
mainText[4].textContent = siteContent["main-content"]["vision-content"]
mainText[5].textContent = siteContent["contact"]["address"]
mainText[6].textContent = siteContent["contact"]["phone"]
mainText[7].textContent = siteContent["contact"]["email"]
mainText[8].textContent = siteContent["footer"]["copyright"]

console.log(mainText)


let h1 = document.querySelector("h1").innerHTML = "Dom<br>is<br>Awesome"
// siteContent.cta.h1

let mainImg = document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"])

let mainBtn = document.querySelector("button").textContent = siteContent.cta.button

let scrollImg = document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"])

