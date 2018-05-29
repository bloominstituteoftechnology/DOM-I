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

// Example: Update the img src for the logo---------------------//

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//--------------------NAV BAR-----------------------------------//

let nav = document.getElementsByTagName("a");
nav[0].innerHTML = siteContent.nav["nav-item-1"];
nav[1].innerHTML = siteContent.nav["nav-item-2"];
nav[2].innerHTML = siteContent.nav["nav-item-3"];
nav[3].innerHTML = siteContent.nav["nav-item-4"];
nav[4].innerHTML = siteContent.nav["nav-item-5"];
nav[5].innerHTML = siteContent.nav["nav-item-6"];

let navBar = document.querySelector("nav");
let home = document.createElement("a");
let more = document.createElement("a");

home.innerHTML = "Home";
more.innerHTML = "More";

navBar.prepend(home);
navBar.appendChild(more);

for (let i = 0; i < nav.length; i++) {
  nav[i].style.color = "green";
}




//-----------------------CTA------------------------------------//

let ctaHeadline = document.querySelector(".cta-text h1");
ctaHeadline.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//--------------------MAIN CONTENT------------------------------//

let topHeadline = document.querySelectorAll(".top-content h4");
topHeadline[0].innerHTML = siteContent["main-content"]["features-h4"];
topHeadline[1].innerHTML = siteContent["main-content"]["about-h4"];

let topText = document.querySelectorAll(".top-content p");
topText[0].innerHTML = siteContent["main-content"]["features-content"];
topText[1].innerHTML = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomHeadline = document.querySelectorAll(".bottom-content h4");
bottomHeadline[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomHeadline[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomHeadline[2].innerHTML = siteContent["main-content"]["vision-h4"];

let bottomText = document.querySelectorAll(".bottom-content p");
bottomText[0].innerHTML = siteContent["main-content"]["services-content"];
bottomText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomText[2].innerHTML = siteContent["main-content"]["vision-content"];

//-----------------------CONTACT------------------------------//

let contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

//-----------------------FOOTER------------------------------//

let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"];