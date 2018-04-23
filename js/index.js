const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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

let headerA = document.querySelectorAll("a");
headerA[0].innerHTML = siteContent["nav"]["nav-item-1"];
headerA[1].innerHTML = siteContent["nav"]["nav-item-2"];
headerA[2].innerHTML = siteContent["nav"]["nav-item-3"];
headerA[3].innerHTML = siteContent["nav"]["nav-item-4"];
headerA[4].innerHTML = siteContent["nav"]["nav-item-5"];


let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"]);



let tagElements = document.querySelector('.cta-text h1' );
tagElements.innerHTML = siteContent['cta']['h1'];

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let main = document.querySelectorAll("h4","p");
main[0].innerHTML = siteContent["main-content"]["features-h4"];
main[0].innerHTML = siteContent["main-content"]["features-content"];
main[1].innerHTML = siteContent["main-content"]["about-h4"];
main[1].innerHTML = siteContent["main-content"]["about-content"];
main[2].innerHTML = siteContent["main-content"]["services-h4"];
main[2].innerHTML = siteContent["main-content"]["services-content"];
main[3].innerHTML = siteContent["main-content"]["product-h4"];
main[3].innerHTML = siteContent["main-content"]["product-content"];
main[4].innerHTML = siteContent["main-content"]["vision-h4"];
main[4].innerHTML = siteContent["main-content"]["vision-content"];



let contact = document.querySelectorAll("h4","p");
contact[0].innerHTML = siteContent["contact"]["contact-h4"];
contact[1].innerHTML = siteContent["contact"]["address"];
contact[2].innerHTML = siteContent["contact"]["phone"];
contact[3].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelectorAll("p");
footer.innerHTML = siteContent["footer"]["footer"];

