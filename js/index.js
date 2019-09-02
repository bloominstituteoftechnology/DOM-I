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
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Update the navagation
let navBar = document.querySelectorAll("a"); // Selected all "a" tags
//Added the text content to each "a" tags
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];
//Adding links to navbar
const navItem = document.querySelector("header nav");
const appendItem = (element, text, attr) => {
  const newNavItem = document.createElement(element);
  newNavItem.textContent = text;
  newNavItem.href = attr;
  newNavItem.style.color = "green";
  navItem.appendChild(newNavItem);
  return newNavItem;
};
const prependItem = (element, text, attr) => {
  const newNavItem = document.createElement(element);
  newNavItem.textContent = text;
  newNavItem.href = attr;
  newNavItem.style.color = "green";
  navItem.prepend(newNavItem);
  return newNavItem;
};
appendItem("a", "Article", "#");
prependItem("a", "Home", "#");
//Changed the color of the navigation text to be green
for (let i = 0; i < navBar.length; i++) {
  navBar[i].style.color = "green";
}
// Update the Call to action
let cta = document.querySelector("h1"); // Selected the first matching h1 selector.
let tex = siteContent["cta"]["h1"]; // Stored the h1 value into a variable
text = "<h1>DOM<br> Is<br> Awesome</h1>";
cta.innerHTML = text;

// Added the text content inside the Button tag
let ctaButton = document.querySelector("button"); //Selected the first matching button selector.
ctaButton.textContent = siteContent["cta"]["button"];

//Added the image for the Call to action
let ctaImage = document.querySelector("#cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

// Update the main content
let mainHeader = document.querySelectorAll(".text-content h4"); //Selected all the "h4" tags
//Added the text content inside the H4 tags
mainHeader[0].textContent = siteContent["main-content"]["features-h4"];
mainHeader[1].textContent = siteContent["main-content"]["about-h4"];
mainHeader[2].textContent = siteContent["main-content"]["services-h4"];
mainHeader[3].textContent = siteContent["main-content"]["product-h4"];
mainHeader[4].textContent = siteContent["main-content"]["vision-h4"];

let mainPara = document.querySelectorAll(".text-content p"); //Selected all the "p" tags
//Added the text content inside the P tags
mainPara[0].textContent = siteContent["main-content"]["features-content"];
mainPara[1].textContent = siteContent["main-content"]["about-content"];
mainPara[2].textContent = siteContent["main-content"]["services-content"];
mainPara[3].textContent = siteContent["main-content"]["product-content"];
mainPara[4].textContent = siteContent["main-content"]["vision-content"];

//Added the image for the Main-content
let middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Update the Contact Section
let contactHeader = document.querySelector(".contact h4"); //Selected the h4 inside the 'contact' container
contactHeader.textContent = siteContent["contact"]["contact-h4"];
let contactPara = document.querySelectorAll(".contact p"); //Selected all P tag inside 'contact' container
contactPara[0].textContent = siteContent["contact"]["address"];
contactPara[1].textContent = siteContent["contact"]["phone"];
contactPara[2].textContent = siteContent["contact"]["email"];

//Update the footer
let footerPara = document.querySelector("footer p"); //Selected the P tag inside the 'footer'
footerPara.textContent = siteContent["footer"]["copyright"];
