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
logo.setAttribute("src", siteContent["nav"]["img-src"])

//navigation links
const navLinks = document.querySelectorAll("nav a");
const navLinksArr = Array.from(navLinks);

  for (let i=0; i < navLinksArr.length; i++){
    const navString = `nav-item-${i+1}`;
    navLinksArr[i].innerHTML = siteContent["nav"][navString];
    navLinksArr[i].style.color = "green";
  };

//cta section
const ctaH1 = document.querySelector(".cta-text h1"),
      ctaBtn = document.querySelector(".cta-text button"),
      ctaImg = document.querySelector("#cta-img");

ctaH1.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");
ctaBtn.innerHTML = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

//main section
const topContentH4 = document.querySelectorAll(".main-content .top-content .text-content h4"),
      topContentP = document.querySelectorAll(".main-content .top-content .text-content p"),

      img = document.querySelector(".main-content .middle-img");

      bottomContentH4 = document.querySelectorAll(".main-content .bottom-content .text-content h4"),
      bottomContentP = document.querySelectorAll(".main-content .bottom-content .text-content p");

let img2 = document.querySelector(".main-content .middle-img");

topContentH4[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentP[0].innerHTML = siteContent["main-content"]["features-content"];
topContentH4[1].innerHTML = siteContent["main-content"]["about-h4"];
topContentP[1].innerHTML = siteContent["main-content"]["about-content"];

img.src = siteContent["main-content"]["middle-img-src"];

bottomContentH4[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContentP[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContentH4[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentP[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentH4[2].innerHTML = siteContent["main-content"]["vision-h4"];
bottomContentP[2].innerHTML = siteContent["main-content"]["vision-content"];

//contact section
const contactH4 = document.querySelector(".contact h4"),
      contactP = document.querySelectorAll(".contact p");

contactH4.innerHTML = siteContent["contact"]["contact-h4"];
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

//footer
const footerP = document.querySelector("footer");
footerP.innerHTML = siteContent["footer"]["copyright"];


//added two new nav items
const navNewItems = document.getElementsByTagName("nav");
      
const prependedItem = document.createElement("a");
      prependedItem.style.marginRight = "0px";
      prependedItem.innerHTML = "Prepended";
      prependedItem.style.color = "green";

const appendedItem = document.createElement("a");
appendedItem.style.marginLeft = "0px"
appendedItem.innerHTML = "Appended";
appendedItem.style.color = "green";

navNewItems[0].prepend(prependedItem);
navNewItems[0].appendChild(appendedItem);