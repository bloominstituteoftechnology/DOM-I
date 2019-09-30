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

// NAVIGATION
// - - - - - - - - -

// Assign text to nav links
let nav_links = document.querySelectorAll("header nav a");
for (let i = 0; i < nav_links.length; i++) {
  nav_links[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

// Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// CTA SECTION
// - - - - - - - - -

// Assign CTA section H1 text
let cta_h1 = document.querySelector(".cta-text h1");
cta_h1.textContent = "DOM IS AWESOME";

// Assign CTA section button text
let cta_btn = document.querySelector(".cta-text button");
cta_btn.textContent = "Get Started";

// Assign CTA section image a src
let cta_img = document.querySelector(".cta img");
cta_img.setAttribute("src", siteContent.cta["img-src"]);

// MAIN CONTENT SECTION
// - - - - - - - - - - - - -

// Assign Main Content H4's their respective titles
let main_content_titles = document.querySelectorAll(".main-content h4");
main_content_titles[0].textContent = siteContent["main-content"]["features-h4"];
main_content_titles[1].textContent = siteContent["main-content"]["about-h4"];

// Assign Main Content p's their respective text
let main_content_ps = document.querySelectorAll(".main-content p");
main_content_ps[0].textContent = siteContent["main-content"]["features-content"];
main_content_ps[1].textContent = siteContent["main-content"]["about-content"];

// MIDDLE IMAGE
// - - - - - - - - -

// Assign Middle Image a src
let middle_img = document.querySelector("#middle-img");
middle_img.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// BOTTOM CONTENT
// - - - - - - - - - -

// Assign Bottom Content H4's their respective titles
let bottom_content_titles = document.querySelectorAll(".bottom-content h4");
bottom_content_titles[0].textContent = siteContent["main-content"]["services-h4"];
bottom_content_titles[1].textContent = siteContent["main-content"]["product-h4"];
bottom_content_titles[2].textContent = siteContent["main-content"]["vision-h4"];

// Assign Bottom Content p's their respective values
let bottom_content_ps = document.querySelectorAll(".bottom-content p");
bottom_content_ps[0].textContent = siteContent["main-content"]["services-content"];
bottom_content_ps[1].textContent = siteContent["main-content"]["product-content"];
bottom_content_ps[2].textContent = siteContent["main-content"]["vision-content"];
