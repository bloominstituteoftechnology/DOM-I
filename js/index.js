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

// Middle Image
const midImg = document.getElementById("middle-img");
midImg.setAttribute("src",siteContent["main-content"]["middle-img-src"]);

// Call to Action Image
const ctaImg = document.getElementById("cta-img");
ctaImg.src=siteContent["cta"]["img-src"];

// Nav Links
const navLinks = document.querySelectorAll("nav a");
for(let i=0; i<navLinks.length; i++){
  navLinks[i].textContent=siteContent["nav"]["nav-item-"+[i]];
  navLinks[i].style.color="green";
}

// CTA Header
const h1 = document.querySelector(".cta-text h1");
h1.textContent = siteContent["cta"]["h1"];

// CTA Button
const button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];

// Main Content
const heading = ["features","about","services","product","vision"];
const h4 = document.querySelectorAll(".text-content h4");
const p = document.querySelectorAll(".text-content p");
// h4.forEach((item, index) => 
//   item[index].textContent = siteContent["main-content"][heading[index]+"-h4"],
//   );
for(let i=0; i<h4.length; i++){
  h4[i].textContent = siteContent["main-content"][heading[i]+"-h4"];
  h4[i].style.color = "red";
  p[i].textContent = siteContent["main-content"][heading[i]+"-content"];
  p[i].style.color = "blue";
}

// Contact
const addr = ["address","phone","email"];

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");

for(let i=0; i<contactP.length; i++){
  contactP[i].textContent = siteContent["contact"][addr[i]];
}

// Addend and Prepend
const navList = document.getElementsByTagName("nav");

const append = document.createElement("a");
const prepend = document.createElement("a");
append.textContent = "Append";
prepend.textContent = "Prepend";
navList[0].appendChild(append);
navList[0].prepend(prepend);


