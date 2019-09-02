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

// MY CODE STARTS HERE

const header = document.getElementsByTagName("header");
const navigations = document.querySelector("nav");
navigations.classList.add("green");
const links = navigations.getElementsByTagName("a");
links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-4"];
links[5].textContent = siteContent.nav["nav-item-6"];

// append item to the navigation bar
const node = document.createElement("a"); // Create a <a> node
const textnode = document.createTextNode("About us"); // Create a text node
node.appendChild(textnode); // Append the text to <a>
navigations.appendChild(node);

// Prepend items to the navigation bar
const newTag = document.createElement("a");
const tagText = document.createTextNode("History");
newTag.appendChild(tagText);
navigations.insertBefore(newTag, links[2]);

// Header section, Images and text
const headerImg = document.getElementById("cta-img");
const headerSection = document.getElementsByClassName("cta-text");
const heading = document.getElementsByTagName("h1");
const text = (heading[0].textContent = siteContent.cta.h1);
document.getElementsByTagName("button")[0].textContent = siteContent.cta.button;

headerImg.src = siteContent.cta["img-src"];

// Second section
const headingH4 = document.querySelectorAll("h4");
const paragraphs = document.querySelectorAll("p");
headingH4[0].textContent = siteContent["main-content"]["features-h4"];
headingH4[1].textContent = siteContent["main-content"]["about-h4"];
headingH4[2].textContent = siteContent["main-content"]["services-h4"];
headingH4[3].textContent = siteContent["main-content"]["product-h4"];
headingH4[4].textContent = siteContent["main-content"]["vision-h4"];
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];
const mainSectionImg = (document.getElementById("middle-img").src =
  siteContent["main-content"]["middle-img-src"]);

// Contact
headingH4[5].textContent = siteContent.contact["contact-h4"];
paragraphs[5].textContent = siteContent.contact.address;
paragraphs[6].textContent = siteContent.contact.phone;
paragraphs[7].textContent = siteContent.contact.email;

// Footer
paragraphs[8].textContent = siteContent.footer.copyright;