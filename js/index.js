const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll(".container > header nav a");
refs = Object.keys(siteContent.nav).sort();
refs.shift(); // deletes "img-src"
navLinks.forEach(function(link, i) {
  link.innerText = siteContent.nav[refs[i]];
});

const giLogo = document.querySelector("#logo-img");
giLogo.src = siteContent.nav["img-src"];

const mainTitle = document.querySelector(".cta h1");
mainTitle.innerText = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta button");
ctaButton.innerText = siteContent.cta.button;

document.querySelector("#cta-img").src = siteContent.cta["img-src"];

const sectionHeader1 = document.querySelector(".top-content h4");
const sectionHeader2 = document.querySelector(".top-content div:nth-child(2) h4");
const sectionHeader3 = document.querySelector(".bottom-content h4");
const sectionHeader4 = document.querySelector(".bottom-content div:nth-child(2) h4");
const sectionHeader5 = document.querySelector(".bottom-content div:nth-child(3) h4");
sectionHeader1.innerText = siteContent["main-content"]["features-h4"];
sectionHeader2.innerText = siteContent["main-content"]["about-h4"];
sectionHeader3.innerText = siteContent["main-content"]["services-h4"];
sectionHeader4.innerText = siteContent["main-content"]["product-h4"];
sectionHeader5.innerText = siteContent["main-content"]["vision-h4"];

const sectionContent1 = document.querySelector(".top-content p");
const sectionContent2 = document.querySelector(".top-content div:nth-child(2) p");
const sectionContent3 = document.querySelector(".bottom-content p");
const sectionContent4 = document.querySelector(".bottom-content div:nth-child(2) p");
const sectionContent5 = document.querySelector(".bottom-content div:nth-child(3) p");
sectionContent1.innerText = siteContent["main-content"]["features-content"];
sectionContent2.innerText = siteContent["main-content"]["about-content"];
sectionContent3.innerText = siteContent["main-content"]["services-content"];
sectionContent4.innerText = siteContent["main-content"]["product-content"];
sectionContent5.innerText = siteContent["main-content"]["vision-content"];

const accent = document.querySelector("#middle-img");
accent.src = siteContent["main-content"]["middle-img-src"];

const contactHeader = document.querySelector(".contact h4");
const contactContent = document.querySelectorAll(".contact p");
const address = contactContent[0];
const phone = contactContent[1];
const email = contactContent[2];
contactHeader.textContent = siteContent.contact["contact-h4"];
address.textContent = siteContent.contact.address;
phone.textContent = siteContent.contact.phone;
email.textContent = siteContent.contact.email;

const footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent.footer.copyright;

navLinks.forEach(link => link.style.color = "green");

const blogLink = document.createElement('a');
const learnLink = document.createElement('a');
blogLink.textContent = "Blog";
learnLink.textContent = "Learn!";
blogLink.href = "#";
learnLink.href = "#";
const mainNav = document.querySelector(".container > header nav");
mainNav.appendChild(blogLink);
mainNav.prepend(learnLink);

const goEvil = document.createElement('button');
goEvil.textContent = "Go Evil";
const titleArea = document.querySelector(".cta-text");
titleArea.appendChild(goEvil);

goEvil.addEventListener("click", evilTransformation);

function evilTransformation() {
  document.querySelector("body").style.background = "#020202";
  
  const container = document.querySelector(".container");
  container.style.color = "#ffa566";
  container.style.backgroundImage = "linear-gradient(rgba(2, 2, 2, .9), rgba(2, 2, 2, .9)), url(\"img/hellfire.jpg\")";
  container.style.backgroundRepeat = "no-repeat";
  container.style.backgroundAttachment = "fixed";
  container.style.backgroundPosition = "bottom";
  
  const mainContent = document.querySelector(".main-content");
  mainContent.style.borderTop = "2px solid red";
  mainContent.style.borderBottom = "2px solid red";

  const newNavLinks = document.querySelectorAll(".container > header nav a");
  newNavLinks.forEach(link => link.style.color = "red");

  goEvil.textContent = "Irreversible!";

  giLogo.style.boxShadow = "0 0 5px white";
  giLogo.style.background = "#7f7f7f";
}