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

let links = document.querySelectorAll("a");
console.log("links", links);

links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

let buttonContent = document.querySelector("button");

buttonContent.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.src = "img/header-img.png";

let headerOne = document.querySelector("h1");
headerOne.innerHTML = "Dom<br>Is<br>Awesome";

let headerFour = document.getElementsByTagName("h4");
console.log(headerFour);
headerFour[0].innerHTML = siteContent["main-content"]["features-h4"];
headerFour[1].innerHTML = siteContent["main-content"]["about-h4"];
headerFour[2].innerHTML = siteContent["main-content"]["services-h4"];
headerFour[3].innerHTML = siteContent["main-content"]["product-h4"];
headerFour[4].innerHTML = siteContent["main-content"]["vision-h4"];
headerFour[5].innerHTML = siteContent["contact"]["contact-h4"];

let pTags = document.getElementsByTagName("p");
console.log(pTags);
pTags[0].innerHTML = siteContent["main-content"]["features-content"];
pTags[1].innerHTML = siteContent["main-content"]["about-content"];
pTags[2].innerHTML = siteContent["main-content"]["services-content"];
pTags[3].innerHTML = siteContent["main-content"]["product-content"];
pTags[4].innerHTML = siteContent["main-content"]["vision-content"];
pTags[5].innerHTML = siteContent["contact"]["address"];
pTags[6].innerHTML = siteContent["contact"]["phone"];
pTags[7].innerHTML = siteContent["contact"]["email"];

let middleImage = document.getElementById("middle-img");
middleImage.src = "img/mid-page-accent.jpg";

let footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"];

links.forEach((element) => {
  element.style.color = "green";
});

const newNav = document.createElement("a");
newNav.textContent = "Team";

const parent = document.querySelector("nav");
parent.prepend(newNav);

newNav.style.color = "green";

const newNav2 = document.createElement("a");
newNav2.textContent = "Projects";

const parent2 = document.querySelector("nav");
parent2.appendChild(newNav2);

newNav2.style.color = "green";
