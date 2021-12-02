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
  mainContent: {
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
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log("project wired!");

const services = document.querySelector("header nav a:nth-of-type(1)");
const product = document.querySelector("header nav a:nth-of-type(2)");
const vision = document.querySelector("header nav a:nth-of-type(3)");
const features = document.querySelector("header nav a:nth-of-type(4)");
const about = document.querySelector("header nav a:nth-of-type(5)");
const contact = document.querySelector("header nav a:nth-of-type(6)");
const headerImage = document.querySelector("header .logo");

const domIsAwesome = document.querySelector(".cta h1");
const getStartedButton = document.querySelector(".cta .cta-text button");
const topSectionImage = document.querySelector(".cta img");

const featuresMain = document.querySelector(
  ".main-content .top-content .text-content h4"
);
const featuresMainParagraph = document.querySelector(
  ".main-content .top-content .text-content p"
);
const aboutMain = document.querySelector(
  ".main-content .top-content .text-content:nth-of-type(2) h4"
);
const aboutMainParagraph = document.querySelector(
  ".main-content .top-content .text-content:nth-of-type(2) p"
);

const mainImage = document.querySelector(".main-content .middle-img");

const servicesMain = document.querySelector(
  ".main-content .bottom-content .text-content h4"
);
const servicesMainParagraph = document.querySelector(
  ".main-content .bottom-content .text-content p"
);
const productMain = document.querySelector(
  ".main-content .bottom-content .text-content:nth-of-type(2) h4"
);
const productMainParagraph = document.querySelector(
  ".main-content .bottom-content .text-content:nth-of-type(2) p"
);
const visionMain = document.querySelector(
  ".main-content .bottom-content .text-content:nth-of-type(3) h4"
);
const visionMainParagraph = document.querySelector(
  ".main-content .bottom-content .text-content:nth-of-type(3) p"
);

const contactSection = document.querySelector(".contact h4");
const contactAddress = document.querySelector(".contact p");
const contactPhone = document.querySelector(".contact p:nth-of-type(2)");
const contactEmail = document.querySelector(".contact p:nth-of-type(3)");

const copyrightFooter = document.querySelector("footer a");

const anchorTagsInHeader = document.querySelectorAll("header nav a");

services.textContent = siteContent["nav"]["nav-item-1"];
product.textContent = siteContent["nav"]["nav-item-2"];
vision.textContent = siteContent["nav"]["nav-item-3"];
features.textContent = siteContent["nav"]["nav-item-4"];
about.textContent = siteContent["nav"]["nav-item-5"];
contact.textContent = siteContent["nav"]["nav-item-6"];
headerImage.src = siteContent["images"]["logo-img"];

domIsAwesome.textContent = siteContent["cta"]["h1"];
getStartedButton.textContent = siteContent["cta"]["button"];
topSectionImage.src = siteContent["images"]["cta-img"];

featuresMain.textContent = siteContent["mainContent"]["features-h4"];
featuresMainParagraph.textContent =
  siteContent["mainContent"]["features-content"];
aboutMain.textContent = siteContent["mainContent"]["about-h4"];
aboutMainParagraph.textContent = siteContent["mainContent"]["about-content"];

mainImage.src = siteContent["images"]["accent-img"];

servicesMain.textContent = siteContent["mainContent"]["services-h4"];
servicesMainParagraph.textContent =
  siteContent["mainContent"]["services-content"];
productMain.textContent = siteContent["mainContent"]["product-h4"];
productMainParagraph.textContent =
  siteContent["mainContent"]["product-content"];
visionMain.textContent = siteContent["mainContent"]["vision-h4"];
visionMainParagraph.textContent = siteContent["mainContent"]["vision-content"];

contactSection.textContent = siteContent["contact"]["contact-h4"];
contactAddress.textContent = siteContent["contact"]["address"];
contactPhone.textContent = siteContent["contact"]["phone"];
contactEmail.textContent = siteContent["contact"]["email"];

copyrightFooter.textContent = siteContent["footer"]["copyright"];

anchorTagsInHeader.classList.add("italic");
copyrightFooter.classList.add("bold");
