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

// JS DOM img
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent.nav["img-src"]);
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// JS DOM text
// nav DOM
let navWords = document.querySelectorAll("a");
navWords[0].textContent = siteContent.nav["nav-item-1"];
navWords[1].textContent = siteContent.nav["nav-item-2"];
navWords[2].textContent = siteContent.nav["nav-item-3"];
navWords[3].textContent = siteContent.nav["nav-item-4"];
navWords[4].textContent = siteContent.nav["nav-item-5"];
navWords[5].textContent = siteContent.nav["nav-item-6"];

// const navText = document.querySelectorAll("a");
// arrNavText = ["Services", "Product", "Vision", "Features", "About", "Contact"];

// for (let i = 0; i < arrNavText.length; i++) {
//   navText[i].textContent = arrNavText[i];
// }

// for(let i = 0; i < 6; i++) {
//   navWords[i].textContent = siteContent.nav{`nav-item-${i+1}`}
// }

navWords.forEach(words => {
  words.style.color = "green";
});

// Append and Prepend NavBar new links
let navBar = document.querySelector("nav");
let newNavA = document.createElement("a");
let newNavP = document.createElement("a");
let navContentAppend = document.createTextNode("Example");
let navContentPrepend = document.createTextNode("Hire Us");
newNavA.appendChild(navContentAppend);
navBar.appendChild(newNavA);

newNavP.prepend(navContentPrepend);
navBar.prepend(newNavP);

// navWords.forEach(item => console.log(item));
// cta DOM
let ctaWords = document.querySelector(".cta h1");
ctaWords.textContent = siteContent.cta["h1"];

let buttonWords = document.querySelector("button");
buttonWords.textContent = siteContent.cta["button"];

// main-content DOM
let maincontentH4Words = document.querySelectorAll(".main-content h4");
let maincontentWords = document.querySelectorAll(
  ".main-content .text-content p"
);
maincontentH4Words[0].textContent = siteContent["main-content"]["features-h4"];
maincontentWords[0].textContent =
  siteContent["main-content"]["features-content"];
maincontentH4Words[1].textContent = siteContent["main-content"]["about-h4"];
maincontentWords[1].textContent = siteContent["main-content"]["about-content"];
maincontentH4Words[2].textContent = siteContent["main-content"]["services-h4"];
maincontentWords[2].textContent =
  siteContent["main-content"]["services-content"];
maincontentH4Words[3].textContent = siteContent["main-content"]["product-h4"];
maincontentWords[3].textContent =
  siteContent["main-content"]["product-content"];
maincontentH4Words[4].textContent = siteContent["main-content"]["vision-h4"];
maincontentWords[4].textContent = siteContent["main-content"]["vision-content"];

// contact DOM
let contactH4Words = document.querySelector(".contact h4");
let contactWords = document.querySelectorAll(".contact p");
contactH4Words.textContent = siteContent.contact["contact-h4"];
contactWords[0].textContent = siteContent.contact["address"];
contactWords[1].textContent = siteContent.contact["phone"];
contactWords[2].textContent = siteContent.contact["email"];

let footerWords = document.querySelector("footer p");
footerWords.textContent = siteContent.footer.copyright;
