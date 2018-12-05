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
const navLinks = document.querySelectorAll("nav a");

const navLink1 = navLinks[0];
const navLink2 = navLinks[1];
const navLink3 = navLinks[2];
const navLink4 = navLinks[3];
const navLink5 = navLinks[4];
const navLink6 = navLinks[5];

const blog = document.createElement("a");
const learnMore = document.createElement("a");

blog.textContent = "Blog";
learnMore.textContent = "Learn More";

navigation.prepend(blog);
navigation.appendChild(learnMore);
navLink1.textContent = siteContent["nav"]["nav-item-1"];
navLink2.textContent = siteContent["nav"]["nav-item-2"];
navLink3.textContent = siteContent["nav"]["nav-item-3"];
navLink4.textContent = siteContent["nav"]["nav-item-4"];
navLink5.textContent = siteContent["nav"]["nav-item-5"];
navLink6.textContent = siteContent["nav"]["nav-item-6"];

const aTags = document.querySelectorAll("nav a");
aTags.forEach(a => (a.style.color = "green"));
//=========================== Call To Action ==============
const ctaText = document.querySelector(".cta-text h1");

const ctaImg = document.querySelector("#cta-img");
ctaImg.addEventListener("mouseover", () => ctaImg.classList.add("circleImg"));
ctaImg.addEventListener("click", () =>
  ctaImg.classList.add("circleImgClicked")
);

ctaImg.addEventListener("mouseout", () => {
  ctaImg.classList.remove("circleImgClicked");
  ctaImg.classList.remove("circleImg");
});

ctaText.textContent = siteContent["cta"]["h1"];
const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

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

mainTextDiv[0].classList.add("first-text-content");
mainTextDiv[1].classList.add("second-text-content");
mainTextDiv[2].classList.add("third-text-content");
mainTextDiv[3].classList.add("fourth-text-content");
mainTextDiv[4].classList.add("fith-text-content");

const mainH4 = document.querySelector(".first-text-content h4");
const secondH4 = document.querySelector(".second-text-content h4");
const thirdH4 = document.querySelector(".third-text-content h4");
const fourthH4 = document.querySelector(".fourth-text-content h4");
const fithH4 = document.querySelector(".fith-text-content h4");

const mainPtag = document.querySelector(".first-text-content p");
const secondPtag = document.querySelector(".second-text-content p");
const thirdPtag = document.querySelector(".third-text-content p");
const fourthPtag = document.querySelector(".fourth-text-content p");
const fithPtag = document.querySelector(".fith-text-content p");

mainH4.textContent = siteContent["main-content"]["features-h4"];
mainPtag.textContent = siteContent["main-content"]["features-content"];

secondH4.textContent = siteContent["main-content"]["about-h4"];
secondPtag.textContent = siteContent["main-content"]["about-content"];

thirdH4.textContent = siteContent["main-content"]["services-h4"];
thirdPtag.textContent = siteContent["main-content"]["services-content"];

fourthH4.textContent = siteContent["main-content"]["product-h4"];
fourthPtag.textContent = siteContent["main-content"]["product-content"];

fithH4.textContent = siteContent["main-content"]["vision-h4"];
fithPtag.textContent = siteContent["main-content"]["vision-content"];

middleImg.src = siteContent["main-content"]["middle-img-src"];

//===================================== Contact =======================================

const contactH4 = document.querySelector(".contact h4");
const contactPTags = document.querySelectorAll(".contact p");
const contactP1 = contactPTags[0];
const contactP2 = contactPTags[1];
const contactP3 = contactPTags[2];

contactH4.textContent = siteContent["contact"]["Contact-h4"];
contactP1.textContent = siteContent["contact"]["address"];
contactP2.textContent = siteContent["contact"]["phone"];
contactP3.textContent = siteContent["contact"]["email"];

//===================================== Footer =========================================

const footerPtag = document.querySelector("footer p");

footerPtag.textContent = siteContent["footer"]["copyright"];
