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

let navs = document.querySelectorAll("nav a");
navs[0].innerHTML = siteContent["nav"]["nav-item-1"];
navs[1].innerHTML = siteContent["nav"]["nav-item-2"];
navs[2].innerHTML = siteContent["nav"]["nav-item-3"];
navs[3].innerHTML = siteContent["nav"]["nav-item-4"];
navs[4].innerHTML = siteContent["nav"]["nav-item-5"];
navs[5].innerHTML = siteContent["nav"]["nav-item-6"];

let ctaHeader = document.querySelector(".cta .cta-text h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"];
let ctaBtn = document.querySelector(".cta .cta-text button");
ctaBtn.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainHeaders = document.querySelectorAll(".text-content h4");
mainHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
mainHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
mainHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
mainHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
mainHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

let mainText = document.querySelectorAll(".text-content p");
mainText[0].innerHTML = siteContent["main-content"]["features-content"];
mainText[1].innerHTML = siteContent["main-content"]["about-content"];
mainText[2].innerHTML = siteContent["main-content"]["services-content"];
mainText[3].innerHTML = siteContent["main-content"]["product-content"];
mainText[4].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactHead = document.querySelector(".contact h4");
contactHead.innerHTML = siteContent["contact"]["contact-h4"];

let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["phone"];
contactInfo[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"];

navs.forEach(function(nav) {
  nav.style.color = "green";
})

let nav = document.querySelector('nav');
let homeNav = document.createElement('a');
homeNav.appendChild(document.createTextNode("Home"));
homeNav.style.color = "green";
nav.prepend(homeNav);

let blogNav = document.createElement('a');
blogNav.appendChild(document.createTextNode("Blog"));
blogNav.style.color = "green";
nav.appendChild(blogNav);

let header = document.querySelector('header');

header.style.backgroundColor = "lightGray";
ctaBtn.style.backgroundColor = "lightGreen";
middleImg.style.boxShadow = "10px 10px 20px lightBlue";
ctaImg.style.borderRadius = "50%";
ctaImg.style.boxShadow = "10px 10px 20px lightBlue";

ctaBtn.addEventListener('click', function() {
  alert("I've been clicked!");
})