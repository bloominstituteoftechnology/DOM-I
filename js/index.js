const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//nav bar
const navs = document.querySelectorAll("a");
for (let nav of navs) {
  for (let i = 0; i < navs.length; i++) {
    navs[i].innerHTML = siteContent.nav[`nav-item-${i + 1}`];
    nav.classList.add("header", "nav", "a");
    nav.style.color = "green";
  }
}
const navBar = document.querySelector("nav");
const home = document.createElement("a");
const overView = document.createElement("a");
home.classList.add("header", "nav", "a");
home.innerText = "Home";
home.style.color = "green";
overView.classList.add("header", "nav", "a");
overView.innerText = "Overview";
overView.style.color = "green";
navBar.prepend(home);
navBar.appendChild(overView);

const headerImg = document.querySelector("#cta-img");
headerImg.src = "img/header-img.png";

//h1
const h1 = document.querySelector("h1");
h1.innerText = siteContent["cta"]["h1"];

//cta button
const btnCta = document.querySelector("button");
btnCta.innerText = siteContent["cta"]["button"];

//content img
const imgContent = document.querySelector("#middle-img");
imgContent.src = "img/mid-page-accent.jpg";

//main content
//h4 and p
const mainContent = document.querySelector(".main-content");
const h4InContent = mainContent.querySelectorAll("h4");
const pInContent = mainContent.querySelectorAll("p");

const helperInContent = function (including, tagAll) {
  let arrTag = [];
  for (let j = 0; j < Object.keys(siteContent["main-content"]).length; j++) {
    if (Object.keys(siteContent["main-content"])[j].includes(including)) {
      arrTag += `${Object.keys(siteContent["main-content"])[j]} `;
    }
  }
  const tagArr = arrTag.split(" ");
  for (let i = 0; i < tagAll.length; i++) {
    tagAll[i].innerText = siteContent["main-content"][tagArr[i]];
  }
};
helperInContent("h4", h4InContent);
helperInContent("content", pInContent);

//contact

const contactInfo = document.querySelector(".contact");
const childrenOfContact = contactInfo.children;
contactValue = Object.values(siteContent["contact"]);
for (let i = 0; i < childrenOfContact.length; i++) {
  childrenOfContact[i].innerText = contactValue[i];
}

//footer

const footer = document.querySelector("footer");
const copyRight = footer.querySelector("p");
copyRight.innerText = siteContent["footer"]["copyright"];
