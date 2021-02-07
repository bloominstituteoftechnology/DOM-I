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

// Nav Bar
const navA = document.querySelectorAll("nav a");
navA[0].innerText = siteContent.nav["nav-item-1"];
navA[1].innerText = siteContent.nav["nav-item-2"];
navA[2].innerText = siteContent.nav["nav-item-3"];
navA[3].innerText = siteContent.nav["nav-item-4"];
navA[4].innerText = siteContent.nav["nav-item-5"];
navA[5].innerText = siteContent.nav["nav-item-6"];

// Add Nav Items

const createElement = document.createElement("a");
createElement.textContent = "Test";
const secondNav = document.createElement("a");
secondNav.textContent = "Test2"
const nav = document.querySelector("nav");
nav.appendChild(createElement);
nav.prepend(secondNav);
const header = document.querySelector("header");


// Nav Color
createElement.style.color="green";
secondNav.style.color = "green";
navA.forEach(makeGreen => makeGreen.style.color = "green");

// CTA section
document.querySelector("h1").innerHTML = siteContent.cta["h1"].split(" ").join("<br>");
document.querySelector("button").innerHTML = siteContent.cta["button"];
document.querySelector("#cta-img").setAttribute("src", siteContent["cta"]["img-src"])

// Main Content
const mainHeaders = document.querySelectorAll(".text-content h4");
const mainContent = document.querySelectorAll(".text-content p");

mainHeaders[0].innerText = siteContent["main-content"]["features-h4"];
mainHeaders[1].innerText = siteContent["main-content"]["about-h4"];
mainHeaders[2].innerText = siteContent["main-content"]["services-h4"];
mainHeaders[3].innerText = siteContent["main-content"]["product-h4"];
mainHeaders[4].innerText = siteContent["main-content"]["vision-h4"];

mainContent[0].innerText = siteContent["main-content"]["features-content"];
mainContent[1].innerText = siteContent["main-content"]["about-content"];
mainContent[2].innerText = siteContent["main-content"]["services-content"];
mainContent[3].innerText = siteContent["main-content"]["product-content"];
mainContent[4].innerText = siteContent["main-content"]["vision-content"];

document.querySelector("#middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Bottom Content

const contactP = document.querySelectorAll(".contact p");

document.querySelector(".contact h4").innerText = siteContent["contact"]["contact-h4"];
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerText = siteContent["contact"]["phone"];
contactP[2].innerText = siteContent["contact"]["email"];

// Footer
document.querySelector("footer p").innerText = siteContent.footer["copyright"];