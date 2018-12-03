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

// ============= Variables
const navLinks = document.querySelectorAll("a");
const navArr = Array.from(navLinks);
const logo = document.querySelector("#logo-img");
const ctaText = document.querySelector(".cta-text").childNodes;
const ctaTextArr = Array.from(ctaText);
const ctaImg = document.querySelector("#cta-img");
const topContent = document.querySelector(".top-content").childNodes;
const topContFeatures = topContent[1].childNodes;
const featuresH4 = topContFeatures[1];
const featuresPara = topContFeatures[3];
const topContAbout = topContent[3].childNodes;
const aboutH4 = topContAbout[1];
const aboutPara = topContAbout[3];
const middleImg = document.querySelector("#middle-img");
const bottomContent = document.querySelector(".bottom-content").childNodes;
const bottomServices = bottomContent[1].childNodes;
const bottomProduct = bottomContent[3].childNodes;
const bottomVision = bottomContent[5].childNodes;

// ============= DOM Creation/Insertion
for (let i = 0; i < navArr.length; i++) {
  navArr[i].textContent = siteContent["nav"]["nav-item-" + (i + 1)];
}
logo.setAttribute("src", siteContent["nav"]["img-src"]);
for (let i = 1; i < ctaTextArr.length; i++) {
  if (i === 1) {
    ctaTextArr[i].textContent = siteContent["cta"]["h1"];
  }
  if (i === 3) {
    ctaTextArr[i].textContent = siteContent["cta"]["button"];
  }
}
ctaImg.src = siteContent["cta"]["img-src"];
featuresH4.textContent = siteContent["main-content"]["features-h4"];
featuresPara.textContent = siteContent["main-content"]["features-content"];
aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutPara.textContent = siteContent["main-content"]["about-content"];
middleImg.src = siteContent["main-content"]["middle-img-src"];
bottomServices[1].textContent = siteContent["main-content"]["services-h4"];
bottomServices[3].textContent = siteContent["main-content"]["services-content"];
bottomProduct[1].textContent = siteContent["main-content"]["product-h4"];
bottomProduct[3].textContent = siteContent["main-content"]["product-content"];
bottomVision[1].textContent = siteContent["main-content"]["vision-h4"];
bottomVision[3].textContent = siteContent["main-content"]["vision-content"];
