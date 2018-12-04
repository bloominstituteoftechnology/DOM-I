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
h4TextMain = document.querySelectorAll(".text-content h4");
h4TextMain[0].textContent = siteContent["main-content"]["features-h4"];
h4TextMain[1].textContent = siteContent["main-content"]["about-h4"];
h4TextMain[2].textContent = siteContent["main-content"]["services-h4"];
h4TextMain[3].textContent = siteContent["main-content"]["product-h4"];
h4TextMain[4].textContent = siteContent["main-content"]["vision-h4"];

contentTextMain = document.querySelectorAll(".text-content p");
contentTextMain[0].textContent =
  siteContent["main-content"]["features-content"];
contentTextMain[1].textContent = siteContent["main-content"]["about-content"];
contentTextMain[2].textContent =
  siteContent["main-content"]["services-content"];
contentTextMain[3].textContent = siteContent["main-content"]["product-content"];
contentTextMain[4].textContent = siteContent["main-content"]["vision-content"];

document
  .querySelector("#middle-img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

document.querySelector(".contact h4").textContent =
  siteContent.contact["contact-h4"];

contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.email;
contactInfo[2].textContent = siteContent.contact.phone;

document.querySelector("footer p").textContent = siteContent.footer.copyright;
