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

let nav = document.querySelectorAll("a");
let m = Object.values(siteContent.nav);
console.log(m)

for(let i =0; i < nav.length;i++) {
   nav[i].textContent = m[i]
}


// //h1
let h1 = document.querySelector(".cta .cta-text h1");
h1.textContent = siteContent["cta"]["h1"]

//button
let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];
// console.log(title)

let imgr = document.getElementById("cta-img");
imgr.setAttribute('src', siteContent["cta"]["img-src"])



//middle top h4
let feature = document.querySelectorAll(".main-content .top-content .text-content h4");

feature[0].textContent = siteContent["main-content"][ "features-h4"]
console.log(feature);

feature[1].textContent = siteContent["main-content"][ "about-h4"]
console.log(feature);

//top body
let featureText = document.querySelectorAll(".main-content .top-content .text-content p");

featureText[0].textContent = siteContent["main-content"]["features-content"];
featureText[1].textContent = siteContent["main-content"]["about-content"];

//image Middle
let middleImg = document.querySelector(".middle-img");
console.log(middleImg)
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//bottom headers h4
let services = document.querySelectorAll(".main-content .bottom-content  .text-content h4");
services[0].textContent = siteContent["main-content"]["services-h4"];
services[1].textContent = siteContent["main-content"]["product-h4"];
services[2].textContent = siteContent["main-content"]["vision-h4"];
console.log(services)

//bottom content of middle
let middlebottom = document.querySelectorAll(".bottom-content p");

middlebottom[0].textContent = siteContent["main-content"]["services-content"];
middlebottom[1].textContent = siteContent["main-content"]["product-content"];
middlebottom[2].textContent = siteContent["main-content"]["vision-content"];

