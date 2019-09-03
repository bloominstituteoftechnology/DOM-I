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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// for loop over a tags

let navLinks = document.querySelectorAll("a");
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

// header

let ctaText = document.querySelector(".cta-text");
console.log(ctaText);
ctaText.firstElementChild.textContent = siteContent["cta"]["h1"];
ctaText.lastElementChild.textContent = siteContent["cta"]["button"];

let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);


// select all text-content to traverse

let textContent = document.querySelectorAll(".text-content");


// top content

textContent[0].firstElementChild.textContent = siteContent["main-content"]["features-h4"];
textContent[0].lastElementChild.textContent = siteContent["main-content"]["features-content"];

textContent[1].firstElementChild.textContent = siteContent["main-content"]["about-h4"];
textContent[1].lastElementChild.textContent = siteContent["main-content"]["about-content"];

// middle image

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// bottom content

textContent[2].firstElementChild.textContent = siteContent["main-content"]["services-h4"];
textContent[2].lastElementChild.textContent = siteContent["main-content"]["services-content"];

textContent[3].firstElementChild.textContent = siteContent["main-content"]["product-h4"];
textContent[3].lastElementChild.textContent = siteContent["main-content"]["product-content"];

textContent[4].firstElementChild.textContent = siteContent["main-content"]["vision-h4"];
textContent[4].lastElementChild.textContent = siteContent["main-content"]["vision-content"];

// contact section

let contactSection = document.querySelector(".contact").children;
contactSection[0].textContent = siteContent["contact"]["contact-h4"];
contactSection[1].textContent = siteContent["contact"]["address"];
contactSection[2].textContent = siteContent["contact"]["phone"];
contactSection[3].textContent = siteContent["contact"]["email"];

// footer

let footer = document.querySelector("footer");
footer.firstElementChild.textContent = siteContent["footer"]["copyright"];

