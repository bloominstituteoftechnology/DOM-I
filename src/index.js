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

console.log("project wired!");

let topNav = document.querySelectorAll("nav a");

topNav[0].textContent = siteContent["nav"]["nav-item-1"];
topNav[1].textContent = siteContent["nav"]["nav-item-2"];
topNav[2].textContent = siteContent["nav"]["nav-item-3"];
topNav[3].textContent = siteContent["nav"]["nav-item-4"];
topNav[4].textContent = siteContent["nav"]["nav-item-5"];
topNav[5].textContent = siteContent["nav"]["nav-item-6"];

topNav.forEach((link) => {
  link.classList.add("italic");
});

const callText = document.querySelector(".cta-text h1");
callText.textContent = siteContent.cta.h1;

const callButton = document.querySelector(".cta-text button");
callButton.textContent = siteContent.cta.button;

let textCon = document.querySelectorAll(".text-content");

textCon[0].firstElementChild.textContent =
  siteContent["main-content"]["features-h4"];
textCon[0].firstElementChild.nextElementSibling.textContent =
  siteContent["main-content"]["features-content"];

textCon[1].firstElementChild.textContent =
  siteContent["main-content"]["about-h4"];
textCon[1].firstElementChild.nextElementSibling.textContent =
  siteContent["main-content"]["about-content"];

textCon[2].firstElementChild.textContent =
  siteContent["main-content"]["services-h4"];
textCon[2].firstElementChild.nextElementSibling.textContent =
  siteContent["main-content"]["services-content"];

textCon[3].firstElementChild.textContent =
  siteContent["main-content"]["product-h4"];
textCon[3].firstElementChild.nextElementSibling.textContent =
  siteContent["main-content"]["product-content"];

textCon[4].firstElementChild.textContent =
  siteContent["main-content"]["vision-h4"];
textCon[4].firstElementChild.nextElementSibling.textContent =
  siteContent["main-content"]["vision-content"];

const contactInfo = document.querySelector(".contact h4");
contactInfo.textContent = siteContent.contact["contact-h4"];

const contactAddress = document.querySelector(".contact p:nth-of-type(1)");
contactAddress.textContent = siteContent.contact.address;

const contactPhone = document.querySelector(".contact p:nth-of-type(2)");
contactPhone.textContent = siteContent.contact.phone;

const contactEmail = document.querySelector(".contact p:nth-of-type(3)");
contactEmail.textContent = siteContent.contact.email;

const footerCopyright = document.querySelector("footer a");
footerCopyright.classList.add("bold");
footerCopyright.textContent = siteContent.footer.copyright;

const logoImg = document.querySelector(".logo");
logoImg.src = siteContent.images["logo-img"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];

const accentImg = document.querySelector("#middle-img");
accentImg.src = siteContent.images["accent-img"];
