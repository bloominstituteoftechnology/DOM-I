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

// ===== IMAGES =====
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"];

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];


// ===== NAV =====
const mainNav = document.querySelector("nav");

const navAnchors = document.querySelectorAll("a");

navAnchors.forEach((navAnchor, i) => navAnchors[i].textContent = siteContent["nav"][`nav-item-${i+1}`]);

const firstAnchor = document.createElement("a");
firstAnchor.href = "#";
firstAnchor.textContent = "Get Started";
firstAnchor.style.color = "green";

const lastAnchor = document.createElement("a");
lastAnchor.href = "#";
lastAnchor.textContent = "Blog";
lastAnchor.style.color = "green";

mainNav.prepend(firstAnchor);
mainNav.appendChild(lastAnchor);

navAnchors.forEach(navAnchor => navAnchor.style.color = "green");

// ===== CTA =====

const ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"].split(' ').join(`<br>`);

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

// ===== MAIN CONTENT =====

const contentHeaders = document.querySelectorAll("h4");

contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

contentHeaders[5].textContent = siteContent["contact"]["contact-h4"];


const contentParas = document.querySelectorAll("p");

contentParas[0].textContent = siteContent["main-content"]["features-content"];
contentParas[1].textContent = siteContent["main-content"]["about-content"];
contentParas[2].textContent = siteContent["main-content"]["services-content"];
contentParas[3].textContent = siteContent["main-content"]["product-content"];
contentParas[4].textContent = siteContent["main-content"]["vision-content"];

contentParas[5].innerHTML = siteContent["contact"]["address"].split('Street ').join(`Street <br>`);
contentParas[6].textContent = siteContent["contact"]["phone"];
contentParas[7].textContent = siteContent["contact"]["email"];

contentParas[8].textContent = siteContent["footer"]["copyright"];