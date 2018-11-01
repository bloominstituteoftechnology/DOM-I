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
    "h1": "DOM<br> Is<br> Awesome",
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

// images

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let mainContentImg = document.getElementById("middle-img");
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Nav

let nav = document.querySelector("nav");

let navigation = document.querySelectorAll("a");

for(let i = 0;i < navigation.length;i++){
  navigation[i].textContent = siteContent['nav'][`nav-item-${i}`]
}

let newLinks = document.createElement("a");

newLinks.textContent = "Shop"

nav.appendChild(newLinks);

let navItems = document.querySelectorAll("a");

navItems.forEach(x => x.style.color = "green")

// CTA

let cta = document.getElementsByTagName("h1")
cta[0].innerHTML = siteContent["cta"]["h1"]

let buttonText = document.getElementsByTagName("button")
buttonText[0].innerHTML = siteContent["cta"]["button"]
console.log(cta)

// Main Content
  // Top Content
let features = document.getElementsByTagName("h4")
let featuresP = document.getElementsByTagName("p")
features[0].innerHTML = siteContent["main-content"]["features-h4"]
featuresP[0].innerHTML = siteContent["main-content"]["features-content"]

let about = document.getElementsByTagName("h4")
let aboutP = document.getElementsByTagName("p")
about[1].innerHTML = siteContent["main-content"]["about-h4"]
aboutP[1].innerHTML = siteContent["main-content"]["about-content"]

  // Bottom Content
let service = document.getElementsByTagName("h4")
let serviceP = document.getElementsByTagName("p")
service[2].innerHTML = siteContent["main-content"]["services-h4"]
serviceP[2].innerHTML = siteContent["main-content"]["services-content"]

let product = document.getElementsByTagName("h4")
let productP = document.getElementsByTagName("p")
product[3].innerHTML = siteContent["main-content"]["product-h4"]
productP[3].innerHTML = siteContent["main-content"]["product-content"]

let vision = document.getElementsByTagName("h4")
let visionP = document.getElementsByTagName("p")
vision[4].innerHTML = siteContent["main-content"]["vision-h4"]
visionP[4].innerHTML = siteContent["main-content"]["vision-content"]

// Contact

let contact = document.getElementsByTagName("h4")
let address = document.getElementsByTagName("p")
let phone = document.getElementsByTagName("p")
let email = document.getElementsByTagName("p")
contact[5].innerHTML = siteContent["contact"]["contact-h4"]
address[5].innerHTML = siteContent["contact"]["address"]
phone[6].innerHTML = siteContent["contact"]["phone"]
email[7].innerHTML = siteContent["contact"]["email"]

// Footer
let copyRight = document.getElementsByTagName("p")
copyRight[8].innerHTML = siteContent["footer"]["copyright"]





