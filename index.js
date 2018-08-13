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


//Setup all the variables
let logo = document.getElementById("logo-img");
let nav = document.querySelector("nav");
let navItems = document.querySelectorAll("nav a");
let ctaHeading = document.querySelector(".cta-text h1");
let ctaButton = document.querySelector(".cta-text button");
let ctaImage = document.getElementById("cta-img");
let mainContentHeading = document.querySelectorAll(".main-content h4");
let mainContentContent = document.querySelectorAll(".main-content p");
let middleImg = document.getElementById("middle-img");
let contactHeading = document.querySelector(".contact h4");
let contactContent = document.querySelectorAll(".contact p");
let footer = document.querySelector("footer");

// Setup the content based on DOM selectors
logo.src = siteContent["nav"]["img-src"];

for(let item in navItems) {
  navItems[item].innerHTML = siteContent["nav"]["nav-item-"  + (++item).toString()];
}

//Call To Action Stuff
ctaHeading.innerHTML = siteContent["cta"]["h1"];
ctaButton.innerHTML = siteContent["cta"]["button"];
ctaImage.src = siteContent["cta"]["img-src"];

//Main Content Stuff
mainContentHeading[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentContent[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentHeading[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContentContent[1].innerHTML = siteContent["main-content"]["about-content"];

middleImg.src = siteContent["main-content"]["middle-img-src"];

mainContentHeading[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContentContent[2].innerHTML = siteContent["main-content"]["services-content"];
mainContentHeading[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContentContent[3].innerHTML = siteContent["main-content"]["product-content"];
mainContentHeading[4].innerHTML = siteContent["main-content"]["vision-h4"];
mainContentContent[4].innerHTML = siteContent["main-content"]["vision-content"];

//Contact Section Stuff
contactHeading.innerHTML = siteContent["contact"]["contact-h4"];
contactContent[0].innerHTML = siteContent["contact"]["address"];
contactContent[1].innerHTML = siteContent["contact"]["phone"];
contactContent[2].innerHTML = siteContent["contact"]["email"];

footer.innerHTML = siteContent["footer"]["copyright"];
