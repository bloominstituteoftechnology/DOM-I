const siteContent = {"nav": {
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

//navigation:


let navA = document.querySelectorAll("a");
let i = 0;

while(i < navA.length){
  navA[i].textContent=siteContent.nav[`nav-item-${i + 1}`];
   i++;
}

//creation of two new a tags in the header 
let a = document.createElement("a");
a.textContent ="Chat with us ";
let header = document.querySelector("nav");
header.prepend(a);
let b = document.createElement("a");
let secondA = document.querySelector("nav a:nth-child(2)");
b.textContent ="share with us";
header.prepend(b);


let nav = document.querySelectorAll("a");
nav.forEach(function(element){
  element.style.color = "green";
})

//Header
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let mainTitle = document.querySelector(".cta .cta-text h1");
mainTitle.innerHTML ="DOM <br> IS<br>AWESOME"; 
document.querySelector(".cta .cta-text button").textContent = siteContent["cta"]["button"];
let mainImage = document.getElementById("cta-img");
mainImage.setAttribute('src', siteContent["cta"]["img-src"]);
//Main-Content
//top-content
document.querySelector(".text-content h4").textContent  = siteContent["main-content"] ["features-h4"];
document.querySelector(".text-content p").textContent = siteContent["main-content"]["features-content"];
document.querySelector(".second-hr").textContent = siteContent["main-content"]["about-h4"];
document.querySelector(".second-hr+p").textContent=siteContent["main-content"]["about-content"];
let middleImage = document.querySelector(".middle-img");
middleImage.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

//Main-content
//botton-content

document.querySelector(".bottom-content .text-content h4").textContent = siteContent["main-content"]["services-h4"];
document.querySelector(".bottom-content .text-content p").textContent = siteContent["main-content"]["services-content"];
document.querySelector(".secondH4").textContent = siteContent["main-content"]["product-h4"];
document.querySelector(".secondH4+p").textContent = siteContent["main-content"]["product-content"];
document.querySelector(".thirdH4").textContent = siteContent["main-content"]["vision-h4"];
document.querySelector(".thirdH4+p").textContent = siteContent["main-content"]["vision-content"];

//content section 
document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
document.querySelector(".first-p").textContent = siteContent["contact"]["address"];
document.querySelector(".second-p").textContent = siteContent["contact"]["phone"];
document.querySelector(".third-p").textContent = siteContent["contact"]["email"];

//footer
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];









