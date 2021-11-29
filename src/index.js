const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')


const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navItems = document.querySelectorAll("header nav a");
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

const nav = document.querySelector("header nav");

const blog = document.createElement("a");
const blogText = document.createTextNode("Blog");
blog.appendChild(blogText);
blog.style.color = "green";
blog.style.cursor = "pointer";
nav.appendChild(blog);

const testimonials = document.createElement("a");
const testimonialsText = document.createTextNode("Testimonials");
testimonials.appendChild(testimonialsText);
testimonials.style.color = "green";
testimonials.style.cursor = "pointer";
nav.prepend(testimonials);

const ctaHeading = document.querySelector(".cta .cta-text h1");
ctaHeading.innerHTML = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const featuresHeading = document.querySelectorAll(".main-content h4");
const featuresContent = document.querySelectorAll(".main-content p");

featuresHeading[0].innerHTML = siteContent["main-content"]["features-h4"];
featuresContent[0].innerHTML = siteContent["main-content"]["features-content"];
featuresHeading[1].innerHTML = siteContent["main-content"]["about-h4"];
featuresContent[1].innerHTML = siteContent["main-content"]["about-content"];
featuresHeading[2].innerHTML = siteContent["main-content"]["services-h4"];
featuresContent[2].innerHTML = siteContent["main-content"]["services-content"];
featuresHeading[3].innerHTML = siteContent["main-content"]["product-h4"];
featuresContent[3].innerHTML = siteContent["main-content"]["product-content"];
featuresHeading[4].innerHTML = siteContent["main-content"]["vision-h4"];
featuresContent[4].innerHTML = siteContent["main-content"]["vision-content"];

const middleImg = document.getElementById("accent-img");
middleImg.setAttribute('src', siteContent["main-content"]["accent-img-src"]);


const contactHeading = document.querySelector(".contact h4");
contactHeading.innerHTML = siteContent["contact"]["contact-h4"];

const contactContent = document.querySelectorAll(".contact p");
contactContent[5].innerHTML = siteContent["contact"]["address"];
contactContent[6].innerHTML = siteContent["contact"]["phone"];
contactContent[7].innerHTML = siteContent["contact"]["email"];

const footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];