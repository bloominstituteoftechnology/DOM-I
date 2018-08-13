const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Blog",
    "nav-item-8": "Questions",
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

//Add new item to Nav bar
let newNavItem = document.createElement("a");
document.querySelector("nav").appendChild(newNavItem);
newNavItem.innerHTML = "<a href='#'></a>";

//Add second item to Nav bar - not working
// let item = document.createElement("a");
// document.querySelector("nav").appendChild(item);
// item.innerHTML = "<a href='#'></a>";

//Add content for Nav bar items by selecting Nav bar and looping through each <a> tag
let navItems = document.querySelectorAll("a");

let n = 1;
navItems.forEach(function(item) {
  item.innerHTML = siteContent.nav["nav-item-" + n];
  n++;
  item.style.color = "#50c878";
  //console.log(item)
});

//Add text to Call to Action section + add correct img source
let cta = document.querySelector(".cta-text").children;
let h1 = cta[0];
h1.innerHTML = siteContent.cta.h1;

let button = cta[1];
button.innerHTML = siteContent.cta.button;

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

//Add text for main top content
let topContentHeaders = document.querySelectorAll(
  ".top-content .text-content h4"
);
topContentHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];

let topContentP = document.querySelectorAll(".top-content .text-content p");
topContentP[0].innerHTML = siteContent["main-content"]["features-content"];
topContentP[1].innerHTML = siteContent["main-content"]["about-content"];

//Add mid page img src
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Add text for bottom content
let btmContentHeaders = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
btmContentHeaders[0].innerHTML = siteContent["main-content"]["services-h4"];
btmContentHeaders[1].innerHTML = siteContent["main-content"]["product-h4"];
btmContentHeaders[2].innerHTML = siteContent["main-content"]["vision-h4"];

let btmContentP = document.querySelectorAll(".bottom-content .text-content p");

btmContentP[0].innerHTML = siteContent["main-content"]["services-content"];
btmContentP[1].innerHTML = siteContent["main-content"]["product-content"];
btmContentP[2].innerHTML = siteContent["main-content"]["vision-content"];

//Add text for contact section
document.querySelector(".contact h4").innerHTML =
  siteContent.contact["contact-h4"];
let contact = document.querySelectorAll(".contact p");
contact[0].innerHTML = siteContent.contact.address;
contact[1].innerHTML = siteContent.contact.phone;
contact[2].innerHTML = siteContent.contact.email;

// Add text for footer
document.querySelector("footer p").innerHTML = siteContent.footer.copyright;
