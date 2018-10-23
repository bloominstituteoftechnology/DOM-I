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
    "h1": "DOM<br>Is<br>Awesome",
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
    "address" : "123 Way 456 Street \r\n Somewhere, USA",
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

//my code

//images
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];
ctaImg.alt = "Header Image";

let midImg = document.querySelector("#middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];
midImg.alt = "Middle Image";

//nav
let navArr = Array.from(document.querySelectorAll("a"));
navArr.forEach(function(item,i){
  navArr[i].textContent = siteContent["nav"][`nav-item-${i+1}`]
});

//nav-addition
const newElement1 = document.createElement('a');
const newElement2 = document.createElement('a');
newElement1.href = "#";
newElement1.textContent = "Schedule";
newElement2.href = "#";
newElement2.textContent = "Home";

let navbar = document.querySelector("nav");
navbar.prepend(newElement2);
navbar.appendChild(newElement1);
navbar.style.backgroundColor = "pink";
navbar.style.padding = "10px";
navbar.style.borderRadius = '10px';

Array.from(document.querySelectorAll("a")).forEach(function(item){
  item.style.color = "green";
})

//cta
let containerBody = document.querySelector(".container")
let ctaHead = document.querySelector("h1");
ctaHead.innerHTML = siteContent["cta"]["h1"];
let ctaBtn = document.querySelector("button");
ctaBtn.textContent = siteContent["cta"]["button"];
let ctaText = document.querySelector(".cta-text");
ctaBtn.addEventListener("click", function(){containerBody.style.backgroundColor = "green"});

//main-content
let mainHeadArr = Array.from(document.querySelectorAll("h4"));
let bodyArr = ["features", "about", "services", "product", "vision"]

mainHeadArr.forEach(function(item,i){
  mainHeadArr[i].textContent = siteContent["main-content"][`${bodyArr[i]}-h4`];
});

let contentArr = Array.from(document.querySelectorAll(".text-content p"));

contentArr.forEach(function(item,i){
  contentArr[i].textContent = siteContent["main-content"][`${bodyArr[i]}-content`];
});

//contact
let contactHead = document.querySelector(".contact h4");
contactHead.textContent = siteContent["contact"]["contact-h4"];

let contactArr = document.querySelectorAll(".contact p");
let contactValue = ["address", "phone", "email"];
contactArr.forEach(function(item, i){
  contactArr[i].textContent = siteContent["contact"][`${contactValue[i]}`];
});

//footer
let footerElement = document.querySelector("footer p");
footerElement.textContent = siteContent["footer"]["copyright"];




