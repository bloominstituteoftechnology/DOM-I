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

const nav = document.querySelector("nav");                //full disclosure:
const navChildren = document.querySelectorAll("nav a");   //these two lines I borrowed while looking at colleague Matthew Robles' work (with his permission), trying to get a grip on how the DOM works,
                                                          //but he had individual navChildren items assigned one-by-one at that time; the logic that automated this assignation (below) was mine.



for (let i = 0; i < 6; i++){  //loop counts over the first 6 items of the nav a list
  let j = i + 1;              //sets +1 value over index for selecting item
  navChildren[i].innerHTML = siteContent['nav']['nav-item-' + j];  //navChildren[0] uses 'nav-item-1', etc.
  navChildren[i].style.color = "green";
}

let newNav1 = document.createElement("a");
newNav1.innerHTML = "Thing1";
newNav1.style.color = "green";
nav.prepend(newNav1);

let newNav2 = document.createElement("a");
newNav2.innerHTML = "Thing2";
newNav2.style.color = "green";
nav.append(newNav2);

let header_1 = document.querySelector("h1");
header_1.innerText = siteContent["cta"]["h1"];  //set the h1

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);  //set the big circular Image

let button = document.querySelector("button");
button.innerHTML = siteContent["cta"]["button"];

document.querySelector("button").addEventListener("click", function() {alert("See, we told you DOM is awesome!")});

let h4Top = document.querySelectorAll(".top-content .text-content h4");
h4Top[0].innerText = siteContent["main-content"]["features-h4"];
h4Top[1].innerText = siteContent["main-content"]["about-h4"];

let contTop = document.querySelectorAll(".top-content .text-content p");
contTop[0].innerText = siteContent["main-content"]["features-content"];
contTop[1].innerText = siteContent["main-content"]["about-content"];

let midImg = document.querySelector("#middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let h4Btm = document.querySelectorAll(".bottom-content .text-content h4");
h4Btm[0].innerText = siteContent["main-content"]["services-h4"];
h4Btm[1].innerText = siteContent["main-content"]["product-h4"];
h4Btm[2].innerText = siteContent["main-content"]["vision-h4"];

let contBtm = document.querySelectorAll(".bottom-content .text-content p");
contBtm[0].innerText = siteContent["main-content"]["services-content"];
contBtm[1].innerText = siteContent["main-content"]["product-content"];
contBtm[2].innerText = siteContent["main-content"]["vision-content"];

let h4Contact = document.querySelector(".contact h4");
h4Contact.innerText = siteContent["contact"]["contact-h4"];

let h4Info = document.querySelectorAll(".contact p");
h4Info[0].innerText = siteContent["contact"]["address"];
h4Info[1].innerText = siteContent["contact"]["phone"];
h4Info[2].innerText = siteContent["contact"]["email"];

let copyFoot = document.querySelector("footer p");
copyFoot.innerText = siteContent["footer"]["copyright"];
