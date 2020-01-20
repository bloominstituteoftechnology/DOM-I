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

// My code starts below:

//   TASKS 1 & 2

// cta image

const codeImg = document.getElementById("cta-img");
codeImg.setAttribute("src", siteContent["cta"]["img-src"]);

// Header Links

const headerLinks = document.getElementsByTagName('a');
// headerLinks[0].textContent =  siteContent["nav"]["nav-item-1"];
// headerLinks[1].textContent =  siteContent["nav"]["nav-item-2"];
// headerLinks[2].textContent =  siteContent["nav"]["nav-item-3"];
// headerLinks[3].textContent =  siteContent["nav"]["nav-item-4"];
// headerLinks[4].textContent =  siteContent["nav"]["nav-item-5"];
// headerLinks[5].textContent =  siteContent["nav"]["nav-item-6"];

for (let i = 0; i < headerLinks.length; i++){
  headerLinks[i].textContent = siteContent["nav"]["nav-item-" + (i+1)];
};

//  Text - Title and Button
const titleMain = document.getElementsByTagName("h1")[0];
titleMain.textContent = siteContent["cta"]["h1"];

const buttonText = document.getElementsByTagName("button")[0];
buttonText.textContent = siteContent["cta"]["button"];

//  Main Content

const mainContentData = Object.values(siteContent["main-content"]);

//  Text - Top Content

// document.querySelector(".top-content>.text-content:first-child h4").textContent 
//   = siteContent["main-content"]["features-h4"];

// document.querySelector(".top-content>.text-content:last-child h4").textContent 
//   = siteContent["main-content"]["about-h4"];

// document.querySelector(".top-content>.text-content:first-child p").textContent
//  = siteContent["main-content"]["features-content"];

//  document.querySelector(".top-content>.text-content:last-child p").textContent
//  = siteContent["main-content"]["about-content"];

const topContentElements = document.querySelectorAll(".top-content>.text-content *");

// topContentElements.forEach((element, index) => {
//   element.textContent = mainContentData[index];
// });

// main-content image

const middleImg = document.getElementById("middle-img");
// middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

 //  Text - Bottom Content

// document.querySelector(".bottom-content>.text-content:first-child h4").textContent 
//   = siteContent["main-content"]["services-h4"];

// document.querySelector(".bottom-content>.text-content:nth-child(2) h4").textContent 
//   = siteContent["main-content"]["product-h4"];

// document.querySelector(".bottom-content>.text-content:last-child h4").textContent 
//   = siteContent["main-content"]["vision-h4"];

// document.querySelector(".bottom-content>.text-content:first-child p").textContent 
//   = siteContent["main-content"]["services-content"];

// document.querySelector(".bottom-content>.text-content:nth-child(2) p").textContent 
//   = siteContent["main-content"]["product-content"];

// document.querySelector(".bottom-content>.text-content:last-child p").textContent 
//   = siteContent["main-content"]["vision-content"];

const bottomContentElements = document.querySelectorAll(".bottom-content>.text-content *");

// bottomContentElements.forEach((element, index) => {
//   element.textContent = mainContentData[index+5];
// });

let mainContentElements = Array.from(topContentElements);
mainContentElements.push(middleImg);
mainContentElements = mainContentElements.concat(Array.from(bottomContentElements));

mainContentElements.forEach((element, index) => {
  if (element === middleImg) {
    middleImg.src = mainContentData[index];
  } else {
    element.textContent = mainContentData[index];
  }
});


//  Text - Contact

// document.querySelector(".contact h4").textContent
//   = siteContent["contact"]["contact-h4"];

// document.querySelector(".contact p:first-of-type").textContent
//   = siteContent["contact"]["address"];

// document.querySelector(".contact p:nth-of-type(2)").textContent
//   = siteContent["contact"]["phone"];

// document.querySelector(".contact p:last-of-type").textContent
//   = siteContent["contact"]["email"];

const contactElements = document.querySelectorAll(".contact *");
const contactData = Object.values(siteContent.contact);
contactElements.forEach((element, index) => {
  element.textContent = contactData[index];
});


//  Text - Footer
document.querySelector("footer p").textContent
  = siteContent["footer"]["copyright"];

//  TASK 3

//  Change nav color to green
for (let i = 0; i < headerLinks.length; i++){
  headerLinks[i].style.color = "green";
};

//  Add 2 nav items

const newLinkOne = document.createElement('a');
newLinkOne.textContent = "Home";
newLinkOne.href = "#";
newLinkOne.style.color = "green";
document.querySelector("nav").prepend(newLinkOne);

const newLinkTwo = document.createElement('a');
newLinkTwo.textContent = "Media";
newLinkTwo.href = "#";
newLinkTwo.style.color = "green";
document.querySelector("nav").appendChild(newLinkTwo);


