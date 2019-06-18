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

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute("src", siteContent["cta"]["img-src"]);

let middleimg = document.getElementById("middle-img");
middleimg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Navigation//
let navigation = document.querySelectorAll("nav a");
console.log(navigation);
navigation.forEach((tag, index) => {
  i = index + 1;
  tag.textContent = siteContent["nav"][`nav-item-${i}`];
});

navigation.forEach(currentValue => (currentValue.style.color = "green"));

let newA = document.createElement("a");
newA.textContent = "Blog";
//newA.style.color = "green";
document.querySelector("nav").appendChild(newA);

let newL = document.createElement("a");
newL.textContent = "Introduction";
//newL.style.color = "green";
document.querySelector("nav").prepend(newL);

/* CTA*/

let ctaText = document.getElementsByClassName("cta-text")[0];
console.log(ctaText);
ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaText.getElementsByTagName("button")[0].textContent =
  siteContent["cta"]["button"];

//Update Main content
let textContentList = document.querySelectorAll(".text-content");
console.log(textContentList);

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

/* ********************* */
//Contacts//
let contactH = document.querySelector(".contact h4");
console.log(contactH);
contactH.textContent = siteContent["contact"]["contact-h4"];

let conP1 = document.querySelector(".contact p:nth-of-type(1)");
conP1.textContent = siteContent["contact"]["address"];

let conP2 = document.querySelector(".contact p:nth-of-type(2)");
conP2.textContent = siteContent["contact"]["phone"];

let conP3 = document.querySelector(".contact p:nth-of-type(3)");
conP3.textContent = siteContent["contact"]["email"];

//footer//
let f = document.querySelector("footer p");
console.log(f);
f.textContent = siteContent["footer"]["copyright"];
