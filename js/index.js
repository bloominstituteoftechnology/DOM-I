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
let doc = document;

let logo = doc.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


let nav = doc.querySelectorAll("nav a");
nav[0].innerHTML = siteContent["nav"]["nav-item-1"];
nav[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav[5].innerHTML = siteContent["nav"]["nav-item-6"];

nav[0].style.color = "green";
nav[1].style.color = "green";
nav[2].style.color = "green";
nav[3].style.color = "green";
nav[4].style.color = "green";
nav[5].style.color = "green";

// Append

let node = doc.createElement("A");
let textNode = doc.createTextNode("Goodbye");
node.appendChild(textNode);
doc.querySelector("nav").appendChild(node);


// Prepend
let node2 = doc.createElement("A");
let textNode2 = doc.createTextNode("Hello");
node2.prepend(textNode2);
doc.querySelector("nav").prepend(node2);


let ctaText = doc.querySelector(".cta-text h1");
ctaText.innerHTML = "DOM <br> Is<br> Awesome";

let button = doc.querySelector(".cta-text button");
button.innerHTML = siteContent["cta"]["button"]

let ctaIMG = doc.querySelector("#cta-img");
ctaIMG.src = siteContent["cta"]["img-src"]

let features = doc.querySelectorAll(".text-content h4");
features[0].innerHTML = siteContent["main-content"]["features-h4"]

let featuresText = doc.querySelectorAll(".text-content p");
featuresText[0].innerHTML = siteContent["main-content"]["features-content"]

let about = features[1];
about.innerHTML = siteContent["main-content"]["about-h4"];

let aboutText = featuresText[1];
aboutText.innerHTML = siteContent["main-content"]["about-content"];


let bottomHeader = doc.querySelectorAll(".bottom-content .text-content h4");
bottomHeader[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomHeader[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomHeader[2].innerHTML = siteContent["main-content"]["vision-h4"];

let middleIMG = doc.querySelector(".middle-img");
middleIMG.src = siteContent["main-content"]["middle-img-src"];

let bottomText = doc.querySelectorAll(".bottom-content .text-content p");
bottomText[0].innerHTML = siteContent["main-content"]["services-content"];
bottomText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomText[2].innerHTML = siteContent["main-content"]["vision-content"];

let contactH4 = doc.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

let contact = doc.querySelectorAll(".contact p");
contact[0].innerHTML = siteContent["contact"]["address"];
contact[1].innerHTML = siteContent["contact"]["phone"];
contact[2].innerHTML = siteContent["contact"]["email"];


let footer = doc.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];
















