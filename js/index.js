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

// Task 1
const mainTitle = document.querySelector("h1");
mainTitle.textContent = "Did this work at all?";

const ctaImage = document.getElementById("cta-img");
ctaImage.src = "img/header-img.png";

const middleImage = document.getElementById("middle-img");
middleImage.src = "img/mid-page-accent.jpg";

const navItems = document.querySelectorAll("a");
let itemIncrement = 1;
const navList = navItems.forEach(cv => {
  return (cv.textContent = siteContent.nav[`nav-item-${itemIncrement++}`]);
});

const headerText = document.querySelector("h1");
headerText.textContent = siteContent.cta.h1;

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

const mainContent = siteContent["main-content"];

const featuresH4 = document.querySelectorAll("h4");
featuresH4[0].textContent = mainContent["features-h4"];
featuresH4[1].textContent = mainContent["about-h4"];
featuresH4[2].textContent = mainContent["services-h4"];
featuresH4[3].textContent = mainContent["product-h4"];
featuresH4[4].textContent = mainContent["vision-h4"];

const bodyContentParagraphs = document.querySelectorAll("p");
bodyContentParagraphs[0].textContent = mainContent["features-content"];
bodyContentParagraphs[1].textContent = mainContent["about-content"];
bodyContentParagraphs[2].textContent = mainContent["services-content"];
bodyContentParagraphs[3].textContent = mainContent["product-content"];
bodyContentParagraphs[4].textContent = mainContent["vision-content"];

const contactSection = siteContent["contact"];

const contactH4 = document.querySelectorAll(".contact h4");
contactH4.textContent = contactSection["contact-h4"];

const contactParagraph = document.querySelectorAll(".contact p");
contactParagraph[0].textContent = contactSection.address;
contactParagraph[1].textContent = contactSection.phone;
contactParagraph[2].textContent = contactSection.email;

const footerShortcut = siteContent.footer;

const copyright = document.querySelector("footer p");
copyright.textContent = footerShortcut.copyright;

//Task 3

navItems.forEach(cv => {
  return (cv.style.color = "green");
});

const frontNavItem = document.createElement("a");
frontNavItem.textContent = "Front Item";

const backNavItem = document.createElement("a");
backNavItem.textContent = "Back Item";

const selectNav = document.querySelector("nav");

selectNav.prepend(frontNavItem);
selectNav.appendChild(backNavItem);

frontNavItem.style.color = "green";
backNavItem.style.color = "green";

const navButtonColor = document.querySelectorAll("a");

button.addEventListener("click", () => {
  navButtonColor.forEach(cv => {
    if (cv.style.color == "green") {
      return (cv.style.color = "red");
    } else if (cv.style.color == "red") {
      return (cv.style.color = "green");
    }
  });
});
