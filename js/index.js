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

// Example: Update the img src for the logo and
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Create Selectors to point your data into elements

const nav = document.querySelector("nav");
console.log(nav);
const href = document.querySelectorAll("nav a");
console.log(href);
href.forEach(function(currentValue, index) {
  currentValue.style.color = "green";
  currentValue.textContent = siteContent["nav"][`nav-item-${index + 1}`];
  console.log("we are here");
});
const newNav1 = document.createElement("a");
newNav1.textContent = "AndSons";
nav.appendChild(newNav1);
newNav1.style.color = "red";

const newNav2 = document.createElement("a");
newNav2.textContent = "Mumford";
nav.prepend(newNav2);
newNav2.style.color = "red";

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const ctaH = document.querySelector("h1");
console.log(ctaH);
const ctaButton = document.querySelector("button");
console.log(ctaButton);
ctaH.innerHTML = siteContent["cta"]["h1"];
ctaH.innerHTML = "<h1> DoM <br> Is <br> Awesome!!";
ctaH.style.color = "dodgerblue";
ctaButton.innerHTML = siteContent["cta"]["button"];

const topContentHead = document.querySelectorAll(
  ".main-content .top-content h4"
);
console.log(topContentHead);
topContentHead[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentHead[1].innerHTML = siteContent["main-content"]["about-h4"];

const topContentText = document.querySelectorAll(
  ".main-content .top-content p"
);
console.log(topContentText);
topContentText[0].innerHTML = siteContent["main-content"]["features-content"];
topContentText[1].innerHTML = siteContent["main-content"]["about-content"];

const bottomContentHead = document.querySelectorAll(
  ".main-content .bottom-content h4"
);
console.log(bottomContentHead);
bottomContentHead[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContentHead[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentHead[2].innerHTML = siteContent["main-content"]["vision-h4"];

const bottomContentText = document.querySelectorAll(
  ".main-content .bottom-content p"
);
console.log(bottomContentText);
bottomContentText[0].innerHTML =
  siteContent["main-content"]["services-content"];
bottomContentText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentText[2].innerHTML = siteContent["main-content"]["vision-content"];

const contactTop = document.querySelector(".contact h4");
console.log(contactTop);
contactTop.innerHTML = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
console.log(contactInfo);
contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["phone"];
contactInfo[2].innerHTML = siteContent["contact"]["email"];

const footer = document.querySelector("footer");
console.log(footer);
footer.innerHTML = siteContent["footer"]["copyright"];
footer.style.color = "#10C821";
footer.style.fontFamily = "cursive";
