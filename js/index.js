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

const container = document.getElementsByClassName("container");

const services = document.getElementsByTagName("a")[0];
services.innerHTML = 'Services';

const product = document.getElementsByTagName("a")[1];
product.innerHTML = 'Product';

const vision = document.getElementsByTagName("a")[2];
vision.innerHTML = 'Vision';

const features = document.getElementsByTagName("a")[3];
features.innerHTML = 'Features';

const about = document.getElementsByTagName("a")[4];
about.innerHTML = 'About';

const contact = document.getElementsByTagName("a")[5];
contact.innerHTML = 'Contact';

const button = document.getElementsByTagName("button")[0];
button.innerHTML = 'Get Started';

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

const dia = document.getElementsByTagName("h1")[0];
dia.innerHTML = 'DOM<br> Is<br> Awesome';

const h4_1 = document.querySelectorAll(".main-content .top-content .text-content h4")[0];
h4_1.textContent = siteContent['main-content']['features-h4'];

const h4_2 = document.querySelectorAll(".main-content .top-content .text-content h4")[1];
h4_2.textContent = siteContent['main-content']['about-h4'];

const p_1 = document.querySelectorAll(".main-content .top-content .text-content p")[0];
p_1.textContent = siteContent['main-content']['features-content'];

const p_2 = document.querySelectorAll(".main-content .top-content .text-content p")[1];
p_2.textContent = siteContent['main-content']['about-content'];

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', 'img/mid-page-accent.jpg');

const h4_3 = document.querySelectorAll(".main-content .bottom-content .text-content h4")[0];
h4_3.textContent = siteContent['main-content']['services-h4'];

const h4_4 = document.querySelectorAll(".main-content .bottom-content .text-content h4")[1];
h4_4.textContent = siteContent['main-content']['product-h4'];

const p_3 = document.querySelectorAll(".main-content .bottom-content .text-content h4")[0];
p_3.textContent = siteContent['main-content']['services-content'];

const p_4 = document.querySelectorAll(".main-content .bottom-content .text-content h4")[1];
p_4.textContent = siteContent['main-content']['product-content'];

