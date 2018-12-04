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
for (let i = 0; i < Object.keys(siteContent.nav).length - 1; i++) {
  let nav = document.querySelectorAll("a");
  nav[i].append(siteContent["nav"][`nav-item-${i + 1}`]);
}

document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;
document
  .querySelector("#cta-img")
  .setAttribute("src", siteContent.cta["img-src"]);
mainContentText = document.querySelectorAll(".text-content");
console.log(mainContentText);
console.log(Object.keys(siteContent["main-content"]));

for (let i = 0; i < Object.keys(siteContent["main-content"]).length; i++) {
  const element = Object.keys(siteContent["main-content"]);
  let text = element[i];
  if (text === "middle-img-src") {
    i++;
  }
  if (0 < text.search("-h4")) {
    mainContentText[i].childNodes[1].textContent =
      siteContent["main-content"][text];
    console.log(text);
    i--;
  }
  if (0 < text.search("-content")) {
    console.log(mainContentText);
    mainContentText[i + 1].childNodes[3].textContent =
      siteContent["main-content"][text];
    console.log(text);
  }
}
// Object.keys(siteContent["main-content"]).forEach(element => {
//   mainContentText[i].childNodes[3].textContent =
//     siteContent["main-content"][element];
// });
