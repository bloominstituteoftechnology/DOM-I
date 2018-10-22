const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "New",
    "nav-item-6": "Upcoming",
    "nav-item-7": "About",
    "nav-item-8": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br />Is<br />Awesome",
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
    "address" : "123 Way 456 Street <br /> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector("nav");

let firstNewAnchor = document.createElement("a");
let secondNewAnchor = document.createElement("a");

firstNewAnchor.href = "#";
secondNewAnchor.href = "#";

nav.append(firstNewAnchor);
nav.append(secondNewAnchor);


let navAnchor = nav.querySelectorAll("a");

navAnchor.forEach((anchor, index) => {
  anchor.textContent = siteContent["nav"][`nav-item-${index + 1}`];
  anchor.style.color = "green";
});
// end of header section

// cta section
let cta = document.querySelector(".cta");

let ctaText = cta.querySelector("h1");
ctaText.innerHTML = siteContent["cta"]["h1"];

let button = cta.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];
// end of cta section

// main content section
let mainContent = document.querySelector(".main-content");

// top content
let topContent = document.querySelector(".top-content");

let topHeadings = topContent.querySelectorAll("h4");

topHeadings[0].textContent = siteContent["main-content"]["features-h4"];
topHeadings[1].textContent = siteContent["main-content"]["about-h4"];

let topText = topContent.querySelectorAll("p");

topText[0].textContent = siteContent["main-content"]["features-content"];
topText[1].textContent = siteContent["main-content"]["about-content"];

// middle content
let middleImg = document.querySelector(".middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// bottom content
let bottomContent = document.querySelector(".bottom-content");

let bottomHeadings = bottomContent.querySelectorAll("h4");

bottomHeadings[0].textContent = siteContent["main-content"]["services-h4"];
bottomHeadings[1].textContent = siteContent["main-content"]["product-h4"];
bottomHeadings[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomText = bottomContent.querySelectorAll("p");

bottomText[0].textContent = siteContent["main-content"]["services-content"];
bottomText[1].textContent = siteContent["main-content"]["product-content"];
bottomText[2].textContent = siteContent["main-content"]["vision-content"];
//end of main content


// contact section
let contact = document.querySelector(".contact");

let contactHeading = contact.querySelector("h4");
contactHeading.textContent = siteContent["contact"]["contact-h4"];

let contactText = contact.querySelectorAll("p");

contactText[0].innerHTML = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];
// end of contact

// footer section
let footer = document.querySelector("footer");

let footerText = footer.querySelector("p");
footerText.textContent = siteContent["footer"]["copyright"];
// end of footer
