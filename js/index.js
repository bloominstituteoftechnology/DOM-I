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

//All images
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let headerLogo = document.getElementById("cta-img");
headerLogo.src = siteContent["cta"]["img-src"];

let middleLogo = document.getElementById("middle-img");
middleLogo.src = siteContent["main-content"]["middle-img-src"];

//Top Nav

let topNav = document.querySelectorAll("a");

topNav[0].textContent = siteContent.nav["nav-item-1"];
topNav[1].textContent = siteContent.nav["nav-item-2"];
topNav[2].textContent = siteContent.nav["nav-item-3"];
topNav[3].textContent = siteContent.nav["nav-item-4"];
topNav[4].textContent = siteContent.nav["nav-item-5"];
topNav[5].textContent = siteContent.nav["nav-item-6"];

//Header Text

let mainHeader = document.querySelector("h1");
mainHeader.textContent = siteContent.cta["h1"];

let btn = document.querySelector("button");
btn.textContent = siteContent.cta["button"];

mainHeader.style.whiteSpace = "pre";
mainHeader.textContent = "DOM\n Is\n Awesome";

//Middle Text

let midTextTitle = document.querySelectorAll("h4");
midTextTitle[0].textContent = siteContent["main-content"]["features-h4"];
midTextTitle[1].textContent = siteContent["main-content"]["about-h4"];
midTextTitle[2].textContent = siteContent["main-content"]["services-h4"];
midTextTitle[3].textContent = siteContent["main-content"]["product-h4"];
midTextTitle[4].textContent = siteContent["main-content"]["vision-h4"];

let midTextContent = document.querySelectorAll("p");

midTextContent[0].textContent = siteContent["main-content"]["features-content"];
midTextContent[1].textContent = siteContent["main-content"]["about-content"];
midTextContent[2].textContent = siteContent["main-content"]["services-content"];
midTextContent[3].textContent = siteContent["main-content"]["product-content"];
midTextContent[4].textContent = siteContent["main-content"]["vision-content"];

// Bottom Text

let bottomTextTitle = document.querySelector(".contact h4");
bottomTextTitle.textContent = siteContent["contact"]["contact-h4"];

let bottomText = document.querySelectorAll(".contact p");
bottomText[0].textContent = siteContent.contact["address"];
bottomText[1].textContent = siteContent.contact["phone"];
bottomText[2].textContent = siteContent.contact["email"];

//footer

let foot = document.querySelector("footer");
foot.textContent = siteContent.footer["copyright"];
