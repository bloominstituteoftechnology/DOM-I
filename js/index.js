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

//grab elements and assign them to a variable
const nav = document.querySelectorAll("a");
const title = document.querySelector("h1");
const btn = document.querySelector("button");
const codePic = document.getElementById("cta-img");
const h4Content = document.querySelectorAll("h4");
const midPic = document.getElementById("middle-img");
const textContent = document.querySelectorAll("p");

//loop thru nav items to diplay them
for (let i=1; i<7; i++){
  let prop = "nav-item-" +i;
  nav[i-1].innerHTML = siteContent["nav"][prop];
}

//make nav items green
nav.forEach(element => element.style.color = "green");

//set content to title
title.innerHTML = siteContent["cta"]["h1"];

//set content to button
btn.innerHTML = siteContent["cta"]["button"];

//set content to picture
codePic.setAttribute('src', siteContent["cta"]["img-src"]);

//set h4 content
h4Content[0].innerHTML = siteContent["main-content"]["features-h4"];
h4Content[1].innerHTML = siteContent["main-content"]["about-h4"];
h4Content[2].innerHTML = siteContent["main-content"]["services-h4"];
h4Content[3].innerHTML = siteContent["main-content"]["product-h4"];
h4Content[4].innerHTML = siteContent["main-content"]["vision-h4"];
h4Content[5].innerHTML = siteContent["contact"]["contact-h4"];

//set middle image content
midPic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//set text content
textContent[0].innerHTML = siteContent["main-content"]["features-content"];
textContent[1].innerHTML = siteContent["main-content"]["about-content"];
textContent[2].innerHTML = siteContent["main-content"]["services-content"];
textContent[3].innerHTML = siteContent["main-content"]["product-content"];
textContent[4].innerHTML = siteContent["main-content"]["vision-content"];
textContent[5].innerHTML = siteContent["contact"]["address"];
textContent[6].innerHTML = siteContent["contact"]["phone"];
textContent[7].innerHTML = siteContent["contact"]["email"];
textContent[8].innerHTML = siteContent["footer"]["copyright"];

//create new elements and assign them to variables
const prependA = document.createElement("a");
const appendA = document.createElement("a");

//set content and style to new elements
prependA.href = "#";
prependA.innerHTML = "Prepend";
prependA.style.color = "red";
appendA.href = "#";
appendA.innerHTML = "Append";
appendA.style.color = "red";

//grab elements and prepend/append them
const newElements = document.querySelector("nav");
newElements.prepend(prependA);
newElements.appendChild(appendA);