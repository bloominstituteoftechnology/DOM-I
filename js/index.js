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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector("nav");
const navElements = document.querySelectorAll("nav a");
navElements[0].innerHTML = siteContent["nav"]["nav-item-1"];
navElements[1].innerHTML = siteContent["nav"]["nav-item-2"];
navElements[2].innerHTML = siteContent["nav"]["nav-item-3"];
navElements[3].innerHTML = siteContent["nav"]["nav-item-4"];
navElements[4].innerHTML = siteContent["nav"]["nav-item-5"];
navElements[5].innerHTML = siteContent["nav"]["nav-item-6"];

navElements[0].style.color = "green";
navElements[1].style.color = "green";
navElements[2].style.color = "green";
navElements[3].style.color = "green";
navElements[4].style.color = "green";
navElements[5].style.color = "green";

const home = document.createElement("a");
home.innerText = "Home";
home.style.color = "green";

const projects = document.createElement("a");
projects.innerText = "Projects";
projects.style.color = "green";

const homeElement = document.querySelector("nav");
homeElement.prepend(home);
homeElement.appendChild(projects);




const ctaHeading = document.querySelector(".cta-text h1");
ctaHeading.innerHTML = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

const mainContentHeading = document.querySelectorAll(".main-content h4");
mainContentHeading[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentHeading[1].innerHTML = siteContent["main-content"]["about-h4"];

const mainContenText = document.querySelectorAll(".main-content p");
mainContenText[0].innerHTML = siteContent["main-content"]["features-content"];
mainContenText[1].innerHTML = siteContent["main-content"]["about-content"];

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

mainContentHeading[2].innerHTML = siteContent["main-content"]["services-h4"]
mainContentHeading[3].innerHTML = siteContent["main-content"]["product-h4"]
mainContentHeading[4].innerHTML = siteContent["main-content"]["vision-h4"]

mainContenText[2].innerHTML = siteContent["main-content"]["services-content"];
mainContenText[3].innerHTML = siteContent["main-content"]["product-content"];
mainContenText[4].innerHTML = siteContent["main-content"]["vision-content"];

const contactHeading = document.querySelector(".contact h4");
contactHeading.innerHTML = siteContent["contact"]["contact-h4"]

const contactText = document.querySelectorAll(".contact p");
contactText[0].innerHTML = siteContent["contact"]["address"];
contactText[1].innerHTML = siteContent["contact"]["phone"];
contactText[2].innerHTML = siteContent["contact"]["email"];

const footer = document.querySelector('footer p');
footer.innerHTML = siteContent["footer"]["copyright"];