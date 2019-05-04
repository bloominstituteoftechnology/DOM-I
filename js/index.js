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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// nav items
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("nav a");
const navValues = Object.values(siteContent["nav"]);

for (let i = 0; i < 6; i++) {
  navItems[i].textContent = navValues[i];
}

// Change nav color to green
navItems.forEach(item => (item.style.color = "seagreen"));

// Creating Two more nav items
const newNav1 = document.createElement("a");
newNav1.textContent = "Home";
newNav1.style.color = "seagreen";
newNav1.style.cursor = 'pointer';
nav.prepend(newNav1);

const newNav2 = document.createElement("a");
newNav2.textContent = "Random";
newNav2.style.color = "seagreen";
newNav2.style.cursor = 'pointer';
nav.appendChild(newNav2);

// CTA items
const cta = document.querySelector(".cta");
const ctaLogo = document.getElementById("cta-img");
const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");

let h1Arr = siteContent['cta']['h1'].split(' ');
h1Arr.splice(1, 0, `<br>`);
h1Arr.splice(3, 0, `<br>`);
let newH1 = h1Arr.join('');

ctaH1.innerHTML = newH1;
ctaButton.textContent = siteContent["cta"]["button"];
ctaLogo.setAttribute("src", siteContent["cta"]["img-src"]);

// top content
const topContentHeadings = document.querySelectorAll(
  ".top-content .text-content h4"
);
const topContentParas = document.querySelectorAll(
  ".top-content .text-content p"
);

topContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
topContentParas[0].textContent = siteContent["main-content"]["features-content"];
topContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];
topContentParas[1].textContent = siteContent["main-content"]["about-content"];

// Center img
const centerImg = document.getElementById("middle-img");
centerImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Bottom Content
const botContentHeadings = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
const botContentParas = document.querySelectorAll(
  ".bottom-content .text-content p"
);

botContentHeadings[0].textContent = siteContent["main-content"]["services-h4"];
botContentParas[0].textContent = siteContent["main-content"]["services-content"];
botContentHeadings[1].textContent = siteContent["main-content"]["product-h4"];
botContentParas[1].textContent = siteContent["main-content"]["product-content"];
botContentHeadings[2].textContent = siteContent["main-content"]["vision-h4"];
botContentParas[2].textContent = siteContent["main-content"]["vision-content"];

// Contact
const contactHeader = document.querySelector(".contact h4");
const contactParas = document.querySelectorAll(".contact p");

let contactArr = siteContent['contact']['address'].split(' ');
contactArr.splice(4, 0, `<br>`);
let newAddress = contactArr.join('');

contactHeader.textContent = siteContent["contact"]["contact-h4"];

contactParas[0].innerHTML = newAddress;
contactParas[1].textContent = siteContent['contact']['phone'];
contactParas[2].textContent = siteContent['contact']['email'];

// Footer
const footerP = document.querySelector("footer p");

footerP.textContent = siteContent["footer"]["copyright"];

// STRETCH
// Adding Styles through JS to Make nav fixed
const header = document.querySelector("header");
header.style.position = "fixed";
header.style.top = "0";
header.style.zIndex = "1";
header.style.backgroundColor = "#fff";

cta.style.marginTop = "100px";

// Button event listener
ctaButton.addEventListener("click", e => {
  // if (ctaH1.textContent === siteContent['cta']['h1']) {
  //   ctaH1.textContent = `Don't Click Me!`;
  // } else {
  //   ctaH1.textContent = siteContent['cta']['h1'];
  // }

  if (cta.style.flexDirection === "row" && ctaH1.innerHTML === newH1) {
    cta.style.flexDirection = "row-reverse";
    ctaH1.innerHTML = `Don't <br> Click <br> Me`;
  } else {
    cta.style.flexDirection = "row";
    ctaH1.innerHTML = newH1;
  }
});