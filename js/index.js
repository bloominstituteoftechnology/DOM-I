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
//NAV
const nav = document.querySelectorAll("nav a");
nav[0].textContent = "Services";
nav[1].textContent = "Product";
nav[2].textContent = "Vision";
nav[3].textContent = "Features";
nav[4].textContent = "About";
nav[5].textContent = "Contact";

for (var i = 0; i < nav.length; i++) {
  nav[i].style.color = "green";
}

//CTA
const dom = document.getElementsByTagName("h1");
dom[0].textContent = "DOM is Awesome";

const button = document.getElementsByTagName("button");
//console.log(button);
button[0].textContent = "Get Started";

const circle = document.getElementById("cta-img");
logo.setAttribute("src", siteContent["cta"]["img-src"]);

//MIDDLE IMAGE
const middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//MIDDLE TEXT H4
const middleText = document.querySelectorAll(".main-content h4");
middleText[0].innerHTML = siteContent["main-content"]["features-h4"];
middleText[1].innerHTML = siteContent["main-content"]["about-h4"];
middleText[2].innerHTML = siteContent["main-content"]["services-h4"];
middleText[3].innerHTML = siteContent["main-content"]["product-h4"];
middleText[4].innerHTML = siteContent["main-content"]["vision-h4"];

//MIDDLE TEXT P
const middleP = document.querySelectorAll(".main-content p");
middleP[0].innerHTML = siteContent["main-content"]["features-content"];
middleP[1].innerHTML = siteContent["main-content"]["about-content"];
middleP[2].innerHTML = siteContent["main-content"]["services-content"];
middleP[3].innerHTML = siteContent["main-content"]["product-content"];
middleP[4].innerHTML = siteContent["main-content"]["vision-content"];

//CONTACT
const contact = document.querySelector(".contact h4");
contact.textContent = siteContent.contact["contact-h4"];
const contactValue = document.querySelectorAll(".contact p");
contactValue[0].innerHTML = siteContent.contact["address"];
contactValue[1].innerHTML = siteContent.contact["phone"];
contactValue[2].innerHTML = siteContent.contact["email"];

//FOOTER
const footer = document.querySelector("footer p");
footer.innerHTML = siteContent.footer["copyright"];
