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

//  =========  Top Nav ==========
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItem = document.querySelectorAll("nav a");


navItem[0].innerHTML = siteContent["nav"]["nav-item-1"];
navItem[1].innerHTML = siteContent["nav"]["nav-item-2"];
navItem[2].innerHTML = siteContent["nav"]["nav-item-3"];
navItem[3].innerHTML = siteContent["nav"]["nav-item-4"];
navItem[4].innerHTML = siteContent["nav"]["nav-item-5"];
navItem[5].innerHTML = siteContent["nav"]["nav-item-6"];



// =========== CTA ==========
let ctaH1 = document.querySelector(".cta .cta-text h1");
let ctaButton = document.querySelector(".cta .cta-text button");
let ctaImg = document.getElementById("cta-img");


ctaH1.innerHTML = siteContent["cta"]["h1"];
ctaButton.innerHTML = siteContent["cta"]["button"];
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// ======== Content ===========
let topContent = document.querySelectorAll(".text-content h4");
let pContent = document.querySelectorAll(".text-content p");


let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

topContent[0].innerHTML = siteContent["main-content"]["features-h4"];
pContent[0].innerHTML = siteContent["main-content"]["features-content"];

topContent[1].innerHTML = siteContent["main-content"]["about-h4"];
pContent[1].innerHTML = siteContent["main-content"]["about-content"];

topContent[2].innerHTML = siteContent["main-content"]["services-h4"];
pContent[2].innerHTML = siteContent["main-content"]["services-content"];

topContent[3].innerHTML = siteContent["main-content"]["product-h4"];
pContent[3].innerHTML = siteContent["main-content"]["product-content"];

topContent[4].innerHTML = siteContent["main-content"]["vision-h4"];
pContent[4].innerHTML = siteContent["main-content"]["vision-content"];

// =========== Contact ===========
let contactH4 = document.querySelector(".contact h4");
let contactContent = document.querySelectorAll(".contact p");


contactH4.innerHTML = siteContent["contact"]["contact-h4"];
contactContent[0].innerHTML = siteContent["contact"]["address"];
contactContent[1].innerHTML = siteContent["contact"]["phone"];
contactContent[2].innerHTML = siteContent["contact"]["email"];

// ======= Footer ========
let footer = document.querySelector("footer p");


footer.innerHTML = siteContent["footer"]["copyright"];



// ========== Stretch Goals ========
for (let i =0; i<navItem.length; i++){
  navItem[i].style.color = "green";
};


