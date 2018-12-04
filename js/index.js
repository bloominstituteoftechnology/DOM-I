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
    "h1": "DOM\r\nIs\r\nAwesome",
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
    "new-h4":"New Content",
    "new-content": "New content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "rabbit-h4":"Rabbit Content",
    "rabbit-content": "Rabbit content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "alligator-h4":"Alligator Content",
    "alligator-content": "Alligator content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street\r\nSomewhere, USA",
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

const navA = document.querySelectorAll("a");
navA.forEach((element, index) => {
  element.textContent = siteContent.nav[`nav-item-${index + 1}`];
  element.style.color = "green";
});

const newNavItem1 = document.createElement("a");
newNavItem1.href = "#";
newNavItem1.textContent = "First Nav Item";
newNavItem1.style.color = "green";
const nav = document.querySelector("nav");
nav.prepend(newNavItem1);

const newNavItem2 = document.createElement("a");
newNavItem2.href = "#";
newNavItem2.textContent = "Last Nav Item";
newNavItem2.style.color = "green";
nav.append(newNavItem2);

const ctaText = document.querySelector(".cta-text");
// console.log(ctaText);
ctaText.childNodes.forEach(element => {
  if (element.localName === "h1") {
    element.textContent = siteContent.cta.h1;
    element.style.whiteSpace = "pre-line";
  } else if (element.localName === "button") {
    element.textContent = siteContent.cta.button;
  }
});

const ctaImg = document.querySelector("#cta-img");
// console.log(ctaImg);
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

// having trouble thinking of a clever way to loop on siteContent.main-content... do brute force for now:
const textContent = document.querySelectorAll(".text-content");
// console.log(textContent)
for (let i = 0; i < textContent.length; i ++) {
  let topic = "";
  switch (i) {
    case 0:
      topic = "features";
      break;
    case 1:
      topic = "about";
      break;
    case 2:
      topic = "services";
      break;
    case 3:
      topic = "product";
      break;
    case 4:
      topic = "vision";
      break;
  }
  textContent[i].childNodes.forEach(element => {
    if (element.localName === "h4") {
      element.textContent = siteContent["main-content"][`${topic}-h4`];
    } else if (element.localName === "p") {
      element.textContent = siteContent["main-content"][`${topic}-content`];
    }
  });
}

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const contact = document.querySelector(".contact").childNodes;
// console.log(contact);
let i = 1;
for(let each in siteContent.contact){
  contact[i].textContent = siteContent.contact[`${each}`];
  contact[i].style.whiteSpace = "pre";
  i += 2;
};

const footer = document.querySelector("footer");
footer.firstChild.textContent = siteContent.footer.copyright;

// Stretch:
const header = document.querySelector("header");
header.style.backgroundColor = "red";
const cta = document.querySelector(".cta");
cta.style.backgroundColor = "orange";
const mainContent = document.querySelector(".main-content");
mainContent.style.backgroundColor = "yellow";
const contactSection = document.querySelector(".contact");
contactSection.style.backgroundColor = "green";

const rotateElements = [header, cta, mainContent, contactSection];
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let colorIndex = 0;
const topics = ["features", "about", "services", "product", "vision", "new", "rabbit", "alligator"];
//                0             1         2          3         4
let topicIndex = 4;

const button = document.querySelector("button");
button.addEventListener('click', () => {
  for(element of rotateElements) {
    if (colorIndex === colors.length) {
      colorIndex = 0;
    }
    // console.log(colorIndex);
    element.style.backgroundColor = colors[colorIndex];
    colorIndex ++;
  }
  // console.log("done");
  if (topicIndex === topics.length) {
    topicIndex = 0;
  }
  topicIndex ++;
  for (let i = 0; i < textContent.length; i ++) {
    if (topicIndex === topics.length) {
      topicIndex = 0;
    }
    console.log(topicIndex);
    textContent[i].childNodes.forEach(element => {
      if (element.localName === "h4") {
        element.textContent = siteContent["main-content"][`${topics[topicIndex]}-h4`];
      } else if (element.localName === "p") {
        element.textContent = siteContent["main-content"][`${topics[topicIndex]}-content`];
      }
    });
    topicIndex ++;
  }
});