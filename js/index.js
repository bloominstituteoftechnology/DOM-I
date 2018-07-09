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


// nav and logo..........................................................

let navItem = document.querySelectorAll("header nav a"); 
navItem[0].innerHTML = siteContent["nav"]["nav-item-1"];
navItem[1].innerHTML = siteContent["nav"]["nav-item-2"];
navItem[2].innerHTML = siteContent["nav"]["nav-item-3"];
navItem[3].innerHTML = siteContent["nav"]["nav-item-4"];
navItem[4].innerHTML = siteContent["nav"]["nav-item-5"];
navItem[5].innerHTML = siteContent["nav"]["nav-item-6"];

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// cta...................................................................

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let buttonText = document.querySelector("button");
buttonText.innerHTML = siteContent["cta"]["button"];

let ctaText = document.querySelector("h1");
ctaText.innerHTML = "DOM<br> Is<br> Awesome";

// main content...................................................................

let headerItem = document.querySelectorAll(".main-content h4");
headerItem[0].innerHTML = siteContent["main-content"]["features-h4"];
headerItem[1].innerHTML = siteContent["main-content"]["about-h4"];
headerItem[2].innerHTML = siteContent["main-content"]["services-h4"];
headerItem[3].innerHTML = siteContent["main-content"]["product-h4"];
headerItem[4].innerHTML = siteContent["main-content"]["vision-h4"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let mainText = document.querySelectorAll(".main-content p");
mainText[0].innerHTML = siteContent["main-content"]["features-content"];
mainText[1].innerHTML = siteContent["main-content"]["about-content"];
mainText[2].innerHTML = siteContent["main-content"]["services-content"];
mainText[3].innerHTML = siteContent["main-content"]["product-content"];
mainText[4].innerHTML = siteContent["main-content"]["vision-content"];

// contact and footer..............................................................

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

let contactText = document.querySelectorAll(".contact p");
contactText[0].innerHTML = "123 Way 456 Street<br> Somewhere, USA"
contactText[1].innerHTML = siteContent["contact"]["phone"];
contactText[2].innerHTML = siteContent["contact"]["email"];

let footerText = document.querySelector("footer p");
footerText.innerHTML = siteContent["footer"]["copyright"];