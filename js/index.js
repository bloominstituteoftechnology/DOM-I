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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const imageSrc = document.getElementById("cta-img");
imageSrc.setAttribute('src', siteContent["cta"]["img-src"]);

const allTags = document.querySelectorAll("nav a");
allTags.forEach((a,i) => a.textContent = siteContent["nav"][`nav-item-${++i}`]);

// cta
const ctaText = document.getElementsByClassName("cta-text")[0];

ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaText.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// main-content
const textContentList = document.querySelectorAll(".text-content");

textContentList[0].getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["features-h4"];
textContentList[0].getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["features-content"];
textContentList[1].getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["about-h4"];
textContentList[1].getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["about-content"];
textContentList[2].getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["services-h4"];
textContentList[2].getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["services-content"];
textContentList[3].getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["product-h4"];
textContentList[3].getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["product-content"];
textContentList[4].getElementsByTagName("h4")[0].textContent =
  siteContent["main-content"]["vision-h4"];
textContentList[4].getElementsByTagName("p")[0].textContent =
  siteContent["main-content"]["vision-content"];

// mid-content

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// footer

const contact = document.getElementsByClassName("contact")[0];
contact.getElementsByTagName("h4")[0].textContent = siteContent["contact"]["contact-h4"];
contact.getElementsByTagName("p")[0].textContent = siteContent["contact"]["address"];
contact.getElementsByTagName("p")[1].textContent = siteContent["contact"]["phone"];
contact.getElementsByTagName("p")[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].textContent = siteContent["footer"]["copyright"];

// stretch

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((a) => a.style.color = "green");
