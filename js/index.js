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



//   Nav  //

//  Nav links
const $navLinks = document.querySelectorAll("header nav a");

//  Add text into all nav links
$navLinks.forEach(function(item, index) {
    item.textContent = siteContent["nav"][`nav-item-${index+1}`];
});


//  CTA  //

//  h1
const titleContent = siteContent["cta"]["h1"].replace(/ /g, " <br> ");
document.querySelector(".cta h1").innerHTML = titleContent;

//  button
document.querySelector(".cta button").textContent = siteContent["cta"]["button"];

//  image
document.querySelector(".cta #cta-img").setAttribute("src", siteContent["cta"]["img-src"]);


//  Main Content  //

//  text - top left
document.querySelector(".main-content .top-content .text-content:first-child h4").textContent = siteContent["main-content"]["features-h4"];
document.querySelector(".main-content .top-content .text-content:first-child p").textContent = siteContent["main-content"]["features-content"];

//  text - top right
document.querySelector(".main-content .top-content .text-content:last-child h4").textContent = siteContent["main-content"]["about-h4"];
document.querySelector(".main-content .top-content .text-content:last-child p").textContent = siteContent["main-content"]["about-content"];

//  image
document.querySelector(".main-content #middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//  text - bottom left
document.querySelector(".main-content .bottom-content .text-content:first-child h4").textContent = siteContent["main-content"]["services-h4"];
document.querySelector(".main-content .bottom-content .text-content:first-child p").textContent = siteContent["main-content"]["services-content"];

//  text - bottom middle
document.querySelector(".main-content .bottom-content .text-content:nth-child(2) h4").textContent = siteContent["main-content"]["product-h4"];
document.querySelector(".main-content .bottom-content .text-content:nth-child(2) p").textContent = siteContent["main-content"]["product-content"];

//  text - bottom middle
document.querySelector(".main-content .bottom-content .text-content:last-child h4").textContent = siteContent["main-content"]["vision-h4"];
document.querySelector(".main-content .bottom-content .text-content:last-child p").textContent = siteContent["main-content"]["vision-content"];


//  Contact  //




console.log($navLinks);
