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
logo.setAttribute("src", "img/logo.png");
//logo.setAttribute("src", siteContent["nav"]["img-src"];
//logo.setAttribute('src', '. /img/logo.png';

let navBar = document.querySelector("nav");
navBar.style = "display: flex; justify-content: space-between;";

//let nav1 = document.querySelector("nav a");
//nav1.innerHTML = "Services";

let nav1 = document.querySelectorAll("nav a");
nav1[0].innerHTML = "Services";
nav1[1].innerHTML = "Product";
nav1[2].innerHTML = "Vision";
nav1[3].innerHTML = "Features";
nav1[4].innerHTML = "About";
nav1[5].innerHTML = "Contact";


//"cta": {
  //  "h1": "DOM Is Awesome",
    //"button": "Get Started",
    //"img-src": "img/header-img.png"
    
let ctaSect = document.querySelector(".cta");    
let ctaText = document.querySelector(".cta-text");
ctaText.innerHTML = "DOM <br>Is <br>Awesome";
ctaText.style = "font-family: Bangers; letter-spacing: 0px;";

let myButton = document.getElementsByTagName("button");
myButton.innerHTML = "Get Started"
myButton.style = "border: 1px black solid;";

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", "img/header-img.png");

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "img/mid-page-accent.jpg");

let mainContent = document.querySelector(".main-content");
mainContent.style = "display: flex; justify-content: space-evenly; flex-wrap: wrap; align-text: left;";

let subHeads = document.querySelectorAll(".main-content  h4");
subHeads[0].innerHTML = "Features";
subHeads[1].innerHTML = "About";
subHeads[2].innerHTML = "Services";
subHeads[3].innerHTML = "Product";
subHeads[4].innerHTML = "Vision";

let paragraphs = document.querySelectorAll(".main-content  p");
paragraphs[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[2].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[3].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[4].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contactHead = document.querySelector(".contact  h4");
contactHead.innerHTML = "Contact";

let contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerHTML = "123 Way 456 Street <br>Somewhere, USA"
contactContent[1].innerHTML = "1 (888) 888-8888"
contactContent[2].innerHTML = "sales@greatidea.io"
contactContent.style = "margin-top: 5px;";

let foot = document.getElementsByTagName("footer");
foot.innerHTML = "Copyright Great Idea! 2018";