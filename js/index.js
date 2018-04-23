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
logo.setAttribute('src', 'https://raw.githubusercontent.com/maribelcuales/DOM-I/master/img/logo.png')

// NAV

let navItem1 = document.querySelector("a")
navItem1.innerHTML = siteContent["nav"]["nav-item-1"]

let navItem2 = document.getElementsByTagName("a");
console.log(navItem2[1].innerHTML);
navItem2[1].innerHTML = siteContent["nav"]["nav-item-2"]

let navItem3 = document.getElementsByTagName("a");
console.log(navItem2[2].innerHTML);
navItem2[2].innerHTML = siteContent["nav"]["nav-item-3"]

let navItem4 = document.getElementsByTagName("a");
console.log(navItem2[3].innerHTML);
navItem2[3].innerHTML = siteContent["nav"]["nav-item-4"]

let navItem5 = document.getElementsByTagName("a");
console.log(navItem2[4].innerHTML);
navItem2[4].innerHTML = siteContent["nav"]["nav-item-5"]

let navItem6 = document.getElementsByTagName("a");
console.log(navItem2[5].innerHTML);
navItem2[5].innerHTML = siteContent["nav"]["nav-item-6"] 

// CTA

let ctaText = document.querySelector("h1");
console.log(ctaText.innerHTML);
ctaText.innerHTML = siteContent["cta"]["h1"]

let ctaButton = document.getElementsByClassName(".cta-text");
console.log(ctaButton.innerHTML);
ctaButton.innerHTML = sitecontent["cta"]["button"]


let middleImg = document.getElementById("cta-img");
middleImg.setAttribute('src', sitecontent["cta"]["img-src"]);
middleImg.setAttribute('src', 'https://raw.githubusercontent.com/maribelcuales/DOM-I/master/img/header-img.png');