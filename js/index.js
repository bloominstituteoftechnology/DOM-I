const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const menuItems = document.getElementsByTagName("a");

const arrMenuItems = Array.from(menuItems);
arrMenuItems[0].textContent = siteContent["nav"]["nav-item-1"];
arrMenuItems[1].textContent = siteContent["nav"]["nav-item-2"];
arrMenuItems[2].textContent = siteContent["nav"]["nav-item-3"];
arrMenuItems[3].textContent = siteContent["nav"]["nav-item-4"];
arrMenuItems[4].textContent = siteContent["nav"]["nav-item-5"];
arrMenuItems[5].textContent = siteContent["nav"]["nav-item-6"];

arrMenuItems.forEach(element => {
  element.style.color = "green";
});
const lastNav = document.createElement("a");
lastNav.textContent = "Time Warp";
lastNav.style.color = "green";
const parentElement1 = document.querySelector("nav");
parentElement1.append(lastNav);

const firstNav = document.createElement("a");
firstNav.textContent = "Space Time";
firstNav.style.color = "green";
const parentElement2 = document.querySelector("nav");
parentElement2.prepend(firstNav);

arrMenuItems.forEach(element => (element.style.color = "green"));

let circle = document.getElementById("cta-img");
circle.setAttribute("src", siteContent["cta"]["img-src"]);
circle.style.boxShadow = "1px 1px 10px green" 

const ctaText = document.getElementsByTagName("h1");
const ctaArr = Array.from(ctaText);
ctaArr[0].textContent = siteContent["cta"]["h1"];
ctaArr[0].style.color = 'purple'

const button = document.getElementsByTagName("button");
const buttArr = Array.from(button);
buttArr[0].textContent = siteContent["cta"]["button"];
button[0].style.backgroundColor ='grey'

const subHeading = document.getElementsByTagName("h4");
const subHeadArr = Array.from(subHeading);
subHeadArr[0].textContent = siteContent["main-content"]["features-h4"];
subHeadArr[1].textContent = siteContent["main-content"]["about-h4"];
subHeadArr[2].textContent = siteContent["main-content"]["services-h4"];
subHeadArr[3].textContent = siteContent["main-content"]["product-h4"];
subHeadArr[4].textContent = siteContent["main-content"]["vision-h4"];
subHeadArr[5].textContent = siteContent["contact"]["contact-h4"];

subHeadArr.forEach(element =>(
  element.style.fontSize = '3rem',
  element.style.backgroundColor = 'red'
))

const content = document.getElementsByTagName("p");
const contentArr = Array.from(content);
contentArr[0].textContent = siteContent["main-content"]["features-content"];
contentArr[1].textContent = siteContent["main-content"]["about-content"];
contentArr[2].textContent = siteContent["main-content"]["services-content"];
contentArr[3].textContent = siteContent["main-content"]["product-content"];
contentArr[4].textContent = siteContent["main-content"]["vision-content"];
contentArr[5].textContent = siteContent["contact"]["address"];
contentArr[6].textContent = siteContent["contact"]["phone"];
contentArr[7].textContent = siteContent["contact"]["email"];
contentArr[8].textContent = siteContent["footer"]["copyright"];

contentArr.forEach(element => (
  element.style.fontSize = '1.25rem',
  element.style.color = 'gray'
));

let midImg = document.getElementById("middle-img");
midImg.src = "img/mid-page-accent.jpg";
