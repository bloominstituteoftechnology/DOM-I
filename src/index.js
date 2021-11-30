const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};
//this alters the text of the button and h1 to match the example

let cta = document.querySelector(".cta");

cta.querySelector("h1").innerHTML = siteContent.cta.h1;

cta.querySelector("button").innerHTML = siteContent.cta.button;

//turning nodeList into array

// const linksRealArray = Array.from(links);
// console.log(linksRealArray);

// let nav = document.querySelectorAll("nav a");
// nav.forEach(
//   (item, index) =>
//     (item.textContent = siteContent[".italic"][`nav-item-${index + 1}`])
// );

const mainContent = document.querySelector[".main-content"];
l;
//Images
const logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent.images["logo-img"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];

const midImg = document.querySelector("#middle-img");
midImg.src = siteContent.images["accent-img"];

// const mainImg = document.getElementById("cta-img");
// mainImg.src = "http://localhost:9000/img/cta.png";
// const logoImg = document.getElementById("logo-img");
// logoImg.src = "http://localhost:9000/img/logo.png";

// const accentImg = document.getElementById("accent-img");
// logoImg.src = "http://localhost:9000/img/accent.png";

//footer

const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add("bold");

//nav link Give the anchor tags _inside the nav_ an italic style by adding the classname `italic` to them alone.

const navLink = document.querySelector("nav a");
navLink.classList.add("italic");

//contact
const contact = document.querySelector("section.contact");
contact.children[0];
