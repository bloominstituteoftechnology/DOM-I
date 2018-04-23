
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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

let actionImg = document.getElementById("cta-img");
actionImg.setAttribute('src', siteContent["cta"]["img-src"])

let actionHeader = document.querySelector("h1");
actionHeader.innerHTML = (siteContent["cta"]["h1"])

let actionButton = document.querySelector("button");
actionButton.innerHTML = (siteContent["cta"]["button"])

let centralImg = document.getElementById("middle-img");
centralImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let navItems = document.getElementsByTagName("a");
navItems[0].innerHTML = (siteContent["nav"]["nav-item-1"])
navItems[1].innerHTML = (siteContent["nav"]["nav-item-2"])
navItems[2].innerHTML = (siteContent["nav"]["nav-item-3"])
navItems[3].innerHTML = (siteContent["nav"]["nav-item-4"])
navItems[4].innerHTML = (siteContent["nav"]["nav-item-5"])



let navBar = document.querySelector('nav');
let firstNewTag = document.createElement('a');
firstNewTag.setAttribute('href', '#');
firstNewTag.innerHTML = 'Home';
let secondNewTag = document.createElement('a');
secondNewTag.setAttribute('href', '#');
secondNewTag.innerHTML = 'Test';
navBar.prepend(firstNewTag);
navBar.appendChild(secondNewTag);
navBar.style.color = 'green';


let contentHeaders = document.getElementsByTagName("h4");
contentHeaders[0].innerHTML = (siteContent["main-content"]["features-h4"])
contentHeaders[1].innerHTML = (siteContent["main-content"]["about-h4"])
contentHeaders[2].innerHTML = (siteContent["main-content"]["services-h4"])
contentHeaders[3].innerHTML = (siteContent["main-content"]["product-h4"])
contentHeaders[4].innerHTML = (siteContent["main-content"]["vision-h4"])
contentHeaders[5].innerHTML = (siteContent["contact"]["contact-h4"])

let contentBody = document.getElementsByTagName("p");
contentBody[0].innerHTML = (siteContent["main-content"]["features-content"])
contentBody[1].innerHTML = (siteContent["main-content"]["about-content"])
contentBody[2].innerHTML = (siteContent["main-content"]["services-content"])
contentBody[3].innerHTML = (siteContent["main-content"]["product-content"])
contentBody[4].innerHTML = (siteContent["main-content"]["vision-content"])
contentBody[5].innerHTML = (siteContent["contact"]["address"])
contentBody[6].innerHTML = (siteContent["contact"]["phone"])
contentBody[7].innerHTML = (siteContent["contact"]["email"])
contentBody[8].innerHTML = (siteContent["footer"]["copyright"])

//Nav text color
navItems[0].style.color = 'green';
navItems[1].style.color = 'green';
navItems[2].style.color = 'green';
navItems[3].style.color = 'green';
navItems[4].style.color = 'green';
navItems[5].style.color = 'green';
navItems[6].style.color = 'green';
navItems[7].style.color = 'green';