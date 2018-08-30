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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.getElementsByTagName("a");
nav[0].style.color = "green";
nav[1].style.color = "green";
nav[2].style.color = "green";
nav[3].style.color = "green";
nav[4].style.color = "green";
nav[5].style.color = "green";
nav[0].innerHTML = siteContent["nav"]["nav-item-1"];
nav[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav[5].innerHTML = siteContent["nav"]["nav-item-6"];


let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = siteContent["cta"]["h1"];

let ctabutn = document.querySelector("button");
ctabutn.innerHTML = siteContent["cta"]["button"];

let allH4 = document.querySelectorAll("h4");
allH4[0].innerHTML = siteContent["main-content"]["features-h4"];
allH4[1].innerHTML = siteContent["main-content"]["about-h4"];
allH4[2].innerHTML = siteContent["main-content"]["services-h4"];
allH4[3].innerHTML = siteContent["main-content"]["product-h4"];
allH4[4].innerHTML = siteContent["main-content"]["vision-h4"];
allH4[5].innerHTML = siteContent["contact"]["contact-h4"];

let maincontentp = document.querySelectorAll(".text-content");
maincontentp[0].innerHTML = siteContent["main-content"]["features-content"];
maincontentp[1].innerHTML = siteContent["main-content"]["about-content"];
maincontentp[2].innerHTML = siteContent["main-content"]["services-content"];
maincontentp[3].innerHTML = siteContent["main-content"]["product-content"];
maincontentp[4].innerHTML = siteContent["main-content"]["vision-content"];


let middleimg = document.getElementById("middle-img");
middleimg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//let contPara = document.querySelectorAll(".contact");
//contPara[1].innerHTML = siteContent["contact"]["address"];

let footerPara = document.getElementsByTagName('p');
footerPara[footerPara.length - 1].innerHTML = siteContent["footer"]["copyright"];