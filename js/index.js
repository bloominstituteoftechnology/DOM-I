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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = siteContent.nav["img-src"];

// Navigation

let navigation = document.querySelectorAll("header a");
navigation[0].innerHTML = siteContent.nav['nav-item-1'];
navigation[1].innerHTML = siteContent.nav['nav-item-2'];
navigation[2].innerHTML = siteContent.nav['nav-item-3'];
navigation[3].innerHTML = siteContent.nav['nav-item-4'];
navigation[4].innerHTML = siteContent.nav['nav-item-5'];
navigation[5].innerHTML = siteContent.nav['nav-item-6'];

navigation.forEach(item => {
  item.style.color = 'green';
});


//call to action section
let ctaHeading = document.querySelector(".cta-text h1");
ctaHeading.innerHTML = siteContent.cta["h1"];
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent.cta["button"];

//features section
let mainHeadings = document.querySelectorAll(".main-content h4");
let mainContent = document.querySelectorAll(".main-content p");

mainHeadings[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContent[0].innerHTML = siteContent["main-content"]["features-content"];
mainHeadings[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContent[1].innerHTML = siteContent["main-content"]["about-content"];
mainHeadings[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContent[2].innerHTML = siteContent["main-content"]["services-content"];
mainHeadings[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContent[3].innerHTML = siteContent["main-content"]["product-content"];
mainHeadings[4].innerHTML = siteContent["main-content"]["vision-h4"];
mainContent[4].innerHTML = siteContent["main-content"]["vision-content"];

//middle image
document.querySelector(".middle-img").src = siteContent["main-content"]["middle-img-src"];

//contact section
document.querySelector(".contact h4").innerHTML = siteContent["contact"]["contact-h4"];
let contact = document.querySelectorAll(".contact p");
contact[0].innerHTML = siteContent["contact"]["address"];
contact[1].innerHTML = siteContent["contact"]["phone"];
contact[2].innerHTML = siteContent["contact"]["email"];
 
//footer
document.querySelector("footer p").innerHTML = siteContent["footer"]["copyright"];