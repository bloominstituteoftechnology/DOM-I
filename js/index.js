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

let nav1 = document.getElementsByTagName("a")[0];
nav1.innerHTML = "Services";

let nav2 = document.getElementsByTagName("a")[1];
nav2.innerHTML = "Product";

let nav3 = document.getElementsByTagName("a")[2];
nav3.innerHTML = "Vision";

let nav4 = document.getElementsByTagName("a")[3];
nav4.innerHTML = "Features";

let nav5 = document.getElementsByTagName("a")[4];
nav5.innerHTML = "About";

let nav6 = document.getElementsByTagName("a")[5];
nav6.innerHTML = "Contact";

let cta_img = document.getElementById("cta-img");
cta_img.setAttribute("src", "img/header-img.png");

let cta_h1 = document.getElementsByTagName("H1")[0];
cta_h1.innerHTML =  "DOM Is Awesome";

let cta_button = document.getElementsByTagName("button")[0];
cta_button.innerHTML = "Get Started";

let features_h4 = document.getElementsByTagName("H4")[0];
features_h4.innerHTML = "Features";

let features_content = document.getElementsByTagName("p")[0];
features_content.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let about_h4 = document.getElementsByTagName("H4")[1];
about_h4.innerHTML = "About";

let about_content = document.getElementsByTagName("p")[1];
about_content.innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middle_img = document.querySelector(".middle-img");
middle_img.setAttribute("src", "img/mid-page-accent.jpg");

let services_h4 = document.getElementsByTagName("H4")[2];
services_h4.innerHTML = "Services";

let services_content = document.getElementsByTagName("p")[2];
services_content.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let product_h4 = document.getElementsByTagName("H4")[3];
product_h4.innerHTML = "Product";

let product_content = document.getElementsByTagName("p")[3];
product_content.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let vision_h4 = document.getElementsByTagName("H4")[4];
vision_h4.innerHTML = "Vision";

let vision_content = document.getElementsByTagName("p")[4];
vision_content.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contact_h4 = document.getElementsByTagName("H4")[5];
contact_h4.innerHTML = "Contact";

let address = document.getElementsByTagName("p")[5];
address.innerHTML = "123 Way 456 Street Somewhere, USA";

let phone = document.getElementsByTagName("p")[6];
phone.innerHTML = "1 (888) 888-8888";

let email = document.getElementsByTagName("p")[7];
email.innerHTML = "sales@greatidea.io";

let copyright = document.getElementsByTagName("p")[8];
copyright.innerHTML = "Copyright Great Idea! 2018";

let header = document.getElementsByTagName("header")[0].children;
let news = document.createElement("a");
let support = document.createElement("a");
news.innerHTML = "News";
support.innerHTML = "Support"
header[0].prepend(news);
header[0].appendChild(support);
console.log(header[0]);

let nav = document.getElementsByTagName("nav")[0].children;

for(let i = 0; i < nav.length; i++) {
  nav[i].style.cssText = 'color: limegreen; ! important;'
}


