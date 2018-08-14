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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// selectors to point data into elements
let header = document.querySelector('header')
let navigation = document.querySelector('nav');
let callToAction = document.querySelector('cta');
let mainContent = document.querySelector('main-content');
let contactSection = document.getElementsByClassName('contact')[0];
let ctaPic = document.getElementById('cta-img');
let ctaH1 = document.querySelector('h1');
let ctaButton = document.querySelector('button');
let mainImg = document.getElementById("middle-img");
let topContent = document.getElementsByClassName("top-content");
let leftTopH4 = document.querySelector("h4");


let navA = document.querySelectorAll("nav a");
navA.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
});
navA.forEach((link, i) => {
  link.style.color = "green";
})

ctaPic.setAttribute('src', siteContent["cta"]["img-src"]);
ctaH1.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];

//main content
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
leftTopH4.textContent = siteContent["main-content"]["features-h4"];

let textContentList = document.querySelectorAll(".text-content");

// used solution to follow example to populate middle text section
textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
textContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
textContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
textContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
textContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
textContentList[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
textContentList[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

// contact and footer
contactSection.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"];
contactSection.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
contactSection.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"];
contactSection.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"];

//used solution on this part
let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

// Add two items to navigation
selectedNavLinks = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
selectedNavLinks.prepend(createNewNode("Welcome!"));
selectedNavLinks.append(createNewNode("Goodbye!"));
