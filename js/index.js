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

var list = document.getElementsByTagName("cta h1");
list.innerHTML = "Milk";


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

document.querySelector("nav a:nth-of-type(1)").textContent= siteContent["nav"]["nav-item-1"];
document.querySelector("nav a:nth-of-type(2)").textContent= siteContent["nav"]["nav-item-2"];
document.querySelector("nav a:nth-of-type(3)").textContent= siteContent["nav"]["nav-item-3"];
document.querySelector("nav a:nth-of-type(4)").textContent= siteContent["nav"]["nav-item-4"];
document.querySelector("nav a:nth-of-type(5)").textContent= siteContent["nav"]["nav-item-5"];
document.querySelector("nav a:nth-of-type(6)").textContent= siteContent["nav"]["nav-item-6"];


// new nav items







const newNavItem = document.createElement('a');

newNavItem.textContent = "Link"


const addOne = document.querySelector('nav')
addOne.append(newNavItem)

const newNavItem2 = document.createElement('a');

newNavItem2.textContent = "Link 2"

addOne.prepend(newNavItem2) 

//

document.querySelector
document.querySelector("#cta-img").setAttribute("src", siteContent["cta"]["img-src"])

document.querySelector ("h1").textContent = siteContent["cta"]["h1"];

document.querySelector ("button").textContent = siteContent["cta"]["button"];

document.querySelector('.middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

// 1st row

document.querySelector(".top-content .text-content h4").textContent=siteContent["main-content"]["features-h4"]

document.querySelector(".top-content .text-content p").textContent=siteContent["main-content"]["features-content"]

document.querySelector(".top-content .text-content:nth-of-type(2) h4").textContent=siteContent["main-content"]["about-h4"]

document.querySelector(".top-content .text-content:nth-of-type(2) p").textContent=siteContent["main-content"]["about-content"]

// 2nd row

document.querySelector(".bottom-content .text-content h4").textContent=siteContent["main-content"]["services-h4"]

document.querySelector(".bottom-content .text-content p").textContent=siteContent["main-content"]["services-content"]

document.querySelector(".bottom-content .text-content:nth-of-type(2) h4").textContent=siteContent["main-content"]["product-h4"]

document.querySelector(".bottom-content .text-content:nth-of-type(2) p").textContent=siteContent["main-content"]["product-content"]

document.querySelector(".bottom-content .text-content:nth-of-type(3) h4").textContent=siteContent["main-content"]["vision-h4"]

document.querySelector(".bottom-content .text-content:nth-of-type(3) p").textContent=siteContent["main-content"]["vision-content"]

//footer

document.querySelector(".contact h4").textContent=siteContent["contact"]["contact-h4"];

document.querySelector(".contact p:nth-of-type(1)").textContent=siteContent["contact"]["address"];
document.querySelector(".contact p:nth-of-type(2)").textContent=siteContent["contact"]["phone"];
document.querySelector(".contact p:nth-of-type(3)").textContent=siteContent["contact"]["email"];

document.querySelector("footer p").textContent=siteContent["footer"]["copyright"];


//nav color

const link = document.querySelectorAll('a');
link.forEach((item) => {
  item.style.color = 'green';
});


//
