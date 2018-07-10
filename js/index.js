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

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"]);

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navLink =  document.querySelectorAll("nav a");
navLink[0].innerHTML = siteContent["nav"]["nav-item-1"];
navLink[1].innerHTML = siteContent["nav"]["nav-item-2"];
navLink[2].innerHTML = siteContent["nav"]["nav-item-3"];
navLink[3].innerHTML = siteContent["nav"]["nav-item-4"];
navLink[4].innerHTML = siteContent["nav"]["nav-item-5"];
navLink[5].innerHTML = siteContent["nav"]["nav-item-6"];


let ctaHead = document.querySelector("h1");
ctaHead.innerHTML = siteContent["cta"]["h1"]

let ctaBtn = document.querySelector("button");
ctaBtn.innerHTML = siteContent["cta"]["button"]

let subHeader =  document.querySelectorAll("h4");
subHeader[0].innerHTML = siteContent["main-content"]["features-h4"];
subHeader[1].innerHTML = siteContent["main-content"]["about-h4"];
subHeader[2].innerHTML = siteContent["main-content"]["services-h4"];
subHeader[3].innerHTML = siteContent["main-content"]["product-h4"];
subHeader[4].innerHTML = siteContent["main-content"]["vision-h4"];
subHeader[5].innerHTML = siteContent["contact"]["contact-h4"];

let content = document.querySelectorAll("p");
content[0].innerHTML = siteContent["main-content"]["features-content"];
content[1].innerHTML = siteContent["main-content"]["about-content"];
content[2].innerHTML = siteContent["main-content"]["services-content"];
content[3].innerHTML = siteContent["main-content"]["product-content"];
content[4].innerHTML = siteContent["main-content"]["vision-content"];
content[5].innerHTML = siteContent["contact"]["address"];
content[6].innerHTML = siteContent["contact"]["phone"];
content[7].innerHTML = siteContent["contact"]["email"];
content[8].innerHTML = siteContent["footer"]["copyright"];



let node = document.createElement("a");                 
let textnode = document.createTextNode("Home");         
node.appendChild(textnode);                              
document.getElementById("navbar").prepend(node);
node.setAttribute('href', '#');     

//document.getElementsByTagName("a")[0].style.color = "green";

const navColor = document.querySelectorAll('a');

navColor.forEach(a => {
  a.style.color = "green";
});
