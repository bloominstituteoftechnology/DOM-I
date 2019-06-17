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

const header = document.querySelector('#cta-img');

 header.src = siteContent.cta["img-src"];

 const anchors = document.querySelectorAll('a');

anchors[0].textContent = "Servicces"; 
anchors[1].textContent = "Product"; 
anchors[2].textContent = "Vision"; 
anchors[3].textContent = "Features"; 
anchors[4].textContent = "About"; 
anchors[5].textContent = "Contact"; 

 const button = document.querySelector("button");

 button.textContent = "Get Started";
button.style.color = "black";

 const Title = document. querySelector(".cta-text h1");

 Title.textContent = "DOM IS AWESOME";

 const left1 = document.querySelectorAll (".text-content h4")

 left1[0].textContent = "Features";
 left1[1].textContent = "About";

 const left2 = document.querySelectorAll (".text-content p")

 left2[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
 left2[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

 

 const middleImg = document.querySelector('.main-content img');
middleImg.src = siteContent['main-content']['middle-img-src'];


 const under = document.querySelectorAll (".bottom-content .text-content h4")


 under[0].textContent = "Services";
under[1].textContent = "Product";
under[2].textContent = "Vision";


 const under2 = document.querySelectorAll (".bottom-content .text-content p")


 under2[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
under2[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
under2[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const contact = document.querySelector (".contact h4")

 contact.textContent = "Contact";

 const contact2 = document.querySelectorAll (".contact p")

 contact2[0].textContent = "123 Way 456 Street, Somewhere, USA";
contact2[1].textContent = "1 (888) 888-8888";
contact2[2].textContent = "sales@greatidea.io";

 const footer = document.querySelector('footer p');

  footer.textContent = siteContent.footer.copyright;
