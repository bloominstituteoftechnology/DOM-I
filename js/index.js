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

//Navigation
let navigation = document.querySelectorAll("nav a");

navigation.forEach((element, num) => {
  element.textContent = siteContent.nav[`nav-item-${num + 1}`];
});

// Call to Action
let ctaH1 = document.querySelector('.cta-text h1');
let ctaButton = document.querySelector('.cta button');
let ctaImage = document.querySelectorAll(".cta")[0].childNodes[3];
let h1Content = siteContent.cta.h1.split(" ").map((element, num)=> (num < 2)?element = `${element} <br>`:element).join('');

ctaH1.innerHTML = h1Content;
ctaButton.textContent = siteContent.cta.button;
ctaImage.src = siteContent.cta["img-src"];

// Top content
let topContent = document.querySelectorAll(".top-content .text-content");

topContent.forEach((element, num) => {
  switch (num) {
    case 0:
      element.childNodes[1].textContent =
        siteContent["main-content"]["features-h4"];
      element.childNodes[3].textContent =
        siteContent["main-content"]["features-content"];
      break;

    case 1:
      element.childNodes[1].textContent =
        siteContent["main-content"]["about-h4"];
      element.childNodes[3].textContent =
        siteContent["main-content"]["about-content"];
      break;

    default:
      break;
  }
});

// Middle image
let middleImage = document.querySelector("#middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

//Bottom content
let bottomContent = document.querySelectorAll(".bottom-content .text-content");

bottomContent.forEach((element, num) => {
  switch (num) {
    case 0:
      element.childNodes[1].textContent =
        siteContent["main-content"]["services-h4"];
      element.childNodes[3].textContent =
        siteContent["main-content"]["services-content"];
      break;

    case 1:
      element.childNodes[1].textContent =
        siteContent["main-content"]["product-h4"];
      element.childNodes[3].textContent =
        siteContent["main-content"]["product-content"];
      break;

    case 2:
      element.childNodes[1].textContent =
        siteContent["main-content"]["vision-h4"];
      element.childNodes[3].textContent =
        siteContent["main-content"]["vision-content"];
      break;

    default:
      break;
  }
});

// Contact
let contactSectionH4 = document.querySelector(".contact h4");
contactSectionH4.textContent = siteContent.contact["contact-h4"];

let contactParagraphs = document.querySelectorAll(".contact p");
console.log(contactParagraphs);

contactParagraphs.forEach((element, num) => {});

// Footer
let footerParagraph = document.querySelector("footer p");
footerParagraph.textContent = siteContent.footer.copyright;
