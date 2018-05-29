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
    "contact-h4" : "Contact",
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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll("header nav a");
navItems[0].innerHTML = siteContent["nav"]["nav-item-1"];
navItems[0].style.color = "green";
navItems[1].innerHTML = siteContent["nav"]["nav-item-2"];
navItems[1].style.color = "green";
navItems[2].innerHTML = siteContent["nav"]["nav-item-3"];
navItems[2].style.color = "green";
navItems[3].innerHTML = siteContent["nav"]["nav-item-4"];
navItems[3].style.color = "green";
navItems[4].innerHTML = siteContent["nav"]["nav-item-5"];
navItems[4].style.color = "green";
navItems[5].innerHTML = siteContent["nav"]["nav-item-6"];
navItems[5].style.color = "green";

let nav = document.querySelector("header nav");

let blog = document.createElement("a");
let blogText = document.createTextNode("Blog");
blog.appendChild(blogText);
blog.style.color = "green";
blog.style.cursor = "pointer";
nav.appendChild(blog);

let testimonials = document.createElement("a");
let testimonialsText = document.createTextNode("Testimonials");
testimonials.appendChild(testimonialsText);
testimonials.style.color = "green";
testimonials.style.cursor = "pointer";
nav.prepend(testimonials);

let ctaHeading = document.querySelector(".cta .cta-text h1");
ctaHeading.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let featuresHeading = document.querySelectorAll(".main-content h4");
let featuresContent = document.querySelectorAll(".main-content p");

featuresHeading[0].innerHTML = siteContent["main-content"]["features-h4"];
featuresContent[0].innerHTML = siteContent["main-content"]["features-content"];
featuresHeading[1].innerHTML = siteContent["main-content"]["about-h4"];
featuresContent[1].innerHTML = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

featuresHeading[2].innerHTML = siteContent["main-content"]["services-h4"];
featuresContent[2].innerHTML = siteContent["main-content"]["services-content"];
featuresHeading[3].innerHTML = siteContent["main-content"]["product-h4"];
featuresContent[3].innerHTML = siteContent["main-content"]["product-content"];
featuresHeading[4].innerHTML = siteContent["main-content"]["vision-h4"];
featuresContent[4].innerHTML = siteContent["main-content"]["vision-content"];

let contactHeading = document.querySelector(".contact h4");
contactHeading.innerHTML = siteContent["contact"]["contact-h4"];

let contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerHTML = siteContent["contact"]["address"];
contactContent[1].innerHTML = siteContent["contact"]["phone"];
contactContent[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];
