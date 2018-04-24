const siteContent = { //this is an object with properties and values.
  "nav": { //document.getElementByTagName("nav") = siteContent["nav"]         
    "nav-item-1": "Services", //menu = siteContent["nav"]["nav-item-1"]
    "nav-item-2": "Product", //menu = siteContent["nav"]["nav-item-2"]
    "nav-item-3": "Vision", //menu = siteContent["nav"]["nav-item-3"]
    "nav-item-4": "Features", //menu = siteContent["nav"]["nav-item-4"]
    "nav-item-5": "About", //menu = siteContent["nav"]["nav-item-5"]
    "nav-item-6": "Contact", //menu = siteContent["nav"]["nav-item-6"]
    "img-src": "img/logo.png"//document.querySelector("#logo-img") = siteContent["nav"]["img-src"]
  },
  "cta": { //siteContent["cta"]
    "h1": "DOM Is Awesome", //document.querySelector(".cta .cta-text h1") = siteContent["cta"]["h1"]
    "button": "Get Started",//document.getElementByTagName("button") = siteContent["cta"][button]
    "img-src": "img/header-img.png" //document.querySelector("#cta-img) = siteContent["cta"]["img-src"]
  },
  "main-content": { //siteContent["main-content"]
    "features-h4":"Features",//document.querySelectorAll(".top-content .text-content[0]") = siteContent["main-content"]["features-h4"]
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", //document.querySelector(".top-content .text-content[0] p") = siteContent["main-content"]["features-content"]
    "about-h4":"About", //document.querySelectorAll(".top-content .text-content[1]") = siteContent["main-content"]["about-h4"]
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", //document.querySelector(".top-content .text-content[1] p") = siteContent["main-content"]["about-content"]
    "middle-img-src": "img/mid-page-accent.jpg", //document.getElementById("middle-img") = siteContent["main-content"]["middle-img-src"]
    "services-h4":"Services",//document.querySelector(".bottom-content .text-content[0] h4")" = siteContent["main-content]["services-h4"]
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",//document.querySelector(".bottom-content .text-content[0] p") = siteContent["main-content"]["services-content"]
    "product-h4":"Product", //document.querySelector(".bottom-content .text-content[1] h4") = siteContent["main-content"]["product-h4"]
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",//document.querySelector(".bottom-content .text-content[1] p") = siteContent["main-content"]["product-content"]
    "vision-h4":"Vision",//document.querySelector(".bottom-content .text-content[2] h4") = siteContent["main-content"]["vision-h4"]
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",//document.querySelector("bottom-content .text-content[2] p") = siteContent["main-content"]["vision-content"]
  },
  "contact": {//document.getElementsByClassName("contact") = siteContent["contact"]
    "contact-h4" : "Contact",// document.querySelector(".contact h4") = siteContent["contact"]["contact-h4"]
    "address" : "123 Way 456 Street Somewhere, USA",//document.querySelector(".contact p[1]") = siteContent["contact"]["address"]
    "phone" : "1 (888) 888-8888",//document.querySelector(".contact p[2]") = siteContent["contact"]["phone"]
    "email" : "sales@greatidea.io",//document.querySelector(".contact p[3]") = siteContent["contact"]["email"]
  },
  "footer": { //siteContent["footer"]
    "copyright" : "Copyright Great Idea! 2018"//document.getElementByTagName("footer") = siteContent["footer"]["copyright"]
  },
};


// Example: Update the img src for the logo

//var
let menu = document.querySelectorAll('a');
let nav = document.querySelector('nav')
let newNav = document.createElement('a');
let newNewNav = document.createElement('a');
let navLinks = document.querySelectorAll('nav a')
let logo = document.querySelector("#logo-img") 
let ctaText = document.querySelector('.cta-text h1');
let ctaBut = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('.cta img');
let topContenth4 = document.querySelector('.text-content h4');
let topContentP = document.querySelector('.text-content p');
let topContenth4Second = document.querySelectorAll('.text-content h4')[1];
let topContentPSecond = document.querySelectorAll('.text-content p')[1];;
let topContentImg = document.querySelector('.middle-img');

// nav

menu[0].innerHTML = siteContent['nav']["nav-item-1"];
menu[1].innerHTML = siteContent['nav']["nav-item-2"];
menu[2].innerHTML = siteContent['nav']["nav-item-3"];
menu[3].innerHTML = siteContent['nav']["nav-item-4"];
menu[4].innerHTML = siteContent['nav']["nav-item-5"];
menu[5].innerHTML = siteContent['nav']["nav-item-6"];

//logo pic
logo.setAttribute('src', siteContent['nav']["img-src"]);

// create new Nav items
nav.appendChild(newNav)
newNav.setAttribute('href', '#');
newNav.innerHTML = 'Map '

nav.appendChild(newNewNav)
newNewNav.setAttribute('href', '#');
newNewNav.innerHTML = 'Price'


// style nav

menu.forEach(function(item) {
 item.style.color = 'green';
});

newNav.style.color = 'green';
newNewNav.style.color = 'green';
// cta


ctaText.innerHTML = siteContent['cta']["h1"]; 
ctaBut.innerHTML = siteContent['cta']["button"]; 
ctaImg.setAttribute('src', siteContent['cta']["img-src"]);

// main-content  top-content


topContenth4.innerHTML = siteContent['main-content']["features-h4"]; 
topContentP.innerHTML = siteContent['main-content']["features-content"]; 
topContenth4Second.innerHTML = siteContent['main-content']["about-h4"]; 
topContentPSecond.innerHTML = siteContent['main-content']['features-content'];

topContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
