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
const updateContent = {
  // Update content for when the cta button is pressed
  cta: {
    h1: "Dude.<br> Dude.<br> Dude.",
    button: "Dude."
  },
  "main-content": {
    "all-h4": "Dude."
  },
  footer: {
    copyright: "Dude. Dude. Dude. Dude. 2018"
  }
};
// ================= Variables
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("a");
const navArr = Array.from(navLinks);
const logo = document.querySelector("#logo-img");
const shop = document.createElement("a");
const home = document.createElement("a");
const ctaText = document.querySelector(".cta-text").childNodes;
const ctaTextArr = Array.from(ctaText);
console.log(ctaTextArr);
const ctaImg = document.querySelector("#cta-img");
const button = document.querySelector("button"); // Stretch goal code
const topContent = document.querySelector(".top-content").childNodes;
const topContFeatures = topContent[1].childNodes;
const topContAbout = topContent[3].childNodes;
const middleImg = document.querySelector("#middle-img");
const bottomContent = document.querySelector(".bottom-content").childNodes;
const bottomServices = bottomContent[1].childNodes;
const bottomProduct = bottomContent[3].childNodes;
const bottomVision = bottomContent[5].childNodes;
const contact = document.querySelector(".contact").childNodes;
const footer = document.querySelector("footer").childNodes;
function buildNav() {
  shop.href = "#";
  shop.textContent = "Shop";
  shop.style.color = "green";
  nav.appendChild(shop);
  home.href = "index.html";
  home.textContent = "Home";
  home.style.color = "green";
  nav.prepend(home);
  for (let i = 0; i < navArr.length; i++) {
    navArr[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
    navArr[i].style.color = "green";
  }
  logo.setAttribute("src", siteContent["nav"]["img-src"]);
}
function buildCTA() {
  button.style.background = "lightgrey"; // Stretch goal code
  ctaImg.style.border = "10px solid green"; // Stretch goal code
  ctaImg.style.borderRadius = "15px"; // Stretch goal code
  for (let i = 1; i < ctaTextArr.length; i++) {
    if (i === 1) {
      const ctaH1Text = siteContent["cta"]["h1"].split(" ");
      ctaTextArr[i].innerHTML = ctaH1Text.join("<br>");
    }
    if (i === 3) {
      ctaTextArr[i].textContent = siteContent["cta"]["button"];
    }
  }
  ctaImg.src = siteContent["cta"]["img-src"];
  button.addEventListener("click", () => {
    // Add CTA button event listener
    ctaTextArr[1].innerHTML = updateContent["cta"]["h1"];
    button.textContent = updateContent.cta.button;
    topContFeatures[1].textContent = updateContent["main-content"]["all-h4"];
    topContAbout[1].textContent = updateContent["main-content"]["all-h4"];
    bottomServices[1].textContent = updateContent["main-content"]["all-h4"];
    bottomProduct[1].textContent = updateContent["main-content"]["all-h4"];
    bottomVision[1].textContent = updateContent["main-content"]["all-h4"];
    footer[1].textContent = updateContent.footer.copyright;
  });
}
function buildContent() {
  topContFeatures[1].textContent = siteContent["main-content"]["features-h4"];
  topContFeatures[3].textContent =
    siteContent["main-content"]["features-content"];
  topContAbout[1].textContent = siteContent["main-content"]["about-h4"];
  topContAbout[3].textContent = siteContent["main-content"]["about-content"];
  middleImg.src = siteContent["main-content"]["middle-img-src"];
  middleImg.style.opacity = 0.6; // Stretch goal code
  bottomServices[1].textContent = siteContent["main-content"]["services-h4"];
  bottomServices[3].textContent =
    siteContent["main-content"]["services-content"];
  bottomProduct[1].textContent = siteContent["main-content"]["product-h4"];
  bottomProduct[3].textContent = siteContent["main-content"]["product-content"];
  bottomVision[1].textContent = siteContent["main-content"]["vision-h4"];
  bottomVision[3].textContent = siteContent["main-content"]["vision-content"];
}
function buildContact() {
  contact[1].textContent = siteContent["contact"]["contact-h4"];
  const addressText = siteContent["contact"]["address"].split(" ");
  addressText[3] = "Street<br>";
  contact[3].innerHTML = addressText.join(" ");
  contact[5].textContent = siteContent["contact"]["phone"];
  contact[7].textContent = siteContent["contact"]["email"];
}
function buildFooter() {
  footer[1].textContent = siteContent["footer"]["copyright"];
}
(function buildPage() {
  buildNav();
  buildCTA();
  buildContent();
  buildContact();
  buildFooter();
})();
