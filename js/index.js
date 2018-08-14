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
//Navigation
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navHeader = document.querySelectorAll("nav a");
navHeader.forEach((navItem,index) => {
navItem.innerHTML = siteContent.nav[`nav-item-${index+1}`]
});

//Call To Action
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let ctaText = document.querySelector("h1");
ctaText.innerHTML = siteContent.cta["h1"]

let ctaBtn = document.querySelector("button");
ctaBtn.innerHTML = siteContent.cta["button"]

//Main Content

let contentTitle = document.querySelectorAll(".text-content");

contentTitle[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"]
contentTitle[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"]
contentTitle[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"]
contentTitle[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"]
contentTitle[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"]
contentTitle[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"]
contentTitle[1].getElementsByTagName("p")[0].innerHTML= siteContent["main-content"]["about-content"]
contentTitle[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"]
contentTitle[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"]
contentTitle[4].getElementsByTagName("p")[0].innerHTML= siteContent["main-content"]["vision-content"]

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Contact
let contact = document.getElementsByClassName("contact")[0];
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

//Footer
let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"]

//Changing Navigation Color
navHeader.forEach((navItem)=> {
  navItem.style.color = "green"
});

//Adding Children to Navigation
navHeader = document.getElementsByTagName("nav")[0];
let createNewNav = (name) => {
  let newNav = document.createElement("a");
  newNav.innerHTML = name;
  return newNav;
}
navHeader.prepend(createNewNav("Buy Now!"));
navHeader.append(createNewNav("Meet the Staff"));