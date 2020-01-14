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

//* THIS IS WHERE I WILL STYLE THE NAVIGATION *//

const navBar = document.querySelector("nav");
const navLinks = document.querySelectorAll("a");
const navArray = Array.from(navLinks);

//* THIS IS WHERE I CALL THE EXISTING NAVIGATION BAR *//

navLinks.forEach((a, i) => a.textContent = siteContent.nav[`nav-item-${i + 1}`]);
navLinks.forEach(element => element.style.color = 'dodgerblue');

//* THIS IS WHERE I WILL ADD TO THE FRONT OF THE NAVIGATION *//

const home = document.createElement('a');
home.href = "index.html";
home.textContent = "Home";
home.style.color = "red";
navBar.prepend(home);

//* THIS IS WHERE I WILL ADD TO THE BACK OF THE NAVIGATION *//

const blog = document.createElement('a');
blog.href = "index.html";
blog.textContent = "Blog";
blog.style.color = "red";
navBar.append(blog);

//* THE IMAGES WILL BE CALLED HERE *//

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

