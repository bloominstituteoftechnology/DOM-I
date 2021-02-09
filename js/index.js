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
let nav = document.querySelectorAll("a");
nav = Array.from(nav);
nav.map((x) => (x.style.color = "green"));
nav = document.querySelector("nav");

let nav1 = document.createElement("a");
nav1.textContent = "Giggity";
nav1.href = "#";
nav1.style.color = "green";
nav.appendChild(nav1);

let nav2 = document.createElement("a");
nav2.textContent = "Wut Wut";
nav2.href = "#";
nav2.style.color = "green";
nav.appendChild(nav2);

let navImg = document.querySelector("header img");
navImg.src = siteContent.nav["img-src"];


const links = document.querySelectorAll('nav a');
links[0].textContent = "Services";
links[1].textContent = 'Product';
links[2].textContent = 'Vision';
links[3].textContent = 'Feature';
links[4].textContent = 'About';
links[5].textContent = 'Contact';

// cta

const ctah1 = document.querySelector("h1");
ctah1.innerText = `Dom\n Is\n Awesome`;

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

const pic = document.getElementById("cta-img");
pic.setAttribute("src", siteContent["cta"]["img-src"]);

// main body

const h4Top = document.querySelectorAll(".top-content h4");
h4Top[0].textContent = siteContent["main-content"]["features-h4"];
h4Top[1].textContent = siteContent["main-content"]["about-h4"];

const pTop = document.querySelectorAll(".top-content p");
pTop[0].textContent = siteContent["main-content"]["features-content"];
pTop[1].textContent = siteContent["main-content"]["about-content"];

let middlePic = document.getElementById("middle-img");
middlePic.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const h4bottom = document.querySelectorAll(".bottom-content h4");
h4bottom[0].textContent = siteContent["main-content"]["services-h4"];
h4bottom[1].textContent = siteContent["main-content"]["product-h4"];
h4bottom[2].textContent = siteContent["main-content"]["vision-h4"];

const pbottom = document.querySelectorAll(".bottom-content p");
pbottom[0].textContent = siteContent["main-content"]["services-content"];
pbottom[1].textContent = siteContent["main-content"]["product-content"];
pbottom[2].textContent = siteContent["main-content"]["vision-content"];

// footer

const h4foot = document.querySelector(".contact h4");
h4foot.textContent = siteContent['contact']['contact-h4']

const pfoot = document.querySelectorAll(".contact p");
pfoot[0].textContent = siteContent["contact"]["address"];
pfoot[1].textContent = siteContent["contact"]["phone"];
pfoot[2].textContent = siteContent["contact"]["email"];

const pfooter = document.querySelector("footer p");
pfooter.textContent = siteContent["footer"]["copyright"];