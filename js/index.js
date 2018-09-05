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

//I know there is a more concise way to code this, will come back to make it "pretty" when time permits
let nav = document.querySelectorAll("nav a");
for (let i = 0; i < nav.length; i++){
  nav[i].innerHTML = siteContent["nav"][`nav-item-${i+1}`]
  nav[i].style.color = "green"
};
// nav[0].innerHTML = siteContent.nav["nav-item-1"]
// nav[1].innerHTML = siteContent.nav["nav-item-2"]
// nav[2].innerHTML = siteContent.nav["nav-item-3"]
// nav[3].innerHTML = siteContent.nav["nav-item-4"]
// nav[4].innerHTML = siteContent.nav["nav-item-5"]
// nav[5].innerHTML = siteContent.nav["nav-item-6"]


//cta
let h1 = document.querySelector("h1");
h1.innerHTML = siteContent.cta["h1"]

let button = document.querySelector("button");
button.innerHTML = siteContent.cta["button"]

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"])


//main-content
let topHeader = document.querySelectorAll(".top-content h4");
topHeader[0].innerHTML = siteContent["main-content"]["features-h4"]
topHeader[1].innerHTML = siteContent["main-content"]["about-h4"]

let topContent = document.querySelectorAll(".top-content p");
topContent[0].innerHTML = siteContent["main-content"]["features-content"]
topContent[1].innerHTML = siteContent["main-content"]["about-content"]

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomHeader = document.querySelectorAll(".bottom-content h4");
bottomHeader[0].innerHTML = siteContent["main-content"]["services-h4"]
bottomHeader[1].innerHTML = siteContent["main-content"]["product-h4"]
bottomHeader[2].innerHTML = siteContent["main-content"]["vision-h4"]

let bottomContent = document.querySelectorAll(".bottom-content p");
bottomContent[0].innerHTML = siteContent["main-content"]["services-content"]
bottomContent[1].innerHTML = siteContent["main-content"]["product-content"]
bottomContent[2].innerHTML = siteContent["main-content"]["vision-content"]


//contact
let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"]

let contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerHTML = siteContent["contact"]["address"]
contactContent[1].innerHTML = siteContent["contact"]["phone"]
contactContent[2].innerHTML = siteContent["contact"]["email"]


//footer
let footer = document.querySelector("footer p")
footer.innerHTML = siteContent["footer"]["copyright"]


//.appendChild and .prepend
const newNav = document.createElement('a');
const text = document.createTextNode('Home');
newNav.style.color = "purple";
newNav.appendChild(text);

document.querySelector('nav').prepend(newNav);
// newNav.innerHTML = "Home";
// newNav.setAttribute('href', 'newNav.html');
// newNav.style.color = "purple";
// nav[i].prepend(newNav);

const newNav2 = document.createElement('a');
const text2 = document.createTextNode('End');
newNav2.style.color = "purple";
newNav2.appendChild(text2);

document.querySelector('nav').append(newNav2);