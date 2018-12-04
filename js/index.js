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
let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav
let navItems = document.querySelectorAll("a");
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

//CTA
let ctaHeading = document.querySelector(".cta-text h1");
ctaHeading.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//MainContent
let textContentList = document.querySelectorAll(".text-content");

textContentList[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
textContentList[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
textContentList[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
textContentList[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];
textContentList[2].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
textContentList[2].querySelector("p").textContent = siteContent["main-content"]["services-content"];
textContentList[3].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
textContentList[3].querySelector("p").textContent = siteContent["main-content"]["product-content"];
textContentList[4].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
textContentList[4].querySelector("p").textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

//Contact
let contact = document.querySelector(".contact h4");

contact.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");

contactP[0].textContent = siteContent.contact["address"];
contactP[1].textContent = siteContent.contact["phone"];
contactP[2].textContent = siteContent.contact["email"];

//Footer 
let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"]

//New nav color
navItems.forEach((item, i) => {
  item.style.color = "green"
})


//New nav links 
const newAtag = document.createElement('a');
newAtag.href = "#";
newAtag.textContent = "Affiliates"

const mainNav = document.querySelector("nav");

mainNav.append(newAtag);

const newAtag2 = document.createElement('a');
newAtag2.href = "#";
newAtag2.textContent = "History";

const mainNav2 = document.querySelector("nav");

mainNav2.prepend(newAtag2);





