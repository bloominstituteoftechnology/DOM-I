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
const nav = document.querySelectorAll("nav a");
const ctaImage = document.getElementById("cta-img");
const domIsAwesome = document.querySelector(".cta .cta-text h1");
const button = document.querySelector("button");
const titles = document.querySelectorAll("h4");
const paragraphs = document.querySelectorAll("p");
const middleImage = document.getElementById("middle-img");
const contactH4 = document.querySelector(".contact h4");
const contactInfo = document.querySelectorAll(".contact p");
  const footer = document.querySelector("footer p");

logo.setAttribute('src', siteContent["nav"]["img-src"]);

nav.forEach((link, i) => {
  return link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
});
siteContent["cta"]["h1"] = siteContent["cta"]["h1"].split(" ").join("<br>");
domIsAwesome.innerHTML = siteContent["cta"]["h1"];
button.innerHTML = siteContent["cta"]["button"];
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

titles[0].innerHTML = siteContent["main-content"]["features-h4"];
titles[1].innerHTML = siteContent["main-content"]["about-h4"];
paragraphs[0].innerHTML = siteContent["main-content"]["features-content"];
paragraphs[1].innerHTML = siteContent["main-content"]["about-content"];

middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

titles[2].innerHTML = siteContent["main-content"]["services-h4"];
titles[3].innerHTML = siteContent["main-content"]["product-h4"];
titles[4].innerHTML = siteContent["main-content"]["vision-h4"];
paragraphs[2].innerHTML = siteContent["main-content"]["services-content"];
paragraphs[3].innerHTML = siteContent["main-content"]["product-content"];
paragraphs[4].innerHTML = siteContent["main-content"]["vision-content"];

contactH4.innerHTML = siteContent["contact"]["contact-h4"];
contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["phone"];
contactInfo[2].innerHTML = siteContent["contact"]["email"];

footer.innerHTML = siteContent["footer"]["copyright"];

