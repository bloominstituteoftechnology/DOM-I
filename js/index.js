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

// Example: Update the img src for the Great Idea logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Update Logos
let logo2 = document.getElementById("cta-img");
logo2.setAttribute("src", siteContent["cta"]["img-src"]);
let midPageLogo = document.getElementById("middle-img");
midPageLogo.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Navigation
const navitems = ["Services", "Product", "Vision", "Features", "About", "Contact"];
let navAnchor = document.querySelectorAll("a");
for (let i = 0; i < navitems.length; i ++){
  navAnchor[i].innerText = navitems[i];
  //green nav
  navAnchor[i].style.color = "green";
}

//add two new items
//both items will not stay at same time...that's weird
let nav = document.querySelector("nav");
let navAdd = document.createElement("li");
let secondNavAdd = document.createElement("li");
navAdd.innerHTML = "Hey I just got added!"
secondNavAdd.innerHTML = "me too!!"
console.log(nav);
console.log(navAdd);
nav.prepend(navAdd);
nav.appendChild(secondNavAdd);

//Dom is Awesome heading
let h1 = document.querySelector("h1");
h1.innerText = `Dom \n is \n Awesome`;

let mainButton = document.querySelector("button");
mainButton.innerText= "Get Started";

//content sections
//I feel like this is cheating, but I did it anyway
const contentHeaders = ["Features", "About", "Services", "Product", "Vision", "Contact"];
const paraContent = ["Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis", "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "123 Way 456 Street \n Somewhere, USA", "1 (888) 888-8888", "sales@greatidea.io", "Copyright Great Idea! 2018"];

let h4 = document.querySelectorAll("h4");
let p = document.querySelectorAll("p");
for (let i = 0; i < contentHeaders.length; i++){
  h4[i].innerText = contentHeaders[i];
}

for (let i = 0; i < paraContent.length; i++){
  p[i].innerText = paraContent[i];
}