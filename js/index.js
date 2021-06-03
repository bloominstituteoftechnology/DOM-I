const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let aTag = document.querySelectorAll("a");
aTag[0].textContent = siteContent["nav"]["nav-item-1"];
aTag[1].textContent = siteContent["nav"]["nav-item-2"];
aTag[2].textContent = siteContent["nav"]["nav-item-3"];
aTag[3].textContent = siteContent["nav"]["nav-item-4"];
aTag[4].textContent = siteContent["nav"]["nav-item-5"];
aTag[5].textContent = siteContent["nav"]["nav-item-6"];

let topImg = document.getElementById("cta-img");
topImg.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaH1 = document.querySelector("h1");
ctaH1.textContent = siteContent["cta"]["h1"];
ctaH1.style.setProperty("width", "40%");

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let h4Tags = document.querySelectorAll("h4");
h4Tags[0].textContent = siteContent["main-content"]["features-h4"];
h4Tags[1].textContent = siteContent["main-content"]["about-h4"];
h4Tags[2].textContent = siteContent["main-content"]["services-h4"];
h4Tags[3].textContent = siteContent["main-content"]["product-h4"];
h4Tags[4].textContent = siteContent["main-content"]["vision-h4"];
h4Tags[5].textContent = siteContent["contact"]["contact-h4"];

let centerImg = document.getElementsByClassName("middle-img");
centerImg[0].setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let pTags = document.querySelectorAll("p");
pTags[0].textContent = siteContent["main-content"]["features-content"];
pTags[1].textContent = siteContent["main-content"]["about-content"];
pTags[2].textContent = siteContent["main-content"]["services-content"];
pTags[3].textContent = siteContent["main-content"]["product-content"];
pTags[4].textContent = siteContent["main-content"]["vision-content"];
pTags[5].textContent = siteContent["contact"]["address"];
pTags[6].textContent = siteContent["contact"]["phone"];
pTags[7].textContent = siteContent["contact"]["email"];
pTags[8].textContent = siteContent["footer"]["copyright"];
