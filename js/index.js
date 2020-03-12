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
const logo = document.getElementById("logo-img");
const headerImage = document.getElementById("cta-img");
const midImage = document.getElementById("middle-img");

//Task 1: Create selectors to point your data into elements
const link = document.querySelectorAll("a");
const headerH1 = document.querySelector(".cta-text h1");
const headerButton = document.querySelector(".cta-text button");
const topContentH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
const topContentP = document.querySelectorAll(".main-content .top-content .text-content p");
const bottomContentH4 = document.body.querySelectorAll(".main-content .bottom-content .text-content h4");
const bottomContentP = document.body.querySelectorAll(".main-content .bottom-content .text-content p");
const contactH4 = document.body.querySelector(".contact h4");
const contactP = document.body.querySelectorAll(".contact p");
const foot = document.body.querySelector("footer p");

//Task 2: Update the HTML with the JSON data
logo.setAttribute('src', siteContent["nav"]["img-src"]);
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Set links
link[0].textContent = siteContent['nav']["nav-item-1"];
link[1].textContent = siteContent['nav']["nav-item-2"];
link[2].textContent = siteContent['nav']["nav-item-3"];
link[3].textContent = siteContent['nav']["nav-item-4"];
link[4].textContent = siteContent['nav']["nav-item-5"];
link[5].textContent = siteContent['nav']["nav-item-6"];

//Set header
headerH1.textContent = siteContent['cta']["h1"];
headerButton.textContent = siteContent['cta']["button"];

//Set content
topContentH4[0].textContent = siteContent['main-content']["features-h4"];
topContentP[0].textContent = siteContent['main-content']["features-content"];
topContentH4[1].textContent = siteContent['main-content']["about-h4"];
topContentP[1].textContent = siteContent['main-content']['about-content'];
bottomContentH4[0].textContent = siteContent['main-content']["services-h4"];
bottomContentP[0].textContent = siteContent['main-content']["services-content"];
bottomContentH4[1].textContent = siteContent['main-content']["product-h4"];
bottomContentP[1].textContent = siteContent['main-content']["product-content"];
bottomContentH4[2].textContent = siteContent['main-content']["vision-h4"];
bottomContentP[2].textContent = siteContent['main-content']["vision-content"];
contactH4.textContent = siteContent["contact"]["contact-h4"];
contactP[0].textContent = siteContent['contact']["address"];
contactP[1].textContent = siteContent['contact']["phone"];
contactP[2].textContent = siteContent['contact']["email"];
foot.textContent = siteContent["footer"]["copyright"];

//Task 3: Add new content
link.forEach(el => el.style.color = 'green');
const navBar = document.getElementsByTagName('nav');
const first = document.createElement('a');
first.textContent = "Home";
const last = document.createElement('a');
last.textContent = "About Us";
navBar.appendChild(last);
navBar.prepend(first);