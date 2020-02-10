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

//Get <a> tags
const nav = document.getElementsByTagName("a");
const navArray = Array.from(nav);
for(let i = 0; i < navArray.length; i++){
  navArray[i].textContent = siteContent["nav"][`nav-item-${i}`];
}

//Add to end of Nav bar
const lastNav = document.createElement("a");
lastNav.textContent = "Contact";
const allNav = document.querySelector("nav");
allNav.append(lastNav);

//Code image
let wallOfCode = document.getElementById("cta-img");
wallOfCode.setAttribute("src", siteContent["cta"]["img-src"]);

//Title
const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];
ctaText.textContent = 'dom\n is\n awesome';

//Button
const button = document.getElementsByTagName("button");
button[0].textContent = siteContent["cta"]["button"];

//Subtitles
const subtitle = document.getElementsByTagName("h4");
const subtitleArray = Array.from(subtitle);
subtitleArray[0].textContent = siteContent["main-content"]["features-h4"];
subtitleArray[1].textContent = siteContent["main-content"]["about-h4"];
subtitleArray[2].textContent = siteContent["main-content"]["services-h4"];
subtitleArray[3].textContent = siteContent["main-content"]["product-h4"];
subtitleArray[4].textContent = siteContent["main-content"]["vision-h4"];
subtitleArray[5].textContent = siteContent["contact"]["contact-h4"];

//<p> tag text
const paragraphs = document.getElementsByTagName("p");
const paragraphArray = Array.from(paragraphs);
paragraphArray[0].textContent = siteContent["main-content"]["features-content"];
paragraphArray[1].textContent = siteContent["main-content"]["about-content"];
paragraphArray[2].textContent = siteContent["main-content"]["services-content"];
paragraphArray[3].textContent = siteContent["main-content"]["product-content"];
paragraphArray[4].textContent = siteContent["main-content"]["vision-content"];
paragraphArray[5].textContent = siteContent["contact"]["address"];
paragraphArray[6].textContent = siteContent["contact"]["phone"];
paragraphArray[7].textContent = siteContent["contact"]["email"];
paragraphArray[8].textContent = siteContent["footer"]["copyright"];

//middle image
let midImg = document.getElementById("middle-img");
midImg.src = "img/mid-page-accent.jpg";

