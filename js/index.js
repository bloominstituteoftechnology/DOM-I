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

// Navigation

const atags = document.querySelectorAll("a");

atags[0].setAttribute("class", ".nav-item-1");
atags[0].innerText = "Service";
atags[1].setAttribute("class", ".nav-item-2");
atags[1].innerText = "Product";
atags[2].setAttribute("class", ".nav-item-3");
atags[2].innerText = "Vision";
atags[3].setAttribute("class", ".nav-item-4");
atags[3].innerText = "Features";
atags[4].setAttribute("class", ".nav-item-5");
atags[4].innerText = "About";
atags[5].setAttribute("class", ".nav-item-6");
atags[5].innerText = "Product";

atags.forEach(link => (link.style.color = "green"));

const newAtag1 = document.createElement("a");
const mainNav = document.querySelector("nav");

// Header

const mainHead = document.querySelector("h1");
mainHead.textContent = siteContent["cta"]["h1"];

const mainButton = document.querySelector("button");
mainButton.innerText = "Get Started";

const pic1 = document.querySelector("#cta-img");
pic1.setAttribute("src", siteContent["cta"]["img-src"]);

const mainContent = docuent.querySelectorAll(".text-content");

// Main Content

mainContent[0].querySelector("h4").textContent =
  siteContent["main-content"]["features-h4"];
mainContent[0].querySelector("p").textContent =
  siteContent["main-content"]["features-content"];
mainContent[1].querySelector("h4").textContent =
  siteContent["main-content"]["about-h4"];
mainContent[1].querySelector("p").textContent =
  siteContent["main-content"]["about-content"];
mainContent[2].querySelector("h4").textContent =
  siteContent["main-content"]["services-h4"];
mainContent[2].querySelector("p").textContent =
  siteContent["main-content"]["services-content"];
mainContent[3].querySelector("h4").textContent =
  siteContent["main-content"]["product-h4"];
mainContent[3].querySelector("p").textContent =
  siteContent["main-content"]["product-content"];
mainContent[4].querySelector("h4").textContent =
  siteContent["main-content"]["vision-h4"];
mainContent[4].querySelector("p").textContent =
  siteContent["main-content"]["vision-content"];

const pic2 = document.querySelector("middle-img");
pic2.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// contactinfo

const contactinfo = document.querySelector(".contact");

contactinfo.getElementsByTagName("h4")[0].textContent =
  siteContent["contact"]["contact-h4"];
contactinfo.getElementsByTagName("p")[0].textContent =
  siteContent["contact"]["address"];
contactinfo.getElementsByTagName("p")[1].textContent =
  siteContent["contact"]["phone"];
contactinfo.getElementsByTagName("p")[2].textContent =
  siteContent["contact"]["email"];

// bottom

const footer = document.querySelector("footer");

footer.innerText = "Copyright Great Idea! 2019";

// task 3

const navA = document.createElement("a");
const headA = document.querySelector("nav");
navA.href = "#";
navA.innerText = "features";
headA.appendChild(navA);
navA.style.color = "green";

const headA1 = document.querySelector("nav");
const navA1 = document.createElement("a");
navA1.href = "#";
navA1.innerText = "contact";
headA1.prepend(navA1);
navA1.style.color = "green";
