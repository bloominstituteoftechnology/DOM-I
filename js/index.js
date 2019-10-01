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

const navBar = document.querySelectorAll("a");
console.log(navBar);

for (let i = 0; i < navBar.length; i++) {
  // ***********IN THIS LOOP WE ADDED 1 TO i BECAUSE THE OBJECT ALSO HAS AN IMAGE PROPERTY WHICH SKEWS WHERE i ENDS***********//

  navBar[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

const header = document.querySelector("h1");
header.textContent = siteContent["cta"]["h1"];

const headerCta = document.querySelector("button");
headerCta.textContent = siteContent["cta"]["button"];

const titles = document.querySelectorAll(".text-content h4");
console.log(titles);

for (let i = 0; i < titles.length; i++) {
  if (i % 2 == 0) {
    titles[i].textContent = siteContent["main-content"]["features-h4"];
  } else {
    titles[i].textContent = siteContent["main-content"]["about-h4"];
  }
}

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const content = document.querySelectorAll(".text-content p");
console.log(content);

for (let i = 0; i < content.length; i++) {
  if (i % 2 == 0) {
    content[i].textContent = siteContent["main-content"]["features-content"];
  } else {
    content[i].textContent = siteContent["main-content"]["about-content"];
  }
}
