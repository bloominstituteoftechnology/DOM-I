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

var node = document.createElement("li");
var textnode = document.createTextNode("Hehehe");
node.appendChild(textnode);

document.querySelectorAll(".container nav")[0].appendChild(node);

var newItem = document.createElement("li");
var textnode2 = document.createTextNode("hohoho");
newItem.appendChild(textnode2);

var list = document.querySelectorAll(".container nav")[0];
list.insertBefore(newItem, list.childNodes[0]);


document.querySelectorAll(".container a")[0].innerHTML = "Services";
document.querySelectorAll(".container a")[1].innerHTML = "Product";
document.querySelectorAll(".container a")[2].innerHTML = "Vision";
document.querySelectorAll(".container a")[3].innerHTML = "Features";
document.querySelectorAll(".container a")[4].innerHTML = "About";
document.querySelectorAll(".container a")[5].innerHTML = "Contact";
document.querySelectorAll(".container a")[0].style.cssText = "color:green";
document.querySelectorAll(".container a")[1].style.cssText = "color:green";
document.querySelectorAll(".container a")[2].style.cssText = "color:green";
document.querySelectorAll(".container a")[3].style.cssText = "color:green";
document.querySelectorAll(".container a")[4].style.cssText = "color:green";
document.querySelectorAll(".container a")[5].style.cssText = "color:green";


document.querySelectorAll(".cta h1")[0].innerHTML = "DOM is Awesome!";


document.querySelector("#cta-img").src = siteContent.cta["img-src"];
document.querySelectorAll(".cta button")[0].innerHTML = "Get Started";

document.querySelectorAll(".text-content h4")[0].innerHTML = "Features";
document.querySelectorAll(".text-content p")[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
document.querySelectorAll(".text-content h4")[1].innerHTML = "About";
document.querySelectorAll(".text-content p")[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

document.querySelectorAll(".text-content h4")[2].innerHTML = "Services";
document.querySelectorAll(".text-content p")[2].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelectorAll(".text-content h4")[3].innerHTML = "Product";
document.querySelectorAll(".text-content p")[3].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelectorAll(".text-content h4")[4].innerHTML = "Vision";
document.querySelectorAll(".text-content p")[4].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelectorAll(".contact h4")[0].innerHTML = "Contact";
document.querySelectorAll(".contact p")[0].innerHTML = "123 Way 456 Street Somewhere, USA";
document.querySelectorAll(".contact p")[1].innerHTML = "1 (888) 888-8888";
document.querySelectorAll(".contact p")[2].innerHTML = "sales@greatidea.io";

document.querySelectorAll("footer p")[0].innerHTML = "Copyright Great Idea! 2018";

