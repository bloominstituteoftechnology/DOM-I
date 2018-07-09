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

let tagLinks = document.getElementsByTagName("a");
tagLinks[0].innerHTML = siteContent["nav"]["nav-item-1"]
tagLinks[1].innerHTML = siteContent["nav"]["nav-item-2"]
tagLinks[2].innerHTML = siteContent["nav"]["nav-item-3"]
tagLinks[3].innerHTML = siteContent["nav"]["nav-item-4"]
tagLinks[4].innerHTML = siteContent["nav"]["nav-item-5"]
tagLinks[5].innerHTML = siteContent["nav"]["nav-item-6"]

let awesomeWords = document.querySelector("h1");
awesomeWords.innerHTML = siteContent["cta"]["h1"]

let ctaButton = document.querySelector("Button");
ctaButton.innerHTML = siteContent["cta"]["button"]

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
// ctaImg.src = "img/header-img.png"

let paragraphHeadings = document.getElementsByTagName("h4");
paragraphHeadings[0].innerHTML = siteContent["main-content"]["features-h4"]
paragraphHeadings[1].innerHTML = siteContent["main-content"]["about-h4"]
paragraphHeadings[2].innerHTML = siteContent["main-content"]["services-h4"]
paragraphHeadings[3].innerHTML = siteContent["main-content"]["product-h4"]
paragraphHeadings[4].innerHTML = siteContent["main-content"]["vision-h4"]
paragraphHeadings[5].innerHTML = siteContent["contact"]["contact-h4"]

let paragraphText = document.getElementsByTagName("p");
paragraphText[0].innerHTML = siteContent["main-content"]["features-content"]
paragraphText[1].innerHTML = siteContent["main-content"]["about-content"]
paragraphText[2].innerHTML = siteContent["main-content"]["services-content"]
paragraphText[3].innerHTML = siteContent["main-content"]["product-content"]
paragraphText[4].innerHTML = siteContent["main-content"]["vision-content"]
paragraphText[5].innerHTML = siteContent["contact"]["address"]
paragraphText[6].innerHTML = siteContent["contact"]["phone"]
paragraphText[7].innerHTML = siteContent["contact"]["email"]
paragraphText[8].innerHTML = siteContent["footer"]["copyright"]

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// Task 3: color of items
tagLinks[0].style.color = 'green';
tagLinks[1].style.color = 'green';
tagLinks[2].style.color = 'green';
tagLinks[3].style.color = 'green';
tagLinks[4].style.color = 'green';
tagLinks[5].style.color = 'green';

//Task 4: CreateElement, appendChild(), & prepend()
let newNavItem = document.createElement("a");
let newNavText = document.createTextNode("New Item")

newNavItem.appendChild(newNavText);

let navBar = document.querySelector("nav");
navBar.prepend(newNavItem);

let secondNewNavItem = document.createElement("a");
let secondNewNavItemText = document.createTextNode("New Item 2");

secondNewNavItem.appendChild(secondNewNavItemText);
navBar.appendChild(secondNewNavItem);




