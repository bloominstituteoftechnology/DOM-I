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

//Navigation bar
function setAtt() {
  const navBarObj = Object.values(siteContent.nav);
  const navBar = document.querySelectorAll("nav a");
  for (let i = 0; i < navBar.length; i++) {
    navBar[i].textContent = navBarObj[i];
  }
}
setAtt();

//Add extra link
const newLink = document.createElement("a");
newLink.textContent = "End";

const parentElement = document.querySelector("nav");
parentElement.appendChild(newLink);

const newLink2 = document.createElement("a");
newLink2.textContent = "Start";

const parentElement2 = document.querySelector("nav");
parentElement2.prepend(newLink2);

const navBarColor = document.querySelectorAll("nav a");
navBarColor.forEach((element) => {
  element.style.color = "blue";
});

//Body
let bodyImg = document.getElementById("cta-img");
bodyImg.setAttribute("src", siteContent["cta"]["img-src"]);

let domText = document.querySelector("h1");
domText.textContent = siteContent["cta"]["h1"];

let button1 = document.querySelector("button");
button1.textContent = siteContent["cta"]["button"];

//top content
// let topContent = document.querySelectorAll("h4");
// const bodyObj = Object.values(siteContent["main-content"]);
// for (let i = 0; i < topContent.length; i++) {
//   topContent[i].textContent = bodyObj[i];
// }

let topContent = document.querySelectorAll("h4");
topContent[0].textContent = siteContent["main-content"]["features-h4"];
topContent[1].textContent = siteContent["main-content"]["about-h4"];
topContent[2].textContent = siteContent["main-content"]["services-h4"];
topContent[3].textContent = siteContent["main-content"]["product-h4"];
topContent[4].textContent = siteContent["main-content"]["vision-h4"];
topContent[5].textContent = siteContent["contact"]["contact-h4"];

//images
let mainImg = document.getElementById("middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//paragraphs
let pContent = document.querySelectorAll("p");

const pObj = Object.values(siteContent["main-content"]);
for (let i = 0; i < pContent.length; i++) {
  pContent[i].textContent = pObj[i];
}
//footer
pContent[8].textContent = siteContent["footer"]["copyright"];

// stretch goal 1, update nav bar color, add borders to paragraphs
const header = document.querySelector("header");
header.style.backgroundColor = "limegreen";
const textContentDiv = document.querySelectorAll("div.text-content");
textContentDiv.forEach((item) => {
  item.style.border = "1px solid black";
  item.style.borderRadius = "5px";
  item.style.margin = "2px";
  item.style.padding = "5px";
});

function alertUser(e) {
  alert(`You clicked "${e.target.textContent}" menu option`);
}

navBarColor.forEach((element) => {
  element.addEventListener("click", alertUser);
});

//Stretch goal 2, add a button
const changedBtn = document.querySelector("button");
changedBtn.addEventListener("click", addContent);
function addContent() {
  const btnContent = document.createElement("p");
  btnContent.textContent = "Projects and more projects till you get it!!";
  btnContent.style.fontSize = "1.6rem";
  btnContent.style.color = "green";

  const ctaText = document.querySelector(".cta-text");
  ctaText.append(btnContent);
}
