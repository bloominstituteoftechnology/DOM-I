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

// nav bar links
const nav = document.querySelector("nav");

// nav.querySelector("a").textContent = siteContent.nav["nav-item-1"];
// nav.childNodes[3].textContent = siteContent.nav["nav-item-2"];
// nav.childNodes[5].textContent = siteContent.nav["nav-item-3"];
// nav.childNodes[7].textContent = siteContent.nav["nav-item-4"];
// nav.childNodes[9].textContent = siteContent.nav["nav-item-5"];
// nav.childNodes[11].textContent = siteContent.nav["nav-item-6"];
// nav.querySelector('a').textContent = siteContent.nav['nav-item-1'];
// nav.querySelector('a:nth-of-type(2)').textContent = siteContent.nav["nav-item-2"];
// nav.querySelector('a:nth-of-type(3)').textContent = siteContent.nav["nav-item-3"];
// nav.querySelector('a:nth-of-type(4)').textContent = siteContent.nav["nav-item-4"];
// nav.querySelector('a:nth-of-type(5)').textContent = siteContent.nav["nav-item-5"];
// nav.querySelector('a:nth-of-type(6)').textContent = siteContent.nav["nav-item-6"];
// let imvery = document.createElement('a');
// nav.prepend(imvery);
// let confused = document.createElement('a');
// nav.appendChild(confused);
// imvery.textContent = 'ImVery';
// confused.textContent = 'Confused';

// let navLinks = nav.querySelectorAll('a');
// navLinks.forEach(e => e.style.color = 'green');
// navLinks.forEach(e => e.href = '#');

// Array.from(navLinks).forEach((e) => {
//   return e.style.color = 'green';
// })

// // cta
// const ctaText = document.querySelector('.cta-text');
// ctaText.children[0].textContent = siteContent.cta.h1;
// ctaText.children[1].textContent = siteContent.cta.button;
// document.querySelector('#cta-img').src = siteContent.cta["img-src"];
// document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];
// document.querySelector('.text-content h4').textContent = siteContent["main-content"]["features-h4"];
// document.querySelector('.text-content:nth-of-type(2) h4').textContent = siteContent["main-content"]["about-h4"];
// document.querySelector('.text-content p').textContent = siteContent["main-content"]["features-content"];
// document.querySelector('.text-content:nth-of-type(2) p').textContent = siteContent["main-content"]["about-content"];

const ctaText = document.querySelector(".cta-text h1");
const ctaImg = document.querySelector("#cta-img");
const lineBreak = document.createElement("br");
const btn = document.querySelector("button");

ctaText.innerHTML = "<h1>DOM<br> Is<br> Awesome</h1>";
ctaImg.src = siteContent.cta["img-src"];
btn.textContent = siteContent.cta.button;

// top content
// const topContent = document.querySelector(".top-content");

// topContent.querySelector(".text-content h4").textContent =
//   siteContent["main-content"]["features-h4"];
// topContent.querySelector(".text-content p").textContent =
//   siteContent["main-content"]["features-content"];
// topContent.querySelector(".text-content:nth-of-type(2) h4").textContent =
//   siteContent["main-content"]["about-h4"];
// topContent.querySelector(".text-content:nth-of-type(2) p").textContent =
//   siteContent["main-content"]["about-content"];

// selects all h4 as a node list

const h4List = document.querySelectorAll(".text-content h4");
// grab all the keys under main-content in siteContent object
const contentKeys = Object.keys(siteContent["main-content"]);
// filter the array for the ones that contains h4
const filteredKeys = contentKeys.filter(item => item.includes("h4"));

// loop over the node list and assign each h4 with its heading
h4List.forEach((h4, i) => {
  h4.textContent = siteContent["main-content"][filteredKeys[i]];
});
// // middle img

const midImg = document.querySelector("#middle-img");
midImg.src = "img/mid-page-accent.jpg";

// bottom content

const bottomContent = document.querySelector(".bottom-content");

bottomContent.querySelector(".text-content h4").textContent =
  siteContent["main-content"]["services-h4"];
bottomContent.querySelector(".text-content p").textContent =
  siteContent["main-content"]["services-content"];

bottomContent.querySelector(".text-content:nth-of-type(2) h4").textContent =
  siteContent["main-content"]["product-h4"];
bottomContent.querySelector(".text-content:nth-of-type(2) p").textContent =
  siteContent["main-content"]["product-content"];

bottomContent.querySelector(".text-content:nth-of-type(3) h4").textContent =
  siteContent["main-content"]["vision-h4"];
bottomContent.querySelector(".text-content:nth-of-type(3) p").textContent =
  siteContent["main-content"]["vision-content"];

// contact

const contactInfo = document.querySelector(".contact");
contactInfo.querySelector("h4").textContent = siteContent.contact["contact-h4"];
contactInfo.querySelector("p").textContent = siteContent.contact.address;
contactInfo.querySelector("p:nth-of-type(2)").textContent =
  siteContent.contact.phone;
contactInfo.querySelector("p:nth-of-type(3)").textContent =
  siteContent.contact.email;

// footer

const footer = document.querySelector("footer");
footer.querySelector("p").textContent = siteContent.footer.copyright;

// random doodles

const greened = document.querySelectorAll("body");
greened.forEach(e => (e.style.color = "green"));
