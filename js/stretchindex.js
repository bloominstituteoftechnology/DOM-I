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

// Example: Update the img src for the logo	// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const navItems = document.getElementsByTagName("a");
navItems[0].innerHTML = siteContent["nav"]["nav-item-1"]
navItems[0].style.color = "darkorchid";
navItems[1].innerHTML = siteContent["nav"]["nav-item-2"]
navItems[1].style.color = "darkorchid";
navItems[2].innerHTML = siteContent["nav"]["nav-item-3"]
navItems[2].style.color = "darkorchid";
navItems[3].innerHTML = siteContent["nav"]["nav-item-4"]
navItems[3].style.color = "darkorchid";
navItems[4].innerHTML = siteContent["nav"]["nav-item-5"]
navItems[4].style.color = "darkorchid";
navItems[5].innerHTML = siteContent["nav"]["nav-item-6"]
navItems[5].style.color = "darkorchid";

const mainHeading = document.querySelector("h1");
mainHeading.innerHTML = siteContent["cta"]["h1"]
 const mainBtn = document.querySelector("Button");
mainBtn.innerHTML = siteContent["cta"]["button"]
 const mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

const headings = document.getElementsByTagName("h4");
headings[0].innerHTML = siteContent["main-content"]["features-h4"]
headings[0].style.color = "darkorchid";
headings[1].innerHTML = siteContent["main-content"]["about-h4"]
headings[1].style.color = "darkorchid";
headings[2].innerHTML = siteContent["main-content"]["services-h4"]
headings[2].style.color = "darkorchid";
headings[3].innerHTML = siteContent["main-content"]["product-h4"]
headings[3].style.color = "darkorchid";
headings[4].innerHTML = siteContent["main-content"]["vision-h4"]
headings[4].style.color = "darkorchid";
headings[5].innerHTML = siteContent["contact"]["contact-h4"]
headings[5].style.color = "darkorchid";
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const paragraphContent = document.getElementsByTagName("p");
paragraphContent[0].innerHTML = siteContent["main-content"]["features-content"]
paragraphContent[1].innerHTML = siteContent["main-content"]["about-content"]
paragraphContent[2].innerHTML = siteContent["main-content"]["services-content"]
paragraphContent[3].innerHTML = siteContent["main-content"]["product-content"]
paragraphContent[4].innerHTML = siteContent["main-content"]["vision-content"]
paragraphContent[5].innerHTML = siteContent["contact"]["address"]
paragraphContent[6].innerHTML = siteContent["contact"]["phone"]
paragraphContent[7].innerHTML = siteContent["contact"]["email"]
paragraphContent[8].innerHTML = siteContent["footer"]["copyright"]






