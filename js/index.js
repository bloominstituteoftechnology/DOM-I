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

let snippet = document.getElementById("cta-img");
snippet.setAttribute("src", siteContent["cta"]["img-src"]);

let snippets = document.getElementById("middle-img");
snippets.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const navItems = document.querySelectorAll("nav a");
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

const ctaText = document.querySelector(".cta .cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

const titles = document.querySelectorAll("h4");
titles[0].textContent = siteContent["main-content"]["features-h4"];
titles[1].textContent = siteContent["main-content"]["about-h4"];
titles[2].textContent = siteContent["main-content"]["services-h4"];
titles[3].textContent = siteContent["main-content"]["product-h4"];
titles[4].textContent = siteContent["main-content"]["vision-h4"];

const content = document.querySelectorAll("p");
content[0].textContent = siteContent["main-content"]["features-content"];
content[1].textContent = siteContent["main-content"]["about-content"];
content[2].textContent = siteContent["main-content"]["services-content"];
content[3].textContent = siteContent["main-content"]["product-content"];
content[4].textContent = siteContent["main-content"]["vision-content"];

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent.contact["contact-h4"];

const contentP = document.querySelectorAll(".contact p");
contentP[0].textContent = siteContent.contact["address"];
contentP[1].textContent = siteContent.contact["phone"];
contentP[2].textContent = siteContent.contact["email"];

const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer["copyright"];
