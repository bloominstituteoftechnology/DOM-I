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


//creates a tag nodeList
let aTagArray = document.querySelectorAll("a");
aTagArray.forEach((link, i) =>{
  aTagArray[i].innerHTML = siteContent['nav'][`nav-item-${i+1}`]
});

let nav = document.querySelector("nav");

// let newNav = document.createElement("a");
// newNav.innerText = "Please";
// nav.prepend(newNav);

// let newNav2 = document.createElement("a");
// newNav2.innerText = "Work";
// nav.appendChild(newNav2);

aTagArray.forEach(element => {element.style.color="green"});

let callToHeader = document.querySelector(".cta-text h1");
callToHeader.innerHTML = siteContent["cta"]["h1"];

let callToButton = document.querySelector(".cta-text button");
callToButton.innerText = siteContent["cta"]["button"];

let CTAImage = document.getElementById("cta-img");
CTAImage.src = siteContent["cta"]["img-src"];

let middleImage = document.querySelector(".middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

let textContentH4 = document.querySelectorAll(".text-content h4");
textContentH4[0].innerText = siteContent["main-content"]["features-h4"];
textContentH4[1].innerText = siteContent["main-content"]["about-h4"];
textContentH4[2].innerText = siteContent["main-content"]["services-h4"];
textContentH4[3].innerText = siteContent["main-content"]["product-h4"];
textContentH4[4].innerText = siteContent["main-content"]["vision-h4"];

let textContentP = document.querySelectorAll(".text-content p");
textContentP[0].innerText = siteContent["main-content"]["features-content"];
textContentP[1].innerText = siteContent["main-content"]["about-content"];
textContentP[2].innerText = siteContent["main-content"]["services-content"];
textContentP[3].innerText = siteContent["main-content"]["product-content"];
textContentP[4].innerText = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

let contactPArray = document.querySelectorAll(".contact p");
contactPArray[0].innerHTML = siteContent["contact"]["address"];
contactPArray[1].innerHTML = siteContent["contact"]["phone"];
contactPArray[2].innerHTML = siteContent["contact"]["email"];

let footerContent = document.querySelector("footer p");
footerContent.innerText = siteContent["footer"]["copyright"];
