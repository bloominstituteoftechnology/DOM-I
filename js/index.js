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
// ====================== Nav ===========================
const navigation = document.querySelector("nav");
const services = navigation.firstElementChild;
const product = services.nextElementSibling;
const vision = product.nextElementSibling;
const features = vision.nextElementSibling;
const about = features.nextElementSibling;
const contact = about.nextElementSibling;
const blog = document.createElement("a");
const learnMore = document.createElement("a");

blog.textContent = "Blog";
learnMore.textContent = "Learn More";

navigation.prepend(blog);
navigation.appendChild(learnMore);
services.textContent = "Services";
product.textContent = "Product";
vision.textContent = "Vision";
features.textContent = "Features";
about.textContent = "About";
contact.textContent = "Contact";

const aTags = document.querySelectorAll("nav a");
aTags.forEach(a => (a.style.color = "green"));
//=========================== Call To Action ==============
const ctaText = document.querySelector(".cta").firstElementChild
  .firstElementChild;

const ctaImg = document.querySelector("#cta-img");
ctaImg.addEventListener("mouseover", () => ctaImg.classList.add("circleImg"));
ctaImg.addEventListener("click", () =>
  ctaImg.classList.add("circleImgClicked")
);

ctaImg.addEventListener("mouseout", () => {
  ctaImg.classList.remove("circleImgClicked");
  ctaImg.classList.remove("circleImg");
});

ctaText.textContent = `DOM Is Awesome`;
const ctaBtn = ctaText.nextElementSibling;
ctaBtn.textContent = "Get Started";
ctaImg.src = "img/header-img.png";

ctaBtn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 4) + 1;
  random === 1
    ? (ctaText.style.color = "red")
    : random === 2
    ? (ctaText.style.color = "purple")
    : random === 3
    ? (ctaText.style.color = "lime")
    : random === 4
    ? (ctaText.style.color = "blue")
    : console.log("did not work");
});
//========================== Main Content =================

const mainContent = document.querySelector(".main-content");
const topContent = document.querySelector(".top-content");
const mainTextDiv = document.querySelectorAll(".text-content");
const middleImg = document.querySelector("#middle-img");
const secondTopDiv = topContent.nextElementSibling;

Array.from(mainTextDiv);
mainTextDiv[0].classList.add("first-text-content");
mainTextDiv[1].classList.add("second-text-content");
mainTextDiv[2].classList.add("third-text-content");
mainTextDiv[3].classList.add("fourth-text-content");
mainTextDiv[4].classList.add("fith-text-content");

const mainH4 = document.querySelector(".first-text-content").firstElementChild;
const secondH4 = document.querySelector(".second-text-content")
  .firstElementChild;
const thirdH4 = document.querySelector(".third-text-content").firstElementChild;
const fourthH4 = document.querySelector(".fourth-text-content")
  .firstElementChild;
const fithH4 = document.querySelector(".fith-text-content").firstElementChild;

const mainPtag = mainH4.nextElementSibling;
const secondPtag = secondH4.nextElementSibling;
const thirdPtag = thirdH4.nextElementSibling;
const fourthPtag = fourthH4.nextElementSibling;
const fithPtag = fithH4.nextElementSibling;

mainH4.textContent = "Features";
mainPtag.textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

secondH4.textContent = "About";
secondPtag.textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

thirdH4.textContent = "Services";
thirdPtag.textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

fourthH4.textContent = "Product";
fourthPtag.textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

fithH4.textContent = "Vision";
fithPtag.textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

middleImg.src = "img/mid-page-accent.jpg";

//===================================== Contact =======================================

const contactSection = document.querySelector(".contact");
const contactH4 = contactSection.firstElementChild;
const contactP1 = contactH4.nextElementSibling;
const contactP2 = contactP1.nextElementSibling;
const contactP3 = contactP2.nextElementSibling;

contactH4.textContent = "Contact";
contactP1.textContent = "123 Way 456 Street Somewhere, USA";
contactP2.textContent = "1 (888) 888-8888";
contactP3.textContent = "sales@greatidea.io";

//===================================== Footer =========================================

const footer = document.querySelector("footer");
const footerPtag = footer.firstElementChild;

footerPtag.textContent = "Copyright Great Idea! 2018";
