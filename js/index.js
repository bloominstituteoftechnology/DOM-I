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
    "h1": "DOM <br> Is <br> Awesome",
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
//img src update
const logo = document.querySelector('#logo-img');
logo.src = siteContent["nav"]["img-src"];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

//nav 
const nav = document.querySelectorAll('header a');
nav[0].innerHTML = siteContent["nav"]["nav-item-1"];
nav[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav[5].innerHTML = siteContent["nav"]["nav-item-6"];
// const pageNav = document.querySelectorAll('a');
// pageNav[0].textContent = siteContent.nav["nav-item-1"];
// pageNav[1].textContent = siteContent.nav["nav-item-2"];
// pageNav[2].textContent = siteContent.nav["nav-item-3"];
// pageNav[3].textContent = siteContent.nav["nav-item-4"];
// pageNav[4].textContent = siteContent.nav["nav-item-5"];
// pageNav[5].textContent = siteContent.nav["nav-item-6"];

//make nav green
nav[0].style.color = "green";
nav[1].style.color = "green";
nav[2].style.color = "green";
nav[3].style.color = "green";
nav[4].style.color = "green";
nav[5].style.color = "green";

// pageNav[0].style.color = "green"; 
// pageNav[1].style.color = "green";
// pageNav[2].style.color = "green";
// pageNav[3].style.color = "green";
// pageNav[4].style.color = "green";
// pageNav[5].style.color = "green";

//h1
const h1 = document.querySelector('.cta-text h1');
h1.innerHTML = siteContent["cta"]["h1"];

// const ctaText = document.querySelector('.cta-text h1');
// ctaText.textContent = siteContent.cta["h1"];
// siteContent.cta["h1"] = "Dom<br> Is<br> Awesome!";
// ctaText.innerHTML = siteContent.cta["h1"];

//button
const button = document.querySelector(".cta-text button");
button.innerHTML = siteContent["cta"]["button"];
// const ctaButton = document.querySelector("button");
// ctaButton.textContent = siteContent.cta["button"];

//Text h4
const textH4 = document.querySelectorAll(".text-content h4");
textH4[0].textContent = siteContent["main-content"]["features-h4"];
textH4[1].textContent = siteContent["main-content"]["about-h4"];
textH4[2].textContent = siteContent["main-content"]["services-h4"];
textH4[3].textContent = siteContent["main-content"]["product-h4"];
textH4[4].textContent = siteContent["main-content"]["vision-h4"];

//Text para
const para = document.querySelectorAll(".text-content p");
para[0].textContent = siteContent["main-content"]["features-content"];
para[1].textContent = siteContent["main-content"]["about-content"];
para[2].textContent = siteContent["main-content"]["services-content"];
para[3].textContent = siteContent["main-content"]["product-content"];
para[4].textContent = siteContent["main-content"]["vision-content"];

//Contact 
const contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

const contactPara = document.querySelectorAll(".contact p");
contactPara[0].textContent = siteContent["contact"]["address"];
contactPara[1].textContent = siteContent["contact"]["phone"];
contactPara[2].textContent = siteContent["contact"]["email"];

//Footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

//Add 2 new nav
const home = document.createElement("a");
home.href = "#";
home.innerHTML = "Home";
const firstNav = document.querySelector("header nav");
firstNav.prepend(home); 
home.style.color = "green";

const signUp = document.createElement("a");
signUp.href = "#";
signUp.innerHTML = "Sign Up";
const lastNav = document.querySelector("header nav");
lastNav.append(signUp);
signUp.style.color = "green";