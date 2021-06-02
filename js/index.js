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

let navTags = document.querySelectorAll("nav > a");

for (let i=1; i<navTags.length; i++) {
  navTags[i].textContent = siteContent.nav["nav-item-" + i]
}

let ctaChild1 = document.getElementsByClassName("cta-text")[0]
let ctaText = ctaChild1.querySelector("h1");
let ctaButton = ctaChild1.querySelector("button");

ctaText.innerHTML = "DOM<br> Is<br> Awesome"
ctaButton.textContent = "Get Started";

let ctaSection = document.getElementsByClassName("cta")[0];
let ctaImg = ctaSection.querySelector("img")
ctaImg.setAttribute("src", "img/header-img.png")

let topContent = document.querySelector(".top-content");
let textSections1 = document.querySelectorAll(".top-content > .text-content");
let textSections2 = document.querySelectorAll(".bottom-content > .text-content");
// let 
// textContent1.innertext = siteContent["main-content"]["features-h4"]
let mainContentValues = Object.values(siteContent["main-content"]);
(function() {
  let i = 0;
  let textSection = textSections1[0];
  textSection.querySelector("h4").textContent = mainContentValues[i];;
  i++;
  textSection.querySelector("p").textContent = mainContentValues[i];
  i++
  textSection = textSections1[1];
  textSection.querySelector("h4").textContent = mainContentValues[i];
  i++;
  textSection.querySelector("p").textContent = mainContentValues[i];
  i++
  textSection = textSections2[0];
  i++
  textSection.querySelector("h4").textContent = mainContentValues[i];;
  i++;
  textSection.querySelector("p").textContent = mainContentValues[i];
  i++
  textSection = textSections2[1];
  textSection.querySelector("h4").textContent = mainContentValues[i];
  i++;
  textSection.querySelector("p").textContent = mainContentValues[i];
  i++
  textSection = textSections2[2];
  textSection.querySelector("h4").textContent = mainContentValues[i];
  i++;
  textSection.querySelector("p").textContent = mainContentValues[i];
})();

document.querySelector(".middle-img").setAttribute("src", "img/mid-page-accent.jpg")

let contacts = document.querySelector(".contact").children
let contactValues = Object.values(siteContent.contact)
for (let i=0; i<contacts.length; i++) {
  contacts[i].textContent = contactValues[i]
}

document.querySelector("footer > p").textContent = siteContent.footer.copyright