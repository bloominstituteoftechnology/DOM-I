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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav added, changed nav color to green 
let nav = document.querySelectorAll("nav a");
nav[0].style.color = "green";
nav[0].innerHTML = "Services";
nav[1].innerHTML = "Product";
nav[1].style.color = "green";
nav[2].innerHTML = "Vision";
nav[2].style.color = "green";
nav[3].innerHTML = "Features";
nav[3].style.color = "green";
nav[4].innerHTML = "About";
nav[4].style.color="green";
nav[5].innerHTML = "Contact";
nav[5].style.color = "green";

// Step 1: Create a new tag
const newElement = document.createElement("nav");

// Step 2: Set up the parent reference
const containerElement = document.querySelector(".container");

// Step 3: appendChild or prepend the child to the parent
containerElement.prepend(newElement);

// Step 4: Update the value
newElement.innerText = "Gr8";



//.cta-img
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//DOM IS AWESOME
let dom = document.querySelector(".cta-text h1");
dom.innerHTML = "DOM <br> is <br> Awesome";

//.cta button Get Started
let ctaButton = document.querySelector(".cta button");
ctaButton.innerHTML = "Get Started";

//.top-content h4
let headingsTop = document.querySelectorAll(".top-content h4");
headingsTop[0].innerHTML = "Features";
headingsTop[1].innerHTML = "About";

//.top-content p
let paragraphsTop = document.querySelectorAll(".top-content p");
paragraphsTop[0].innerHTML = siteContent["main-content"]["features-content"];
paragraphsTop[1].innerHTML = siteContent["main-content"]["about-content"];

//middle-image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//.bottom-content h4
let headingsBottom = document.querySelectorAll(".bottom-content h4");
headingsBottom[0].innerHTML = "Services";
headingsBottom[1].innerHTML = "Product";
headingsBottom[2].innerHTML = "Vision";

//.bottom-content p
let paragraphsBottom = document.querySelectorAll(".bottom-content p");
paragraphsBottom[0].innerHTML = siteContent["main-content"]["services-content"];
paragraphsBottom[1].innerHTML = siteContent["main-content"]["product-content"];
paragraphsBottom[2].innerHTML = siteContent["main-content"]["vision-content"];
let contacts = document.querySelector(".contact h4");

//contact
contacts.innerHTML = "Contact";
let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].innerHTML = "123 Way 456 Street<br> Somewhere, USA";
contactInfo[1].innerHTML = "1 (888) 888-8888";
contactInfo[2].innerHTML = "sales@greatidea.io";

//footer
let footer = document.querySelector("footer p");
footer.innerHTML = "Copyright Great Idea! 2018"






